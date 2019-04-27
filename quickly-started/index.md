# ESP8266 新手入门教程

本教程能教会你：如何自己构建固件，如何刷固件，如何上传代码，如何运⾏代码，以及⼀个hello world！程序，教会你如何自己写代码。

## 第⼀章：构建固件

开发板可以刷 nodemcu、microPython、arduino等等各种固件。这里以 nodemcu 为例子学习。构建固件有3种方式。第⼀种是cloud build service，即使⽤提供的构建系统定制你的固件，此种⽅式最简单。访问这个页面：[http://nodemcu-build.com/](http://nodemcu-build.com/)

![没有描述](/@qiniu/nodemcu-zh/started-1.png)

填⼊你的邮箱以用于接收固件，第二个输入框重复填写一次用于确认。填写好后，往下拉，选择你需要的模块。

![没有描述](/@qiniu/nodemcu-zh/started-2.png)

这个选择master。再往下。

![没有描述](/@qiniu/nodemcu-zh/started-3.png)

这⾥勾选上你需要的模块。点击模块旁边的图标可以查看该模块的使用文档。上⾯这些是默认勾选的。请根据⾃⼰需要的模块选择，每⼀个模块都会占⽤更多的内存。如果是8Mbit的版本，不需要用到的模块建议全部去掉，以节省内存。

![没有描述](/@qiniu/nodemcu-zh/started-4.png)

选择好后，拉到最下⾯。

点击 start your build 按钮，即可开始构建。开始构建的时候，会发送一封邮件通知你，构建完成后，会再次发送一封邮件通你，里面有下载链接，点击链接，即可下载构建好的固件。邮件中有2个版本，⼀个是 Interger 版本，⼀个是 float 版本，顾名思义，float 版本⽀持浮点运算，有使用浮点运算时速度更快，但会耗费更多内存。integer 版本占⽤内存更⼩。⼀般建议新⼿使⽤ integer 版本就够了。

## 第⼆章：安装驱动

本店所售驱动版本有2个，⼀个是ch340，⼀个是cp2102。`注意，⼤板是ch340的驱动，⼩板是cp2102的驱动`，套餐信息里面写错了，请见谅。请按照使⽤的操作系统安装驱动。

#### Windows：

- ch340: [https://sparks.gogo.co.nz/assets/_site_/downloads/CH34x_Install_Windows_v3_4.zip](https://sparks.gogo.co.nz/assets/_site_/downloads/CH34x_Install_Windows_v3_4.zip)
- cp2102: [https://www.silabs.com/documents/public/software/CP210x_Universal_Windows_Driver.zip](https://www.silabs.com/documents/public/software/CP210x_Universal_Windows_Driver.zip)

#### macOS：

- ch340: [https://sparks.gogo.co.nz/assets/_site_/downloads/CH34x_Install_MAC_10_9_AND_ABOVE_V1_3.zip](https://sparks.gogo.co.nz/assets/_site_/downloads/CH34x_Install_MAC_10_9_AND_ABOVE_V1_3.zip)
- cp2102: [https://www.silabs.com/documents/public/software/Mac_OSX_VCP_Driver.zip](https://www.silabs.com/documents/public/software/Mac_OSX_VCP_Driver.zip)

#### Linux：

- ch340: 免驱，无需安装
- cp2102: [https://www.silabs.com/documents/login/software/Linux_3.x.x_4.x.x_VCP_Driver_Source.zip](https://www.silabs.com/documents/login/software/Linux_3.x.x_4.x.x_VCP_Driver_Source.zip)

cp2102更多版本，请访问此链接⾃⼰下载：https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers

下载对应的驱动，双击运行，安装驱动。这步应该不用教了，你想想你是怎么安装QQ的。如果实在不会，请联系【提莫的神秘商店】店长协助安装。

安装好驱动后，使⽤USB连接开发板到电脑。请按照对应的操作系统，查看是否安装成功。

Windows：右键【我的电脑】，选择【属性】，点击【设备管理器】，在【端口】⼀栏，会出现驱动的设备，⼀般名字带有 ch340 或者 cp2102，最后⾯是端⼝号，请记住这个端⼝号，后⾯很多地⽅需要⽤到。

macOS：打开终端，输⼊命令：

```shell
ls /dev/tty.*
```

按回车执⾏。执⾏后会看到如下信息：

```text
/dev/tty.Bluetooth-Incoming-Port /dev/tty.SLAB_USBtoUART
```

`/dev/tty.SLAB_USBtoUART` 这个就是你的设备，这是cp2102的，如果是ch340的名字不⼀样。记住这个设备名，后⾯很多地⽅需要⽤到。

`/dev/tty.Bluetooth-Incoming-Port` 这个是蓝⽛的，如果只有这⼀个，说明没有识别到你的设备。

## 第三章：刷固件

刷固件有2种⽅式，都支持Windows、macOS、Linux。推荐使用 NodeMCU PyFlasher，有图形界⾯，适合新⼿。

NodeMCU PyFlasher：[https://github.com/marcelstoer/nodemcu-pyflasher/releases](https://github.com/marcelstoer/nodemcu-pyflasher/releases)

访问上面的连接，下载对应操作系统的版本，下载完后，打开软件。界面如下：

![没有描述](/@qiniu/nodemcu-zh/started-5.png)

- serial port：选择上面让你记住的端⼝。
- nodemcu firmware：选择你构建的固件。
- baud rate：选择 921600。速度更快。如果刷固件有问题，选择 9600。
- flash moode：选择 dual flash I/O。
- erase flash：选择 yes。会擦除所有闪存信息。在刷其它固件的时候必须要选择这个。

最后点击 falsh nodemcu 按钮。等待最后输出 Done. 字样，表示刷固件完成。

esptool.py：[https://github.com/espressif/esptool](https://github.com/espressif/esptool)

点击上⾯的连接下载 esptool.py ⽂件。需要Python环境。

然后执行下面命令刷写：

```shell
esptool.py --port <serial-port-of-ESP8266> write_flash -fm <flash mode> 0x00000 <nodemcu-firmware>.bin
```

请注意 <> 替换成⾃⼰的值。

flash-mode：

- 多数ESP-01/07（512KB）使用 qio
- ESP-32 ESP-8266 12（32Mbit）使用 dio
- ESP-8285 使用 dout

刷写完固件后，按 reset 按钮，重启⼀下，然后等待 flash 格式化完成。

## 第四章：上传代码

上传代码有4种⽅式：

nodemcu-manager: 由【提莫的神秘商店】开发的图形界面软件，像电脑资源管理器⼀样管理nodemcu⽂件，适合绝⼤部分⼈，尤其适合新⼿，⽆需安装依赖。免费开源，⽬前正在开发测试中，敬请期待。

**ESPlorer**：⼀款功能强⼤的图形软件，适合nodemcu、microPython。但是需要Java环境。

![没有描述](/@qiniu/nodemcu-zh/started-6.png)

请先安装Java环境，然后下载此软件：[https://github.com/4refr0nt/ESPlorer](https://github.com/4refr0nt/ESPlorer)

下载完后，在右边选择⾃⼰开发板的端⼝，然后波特率选择115200，点击链接。如果连接不上，波特率选择9600。连接成功后，即可在左边编辑框编写代码，编写完成后，点击 run 按钮，即可即时运⾏。也可以点击保存，⽂件名为 init.lua 然后点击 save to ESP 按钮，这样，每次开发板上电，就会自动运⾏ init.lua ⽂件。

**nodemcu-uploader.py**: 具有上传、下载Lua⽂件功能。命令行操作，需要Python环境。请前往：[https://github.com/kmpm/nodemcu-uploader](https://github.com/kmpm/nodemcu-uploader) 下载和查看使⽤⽂档。

**NodeMCU-Tool**：⼀款使⽤ nodejs 编写的命令行工具，功能强⼤，跨平台。需要 nodejs 环境。请前往：[https://github.com/andidittrich/NodeMCU-Tool](https://github.com/andidittrich/NodeMCU-Tool) 下载和查看使用⽂档。

新手推荐使用图形界面的 ESPlorer，其它命令行工具使⽤都⾮常简单，需要⼀点基础，请自行查看使用文档。

## 第五章：如何编写程序

![没有描述](/@qiniu/nodemcu.png)

先附上开发板的引脚图。要使用外设和驱动硬件，必须要牢记此引脚图，接线时请⼀定检查引脚是否接错。很多新手拿到⼀个程序后，跑起来，发现硬件没有正常工作，多数都是由于引脚接错了。检查引脚没问题之后，再检查程序里面的配置，是不是写错了。

下⾯我们编写代码，让开发板连接到WiFi：

```lua
wifi.setmode(wifi.STATION)
--connect to Access Point (DO save config to flash)
station_cfg={}
station_cfg.ssid="NODE-AABBCC"
station_cfg.pwd="password"
station_cfg.save=true
wifi.sta.config(station_cfg)
-- print current IP address, netmask, gateway
print(wifi.sta.getip())
```

将 `ssid` 和 `pwd` 替换成⾃⼰的 WiFi 名字和密码。然后把这段代码复制到编辑器中，点击 运行，稍等⼀会，就能看到输出开发板的IP地址了。

我们来分析⼀下。wifi 表示使用 WiFi 这个模块，setmode() 调用这个函数，然后 station 的值表示作为客户端，意思就是把开发板设置为客户端模式。wifi.sta.config() 表示配置 WiFi 的名字和密码，配置后，默认就会自动连接 WiFi 了。最后 print 是打印字符串，会通过串⼝输出，wifi.sta.getip() 是获取开发板的 IP 地址，把这个IP地址打印出来。

这就是 nodemcu 的好处，想使用什么模块，直接去查看对应的模块⽂档，就能看到所有的可用函数名，以及参数，作用。所以，请查看这个文档，获取所有模块的使用⽅法吧：https://nodemcu.readthedocs.io/en/master/
