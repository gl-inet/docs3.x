
# GL.iNet GoodCloud

## Introduction
GL.iNet GoodCloud cloud management service provide an easy and simple way to remotely access and manage routers.

#### Check live router status
- Live online offline status check
- Live RAM and Load Average check
- Email alarm about online offline status update

#### Set up routers remotely
- Set up routers (e.g. SSID and Key) remotely

#### Monitoring clients on routers remotely
- Check who is on your network
- Realtime traffic monitoring and block clients
- Email alarm about new client and block

#### Operate routers in batch
- Set up config templates and configure routers in batch
- Reboot or upgrade routers in batch

#### Manage routers in groups
- Divide devices in different groups
- Manage devices in one page

## Setup

GoodCloud only support firmware v3.021 and above right now, we recommend to upgrade to the latest testing version for better cloud experience.

This document is based on the latest testing firmware.

### Donwload firmware file

GL-X750(Spitz) testing firmware <a href="https://dl.gl-inet.com/firmware/x750/testing/" target="_blank">download</a>

GL-AR750S(Slate) testing firmware <a href="https://dl.gl-inet.com/firmware/ar750s/testing/" target="_blank">download</a>

GL-AR750(Creta) testing firmware <a href="https://dl.gl-inet.com/firmware/ar750/testing/" target="_blank">download</a>

GL-B1300(Convexa-B) testing firmware <a href="https://dl.gl-inet.com/firmware/b1300/testing/" target="_blank">download</a>

GL-AR150(White) testing firmware <a href="https://dl.gl-inet.com/firmware/ar150/testing/" target="_blank">download</a>

GL-AR300M(Shadow) testing firmware <a href="https://dl.gl-inet.com/firmware/ar300m/testing/" target="_blank">download</a>

GL-MT300N-V2(Mango) testing firmware <a href="https://dl.gl-inet.com/firmware/mt300n-v2/testing/" target="_blank">download</a>

GL-MT300A testing firmware <a href="https://dl.gl-inet.com/firmware/mt300a/testing/" target="_blank">download</a>

GL-MT300N testing firmware <a href="https://dl.gl-inet.com/firmware/mt300n/testing/" target="_blank">download</a>

For GL-USB150, it can use GoodCloud too, but it only can be binded to GoodCloud by "Auto discover" <a href="#24-add-device">Step 2.4</a>

GL-USB150 testing firmware <a href="https://dl.gl-inet.com/firmware/usb150/testing/" target="_blank">download</a>

### Local upgrade

Open a web browser (we recommend Chrome) and to access router Web Admin Panel (default url is <a href="http://192.168.8.1" target="_blank">http://192.168.8.1</a>).

At the left side, UPGRADE -> Local Upgrade, select the firmware file you download, you can turn off "Keep Settings" for more stable, click "Install" button. It takes several minutes to install.

## 1. Enable Cloud Manage on router Web Admin Panel

Open a web browser (we recommend Chrome) and to access router Web Admin Panel (default url is <a href="http://192.168.8.1" target="_blank">http://192.168.8.1</a>).

![enable-cloud-management](https://static.gl-inet.com/goodcloud/docs/enable-cloud-management.png)

Follow the steps above, to enable cloud management feature, choose the Data Server which is nearest your devices located. There are three Data Server, 'Global', 'America' and 'Europe'.  If your devices are neither in America nor in Europe, just select 'Global'. Global Data Server is at Japan.

## 2. Add device on GoodCloud web site

### 2.1) Create GoodCloud account

 Visit <a href="https://www.goodcloud.xyz" target="_blank">https://www.goodcloud.xyz</a> to access GoodCloud web site by Chrome or your favorite browser.

 Sign up an account, and sign in. If you don't find the verify email, look in spam or check email later.

If you have any difficulty with sign up, please send email to <a href="mailto:admin@goodcloud.xyz">admin@goodcloud.xyz</a> for help.

### 2.2) Select region

At the first time when you sign in, it will pop up a dialog to let you select the region, select the region that your device selected Data Server on the Web Admin Panel (<a href="#12-enable-cloud-mangement">Step 1.2</a>).

You can change the region on the top right corner at anytime.

![select region button](https://static.gl-inet.com/goodcloud/docs/select-region-button2.png)

### 2.3) Add a new group 

On the left side -> Groups List -> Add group.

Follow the steps below to add a new group.

![add group](https://static.gl-inet.com/goodcloud/docs/add-group.png)

Each device must belong to a group.

### 2.4) Add device

On the left side -> Devices List -> Add Device. There are three methods to bind device to GoodCloud, "Auto discover", "Manually add" and "Bulk import".

Follow the steps below to add your device.

![add device](https://static.gl-inet.com/goodcloud/docs/add-device.png)

If the device and browser are at the same <a href="https://en.wikipedia.org/wiki/Local_area_network" target="_blank">LAN</a>， it will be automatically discovered, and can be found when click "Device" list. DDNS or Device ID can be found on the back of your router.

    PS: Input "DDNS" / "Device ID" here just to verify that the router is really 
    original/valid. DDNS feature and the Cloud feature are separate things.

    PS: For most models, it is "DDNS" on the back, but for some new models, 
    it is "Device ID" on the back.

Click "Refresh" to force auto discover devices again.

![auto discover](https://static.gl-inet.com/goodcloud/docs/auto-discover.png)

If it can't discover automatically, select "Manually add". All information that need to input can be found on the back of the router.

    PS: Input "MAC", "SN" and "DDNS" / "Device ID" here just to verify that the router is really 
    original and valid. DDNS feature and the Cloud feature are separate things.

![manually add device](https://static.gl-inet.com/goodcloud/docs/manually-add-device.png)

For some new models, DDNS has been changed to Device ID on the back of router.

![manually add device](https://static.gl-inet.com/goodcloud/docs/manually-add-device-device-id.png)

"Bulk import" is for user who have a great number of devices to add. By "Bulk import" you can import many devices by a Microsoft excel file.

### 2.5) Binded info on router Web Admin Panel

After you seccessfully add router to GoodCloud, go back to router Web Admin Panel, 

APPLICATION -> Remote Access -> Cloud Management, 

press 'F5' to refresh this page, It will display the binded GoodCloud username, hover the username it will show the corresponding GoodCloud email account.

![goodcloud-binded](https://static.gl-inet.com/goodcloud/docs/goodcloud-binded.png)

### 2.6) Unbind router

![goodcloud-binded](https://static.gl-inet.com/goodcloud/docs/unbind.png)

If you want to unbind router, click Unbind button.
If you have any difficulty, please send email to <a href="mailto:admin@goodcloud.xyz">admin@goodcloud.xyz</a> for help.

## 3. Manage your devices

### 3.1) Check devices online offline status

Sign in Goodcloud, devices online offline status can be check at left side -> Device List, there is color circle at the first column of this table, green circle means this device is online. Red circle is offline. Gray circle is deactivated, which means this device has never connected to GoodCloud.

"Online time" is the latest time when device connected GoodCloud. "Offline time" is the latest time when device disconnected GoodCloud.

### 3.2) Set email alarm

You can set email alarm when a device is online, offline, and new client connected.

At left side -> Setting -> Alarm Setting, create alarm rules

![create alarm rules](https://static.gl-inet.com/goodcloud/docs/create-alarm-rules.png)

Then set the email you want to receive notification. To ensure you get email successful, please add admin@goodcloud.xyz to your email address book.

![alarm rules](https://static.gl-inet.com/goodcloud/docs/alarm-rules.png)

### 3.3) Manage router

At left side -> Device List, click the name of a online device, it will open a page to manage this device of WiFi, Clients and view router info, memory usage, up time, load average and log.

#### 3.3.1) Device info

![device info](https://static.gl-inet.com/goodcloud/docs/edit-device-device-info.png)

#### 3.3.2) Wifi

![device info](https://static.gl-inet.com/goodcloud/docs/edit-device-wifi.png)

#### 3.3.3) Router status

![device info](https://static.gl-inet.com/goodcloud/docs/edit-device-router-status.png)

#### 3.3.4) Client list

![device info](https://static.gl-inet.com/goodcloud/docs/edit-device-client-list.png)

#### 3.3.5) Timeline

Timeline tab display the activities of router, and messages uploaded by the router's associated IoT device.

![device timeline](https://static.gl-inet.com/goodcloud/docs/timeline.png)

## Site to Site

Site to Site only support firmware v3.026 and above.

### Introduction

Site to Site allows offices in multiple locations to establish secure connections with each other over internet. It extends the company's network, making computers resources from one location available to employees at other locations. 

<a href="https://static.gl-inet.com/www/images/solutions/s2s/s2s_main_5.png" target="_blank"><img alt="site to site diagram" src="https://static.gl-inet.com/www/images/solutions/s2s/s2s_main_5.png"></a>

Senerio 1: A company has dozens of branch offices that they wish to join in a single private network to share resources.

Senerio 2: A company has a close relationship with a partner company, the Site to Site allows the companies to work together in a secure, shared network environment while preventing access to their separate internets.

Senerio 3: A family has IP camera and when they are not at home, the Site to Site allows to remote access the IP camera.

### What conditions do I need to create Site to Site?

One of the loations has a public static(or dynamic) ip, and two or more GL-iNet devices with latest testing firmware. 

For free user, it can build one Site to Site network with 3 devices.

### Steps to build a Site to Site network.

1.	Upgrade your GL.iNet devices to latest testing firmware and binded to [Goodcloud.xyz](htttps://www.goodcloud.xyz). (<a href="#2-add-device-on-goodcloud-web-site">how</a>)

2.  Follow the steps below to create a Site to Site network.

![create a site to site network](https://static.gl-inet.com/goodcloud/docs/create-s2s-01.png)

Defaul port is 51830, if you want to use another port, find the Advanced option at the lower left corner.

After you had chosen the devices, click Continue.

![create a site to site network](https://static.gl-inet.com/goodcloud/docs/create-s2s-02.png)

Then, it will test each device if it can be set as the Main Node of Site to Site.

![testing eacg device](https://static.gl-inet.com/goodcloud/docs/testing-s2s-01.png)

If none of the devices can be used as the Main Node, make sure that:

- One of routers has a public IP, either static public IP or dynamic public IP.
- Port is open, default is 51830.
- If your router is behind NAT, you may need to set up port forwading.

You can also change port and try again.

![testing each device](https://static.gl-inet.com/goodcloud/docs/testing-s2s-02.png)

If there are more than one device can be set as the Main Node, you need to choose one to continue.

![testing each device](https://static.gl-inet.com/goodcloud/docs/testing-s2s-03.png)

If there is only one device can be set as the Main Node, it will go to the Site to Site detail page directly.

The network is stopped by default, then you need to click Start button.

![detail s2s](https://static.gl-inet.com/goodcloud/docs/detail-s2s-00.png)

Wait a few minutes, the node's status will turn to "Connected to Site to Site".

![detail s2s](https://static.gl-inet.com/goodcloud/docs/detail-s2s-01.png)

### Testing the Site to Site connection

Now the Site to Site network is created and started, let's test the connection.

Use your PC or Phone to connect to one of the Node of this Site to Site, and use browser to access another Node's LAN ip, if you see the login page, the connection between these two nodes is worked.

For example, my PC connect to Node 1 device, and then I use browser to access Main Node's LAN IP (192.168.48.1), if I see the login page, it means the connection between Node1 and Main Node is worked.

### Route and other options

You can change each device's LAN IP and routes.

![LAN IP and routes](https://static.gl-inet.com/goodcloud/docs/lanip-routes-s2s.png)

E.g. There is a Server A(172.30.97.100) in Node 1's subnet, if you want other Site to Site nodes  only can access Node 1's Service A, you can set it like below:

![LAN IP and routes](https://static.gl-inet.com/goodcloud/docs/lanip-routes-s2s-02.png)

You can add node's parent routes too.

Each sub Node build an encrypted tunnel netwrok to Main Node, if you want to change the IP of tunnel subnet. Click 'IP Address Range'.

![IP Address Range](https://static.gl-inet.com/goodcloud/docs/ip-address-range-s2s.png)

## GoodCloud and VPN

If you enable GoodCloud feature on router and also use it as VPN client, there is something you need to know.

At default, GoodCloud process use VPN if you enable VPN client(eg. WireGuard, OpenVPN, Shadowsocks), this bring a problem that if you VPN is configured incorrectly, GoodCloud will not work properly. In order to ensure the normal use of GoodCloud, we suggest you to follow the steps below to enable VPN Policies and disable "Use VPN for all process on the router". After you've done these steps, GoodCloud precess will not use VPN.

![disable use vpn for all process on the router](https://static.gl-inet.com/goodcloud/docs/disable-use-vpn-for-all-process-on-the-router.png)

VPN Policies feature need firmware version is equal or greater than v3.021, please jump to <a href="#donwload-firmware-file">this</a> and upgrade to latest firmware.

## Disable

To stop GoodCloud service, turn it off on router Web Admin Panel. Please follow the steps below. No action needed on the GoodCloud website.

![disable cloud](https://static.gl-inet.com/goodcloud/docs/disable-cloud.png)

![after disable cloud](https://static.gl-inet.com/goodcloud/docs/after-disable-cloud.png)

After disable Cloud, the interface is like above.
