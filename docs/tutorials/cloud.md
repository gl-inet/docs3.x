# GL.iNet GoodCloud

## Contents

- [Introduction](#introduction)
- [Setup](#setup)
    - [Enable Cloud Management on web Admin Panel](#enable-cloud-management-on-web-admin-panel)
    - [Sign up GoodCloud account](#sign-up-goodcloud-account)
    - [Select server region](#select-server-region)
    - [Add a new group](#add-a-new-group)
    - [Add device](#add-device)
        - [Auto discover](#auto-discover)
        - [Manually add](#manually-add)
        - [Bulk import](#bulk-import)
    - [Binded info on router web Admin Panel](#binded-info-on-router-web-admin-panel)
    - [Unbind router](#unbind-router)
- [Manage your devices](#manage-your-devices)
    - [Devices info and status](#devices-info-and-status)
    - [LTE Signal](#lte-signal)
    - [Device detail info](#device-detail-info)
    - [Remote access web Admin Panel](#remote-access-web-admin-panel)
    - [Remote access router's terminal](#remote-access-routers-terminal)
    - [Set email alarm](#set-email-alarm)
- [Site to Site](#site-to-site)
    - [Introduction](#introduction_1)
    - [Conditions](#conditions)
    - [Steps to build a Site to Site network](#steps-to-build-a-site-to-site-network)
    - [Testing the Site to Site connection](#testing-the-site-to-site-connection)
    - [Route and other options](#route-and-other-options)
- [Batch Setting](#batch-setting)
    - [Batch Setting of Single Device](#batch-setting-of-single-device)
    - [Batch Setting of Mutiple Devices](#batch-setting-of-mutiple-devices)
    - [Other Batch Operations](#other-batch-operations)
- [Template Management](#template-management)
    - [Add a Template](#add-a-template)
    - [Upgrade](#upgrade)
    - [Apply a template to a router](#apply-a-template-to-a-router)
    - [Apply a template to multiple routers](#apply-a-template-to-multiple-routers)
- [Task List](#task-list)
- [BLE MQTT Bridge](#ble-mqtt-bridge)
- [GoodCloud and VPN](#goodcloud-and-vpn)
- [Turn off cloud](#turn-off-cloud)

## Introduction

GL.iNet GoodCloud cloud management service provide an easy and simple way to remotely access and manage routers. There is a video introduction below.

Introducing GoodCloud, Your Remote Device Management Solution.

<iframe width="560" height="315" src="https://www.youtube.com/embed/JkV2PAy-_Og" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Easy Guide to Setting Up your GoodCloud Wi-Fi Management System for SMEs.

<iframe width="560" height="315" src="https://www.youtube.com/embed/7U1CwpKOKDM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Features:

* Check live router status
    - Live online offline status check
    - Live RAM and Load Average check
    - LTE Signal
    - Email alarm about online offline status update

* Set up routers remotely
    - Set up routers (e.g. SSID and Key) remotely
    - Remote SSH
    - Remote access web Admin Panel

* Monitoring clients on routers remotely
    - Check who is on your network
    - Realtime traffic monitoring and block clients
    - Email alarm about new client and block

* Operate routers in batch
    - Set up config templates and configure routers in batch
    - Reboot or upgrade routers in batch

* Manage routers in groups
    - Divide devices in different groups
    - Manage devices in one page

* Site to Site
    - Virtual Office: extend your office network to other offices
    - Business Travel: remote access office's OA, CRM, MySQL systems
    - Smart Home: remote access IP camera, NAS and other devices at home

## Setup

GoodCloud requires firmware version 3.021 and above.

There is a video tutorial below about how to enable cloud and bind it to GoodCloud.

<iframe width="560" height="315" src="https://www.youtube.com/embed/mvJQZphSO1A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

For GL-USB150, it can use GoodCloud too, but it only can be binded to GoodCloud by [Auto discover](#add-device).

### Enable Cloud Management on web Admin Panel

On the left side of web Admin Panel -> APPLICATIONS -> Remote Access -> Cloud Management.

![enable cloud management](https://static.gl-inet.com/goodcloud/docs/enable-cloud-management.png){class="glboxshadow"}

Follow the steps above, to enable Cloud Management, choose the Data Server which is nearest your devices located. There are three Data Server, `Asia Pacific`, `America` and `Europe`.  If your devices are neither in America nor in Europe, just select `Asia Pacific`. `Asia Pacific` Data Server is at Japan.

`Remote Web` is for remote access router's web Admin Panel via GoodCloud. Check out [here](remote-access-web-admin-panel).

`Remote SSH` is for remote access router's terminal via GoodCloud. Check out [here](remote-access-routers-terminal).

### Sign up GoodCloud account

 Visit [https://www.goodcloud.xyz](https://www.goodcloud.xyz){target="_blank"}, sign up an account, then sign in. If you don't find the verify email, look in spam or check email later. If you have any difficulty with sign up, please send email to [support@gl-inet.com](mailto:support@gl-inet.com) for help.

### Select server region

At the first time when you sign in, it will pop up a dialog to let you select the region, please select the region same as your device selected Data Server on the web Admin Panel ([Step 2 of enable cloud](#enable-cloud-management-on-web-admin-panel)).

You can change the region on the top right corner at anytime.

![select region button](https://static.gl-inet.com/goodcloud/docs/select-region-button2.png){class="glboxshadow"}

### Add a new group 

On the left side -> Groups List -> Add group.

Follow the steps below to add a new group.

![add group](https://static.gl-inet.com/goodcloud/docs/add-group.png){class="glboxshadow"}

Set the group name, company, description and location.

Each device must belong to a group.

### Add device

On the left side -> Devices List -> Add Device. There are three methods to bind device to GoodCloud, `Auto discover`, `Manually add` and `Bulk import`.

#### Auto discover

Follow the steps below to add your device.

![add device](https://static.gl-inet.com/goodcloud/docs/add-device.png){class="glboxshadow"}

If the router and PC(which opened goodcloud.xyz page) are at the same public IP，it will be automatically discovered, and can be found when click `Device` list(step 4). 

DDNS or Device ID can be found on the back of your router, it is 7 characters.

    Note: Input "DDNS" / "Device ID" here just to verify that the router is really 
    original/valid. DDNS feature and the Cloud feature are separate things.

    For most models, it is "DDNS" on the back, but for some models, 
    it is "Device ID" on the back.

    If you haven't added a group before, it will automatically create a default 
    group.

Click `Refresh` to force auto discover devices again.

![auto discover](https://static.gl-inet.com/goodcloud/docs/auto-discover.png){class="glboxshadow"}

#### Manually add

If it can't discover automatically, try `Manually add`. All information that need to input can be found on the back of the router.

    Note: Input "MAC", "SN" and "DDNS" / "Device ID" here just to verify that the 
    router is really original and valid. DDNS feature and the Cloud feature are 
    separate things.

For new models, it has **Device ID** on the back of router.

![manually add device](https://static.gl-inet.com/goodcloud/docs/manually-add-device-device-id.png){class="glboxshadow"}

For old models, it has **DDNS** on the back of the router. Only the first 7 characters of **DDNS** are needed.

![manually add device](https://static.gl-inet.com/goodcloud/docs/manually-add-device.png){class="glboxshadow"}

#### Bulk import

`Bulk import` is for user who have a great number of devices to add. By `Bulk import` you can import many devices by a Microsoft excel file.

### Binded info on router web Admin Panel

After you seccessfully add router to GoodCloud, go back to router web Admin Panel, on the left side, APPLICATION -> Remote Access -> Cloud Management, 

press F5 to refresh this page, It will display the binded GoodCloud username, hover the username it will show the corresponding GoodCloud email account.

![goodcloud-binded](https://static.gl-inet.com/goodcloud/docs/goodcloud-binded.png){class="glboxshadow"}

Click `View Logs` will show API call logs by GoodCloud.

### Unbind router

![goodcloud-binded](https://static.gl-inet.com/goodcloud/docs/unbind.png){class="glboxshadow"}

If you want to unbind router, click `Unbind` button.

If you have encountered any difficulties, please send email to [support@gl-inet.com](mailto:support@gl-inet.com) for help.

## Manage your devices

### Devices info and status

Sign in [Goodcloud](https://www.goodcloud.xyz), check at left side -> Device List

![device list table](https://static.gl-inet.com/goodcloud/docs/device_list_table.png){class="glboxshadow"}

there is icon at the first column of this table, 

![online icon](https://static.gl-inet.com/goodcloud/docs/online_icon.png) means this device is online.

![offline icon](https://static.gl-inet.com/goodcloud/docs/offline_icon.png) means this device is offline.

![deactovate icon](https://static.gl-inet.com/goodcloud/docs/deactivate_icon.png) means this device is deactivated, it has never connected to GoodCloud before.

![column selector](https://static.gl-inet.com/goodcloud/docs/column_selector.png){class="glboxshadow"}

Select the column you want to display.

`Online time` is the latest time when device connected GoodCloud.

`Offline time` is the latest time when device disconnected GoodCloud.

`Update time` is the latest time when device connected or disconnected GoodCloud.

`IP`, if your router run VPN client, this IP will be your VPN IP by default. <a href="#goodcloud-and-vpn">Learn More</a>

### LTE Signal

Only available for 4G devices, e.g. GL-MiFi, GL-X750

Toggle the column on Device List page.

![device LTE signal](https://static.gl-inet.com/goodcloud/docs/lte_signal.png){class="glboxshadow"}

It will show Signal strength, Type, and relavant parameters.

![device LTE signal](https://static.gl-inet.com/goodcloud/docs/lte_signal_2.png){class="glboxshadow"}

### Device detail info

At left side -> Device List, click the name of an online device, it will open a page to manage this device of WiFi, Clients and view router info, memory usage, up time, load average and log.

![to device detail page](https://static.gl-inet.com/goodcloud/docs/to_device_detail.png){class="glboxshadow"}

#### Device info

![device info](https://static.gl-inet.com/goodcloud/docs/edit-device-device-info.png){class="glboxshadow"}

#### WiFi

![device info](https://static.gl-inet.com/goodcloud/docs/edit-device-wifi.png){class="glboxshadow"}

Modify all WiFi settings.

#### Router status

![device info](https://static.gl-inet.com/goodcloud/docs/edit-device-router-status.png){class="glboxshadow"}

#### Client list

![device info](https://static.gl-inet.com/goodcloud/docs/edit-device-client-list.png){class="glboxshadow"}

#### Timeline

Timeline tab display the activities of router, and messages uploaded by the router's associated IoT device.

![device timeline](https://static.gl-inet.com/goodcloud/docs/timeline.png){class="glboxshadow"}

#### Tools

There are two tools, `Ping` and `Traceroute`.

![tools ping traceroute](https://static.gl-inet.com/goodcloud/docs/tools_ping_traceroute.png){class="glboxshadow"}

### Remote access web Admin Panel

![device timeline](https://static.gl-inet.com/goodcloud/docs/remote_access_web_admin_panel.png){class="glboxshadow"}

### Remote access router's terminal

![device timeline](https://static.gl-inet.com/goodcloud/docs/remote_access_terminal.png){class="glboxshadow"}

### Set email alarm

You can set email alarm when a device is online, offline, and new client connected.

At left side -> Setting -> Alarm Setting, create alarm rules

![create alarm rules](https://static.gl-inet.com/goodcloud/docs/create-alarm-rules.png){class="glboxshadow"}

Then set the email you want to receive notification. To ensure you get email successful, please add admin@goodcloud.xyz to your email address book.

![alarm rules](https://static.gl-inet.com/goodcloud/docs/alarm-rules.png){class="glboxshadow"}

## Site to Site

### Introduction

Site to Site allows offices in multiple locations to establish secure connections with each other over internet. It extends the company's network, making computers resources from one location available to employees at other locations. 

<a href="https://static.gl-inet.com/www/images/solutions/s2s/s2s_main_5.png" target="_blank"><img alt="site to site diagram" src="https://static.gl-inet.com/www/images/solutions/s2s/s2s_main_5.png"></a>

Senerio 1: A company has dozens of branch offices that they wish to join in a single private network to share resources.

Senerio 2: A company has a close relationship with a partner company, the Site to Site allows the companies to work together in a secure, shared network environment.

Senerio 3: A family has IP camera and when they are not at home, the Site to Site allows to remote access the IP camera.

### Conditions

It requires at least two routers, each in a different location, one of which has a public IP address. Please [check if your ISP assigns you a public IP address](../how_to_check_if_isp_assigns_you_a_public_ip_address). It requires firmware version 3.026 and above.

### Steps to build a Site to Site network

1. Bind your routers to GoodCloud. (<a href="#add-device">how?</a>)

2. Follow the steps below to create a Site to Site network.

    ![create a site to site network](https://static.gl-inet.com/goodcloud/docs/create-s2s-01.png){class="glboxshadow"}

    Default port is 51830, if you want to use another port, find the `Advanced` option at the lower left corner.

    Due to the device's performance, each Site to Site network can have up to 10 devices.

    After you had chosen the devices, click Continue.

    ![create a site to site network](https://static.gl-inet.com/goodcloud/docs/create-s2s-02.png){class="glboxshadow"}

    Then, it will test each device if it can be set as the Main Node of Site to Site.

    We suggest that the router with strong performance and best network speed to be the Main Node.

    ![testing each device](https://static.gl-inet.com/goodcloud/docs/testing-s2s-01.png){class="glboxshadow"}

    If none of the devices can be used as the Main Node, make sure that:

    - One of routers has a public IP, either static public IP or dynamic public IP.
    - Port is open, default is 51830.
    - If the router is behind NAT, you may need to set up port forwading.

    You can also change port and try again.

    ![testing each device](https://static.gl-inet.com/goodcloud/docs/testing-s2s-02.png){class="glboxshadow"}

    If there are more than one device can be set as the Main Node, you need to choose one to continue.

    ![testing each device](https://static.gl-inet.com/goodcloud/docs/testing-s2s-03.png){class="glboxshadow"}

    If there is only one device can be set as the Main Node, it will go to the Site to Site detail page directly.

    The network is stopped by default, check the LAN IP, if it is OK then you need to click Start button, otherwise click Setting to change LAN IP.

    ![detail s2s](https://static.gl-inet.com/goodcloud/docs/detail-s2s-00.png){class="glboxshadow"}

    Wait a few minutes, the node's connect status will display as lines. Solid line means connected, dashed line means disconnected.

    ![detail s2s](https://static.gl-inet.com/goodcloud/docs/detail-s2s-01.png){class="glboxshadow"}

### Testing the Site to Site connection

Now the Site to Site network is created and started, let's test the connection.

Use your PC or Phone to connect to one of the Node of this Site to Site, and use browser to access another Node's LAN ip, if you see the login page, the connection between these two nodes is worked.

For example, my PC connect to Node 1 device, and then I use browser to access Main Node's LAN IP (192.168.48.1), if I see the login page, it means the connection between Node1 and Main Node is worked.

### Route and other options

You can change each device's LAN IP and routes.

![LAN IP and routes](https://static.gl-inet.com/goodcloud/docs/lanip-routes-s2s.png){class="glboxshadow"}

By default, each node can access other's LAN, based on security, we recommend only open the corresponding service IPs.

E.g. There is a Server A(172.30.97.100) in Node 1's subnet, if you want other Site to Site nodes  only can access Node 1's Service A, you can set it like below:

![LAN IP and routes](https://static.gl-inet.com/goodcloud/docs/lanip-routes-s2s-02.png){class="glboxshadow"}

You can add node's parent routes too.

Each sub Node build an encrypted tunnel netwrok to Main Node, if you want to change the IP of tunnel subnet. Click 'IP Address Range'.

![Tunnel IP Address Range](https://static.gl-inet.com/goodcloud/docs/tunnel-ip-address-range-s2s.png){class="glboxshadow"}

## Batch Setting

You can use this feature to configure multiple parameters for a single device, or you can configure multiple parameters for multiple devices.

    Note: This feature is only available to business users.

### Batch Setting of Single Device

To configure single device, as show below.

  <a href="https://static.gl-inet.com/goodcloud/docs/modify_configuration.png" target="_blank"><img alt="Modify Configuration" src="https://static.gl-inet.com/goodcloud/docs/modify_configuration.png"></a>

The left side of image below is correct. If your interface is like the right side of image below, please upgrade to latest testing firmware.

  <a href="https://static.gl-inet.com/goodcloud/docs/single_configuration.png" target="_blank"><img alt="Single Configuration" src="https://static.gl-inet.com/goodcloud/docs/single_configuration.png"></a>

Check the configuration that needs to be modified and input value.
  
![Add Configuration](https://static.gl-inet.com/goodcloud/docs/add_configuration.png){class="glboxshadow"}

The checked configuration is required, and only the configuration that conforms to the rule can be filled out. After the configuration is delivered, it does not take effect immediately. The configuration takes effect and the device needs to be restarted. You can check the Restart now option in the lower right corner of the above figure. After the configuration is completed, the device will restart immediately.

Preview the configuration and confirm the delivery.

![Preview Configuration](https://static.gl-inet.com/goodcloud/docs/preview_configuration.png){class="glboxshadow"}

Unchecked **Restart now** option will prompt.

<a href="https://static.gl-inet.com/goodcloud/docs/config_not_take_effect.png" target="_blank"><img alt="config not take effect" src="https://static.gl-inet.com/goodcloud/docs/config_not_take_effect.png"></a>

### Batch Setting of Mutiple Devices

Select the devices you want to configure.

![mutiple configuration](https://static.gl-inet.com/goodcloud/docs/mutiple_configuration.png){class="glboxshadow" width="800"}

Other operations are the same as when operating a single device.

### Other Batch Operations

Other Batch Operations: Move to other group, upgrade, restart, delete.

![Task](https://static.gl-inet.com/goodcloud/docs/task.png){class="glboxshadow"}

## Template Management

Save frequently used configurations as templates and quickly apply them when you modify configurations in batches.

    Note: This feature is only available to business users.

### Add a Template

Check the configuration that needs to be modified and input value. Most of the options are the same as those on web Admin Panel.

![Add Template](https://static.gl-inet.com/goodcloud/docs/add_template.png){class="glboxshadow"}

#### Upgrade

**Upgrade Path** is for upgrading custom firmware. Put the firmware and a text file on a web server, then put the url path on the **Upgrade Path**. For example, [https://fw.gl-inet.com/firmware/ar750/v1/](https://fw.gl-inet.com/firmware/ar750/v1/) is a Upgrade Path, it has a **list-sha256.txt** file [https://fw.gl-inet.com/firmware/ar750/v1/list-sha256.txt](https://fw.gl-inet.com/firmware/ar750/v1/list-sha256.txt) and a corresponding firmware file [https://fw.gl-inet.com/firmware/ar750/v1/openwrt-ar750-3.203-0701.bin](https://fw.gl-inet.com/firmware/ar750/v1/openwrt-ar750-3.203-0701.bin).

    Note: GL-AX1800, GL-S1300, GL-B1300, GL-AP1300 only support http path for now.

![Template info](https://static.gl-inet.com/goodcloud/docs/template_upgrade_path.png){class="glboxshadow"}

The content of the text file is like [this](https://fw.gl-inet.com/firmware/ar750/v1/list-sha256.txt), its name should be **list-sha256.txt**. It has 4 columns, the first column is firmware version, the second column is the name of firmware file, the thrid column is the sha256 of firmware file, the forth column is the size of firmware file.

![gl-ar750 sha256](https://static.gl-inet.com/goodcloud/docs/ar750-sha256.png){class="glboxshadow"}

Give the template a name and description.

![Template info](https://static.gl-inet.com/goodcloud/docs/template_info.png){class="glboxshadow"}

### Apply a template to a router

If you have created a template, then want to apply this template to a router. On the **Device List** page, find the router that you want to apply the template, make sure it is online, on the Actions column, click the cog icon, click **Modify Configuration** item. It will pop up a dialog **Configure batch modification**.

On the top right corner of the dialog, you can choose a template that has already created. Then click **Apply** button on the bottom right corner.

It will pop up another dialog to review the configuration of the template, scroll down to the bottom to click the **Confirm** button, it will load the configuration of template overwrite to this time modification.

Click **Apply** button, please note that the router will restart to take effect after click the **Apply** button.

### Apply a template to multiple routers

If you have created a template, then want to apply this template to multiple routers. This procedure is similar to that applied to a single router. On the **Device List** page, multiple select routers, then click **Bulk Action**, click **Modify Configuration** item. It will pop up a dialog **Configure batch modification**.

On the top right corner of the dialog, you can choose a template that has already created. Then click **Apply** button on the bottom right corner.

It will pop up another dialog to review the configuration of the template, scroll down to the bottom to click the **Confirm** button, it will load the configuration of template overwrite to this time modification.

Click **Apply** button, please note that the router will restart to take effect after click the **Apply** button.

## Task List

At task list page, it shows the execution result of the configuration template.

    Note: This feature is only available to business users.

![Task list](https://static.gl-inet.com/goodcloud/docs/task_list.png){class="glboxshadow"}

You can view the execution result of each device and configuration.

![Task list detail info](https://static.gl-inet.com/goodcloud/docs/task_list_detail_info.png){class="glboxshadow"}

## BLE MQTT Bridge

Bluetooth Low Energy (BLE) is widely used for smart home, wearable and IoT sensors. This feature is for GL.iNet BLE gateway, GL-X750 Spitz and GL-S1300 convexa S which has built-in BLE modules. Read <a href="https://github.com/gl-inet/ble2mqtt" target="_blank">this</a> to learn how to use them forward your BLE data to the cloud based on MQTT protocol, including GL.iNet GoodCloud and AWS IoT.

## GoodCloud and VPN

If you enable GoodCloud feature on router and also use it as VPN client, there is something important you need to know.

At default, GoodCloud process use VPN if you enable VPN client(eg. WireGuard, OpenVPN), this bring a problem that if you VPN is configured incorrectly, GoodCloud will not work properly. In order to ensure the normal use of GoodCloud, we suggest you to follow the steps below to enable VPN Policies and disable "Use VPN for all process on the router". After you've done these steps, GoodCloud precess will not use VPN.

![disable use vpn for all process on the router](https://static.gl-inet.com/goodcloud/docs/disable-use-vpn-for-all-process-on-the-router.png){class="glboxshadow"}

## Turn off cloud

To stop GoodCloud service, turn it off on router web Admin Panel. Please follow the steps below. No action needed on the GoodCloud website.

![disable cloud](https://static.gl-inet.com/goodcloud/docs/disable-cloud.png){class="glboxshadow"}

![after disable cloud](https://static.gl-inet.com/goodcloud/docs/after-disable-cloud.png){class="glboxshadow"}

After disable Cloud, the interface is like above.
