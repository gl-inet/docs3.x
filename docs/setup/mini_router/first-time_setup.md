# Getting Started with GL.iNet Mini Travel Router

Models:

GL-MT300N, GL-MT300N-V2

GL-AR150, GL-AR150-PoE, GL-AR150-Ext-2, GL-AR150-Ext-PoE-2

GL-AR300M, GL-AR300M-Ext, GL-AR300M16, GL-AR300M16-Ext, GL-AR300M-Lite

![router](https://static.gl-inet.com/docs/en/3/setup/mini_router/first-time_setup/router.jpg)

*Note: **GL-AR300M-Lite** has one Ethernet port only.*



---

## 1. Power on 

Plug the Micro USB power cable into the power port of the router. Make sure you are using a standard 5V/1A power adapter. Otherwise it may cause malfunction.

![Power on](https://static.gl-inet.com/docs/en/3/setup/mini_router/first-time_setup/power.jpg)

## 2. Connect 

You can connect to the router via Ethernet cable or Wi-Fi.

*Note: This step only connects your devices to the local area network (LAN) of the router. You cannot access the Internet currently. In order to connect to the Internet, please finish the setup procedures below and then follow [Internet](internet.md) to set up an Internet connection.*



### Connect via LAN 
Connect your device to the LAN port of the router via Ethernet cable.

![connect via lan](https://static.gl-inet.com/docs/en/3/setup/mini_router/first-time_setup/connect.jpg)

*Note: **GL-AR300M-Lite** has only 1 Ethernet port which works as WAN by default. You can only connect to it via Wi-Fi when you first set up the router. Once you have connected to it, you can change the WAN port to LAN port in [Internet](Internet#1-cable) so that you can connect to it via Ethernet cable.*



### Connect via Wi-Fi 
Search for the SSID of the router in your device and input the default password: ***goodlife***.

*Note: The SSID was printed on the bottom label of the router with the following formats:*

- **GL-MT300N-XXX**
- **GL-MT300N-V2-XXX**
- **GL-AR150-XXX**
- **GL-AR300M-XXX**
- **GL-AR300M-XXX-NOR**




## 3. Access the Web Admin Panel

Open a web browser (we recommend Chrome, firefox) and visit [http://192.168.8.1](http://192.168.8.1). You will be directed to the initial setup of the web Admin Panel. 



### 1) Language Setting
You need to choose the display language of the Admin Panel. Currently, our routers support **English**, **简体中文**, **繁體中文**, **Deutsch**, **Français**, **Español**, **Italiano** and **日本語**. 

![initial setup](https://static.gl-inet.com/docs/en/3/setup/mini_router/first-time_setup/welcome.jpg)

*Note: If your browser always redirects to Luci (http://192.168.8.1/cgi-bin/luci), you can visit: [http://192.168.8.1/index](http://192.168.8.1/index) instead of [http://192.168.8.1](http://192.168.8.1).*

  

### 2) Admin Password Setting
There is no default password for this Admin Panel. You have to set your own password, which must be at least 5 characters long. Then, click `Submit` to proceed.

![password](https://static.gl-inet.com/docs/en/3/setup/first-time_setup/password.jpg)

*Note: This password is for this web Admin Panel and the embedded Linux system. It will not change your Wi-Fi password.*



### 3) Admin Panel
After the initial setup, you will enter the web Admin Panel of the router. It allows you to check the status and manage the settings of the router.

![admin panel](https://static.gl-inet.com/docs/en/3/setup/mini_router/first-time_setup/main_ui.jpg)
