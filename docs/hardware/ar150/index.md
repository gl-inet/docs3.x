# 	GL-AR150 Series

AR150 Series includes AR150, AR150-Ext, AR150-PoE and AR150-Ext-PoE.




## Hardware Specification

|                         Model | GL-AR150                                 |
| ----------------------------: | :--------------------------------------- |
|                           CPU | Atheros 9331 400MHz                      |
|                        Memory | DDRII 64Mb                               |
|                       Storage | 16Mb flash                               |
|                    Interfaces | 1 WAN, 1 LAN, 1 USB2.0, 1 Micro USB (power), 1 Reset Button, UART |
|                     Frequency | 2.4GHz                                   |
|             Transmission Rate | 150Mbps                                  |
|                 Max. Tx Power | 18dBm                                    |
|                      Protocol | 802.11 b/g/n                             |
| External Drive Format Support | FAT32/NTFS/exFAT/EXT4/EXT3/EXT2          |
|                Webcam Support | MJPEG, YUV (web cam not support any more from firmware v2.27) |
|                  DIY Features | UART, GPIO,  3.3V & 5V power port        |
|      External Antenna Support | Yes (optional)                           |
|            PoE Module Support | Yes (optional)                           |
|                   Power Input | 5V/1A                                    |
|             Power Consumption | <1.5W                                    |
|             Dimension, Weight | 58mmX58mmX25mm, 39g                      |



##PCB Pinout

![gl-ar150 pcb pinout](https://static.gl-inet.com/docs/en/2.x/hardware/ar150/src/AR150-V4.4-PINOUT.jpg)

## RTC Setting

You can use a RTC (Real-time control) module in GL-AR150 mini router.

![gl-ar150 use RTC module](https://static.gl-inet.com/docs/en/2.x/hardware/ar150/src/rtc_1200x1200.jpg)

### Install kernel modules

If you use our stock firmware, you can just install using `opkg`

```
opkg update
opkg install kmod-i2c-gpio-custom
opkg install kmod-rtc-sd2068
```

If you want to compile your own firmware, choose these packages:

```
Kernel modules  --->  I2C support  --->  kmod-i2c-gpio-custom
Kernel modules  --->  Other modules  --->  kmod-rtc-sd2068
```

### Software

The GPIO used for RTC is below:

`SDA` <--> `GPIO1`
`SCL` <--> `GPIO17`

Now you need in insert kernel modules and connect to the module

```
insmod i2c-gpio-custom.ko bus0=0,1,17
echo sd2068 0x32 > /sys/bus/i2c/devices/i2c-0/new_device
```

To read the time from RTC module

```
hwclock -r
```

To sync the RTC module's time to mini router

```
hwclock -s
```

To write mini router's time to RTC module

```
hwclock -w
```





## PoE Connection

We have a specific PoE module for GL-AR150 mini routers. You can find it in the PoE version of AR150 router.

You can only apply one power supply method at one time, either via PoE (Power over Ethernet) or micro USB Power. The compatible passive or active PoE injector should be 48V 802.3af/at.

PoE only works on the ***WAN Port only***



![AR150 PoE Connection](https://static.gl-inet.com/docs/en/2.x/hardware/ar150/src/AR150-PoE_setup.png)



PoE Setup Sample: 

The following PoE injector is widely availabe in the market and it is very affordable. You can put you Ineternet cable in the `Data In` port then connect the `Data & Power Out` port to AR150-PoE's `WAN` port.

***For PoE Version Only***

![PoE switch and Ethernet cable](https://static.gl-inet.com/docs/en/2.x/hardware/ar150/src/white_1000x1000_PoE_2.jpg) 







