var fs = require('fs')
var cheerio = require('cheerio')

var urls = []

var rootStyleDefault = 'text-align: center; padding: 20px;'

module.exports = {
  hooks: {
    'page': function (page) {
      if (this.output.name !== 'website') return page

      var lang = this.isLanguageBook() ? this.config.values.language : ''
      if (lang) lang = lang + '/'

      var outputUrl = this.output.toURL('_book/' + lang + page.path)

      urls.push({
        url: outputUrl + (outputUrl.substr(-5, 5) !== '.html' ? 'index.html' : '')
      })

      return page
    },

    'finish': function () {
      if (!this.options.pluginsConfig || !this.options.pluginsConfig.logo) {
        return
      }
      var logoConfig = this.options.pluginsConfig.logo
      var simple = true
      if (logoConfig.customized === true) {
        simple = false
      }
      console.log('use simple mode: ', simple)
      if (simple) {
        simpleLogo.call(this, logoConfig)
      } else {
        customLogo.call(this, logoConfig)
      }
    }
  }
}

function simpleLogo (logoConfig) {
  var rootStyle = logoConfig.rootStyle || rootStyleDefault
  var logoStyle = logoConfig.logoStyle || ''
  var titleStyle = logoConfig.titleStyle || ''
  var url = logoConfig.url || ''
  var $target = cheerio.load('<a href="' + url + '" class="book-logo-root"><div class="book-logo" style="' + rootStyle + '"></div></a>')
  if (logoConfig.logo) {
    $target('.book-logo').append('<img src="' + logoConfig.logo + '" style="' + logoStyle + '"/>')
  }
  if (logoConfig.title) {
    $target('.book-logo').append('<p class="book-title" style="' + titleStyle + '">' + logoConfig.title + '</p>')
  }
  urls.forEach(function (item) {
    var html = fs.readFileSync(item.url, {
      encoding: 'utf-8'
    })
    var $ = cheerio.load(html)
    $('a.book-logo-root').remove()
    $('body .book-summary').prepend($target.html())
    fs.writeFileSync(item.url, $.root().html(), {
      encoding: 'utf-8'
    })
  })
}

function customLogo (logoConfig) {
  var templatePath = logoConfig.template
  var stylePath = logoConfig.style
  var template = ''
  var style = ''
  if (templatePath && fs.existsSync(templatePath)) {
    template = fs.readFileSync(templatePath, { encoding: 'utf-8' })
  }
  if (stylePath && fs.existsSync(stylePath)) {
    style = fs.readFileSync(stylePath, { encoding: 'utf-8' })
  }
  urls.forEach(function (item) {
    var html = fs.readFileSync(item.url, {
      encoding: 'utf-8'
    })
    var $ = cheerio.load(html)
    if (style) {
      $('head').append('<style type="text/css">' + style + '</style>')
    }
    if (template) {
      $('body .book-summary').prepend(template)
    }
    fs.writeFileSync(item.url, $.root().html(), {
      encoding: 'utf-8'
    })
  })
}
