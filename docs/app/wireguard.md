# WireGuard Settings for Firmware 3.0  

WireGuard is an extremely simple yet fast and modern VPN that utilizes **state-of-the-art cryptography**. It aims to be [faster](https://www.wireguard.com/performance/), [simpler](https://www.wireguard.com/quickstart/), leaner, and more useful than IPSec, while avoiding the massive headache. It intends to be considerably more performant than OpenVPN. 

You can setup and use WireGuard easily in firmware 3.0, wireGuard server and clients are pre-installed in firmware 3.0. 



---

## WireGuard Server

You can set up a WireGuard server on GL.iNet router with firmware 3.0. Click `+ Create a New User`.

![1531199972139](https://static.gl-inet.com/docs/en/3/app/wireguard/WGS1.png)



###1) Start a WireGuard server

You can simply use the default parameters of **Local IP** and **Local Port**, or you can set your own value. Then click `Start` to start your own WireGuard server. 

![Sever Configuration](https://static.gl-inet.com/docs/en/3/app/wireguard/WGS2.png)



###2) Add a new client

You have to add a new user and apply the configurations when you are connecting to this WireGuard server.

Click `Management` tab and then `Create a New User`. 

![Add Client](https://static.gl-inet.com/docs/en/3/app/wireguard/WGS3.png)



Specify the **Name** of the new client and then click `Add`.

![Name](https://static.gl-inet.com/docs/en/3/app/wireguard/WGS4.png)



### 3) Get the configuration details for your client

You can now check the list of the clients you added. You can `Delete` any unwanted client. Please click `Configurations` to find the configuration details which you need to use when you are setting up WireGuard client. We provide QRcode, Plain Text and JSON configurations currently.

![Configurations](https://static.gl-inet.com/docs/en/3/app/wireguard/configurations.jpg)



If you are using another GL.iNet router as a client, please copy the **JSON** configuration and paste it directly when you are setting up WireGuard client.

![Configurations](https://static.gl-inet.com/docs/en/3/app/wireguard/json.jpg)





## WireGuard Client 

To set up a WireGuard client, please click `+ Add New Profiles`.

![Client](https://static.gl-inet.com/docs/en/3/app/wireguard/WGC1.png)



###1) Specify the name of your server

Specify the name and then click `Next`.

![Name](https://static.gl-inet.com/docs/en/3/app/wireguard/name.jpg)



###2) Input the configurations

You can copy the `JSON` configurations from your server to `Configuration` or input the settings manually.

If you are using **Azirevpn** or **Mullvad**, you can click `Others` and use your **AzireVPN** or **Mullvad** account to set up WireGuard client directly.

Click `Add` to finish the WireGuard Client setup.

![Configuraion](https://static.gl-inet.com/docs/en/3/app/wireguard/configurations1.jpg)



###3) Connect to the WireGuard server

Click `Connect`. You will see the upload and download traffic when it is connected successfully.

![1531206410246](https://static.gl-inet.com/docs/en/3/app/wireguard/WGC5.png)



## Wireguard App on different devices 

You can also use WireGuard App on other devices with various OS

- Please refer to WireGuard Official Website： <https://www.wireguard.com/install/>


## Visit Clients Subnet in WireGuard Server

###1) Change WireGuard clients LAN IP to avoid IP confliction with Server

###2) Modify Wireguard_Server Configuration

WinSCP or SSH into your the WireGuard Server (router) find and modify the file

```shell
/etc/config/wireguard_server
```

Add a line to the end of the config file of clients you want to visit.

```shell
list subnet '192.168.xxx.0/24'
```

**Save and Exit**



