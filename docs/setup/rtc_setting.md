
# Installation  

By default, it is missing dependency kernel modules. We should install them firstly. If you use our stock firmware, you can just install the kernel modules via **opkg**.  

```shell  
opkg update
opkg install kmod-i2c-gpio-custom
opkg install kmod-rtc-sd2068
```  

Otherwise, If you want to compile your own firmware, choose these packages:  

```
Kernel modules  --->  I2C support  --->  kmod-i2c-gpio-custom
Kernel modules  --->  Other modules  --->  kmod-rtc-sd2068
```  

# RTC on GL-AR150  

## Pinout  

![](src\rtc_1200x1200.jpg)  


## Usage  

The GPIO used for RTC is below:

`SDA` <--> `GPIO1`
`SCL` <--> `GPIO17`

Now you need in insert kernel modules and connect to the module.  

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

# RTC on GL-MIFI  

## RTC Pinout  

![](src\rtc_1200x1200.jpg)   

## Usage  

The GPIO used for RTC is below:

`SDA` <--> `GPIO13`
`SCL` <--> `GPIO17`

Now you need in insert kernel modules and connect to the module.  

```
insmod i2c-gpio-custom.ko bus0=0,13,17
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
