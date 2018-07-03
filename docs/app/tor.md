
Using Tor in OpenWrt and GLi Routers
===================================

Free Tor firmware for all

!!! Note

**This Tor firmware is totally free and no warranty.** Refer to the forum for help!

To use the Tor firmware:

1. Download the correct firmware for your router.
2. Flash it to the router according to [this guide](/setup/firmware.md), DO NOT reserve settings.

If you brick your router after flashing the wrong firmware or wrong way, please use uboot failsafe to debrick the router. 

##Versions and supported devices

We have several version of Tor firmware and here is the summary. 

### Version 2.264:

We have upgrade Tor firmware for the following models to v2.264 on 2017-11-24.

`AR150, AR300M, AR300M Nand, MT300N, MT300A, MT300N-V2 `

Now Tor firmware is generally by imagebuilder and you will be able to install from standard GLi software repositories using opkg. The source code is on [github](https://github.com/gl-inet/openwrt-files) now.

To modify and compile the Tor firmware by yourself, please refer to the following imagebuilders.

* [imagebuilder for AR150, AR300M, MiFi, 6416](https://github.com/gl-inet/imagebuilder-cc-ar71xx) based on OpenWrt CC 1505
* [imagebuilder for AR300M Nand](https://github.com/gl-inet/imagebuilder-cc-ar71xx-nand) based on OpenWrt CC 1505
* [imagebuilder for MT300N, MT300A](https://github.com/gl-inet/imagebuilder-cc-ramips) based on OpenWrt CC 1505
* [imagebuilder for MT300N-V2](https://github.com/gl-inet/imagebuilder-lede-ramips) based on LEDE 17.01.4



###Version 1.4:
Only support `GL-AR150`, `GL-AR300M`, `GL-MT300N`, `GL-MT300A`, which has a `switch button` controlling whether you traffice should go through Tor or not.

**Most of these instructions are for version 1.4.**

###Version 1.3: 
Support `GL-AR150`,`GL.iNet6416`, `GL-AR300`. This firmware create two ssid: OpenWrt and Tor. If you conenct to OpenWrt you will have normal Internet. If you connect to Tor, you will be connect to Tor network. This firmware has a built-in UI based on Domino Pi which you can manage two SSIDs.

###Version 1.0 with Luci:
Support `GL-MT300A` and `GL-MT300N`. This is the firmware created for MT300A and MT300N with Luci. This firmware create two ssid: OpenWrt and Tor. If you conenct to OpenWrt you will have normal Internet. If you connect to Tor, you will be connect to Tor network. Connection from LAN port will always have Tor. Luci is installed but there is no Domino Pi UI.

!!! Note

If you have questions about versions, please ask here or in the forum.

##Download and Flashing the firmware to the device

All the firmwares is available at [http://download.gl-inet.com/firmware/](http://download.gl-inet.com/firmware/)
Find your device name and then "tor" folder. Download the newest firmware.

You need to refer to [this guide](/setup/firmware.md) for instructions to flash the firmware to the router. 

| Model       | Tor firmware path                        | Newest Version | Note                                     |
| ----------- | ---------------------------------------- | -------------- | ---------------------------------------- |
| GL.iNet6416 | [http://download.gl-inet.com/firmware/6416/tor/](http://download.gl-inet.com/firmware/6416/tor/) | 1.3            |                                          |
| AR150       | [http://download.gl-inet.com/firmware/ar150/tor/](http://download.gl-inet.com/firmware/ar150/tor/) | 2.264          |                                          |
| AR300M      | [http://download.gl-inet.com/firmware/ar300m/nand/tor/](http://download.gl-inet.com/firmware/ar300m/nand/tor) | 2.264          | .rar is for web upgrade .img is for uboot upgrade |
| AR300M-Nor  | [http://download.gl-inet.com/firmware/ar300m/tor/](http://download.gl-inet.com/firmware/ar300m/tor/) | 2.264          |                                          |
| MT300N      | [http://download.gl-inet.com/firmware/mt300n/tor/](http://download.gl-inet.com/firmware/mt300n/tor/) | 2.264          |                                          |
| MT300A      | [http://download.gl-inet.com/firmware/mt300a/tor/](http://download.gl-inet.com/firmware/mt300a/tor/) | 2.264          |                                          |
| GL-MiFi     | [http://download.gl-inet.com/firmware/ar150/tor/](http://download.gl-inet.com/firmware/ar150/tor/) | 1.3            | MiFi don't have a Tor firmware itself. Use AR150 1.3 instead |
| GL-AR300    | [http://download.gl-inet.com/firmware/ar300/tor/](http://download.gl-inet.com/firmware/ar300/tor/) | 1.3            |                                          |
| GL-MT750    | Not supported yet                        |                |                                          |
| AR750       | Not supported yet                        |                |                                          |

##Using the firmware UI

After you flash the firmware to your device, when it reboots you need to set up the device at `http://192.168.8.1`. 

`If` you need to connect via WiFi, the default wifi password is `goodlife`.

!!! NOTE 

**You need to move the hardware switch to the right side if you want to access the UI**. Otherwise you are connecting to the Tor network and will not be able to access the UI. This is for security reasons.

###First time setup
The first time you acess the setting UI, you will be asked to setup a new password immediatelly. Just choose a password and your TimeZone and submit. The device will `NOT` reboot in firmware 1.4.

NOTE: **This doesn't change your WiFi password. Change it later.**

![First time](https://static.gl-inet.com/docs/en/2.x/app/src/tor/first_time.jpg)

###Login

You will be asked to login using your `NEW` password now.

![Login](https://static.gl-inet.com/docs/en/2.x/app/src/tor/login.jpg)

###Homepage

The UI is based on Domino Pi. It is quite simple. In your homepage you will be displayed with:

1. Your network status
2. Tor status. Please note if your tor reconnects this information may not be accurate. 
3. Usage of your flash

![Homepage](https://static.gl-inet.com/docs/en/2.x/app/src/tor/homepage.jpg)

###System and firmware upgrade

You can click the `SYSTEM` button from the left sidebar to view the system information, including:

1. Your router's name
2. Change your password
3. Change your timezone
4. Check your firmware version and upgrade it, from online or mannually.

![System](https://static.gl-inet.com/docs/en/2.x/app/src/tor/system.jpg)

If the firmware on our website is newer, you can click `Download` and follow the instructions to upgrade the firmware.

![Upgrade](https://static.gl-inet.com/docs/en/2.x/app/src/tor/upgrade.jpg)

###Network Settings

Click the `NETWORK` button on the left sidebar to view and change the network settings, including:

1. Internet protocol: `dhcp`, `static`, `pppoe`, `3g`, `tethering` or `repeater`. Tethering only works in Android phones.
2. Wireless parameters: `ssid`, `encryption` and `passsword`
3. LAN IP

![Network](https://static.gl-inet.com/docs/en/2.x/app/src/tor/network.jpg)

3G 4G settings

If you connect a 3G or 4G USB modem, you can set the internet to the modem. You need to choose `3G` as protocol, choose modem device, usually `/dev/ttyUSBx`, choose `umts` or `evdo`, then input your `apn` etc. 

![3G 4G LTE](https://static.gl-inet.com/docs/en/2.x/app/src/tor/3g.jpg)

Repeater settings. It will search for available ssid automatically. You need to choose ssid and type your password. 

!!! NOTE 

**This firmware don't have repeater manager as our stock firmware.** If you move to another location, your wifi maybe not work and you need to re-setup. Refer to the button action section in this page.

![Repeater](https://static.gl-inet.com/docs/en/2.x/app/src/tor/repeater.jpg)

###Luci

Click the `LUCI` button on the left sidebar you can have the LUCI UI. You can go back to Domino UI by clicking the `Domino Web Panel` link on the bottom right corner.

![LUCI](https://static.gl-inet.com/docs/en/2.x/app/src/tor/luci.jpg)

##Reset button and hardware switch usage
Reset button and switch is assigned special functions.

![Reset](https://static.gl-inet.com/docs/en/2.x/app/src/tor/button_leds.jpg)

###Reset

1. When you press down the reset button, the middle LED will start to flash once per second. Release your finger if the LED just flashed once (1 seconds), the Tor will try to change a new Exit node.
2. If you keep the button pressed for 3 seconds, it will flash quicker, twice per second. Now release your finger your network will reset, including disable repeater, set lanip back to 192.168.8.1 and enable dhcp. **Use this function if your repeater cannot connect which causes your wifi down**
3. When you keep holding the reset button for 8 seconds, the middle LED will start to flash even quicker, 4 times per seconds. Release your finger now, your firmware will revert to factory status and reboot.

###Switch

1. Left side: You will be connected to `Tor network`. **You cannot access the admin UI.**
2. Rigth side: `Normal Internet`. You will be able to access the admin UI.
