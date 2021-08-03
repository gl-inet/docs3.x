# Getting Started with GL.iNet Cirrus

Model:

GL-AP1300

![router](https://static.gl-inet.com/docs/en/3/setup/cirrus/First%20time/AP1300.png)


GL-AP1300LTE

![router](https://static.gl-inet.com/docs/en/3/setup/cirrus/First%20time/AP1300LTE.png)


---



## 1. Power on 

Plug the power cable into the power port of the router. Make sure you are using a standard **12V/2A** power adapter. Also, you could plug in the Ethernet cable with PoE power. The PoE injector should be compatible with active or passive **48V 802.3at** standard. Otherwise it may cause malfunction. 

**You can only use one power supply method at one time, either via PoE (Power over Ethernet) or power cable.**


PoE (Power over Ethernet)

The PoE injector should be compatible with **48V 802.3at** standard. PoE only works on the **WAN port**.

![Power on](https://static.gl-inet.com/docs/en/3/setup/cirrus/First%20time/power1.png)


Power cable

The power cable **(12V/2A DC)** can be found in the package.

![Power on](https://static.gl-inet.com/docs/en/3/setup/cirrus/First%20time/power2.png)

*IMPORTANT NOTE: For GL-AP1300LTE, you **MUST** insert Nano SIM Card and attach the antennas before connecting to a power supply.*

![Power on](https://static.gl-inet.com/docs/en/3/setup/cirrus/First%20time/AP1300_insert.png)


## 2. Connect 

You can connect to the router via Ethernet cable or Wi-Fi.

*Note: This step only connects your devices to the local area network (LAN) of the router. You cannot access the Internet currently. In order to connect to the Internet, please finish the setup procedures below and then follow [Internet](internet.md) to set up an Internet connection.*



### Connect via LAN 
Connect your device to the LAN port of the router via Ethernet cable.

![connect via lan](https://static.gl-inet.com/docs/en/3/setup/cirrus/First%20time/AP1300_connect.png)



### Connect via Wi-Fi 
Search for the SSID of the router in your device and input the default password: ***goodlife***.

*Note: The SSID was printed on the bottom label of the router with the following formats:*

- **GL-AP1300-xxx-5G**
- **GL-AP1300-xxx**




## 3. Access the Web Admin Panel

Open a web browser (we recommend Chrome, firefox) and visit [http://192.168.8.1](http://192.168.8.1). You will be directed to the initial setup of the web Admin Panel. 



### 1) Language Setting
You need to choose the display language of the Admin Panel. Currently, our routers support **English**, **简体中文**, **繁體中文**, **Deutsch**, **Français**, **Español**, **Italiano** and **日本語**.

![initial setup](https://static.gl-inet.com/docs/en/3/setup/cirrus/First%20time/language.png)

*Note: If your browser always redirects to Luci (http://192.168.8.1/cgi-bin/luci), you can  visit: [http://192.168.8.1/index](http://192.168.8.1/index) instead of [http://192.168.8.1](http://192.168.8.1).*

  

### 2) Admin Password Setting
There is no default password for the Admin Panel. You have to set your own password, which must be at least 5 characters long. Then, click `Submit` to proceed.

![Welcome](https://static.gl-inet.com/docs/en/3/setup/spitz/first-time_setup/password.jpg)

*Note: This password is for this web Admin Panel and the embedded Linux system. It will not change your Wi-Fi password.*



### 3) Admin Panel
After the initial setup, you will enter the web Admin Panel of the router. It allows you to check the status and manage the settings of the router.

![admin panel](https://static.gl-inet.com/docs/en/3/setup/cirrus/First%20time/Admin%20Panel.png)
