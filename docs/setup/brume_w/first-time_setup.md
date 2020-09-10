# Getting Started with GL.iNet Brume-W

Model: GL-MV1000W

![router](https://static.gl-inet.com/docs/en/3/setup/brume/first-time_setup/SETUP_NEW1.png)

---

## 1. Power on

Plug the USB Type-C power cable into the power port of the router. Make sure you are using a standard **5V/3A** power adapter. Otherwise it may cause malfunction.

![Power on](https://static.gl-inet.com/docs/en/3/setup/slate/first-time_setup/power1.jpg)


*Note: Hot plug for TF card is **not** supported. If you want to use TF card, please insert before powering on the router.*

## 2. Connect 

You can connect to the router via Ethernet cable, Wi-Fi or USB type-C cable.

*Note: This step only connects your devices to the local area network (LAN) of the router. You cannot access the Internet currently. In order to connect to the Internet, please finish the setup procedures below and then follow [Internet](internet.md) to set up an Internet connection.*

### Connect via LAN 
Connect your device to the LAN port of the router via Ethernet cable.

![connect via lan](https://static.gl-inet.com/docs/en/3/setup/slate/first-time_setup/connect.jpg)

### Connect via Wi-Fi
Connect to the WiFi called **GL-MV1000-xxx**. If this is your first time to set up this router, the default WiFi password will be **goodlife**, which is also printed on the bottom of the router. If you previously set up and change the password, please fill in the password that you set up with. You can also connect to the Internet with your WAN port from your modem.

![connect via Wi-Fi](https://static.gl-inet.com/docs/en/3/setup/brume-w/first-time_setup/MV1000W_Connect%20wia%20WIFI%282%29.png)


### Connect via USB Type-C Cable

Connect your computer to the power port of the router via USB Type-C cable. Keeps your computer connect to the internet and waits for several minutes, it will install the driver automatically.

    It supports Windows 10, Windows 7, Mac OS, Ubuntu.

![connect usb type-c cable](https://static.gl-inet.com/docs/en/3/setup/slate/first-time_setup/power1.jpg)

Certain Windows systems don't recognize the Brume-W as a network device or fail to find the correct driver.
Use this driver for such cases: <a href="https://static.gl-inet.com/docs/en/3/setup/brume/first-time_setup/mod-duo-rndis.zip" target="_blank">mod-duo-rndis.zip</a>

Below follows a tutorial on how to install it.
If your system reports the driver as missing, make windows look for drivers and skip to step 4).

1. Press the windows key and 'R' at the same time to get the 'Run' dialog. Type "devmgmt.msc" and press enter. (This will open the Device Manager)
![Connection-win-1](https://static.gl-inet.com/docs/en/3/setup/brume/first-time_setup/Connection-win-1.png)

2. Find the MOD Duo device. It either appears as 'Duo Ethernet' under 'Unknown devices' or as a USB Serial device.
If you have 'Duo Ethernet' as unknown device, select it.
If not, expand the 'Ports (COM & LPT)' category and select 'USB Serial Device'.
![Connection-win-2](https://static.gl-inet.com/docs/en/3/setup/brume/first-time_setup/Connection-win-2.png)

3. Right click on the selected item and select 'Update Driver Software...'.
![Connection-win-3](https://static.gl-inet.com/docs/en/3/setup/brume/first-time_setup/Connection-win-3.png)

4. Select 'Browse my computer for driver software'
![Connection-win-4](https://static.gl-inet.com/docs/en/3/setup/brume/first-time_setup/Connection-win-4.png)

5. Click the 'Browse' button and select the folder where you extracted the contents of the mod-duo-rndis.zip file, then click 'Next'.
![Connection-win-5](https://static.gl-inet.com/docs/en/3/setup/brume/first-time_setup/Connection-win-5.png)

6. Wait for Windows to finish installing the driver.
![Connection-win-6](https://static.gl-inet.com/docs/en/3/setup/brume/first-time_setup/Connection-win-6.png)

7. That's it! The driver is installed. :)
![Connection-win-7](https://static.gl-inet.com/docs/en/3/setup/brume/first-time_setup/Connection-win-7.png)

8. If everything is working correctly, the Duo will appear as 'USB Ethernet/RNDIS Gadget' under 'Network adapters'
![Connection-win-8](https://static.gl-inet.com/docs/en/3/setup/brume/first-time_setup/Connection-win-8.png)

## 3. Access the Web Admin Panel

Open a web browser (we recommend Chrome, firefox) and visit [http://192.168.8.1](http://192.168.8.1). You will be directed to the initial setup of the web Admin Panel.

### 1) Language Setting
You need to choose the display language of the Admin Panel. Currently, our routers support **English**, **简体中文**, **繁體中文**, **Deutsch**, **Français**, **Español**, **Italiano** and **日本語**. 

![initial setup](https://static.gl-inet.com/docs/en/3/setup/brume-w/first-time_setup/welcome_2.jpg)

*Note: If your browser always redirects to Luci (http://192.168.8.1/cgi-bin/luci), you can  visit: [http://192.168.8.1/index](http://192.168.8.1/index) instead of [http://192.168.8.1](http://192.168.8.1).*

### 2) Admin Password Setting
There is no default password for the Admin Panel. You have to set your own password, which must be at least 5 characters long. Then, click `Submit` to proceed.

![Welcome](https://static.gl-inet.com/docs/en/3/setup/first-time_setup/password.jpg)

### 3) Admin Panel
After the initial setup, you will enter the web Admin Panel of the router. It allows you to check the status and manage the settings of the router.

![admin panel](https://static.gl-inet.com/docs/en/3/setup/brume-w/first-time_setup/main_ui.jpg)