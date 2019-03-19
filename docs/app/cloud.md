# Cloud management

## Introduction
GL.iNet GoodCloud cloud management service provide an easy and simple way to remotely access and manage routers.

#### Check live router status
- Live online office status check
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

GoodCloud only support firmware v3.010 and above right now, we recommend to upgrade to the latest testing version for better cloud experience.

This document is based on the latest testing firmware.

### Donwload firmware file

GL-X750(Spitz) testing firmware <a href="https://dl.gl-inet.com/firmware/x750/testing/" target="_blank">GL-X750 testing firmware download</a>

GL-AR750S(Slate) testing firmware <a href="https://dl.gl-inet.com/firmware/ar750s/testing/" target="_blank">GL-AR750S testing firmware download</a>

GL-AR750 testing firmware <a href="https://dl.gl-inet.com/firmware/ar750/testing/" target="_blank">GL-AR750 testing firmware download</a>

GL-B1300 testing firmware <a href="https://dl.gl-inet.com/firmware/b1300/testing/" target="_blank">GL-B1300 testing firmware download</a>

GL-AR150 testing firmware <a href="https://dl.gl-inet.com/firmware/ar150/testing/" target="_blank"> testing firmware download</a>

GL-AR300M(Shadow) testing firmware <a href="https://dl.gl-inet.com/firmware/ar300m/testing/" target="_blank">GL-AR300M testing firmware download</a>

GL-MT300N-V2(Mango) testing firmware <a href="https://dl.gl-inet.com/firmware/mt300n-v2/testing/" target="_blank">GL-MT300N-V2 testing firmware download</a>

GL-MT300A testing firmware <a href="https://dl.gl-inet.com/firmware/mt300a/testing/" target="_blank">GL-MT300A testing firmware download</a>

GL-MT300N testing firmware <a href="https://dl.gl-inet.com/firmware/mt300n/testing/" target="_blank">GL-MT300N testing firmware download</a>

### Local upgrade

Open a web browser (we recommend Chrome) and to access router Web Admin Panel(default url is <a href="http://192.168.8.1" target="_blank">http://192.168.8.1</a>).

At the left side, UPGRADE -> Local Upgrade, select the firmware file you download, you can turn off "Keep Settings" for more stable, click "Install" button. It takes several minutes to install.

## 1. Enable Cloud Manage on router Web Admin Panel

### 1.1) Install gl-cloud-ui plug

Open a web browser (we recommend Chrome) and to access router Web Admin Panel(default url is <a href="http://192.168.8.1" target="_blank">http://192.168.8.1</a>).

![install-gl-cloud-ui](https://static.gl-inet.com/goodcloud/docs/install-gl-cloud-ui.png)

At the left sidebar, APPLICATIONS -> Plug-ins, click "Update" button to updage Plug-ins source, then input "gl-cloud-ui" and click "Install" button. After installation, a new item "Remote Access" will appear inside APPLICATIONS.

### 1.2) Enable Cloud Mangement

![enable-cloud-management](https://static.gl-inet.com/goodcloud/docs/enable-cloud-management.png)

Fellow the steps above, to enable cloud management feature, choose the Data Server which is nearest your devices located. There are three Data Server, 'Global', 'America' and 'Europe'.  If your devices are neither in America nor in Europe, just select 'Global'. Global Data Server is at Japan.

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

Fellow the steps below to add a new group.

![add group](https://static.gl-inet.com/goodcloud/docs/add-group.png)

Each device must belong to a group.

### 2.4) Add device

On the left side -> Devices List -> Add Device. There are three methods to bind device to GoodCloud, "Auto discover", "Manually add" and "Bulk import".

Fellow the steps below to add your device.

![add device](https://static.gl-inet.com/goodcloud/docs/add-device.png)

If the device and browser are at the same <a href="https://en.wikipedia.org/wiki/Local_area_network" target="_blank">LAN</a>， it will be automatically discovered, and can be found when click "Device" list. DDNS or Device ID can be found on the back of your router.

    PS: Input "DDNS" / "Device ID" here just to verify that the router is really original/valid. 
    DDNS feature and the Cloud feature are separate things.

    PS: For most models, it is "DDNS" on the back, but for some new models, it is "Device ID" on the back.

Click "Refresh" to force auto discover devices again.

![auto discover](https://static.gl-inet.com/goodcloud/docs/auto-discover.png)

If it can't discover automatically, select "Manually add". All information that need to input can be found on the back of the router.

    PS: Input "MAC", "SN" and "DDNS" / "Device ID" here just to verify that the router is really original and valid. 
    DDNS feature and the Cloud feature are separate things.

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

#### 3.3.6) Log

Log at the top right corner of the page.

![device info](https://static.gl-inet.com/goodcloud/docs/edit-device-log.png)

## Unintall

If you don't want to use GoodCloud, just disable it folow the steps below on router Web Admin Panel. It don't have to do anything on GoodCloud web site.

![disable cloud](https://static.gl-inet.com/goodcloud/docs/disable-cloud.png)

![after disable cloud](https://static.gl-inet.com/goodcloud/docs/after-disable-cloud.png)

After disable Cloud, the interface is like above.

If you want uninstall Cloud feature to save space, you need to uninstall `gl-cloud-ui`, `gl-ddns`, and `gl-mqtt` plug-ins.

![uninstall gl-cloud-ui](https://static.gl-inet.com/docs/en/3/app/ddns/uninstall-gl-cloud-ui.png)

Follow the steps above, to uninstall `gl-cloud-ui` plug-in.

![uninstall ddns](https://static.gl-inet.com/docs/en/3/app/ddns/uninstall-gl-ddns.png)

Follow the steps above, to uninstall `gl-ddns` plug-in.

![uninstall mqtt](https://static.gl-inet.com/docs/en/3/app/ddns/uninstall-gl-mqtt.png)

Follow the steps above, to uninstall `gl-mqtt` plug-in.