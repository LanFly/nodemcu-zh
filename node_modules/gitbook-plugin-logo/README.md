# gitbook-plugin-logo

![NPM](https://img.shields.io/npm/l/gitbook-plugin-logo.svg)
![npm](https://img.shields.io/npm/v/gitbook-plugin-logo.svg)

GitBook Plugin to add your logo and title easily and Beautifully. Support for inserting custom DOM and Style.

一个在 `Gitbook` 网站中添加你的 `logo` 或 `标识` 的插件，使用简单，自带美观的样式，支持自定义 DOM 和 CSS 样式。

# 特性

- 使用简单
- 自带默认样式
- 支持自定义行内样式
- 支持自定义 DOM 和 CSS

# 安装

```shell
npm install gitbook-plugin-logo --save
```

# 简单使用

在 `book.json` 文件中增加配置：

```json
{
  "plugins": [
    "logo"
  ],
  "pluginsConfig": {
    "logo": {
      "logo": "http://lanfly.vicp.io/logo.png",
      "title": "提莫的神秘商店",
      "url": "http://timor.tech"
    }
  }
}
```

上面的配置会默认添加 `rootStyle` 样式：

```css
text-align: center;
padding: 20px;
```

# 自定义行内样式

你可以添加自定义的样式，它们会以 `行内样式` 添加到 `DOM` 元素上。

```json
{
  "plugins": [
    "logo"
  ],
  "pluginsConfig": {
    "logo": {
      "rootStyle": "background-color: #a5b807; text-align: center; padding: 20px;",
      "logo": "http://lanfly.vicp.io/logo.png",
      "logoStyle": "width: 70px;",
      "title": "提莫的神秘商店",
      "titleStyle": "color: #FFF; text-align: center;",
      "url": "http://timor.tech"
    }
  }
}
```

`rootStyle` 是最外层 DOM 的样式，上面的配置会生成下面的 DOM 结构：

```html
<a href="$url" class="book-logo-root">
  <div class="book-logo" style="$rootStyle">
    <img src="$logo" style="$logoStyle" />
    <p class="book-title" style="$titleStyle">$title</p>
  </div>
</a>
```

# 自定义 DOM 和 CSS

如果你想让你网站的 logo 变得更酷炫，你可以自定义 DOM 和 CSS 来达到效果。

```json
{
  "plugins": [
    "logo"
  ],
  "pluginsConfig": {
    "logo": {
      "style": "logo/style.css",
      "template": "logo/template.html"
    }
  }
}
```

插件会从你指定的文件中读取内容，然后将它们插入到每个页面中。

`template` 文件内容会插入到 `body .book-summary` 元素里面，作为第一个子元素。

`style` 文件内容会使用 `<style type="text/css"></style>` 包装然后追加到 `head`。

# BUG 报告

[https://github.com/LanFly/gitbook-plugin-logo/issues](https://github.com/LanFly/gitbook-plugin-logo/issues)