# Cloud management

## Introduction
GL.iNet GoodCloud cloud management service provide a easy and simple way to remotely access and manage routers.

### Check live router status
- Live online office status check
- Live RAM and Load Average check

### Set up routers remotely
- Set up routers (e.g. SSID and Key) remotely

### Monitoring clients on routers remotely
- Check who is on your network
- Realtime traffic monitoring and block clients

### Operate routers in batch
- Set up config templates and configure routers in batch
- Reboot or upgrade routers in batch

### Manage routers in groups
- Divide devices in different groups
- Manage devices in one page

## Add device to GoodCloud

GoodCloud only support GL-AR750S(Slate) with testing firmware [v3.010](https://dl.gl-inet.com/firmware/ar750s/) (will be release soon) and above right now, other devices will coming soon.

### 1. Enable Cloud Manage on router Web Admin Panel

#### 1) Access router Web Admin Panel

Open a web browser (we recommend Chrome) and visit http://192.168.8.1 to access router Web Admin Panel.

#### 2) Install gl-cloud-ui plug

![install-gl-cloud-ui](https://static.gl-inet.com/docs/en/3/app/ddns/install-gl-cloud-ui.png)

At the left sidebar, APPLICATIONS -> Plug-ins, click "Update" button to updage Plug-ins source, then input "gl-cloud-ui" and click "Install" button. After installation, press "F5" to refresh Admin Panel, a new item "Remote Access" will appear inside APPLICATIONS.

#### 3) Enable Cloud Mangement

![enable-cloud-management](https://static.gl-inet.com/goodcloud/docs/enable-cloud-management.png)

Fellow the steps above, to enable cloud management, select the Data Server which near your devices, if you can't find the area where you located, just select 'Global'.

### 2. Add device on GoodCloud web site

#### 1) Create GoodCloud account

 Visite <a href="https://www.goodcloud.xyz" target="_blank">https://www.goodcloud.xyz</a> to access GoodCloud web site by Chrome or your favorite browser.

 Sign up an account, and sign in.

#### 2) Select region

On the top right corner, select the region where your device select on the Web Admin Panel.

![select region button](https://static.gl-inet.com/goodcloud/docs/select-region-button.png)

#### 3) Add a new group 

On the left side -> Groups List -> Add group.

Fellow the steps below to add a new group.

![add group](https://static.gl-inet.com/goodcloud/docs/add-group.png)

#### 4) Add device

On the left side -> Devices List -> Add Device. There are three method to bind device to GoodCloud, "Auto discover", "Manually add", "Bulk import".

Fellow the steps below to add your device.

![add device](https://static.gl-inet.com/goodcloud/docs/add-device.png)

If the device and browser are at same LAN， it will be automatically discovered, and can be found on "Device" list. DDNS is on the back of the router.

![auto discover](https://static.gl-inet.com/goodcloud/docs/auto-discover.png)

If can't discover automatically, select "Manually add". All information can be found on the back of the router.

![manually add device](https://static.gl-inet.com/goodcloud/docs/manually-add-device.png)

"Bulk import" feature is for if you have many devices to add. 

After you seccessfully add router to GoodCloud, go back to router Web Admin Panel, APPLICATION -> Remote Access -> Cloud Management, press 'F5' to refresh this page, It will display the binded GoodCloud username, hover the username will show the GoodCloud account email.

![goodcloud-binded](https://static.gl-inet.com/goodcloud/docs/goodcloud-binded.png)

If the binded GoodCloud username isn't yours, just send email to <a href="mailto:admin@goodcloud.xyz">admin@goodcloud.xyz</a> for help.