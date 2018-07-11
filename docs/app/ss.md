# Shadowsocks (SS) Setting for UI 3.0
You will learn how to set up shadowsocks server and client in UI 3.0 on our mini routers in this guide. Because the UI 3.0 default excludes Shadosocks, this guide is only for DIY purpose and provided as is. To to the following setup, you have to upgrade your Plug-ins. 

##1. Update Plug-ins

1.1. Login the router, finish your first-time setup and internet setup, ensure you are connecting the internet.

1.2. Select **APPLICATIONS -> Plug-ins** on UI 3.0 web management left side.

![531126941652](https://static.gl-inet.com/docs/en/3/app/ss/ssupdate3.png)

1.3. Click **Update** on top-right corner. 

![1531131885168](https://static.gl-inet.com/docs/en/3/app/ss/updateapp2.png)

1.4. Install the following packages in the Plut-ins:

​	a. gl-ss

​	b. gl-ss-server

![1531132234092](https://static.gl-inet.com/docs/en/3/app/ss/ssapp1.png)

​	c. shadowsocks-libev-server

​	d. shadowsocks-libev

![1531132281302](https://static.gl-inet.com/docs/en/3/app/ss/ssapp2.png)

​	e. luci-app-shawdowsocks

![1531132348012](https://static.gl-inet.com/docs/en/3/app/ss/app3.png)



The following Success window will pop-up each time when installed a package. 

![1531132507191](https://static.gl-inet.com/docs/en/3/app/ss/successinstall.png)

1.5. And after all packages installed, you can find 2 more selections, "SS Serer" and "SS Client" are displayed at left side in VPN pull-down menu. 

![1531132665720](https://static.gl-inet.com/docs/en/3/app/ss/ss-ui.png)

##*2*. Setup SS-Server and Start SS services

2.1. Click **VPN-> SS Server** on the left side, main setup page of SS Server will be shown as following: 

![1531133147709](https://static.gl-inet.com/docs/en/3/app/ss/SSstart1.png)

2.2. Input 3 parts in the right table. 

Port - SS Server Port

Password - SS services password to be used when client connect to this server

Encryption Method - Select one of the encryption method list. 

![1531133599325](https://static.gl-inet.com/docs/en/3/app/ss/Encryption.png)

2.3. After all sections setup finished, you can click the green **"Start"**  button to start SS server.  Then the dot before Shadowsocks Server will turn to green and IP Address will display.  This is the SS server **Public IP**．

![1531145001203](https://static.gl-inet.com/docs/en/3/app/ss/SSserverstart.png)



##3. Using SS on PCs or Smartphones

###3.1. Download the clients of your OS platform:

https://shadowsocks.org/en/download/clients.html

###3.2. Setup your client on different devices

Install the Shadowsocks Client on your device (iOS, Android or Windows devices), then setup the following information:

Host: **your Public IP address** (you checked in step **2.3**)

Port: `443`

Password: **your password** (same as you setup in ss-server)

Encryption: `rc4-md5` (same as you select in ss-server)

###3.3. Start using Private Shadowsocks Services

After setup, you just start your shadowsocks on your devices, enjoy it. 

You can test or check whether it's workable by open a web browser on your smartphone (use 3G/4G data but not WiFi), then go to a IP address checking website to check if the IP address is same as your SS-server public IP address. 

##4.Shadowsocks Client Setup on the router

4.1. Select "**SS Client**" in the VPN pull-down menu.

 ![1531132665720](https://static.gl-inet.com/docs/en/3/app/ss/ss-ui.png)

4.2. Click "**Management**" tab to setup SS-Client for GL-AR750s

![1531146315346](https://static.gl-inet.com/docs/en/3/app/ss/SSclient1.png)

 

4.3. Click "**Add a New Shadowsocks Client**", fill the following information in the pop-up window:

![1531146414239](https://static.gl-inet.com/docs/en/3/app/ss/SSclient2.png) 

**Description** : Your SS server description 

Server Address: "**Your Public IP**"

Server Port: `443`

Password: "**Your Password**"

Encrypt Method: `RC4-MD5`

Click "**Add**", 

![1531146629368](https://static.gl-inet.com/docs/en/3/app/ss/SSclient3.png)



The setup will finish and auto return to the **Status** page， now you can select the previously configuration in the pull-down menu of SS Client. 

![1531146946588](https://static.gl-inet.com/docs/en/3/app/ss/SSclient4.png)

Click green "**Connect**" button, then the connection shall be established. 

![1531147086778](https://static.gl-inet.com/docs/en/3/app/ss/SSclient5.png)

If you successfully connected the SS-client to SS Server, the dot before Shadowsocks Client will turn green and Green "**Connect**" button will become Red "**Disconnect**".

Enjoy your SS services. 

