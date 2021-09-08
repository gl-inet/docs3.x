# WireGuard

WireGuard is an extremely simple yet fast and modern VPN that utilizes **state-of-the-art cryptography**. It aims to be [faster](https://www.wireguard.com/performance/){target="_blank}, [simpler](https://www.wireguard.com/quickstart/){target="_blank}, leaner, and more useful than IPSec, while avoiding the massive headache. It intends to be considerably more performant than OpenVPN. 

GL.iNet routers have pre-installed WireGuard Server and Client.

---

## Setup WireGuard Server

There is a video tutorial, please check out [here](#video-tutorial).

You can set up a WireGuard Server on GL.iNet router. Click `+ Create a New User`.

![setup wireguard server](https://static.gl-inet.com/docs/en/3/tutorials/wireguard_server/wgs1.png){class="glboxshadow"}

### Start the WireGuard Server

You can simply use the default parameters of **Local IP** and **Local Port**, or you can set your own value. Then click `Start` to start your own WireGuard server. 

![Sever Configuration](https://static.gl-inet.com/docs/en/3/tutorials/wireguard_server/wgs2.png){class="glboxshadow"}

Note that you can't running VPN Client and Server at the same time, and also can't running OpenVPN Client and WireGuard Client at the same time.

### Add a new client

You have to add a new user and apply the configurations when you are connecting to this WireGuard server.

Click `Management` tab and then `Create a New User`. 

![Add Client](https://static.gl-inet.com/docs/en/3/tutorials/wireguard_server/wgs3.png){class="glboxshadow"}

Specify the **Name** of the new client and then click `Add`.

![Name](https://static.gl-inet.com/docs/en/3/tutorials/wireguard_server/wgs4.png){class="glboxshadow"}

### Get the configuration details for your client

You can now check the list of the clients you added. You can `Delete` any unwanted client. Please click `Configurations` to find the configuration details which you need to use when you are setting up WireGuard client. We provide QRcode, Plain Text and JSON configurations currently.

![Configurations](https://static.gl-inet.com/docs/en/3/tutorials/wireguard/configurations.jpg){class="glboxshadow"}

If you are using another GL.iNet router as a client, please copy the **JSON** configuration and paste it directly when you are setting up WireGuard client.

![Configurations](https://static.gl-inet.com/docs/en/3/tutorials/wireguard/json.jpg){class="glboxshadow"}

## WireGuard App Support

You can also use WireGuard App on other devices with various OS.

- Please refer to WireGuard Official Website: [https://www.wireguard.com/install](https://www.wireguard.com/install){target="_blank}

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
