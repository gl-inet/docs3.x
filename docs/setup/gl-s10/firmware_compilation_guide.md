# GL-S10 Firmware Compilation Guide

This doc is intended to help users set the software building environment and build your own applications for GL-S10.   
As an example, we build a simple demo. It 
aims to recieve iBeacons from around and then send it to specified MQTT broker through WiFi. Note that WiFi and MQTT setting is written in the source code.

## Set Develop Environment
GL-S10 application is base on Espressif esp-idf(v3.3). You can get the detailed steps of building the compile environment by following the link. [https://docs.espressif.com/projects/esp-idf/en/v3.3/get-started/index.html#introduction](https://docs.espressif.com/projects/esp-idf/en/v3.3/get-started/index.html#introduction) *(Attention: Please check the version of IDF before you download it.)*
After configuring the develop environment, decompress and get into the source code folder `ble_ibeacon/`. Most code is in the file `ibeacon_demo.c`.

## Modify source code

**1. Modify WiFi setting**

Find contents as below in the `ibeacon_demo.c` and modify the WiFi setting to what you want.

```c
wifi_config_t wifi_config = {
	.sta = {
		.ssid = "WIFI SSID", //
		.password = "WIFI password",
	},
};
```

**2. Modify MQTT setting**

Similar with WiFi setting. Find and modify the struct `esp_mqtt_client_config_t` in the `ibeacon_demo.c`.

```c
esp_mqtt_client_config_t mqtt_cfg = {
	.uri = "mqtt://192.168.100.174:61613",//IP:port
	.usernaem = "MQTT username",
	.password = "MQTT password",
	.event_handle = mqtt_event_handler,
};
```

*(If you want to connect to MQTT broker except tcp, change the url prefix.)*

```c
tcp ---> mqtt://
tcp-ssl ---> mqtts://
web socket ---> ws://
web socket secure ---> wss://
```

## Compile and Flash

**1. Configuration**

Before compile the application, get into your project folder *(here is `ble_ibeacon/`)*, using command `make menuconfig` to configure some basic setting like serial port.  
In the configuration inteface, you just need to change three point as follow.  
Firstly, click `Serial flasher config`.

![espressif iot development framework configuration](https://static.gl-inet.com/docs/en/3/setup/gl-s10/espressif_iot_development_framework_configuration.jpg)

Then modify the three point marked by red line.

![espressif iot development framework configuration serial flasher config](https://static.gl-inet.com/docs/en/3/setup/gl-s10/espressif_iot_development_framework_configuration_serial_flasher_config.jpg)

Set `Default serial port` to the port name show in your PC, typically is `/dev/ttyUSB0`.
Set `Serial flasher config --->Flash SPI speed` to `80MHz`.
Set `Serial flasher config --->Flash size` to `4MB`.

**2. Build**
In your project folder, using command `make all`. It will compile and build the firmware. When finished sucessfully, it will show information like this.

![compile and build firmware](https://static.gl-inet.com/docs/en/3/setup/gl-s10/compile_and_build_firmware.jpg)

**3. Flash**
GL-S10 using UART to flash the firmware, and also using this UART to output the system log.
Connect the UART in S10 to the PC by a USB-UART converter. The PC will find a new usb device like `/dev/ttyUSB0`. It is the name you should write in the `Default serial port`.   
Yellow marked is the UART port in S10. From left to right is GND/RX/TX. Red marked is flash button.

![gl-s10 pcb](https://static.gl-inet.com/docs/en/3/setup/gl-s10/gl-s10-PCB.jpg)

After connect S10 UART to the PC, using command `make flash` or `make flash monitor` to flash the firmware. When shows like that, it means the PC is waiting S10 to get into "download mode".

![wait flash](https://static.gl-inet.com/docs/en/3/setup/gl-s10/wait_flash.jpg)

How to get into "download mode", do in this way. Unplug the S10 power, press the flash button(do not release) and then plug in the power. When it shows like that,

![flash](https://static.gl-inet.com/docs/en/3/setup/gl-s10/flash.jpg)

means flash starts sucessfully, then you can release the flash button and wait for the flash finished.
When flash has been finished, restart the GL-S10.

## Result 
If you have connect the S10 UART to the PC, using command `make monitor`, it will print all the system log like that. *(here shows the iBeacon data it recieved)*

![system log result](https://static.gl-inet.com/docs/en/3/setup/gl-s10/system_log_result.png)

In the MQTT broker, You can get the messages published by S10 like that.

![messages published result](https://static.gl-inet.com/docs/en/3/setup/gl-s10/messages_published_result.png)