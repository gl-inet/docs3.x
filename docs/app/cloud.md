# Cloud management

## Introduction
GL.iNet GoodCloud cloud management service provide a easy and simple way to remotely access and manage routers.

#### Check live router status
- Live online office status check
- Live RAM and Load Average check

#### Set up routers remotely
- Set up routers (e.g. SSID and Key) remotely

#### Monitoring clients on routers remotely
- Check who is on your network
- Realtime traffic monitoring and block clients

#### Operate routers in batch
- Set up config templates and configure routers in batch
- Reboot or upgrade routers in batch

#### Manage routers in groups
- Divide devices in different groups
- Manage devices in one page

## Setup

GoodCloud only support testing firmware v3.010 and above right now. 

### Donwload firmware file

GL-AR750 testing firmware <a href="https://dl.gl-inet.com/firmware/ar750/testing/" target="_blank">download</a>

Other devices will coming soon.

### Local upgrade

Open a web browser (we recommend Chrome) and to access router Web Admin Panel(default url is <a href="http://192.168.8.1" target="_blank">http://192.168.8.1</a>).

At the left side, UPGRADE -> Local Upgrade, select the firmware file you download, you can turn off "Keep Settings" for more stable, click "Install" button. It takes several minutes to install.

## 1. Enable Cloud Manage on router Web Admin Panel

### 1) Install gl-cloud-ui plug

Open a web browser (we recommend Chrome) and to access router Web Admin Panel(default url is <a href="http://192.168.8.1" target="_blank">http://192.168.8.1</a>).

![install-gl-cloud-ui](https://static.gl-inet.com/goodcloud/docs/install-gl-cloud-ui.png)

At the left sidebar, APPLICATIONS -> Plug-ins, click "Update" button to updage Plug-ins source, then input "gl-cloud-ui" and click "Install" button. After installation, a new item "Remote Access" will appear inside APPLICATIONS.

### 2) Enable Cloud Mangement

![enable-cloud-management](https://static.gl-inet.com/goodcloud/docs/enable-cloud-management.png)

Fellow the steps above, to enable cloud management, select the Data Server which near your devices, if you can't find the area where you located, just select 'Global'.

## 2. Add device on GoodCloud web site

### 1) Create GoodCloud account

 Visite <a href="https://www.goodcloud.xyz" target="_blank">https://www.goodcloud.xyz</a> to access GoodCloud web site by Chrome or your favorite browser.

 Sign up an account, and sign in.

### 2) Select region

On the top right corner, select the region where your device select on the Web Admin Panel.

![select region button](https://static.gl-inet.com/goodcloud/docs/select-region-button2.png)

### 3) Add a new group 

On the left side -> Groups List -> Add group.

Fellow the steps below to add a new group.

![add group](https://static.gl-inet.com/goodcloud/docs/add-group.png)

### 4) Add device

On the left side -> Devices List -> Add Device. There are three method to bind device to GoodCloud, "Auto discover", "Manually add", "Bulk import".

Fellow the steps below to add your device.

![add device](https://static.gl-inet.com/goodcloud/docs/add-device.png)

If the device and browser are at same LAN， it will be automatically discovered, and can be found on "Device" list. DDNS can be foound on the back of the router.

Click "Refresh" to force auto discover devices again.

![auto discover](https://static.gl-inet.com/goodcloud/docs/auto-discover.png)

If can't discover automatically, select "Manually add". All information can be found on the back of the router.

![manually add device](https://static.gl-inet.com/goodcloud/docs/manually-add-device.png)

"Bulk import" feature is for if you have many devices to add. 

### 5) Binded info on router Web Admin Panel

After you seccessfully add router to GoodCloud, go back to router Web Admin Panel, APPLICATION -> Remote Access -> Cloud Management, press 'F5' to refresh this page, It will display the binded GoodCloud username, hover the username will show the GoodCloud account email.

![goodcloud-binded](https://static.gl-inet.com/goodcloud/docs/goodcloud-binded.png)

If the binded GoodCloud username isn't yours, just send email to <a href="mailto:admin@goodcloud.xyz">admin@goodcloud.xyz</a> for help.

## Uninstall

If you don't want Cloud, just disable it.

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