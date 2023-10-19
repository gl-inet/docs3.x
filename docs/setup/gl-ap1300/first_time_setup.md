# Getting Started with GL.iNet Cirrus

Model: 

GL-AP1300(Cirrus)

![router](https://static.gl-inet.com/docs/en/3/setup/gl-ap1300/first_time_setup/AP1300.png){class="glboxshadow"}

GL-AP1300LTE(Cirrus)

![router](https://static.gl-inet.com/docs/en/3/setup/gl-ap1300/first_time_setup/AP1300LTE.png){class="glboxshadow"}

---

There is a video tutorial about the setup, please check out [here](#video-tutorial).


## 1. Power on

Plug the power cable into the power port of the router. Make sure you are using a standard **12V/2A** power adapter. Also, you could plug in the Ethernet cable with PoE power. The PoE injector should be compatible with active or passive **48V 802.3at** standard. Otherwise it may cause malfunction. 

**You can only use one power supply method at one time, either via PoE (Power over Ethernet) or power cable.**

PoE (Power over Ethernet)

The PoE injector should be compatible with **48V 802.3at** standard. PoE only works on the **WAN port**.

![Power on](https://static.gl-inet.com/docs/en/3/setup/gl-ap1300/first_time_setup/power1.png){class="glboxshadow" width="600"}

Power cable

The power cable **(12V/2A DC)** can be found in the package.

![Power on](https://static.gl-inet.com/docs/en/3/setup/gl-ap1300/first_time_setup/power2.png){class="glboxshadow" width="600"}

*IMPORTANT NOTE: For GL-AP1300LTE, you **MUST** insert Nano SIM Card and attach the antennas before connecting to a power supply.*

![Power on](https://static.gl-inet.com/docs/en/3/setup/gl-ap1300/first_time_setup/AP1300_insert.png){class="glboxshadow"}

## 2. Connect 

You can connect to the router via Ethernet cable or Wi-Fi.

*Note: This step only connects your devices to the local area network (LAN) of the router. You cannot access the Internet currently. In order to connect to the Internet, please finish the setup procedures below and then follow [Internet](internet.md) to set up an Internet connection.*

### Connect via LAN

Connect your device to the LAN port of the router via Ethernet cable.

![connect via lan](https://static.gl-inet.com/docs/en/3/setup/gl-ap1300/first_time_setup/AP1300_connect.png){class="glboxshadow" width="600"}

### Connect via Wi-Fi

Search for the SSID of the router in your device and input the default password: ***goodlife***.

*Note: The SSID was printed on the bottom label of the router with the following formats:*

- **GL-AP1300-xxx-5G**
- **GL-AP1300-xxx**

## 3. Access the web Admin Panel

Open a web browser (we recommend Chrome, firefox) and visit [http://192.168.8.1](http://192.168.8.1). You will be directed to the initial setup of the web Admin Panel. 

### 1) Language Setting

You need to choose the display language of the Admin Panel. Currently, our routers support **English**, **简体中文**, **繁體中文**, **Deutsch**, **Français**, **Español**, **Italiano** **日本語**, **한국어** and **Русский**.

![initial setup](https://static.gl-inet.com/docs/en/3/setup/gl-ap1300/first_time_setup/welcome_page_gl-ap1300.png){class="glboxshadow"}

*Note: If your browser always redirects to LuCI (http://192.168.8.1/cgi-bin/luci), you can  visit: [http://192.168.8.1/index](http://192.168.8.1/index) instead of [http://192.168.8.1](http://192.168.8.1).*

### 2) Admin Password Setting

There is no default password for the Admin Panel. You have to set your own password, which must be at least 5 characters. Then, click `Submit` to proceed.

![setup admin password](https://static.gl-inet.com/docs/en/3/setup/share/first_time_setup/setup_admin_password.png){class="glboxshadow"}

*Note: This password is for this web Admin Panel and the embedded Linux system. It will not change your Wi-Fi password.*

### 3) Admin Panel

After the initial setup, you will enter the web Admin Panel of the router. It allows you to check the status and manage the settings of the router.

![admin panel](https://static.gl-inet.com/docs/en/3/setup/gl-ap1300/first_time_setup/admin_panel_gl-ap1300.png){class="glboxshadow"}

## Video Tutorial

Unboxing and Setup Guide

<iframe width="560" height="315" src="https://www.youtube.com/embed/db-LI967Q4Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
