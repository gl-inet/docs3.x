# WireGuard Setting for Firmware 3.0  

The future of VPN technology

WireGuard is an extremely simple yet fast and modern VPN that utilizes **state-of-the-art cryptography**. It aims to be [faster](https://www.wireguard.com/performance/), [simpler](https://www.wireguard.com/quickstart/), leaner, and more useful than IPSec, while avoiding the massive headache. It intends to be considerably more performant than OpenVPN. 

You can setup and use Wireguard easily in firmware 3.0, wiregurad server and clients are pre-installed in firmware 3.0. 

## 1. Wiregurad Server Setup

1.1 Finish first-time setup and login the router, then make sure the internet connection. 

1.2 After internet connection, select **VPN -> Wireguard Server** at left slide menu. 

![1531199972139](https://static.gl-inet.com/docs/en/3/app/wireguard/WGS1.png)

1.3 Select "**Create a New User**" in the **Wireguard Server** Management Page

![1531200135703](https://static.gl-inet.com/docs/en/3/app/wireguard/WGS2.png)

Keep default parameter of Local IP and Local Port in the right table, or you can customize them. 

1.3 Then click green "**Start**", the dot before Wireguard Server will turn to green. 

Now the Wireguard Server is start. 

##2. Create and Copy Configuration Files for Clients 

To use Wireguard VPN services, it's necessary to copy and transfer configure file. 

2.1 Click "**Management**" tab to generate configuration file for Wireguard-Client. 

![1531200402570](https://static.gl-inet.com/docs/en/3/app/wireguard/WGS3.png)

The following pop-up window will display, fill in the name of the wireguard clients in right table and click "**Add**".

![1531200816379](https://static.gl-inet.com/docs/en/3/app/wireguard/WGS4.png)

You can add as many clients as you need, each client (peer) has its own configuration file. also you can delete any config file you don't need any more by click the "**Delete**" icon.

![1531201040561](C:\Users\simon\AppData\Local\Temp\1531201040561.png) 

2.2 After created all config file, just click "**Copy Config**" Icon, the config information will pop-up. 

![1531201685316](https://static.gl-inet.com/docs/en/3/app/wireguard/WGConf1.png)

Copy the whole configuration information to a text file and save it. 

## 3. Wireguard Client Setup 

3.1 If you are also using our AR750S as a client, follow the step, 1.1 and 1.2. Just select Wireguard Client in the VPN option.

![1531201993045](https://static.gl-inet.com/docs/en/3/app/wireguard/WGC1.png)

3.2 Click "**Add a new profile**" in Wireguard Client web management page, the following window will pop-up

![1531202195068](https://static.gl-inet.com/docs/en/3/app/wireguard/WGC2.png)

3.3 Input your "**Wireguard Server Name**", then click "**Next**".  

![1531205464882](https://static.gl-inet.com/docs/en/3/app/wireguard/WGC3.png)

Paste all information copied from Step 2.2, then click "**Add**". 

Or you can select "**Manual**" Input tab, and input Wireguard Client setup parameter manually. 

![1531206197642](https://static.gl-inet.com/docs/en/3/app/wireguard/WGC4.png)

Click "**Add**" to finish the Wireguard Client configuration. 

3.4 The Wireguard web management page will auto display and "**Success!**" will show on the top. 

![1531206410246](https://static.gl-inet.com/docs/en/3/app/wireguard/WGC5.png)

Select the server name in drop-down list and click "**Connect**". 

![1531206860821](https://static.gl-inet.com/docs/en/3/app/wireguard/WG6.png)

If the connect success established, the dot before **Wireguard Client** will turn to green and Green “**Connect**” change to Red “**Disconnect**” ， Upload/Download date meter displayed on the bottom. 

## 4. Wireguard Client on mobile devices 

You can also use wireguard client on your mobile phone, only android support now. 

IOS App is coming soon. 

Please refer to the follow path of android apk download:

https://play.google.com/apps/testing/com.wireguard.android