# UPGRADE

Click `UPGRADE` to check any available update and upgrade the firmware.

![upgrade](https://static.gl-inet.com/docs/en/3/setup/mini_router/upgrade/firmware.jpg)



---

## Online Upgrade

You can find the current firmware version here. If your router is connected to the Internet, it will check for the newer firmware version available for download.

![online upgrade](https://static.gl-inet.com/docs/en/3/setup/mini_router/upgrade/firmware1.jpg)



*Note: It is suggested to uncheck **Keep setting**. If you keep the settings and encounter problems after the upgrade, please reset the router.*



---

## Upload Firmware

Click `Local Upgrade` to upload a firmware file to the router. Simply drag and drop your firmware file to the area indicated.

![upload firmware](https://static.gl-inet.com/docs/en/3/setup/mini_router/upgrade/firmware2.jpg)



###Official OpenWrt/LEDE firmware

You can download the official firmware from our [website](https://dl.gl-inet.com/firmware/). 

- GL-AR150 series: [https://dl.gl-inet.com/firmware/ar150/](https://dl.gl-inet.com/firmware/ar150/)
- GL-AR300M series: [https://dl.gl-inet.com/firmware/ar300m/](https://dl.gl-inet.com/firmware/ar300m/)

Find the available firmwares from the folder according to your device model, and they are located in different sub-folders:

**v1**: Official GL.iNet OpenWrt/LEDE firmware.

**clean**: Clean versions of OpenWrt/LEDE firmware with Luci admin page only.

**tor**: Tor firmware.

**testing**: Beta version of GL.iNet OpenWrt/LEDE firmware.

**nand *(AR300M only)***: Firmware for the 128MB Nand flash of GL-AR300M and GL-AR300M-Ext.

*Note: The firmware files inside the **Nand** folder are for **GL-AR300M** and **GL-AR300M-Ext** only since these two models have 128MB Nand flash. You have to upload by using the .tar file. The .img file can only be used in Uboot.* 



### Compile your own firmware

You can compile your own firmware and flash to the router. Please refer to 

[https://github.com/gl-inet/openwrt](https://github.com/gl-inet/openwrt)

[https://github.com/gl-inet/imagebuilder](https://github.com/gl-inet/imagebuilder)


### Third party firmware

You may also try other firmwares such as DDWRT.



*Note: If you uploaded an incompatible firmware thus bricked the router, please use [Uboot](/troubleshooting/debrick/) to re-install the correct firmware.*



---

## Auto Upgrade

You can enable auto upgrade. The router will search for available update and upgrade automatically according to the time that you set.

![auto upgrade](https://static.gl-inet.com/docs/en/3/setup/mini_router/upgrade/firmware3.jpg)
