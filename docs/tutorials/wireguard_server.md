# WireGuard

WireGuard is an extremely simple yet fast and modern VPN that utilizes **state-of-the-art cryptography**. It aims to be [faster](https://www.wireguard.com/performance/), [simpler](https://www.wireguard.com/quickstart/), leaner, and more useful than IPSec, while avoiding the massive headache. It intends to be considerably more performant than OpenVPN. 

GL.iNet routers have pre-installed WireGuard server and client.

---

## Setup WireGuard Server

There is a video tutorial, please check out [here](#video-tutorial).

You can set up a WireGuard server on GL.iNet router. Click `+ Create a New User`.

![1531199972139](https://static.gl-inet.com/docs/en/3/app/wireguard/WGS1.png)

### Start a WireGuard server

You can simply use the default parameters of **Local IP** and **Local Port**, or you can set your own value. Then click `Start` to start your own WireGuard server. 

![Sever Configuration](https://static.gl-inet.com/docs/en/3/app/wireguard/WGS2.png)

Note that you can't running VPN Client and Server at the same time, and also can't running OpenVPN Client and WireGuard Client at the same time.

### Add a new client

You have to add a new user and apply the configurations when you are connecting to this WireGuard server.

Click `Management` tab and then `Create a New User`. 

![Add Client](https://static.gl-inet.com/docs/en/3/app/wireguard/WGS3.png)

Specify the **Name** of the new client and then click `Add`.

![Name](https://static.gl-inet.com/docs/en/3/app/wireguard/WGS4.png)

### Get the configuration details for your client

You can now check the list of the clients you added. You can `Delete` any unwanted client. Please click `Configurations` to find the configuration details which you need to use when you are setting up WireGuard client. We provide QRcode, Plain Text and JSON configurations currently.

![Configurations](https://static.gl-inet.com/docs/en/3/app/wireguard/configurations.jpg)

If you are using another GL.iNet router as a client, please copy the **JSON** configuration and paste it directly when you are setting up WireGuard client.

![Configurations](https://static.gl-inet.com/docs/en/3/app/wireguard/json.jpg)

## Wireguard App Support

You can also use WireGuard App on other devices with various OS

- Please refer to WireGuard Official Website： <https://www.wireguard.com/install/>

## Visit Client’s LAN Subnet

Visit Client’s LAN Subnet from WireGuard Server LAN Subnet

1) Change WireGuard clients LAN IP to avoid IP confliction with Server

2) Modify Wireguard_Server Configuration

WinSCP or SSH into your the WireGuard Server (router) find and modify the file

```shell
/etc/config/wireguard_server
```

Add a line to the end of the config file of clients you want to visit.

```shell
list subnet '192.168.xxx.0/24'
```

**Save and Exit**

## Video Tutorial

How to Set Up an WireGuard Server on GL.iNet Routers

<iframe width="560" height="315" src="https://www.youtube.com/embed/WPQba8jcZ_o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
