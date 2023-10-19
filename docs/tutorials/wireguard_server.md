# Setup WireGuard Server on GL.iNet router

WireGuard is an extremely simple yet fast and modern VPN that utilizes **state-of-the-art cryptography**. It aims to be [faster](https://www.wireguard.com/performance/){target="_blank}, [simpler](https://www.wireguard.com/quickstart/){target="_blank}, leaner, and more useful than IPSec, while avoiding the massive headache. It intends to be considerably more performant than OpenVPN. 

GL.iNet routers have pre-installed WireGuard Server and Client.

---

## Make sure Internet Service Provider assigns you a public IP address

Please check if you Internet Service Provider assigns you a public IP address [here](../how_to_check_if_isp_assigns_you_a_public_ip_address).

**If no, you can't connect to the WireGaurd Server.**

An alternative method is to use a reverse proxy solution, we suggest [AstroRelay](https://www.astrorelay.com/){target="_blank"}.

## Network Topology

* If GL.iNet router is the main router in your network, this is simple, please move to the next step.
* If you already have a main router, then the GL.iNet router is under the main router, you may need to setup a port forward on the main router.
* If you already have a main router, the GL.iNet router is several levels below it and you need to set up port forward on each level.

## Initialize WireGuard Server

Access to web Admin Panel, on the left side -> VPN -> WireGuard Server. Click `Initialize WireGuard Server`.

![initialize wireguard server](https://static.gl-inet.com/docs/router/en/3/tutorials/wireguard_server/initialize_wireguard_server.png){class="glboxshadow"}

### Start the WireGuard Server

You can simply use the default parameters of **IP Address** and **Local Port**, or you can set your own value. Then click `Start` to start your own WireGuard server. 

![Sever Configuration](https://static.gl-inet.com/docs/router/en/3/tutorials/wireguard_server/start_wireguard_server.png){class="glboxshadow"}

**Allow Access Local Network:** Enable this will allow every client that connect to this WireGuard Server be able to access your LAN. Please use with caution.

**Note that you can't running VPN Client and Server at the same time, and also can't running OpenVPN Client and WireGuard Client at the same time.**

### Add a new client

You have to add a new user and apply the configurations when you are connecting to this WireGuard Server.

Click `Management` tab and then `Add a New User`.

![Add a wireguard client user](https://static.gl-inet.com/docs/router/en/3/tutorials/wireguard_server/add_a_new_wireguard_user.png){class="glboxshadow"}

Specify the **Name** of the new client and then click `Add`.

![input wireguard config name](https://static.gl-inet.com/docs/router/en/3/tutorials/wireguard_server/input_wireguard_config_name.png){class="glboxshadow"}

### Get the configuration details for your client

You can now check the list of the clients you added. You can `Delete` any unwanted client. Please click `Configurations` to find the configuration details which you need to use when you are setting up WireGuard client. We provide QRcode and Plain Text, you can use a Text Editor software to save the Plain Text to `.conf` file.

![Configuration list](https://static.gl-inet.com/docs/router/en/3/tutorials/wireguard_server/wireguard_config_list.png){class="glboxshadow"}

![wireguard configuration](https://static.gl-inet.com/docs/router/en/3/tutorials/wireguard_server/wireguard_configuration.png){class="glboxshadow"}

### To check if WireGuard Server is working properly

To check if WireGaurd Server is working properly, we can use another device connected to another network and use the WireGuard configuration we exported earlier to connect and see whether it connects properly and whether the IP address is the IP of WireGuard Server.

The simpliest way is to use a phone with [WireGuard official client app](https://www.wireguard.com/install){target="_blank"} installed, turn off its Wi-Fi connection, and only connect to Internet via 3G/4G/5G. Then open the WireGaurd app, import the WireGaurd configuration from QR code. Enable the connection, check if the phone has Internet access and whether its IP address is the IP of WireGuard Server.

There are several common reasons cause failed:

* The Internet Service Provider doesn't assign you a public IP address, please check [here](#make-sure-internet-service-provider-assigns-you-a-public-ip-address).
* You may need setup port forward, please check [here](#network-topology).
* The port you are using for WireGuard Server is blocked by the Internet Service Provider, change to another port, or contact the Internet Service Provider.
* Some countries/resions may block the VPN connection.

### If your public IP address is dynamic

Some Internet Service Providers may change your IP address sometimes. To overcome this, enable the [DDNS](../ddns), then edit the configuration to replace DDNS url with your public IP address.

1. Copy the content of the configuration to a text editor(e.g. [Atom](https://atom.io/){target="_blank"}, [Sublime](https://www.sublimetext.com/){target="_blank"}).
2. Edit the configuration to replace DDNS url with your public IP address.

    ![ddns replace ip](https://static.gl-inet.com/docs/router/en/3/tutorials/wireguard_server/ddns_replace_ip.png){class="glboxshadow"}

    After replaced.
    
    ![ddns replaced ip](https://static.gl-inet.com/docs/router/en/3/tutorials/wireguard_server/ddns_replaced_ip.png){class="glboxshadow"}

3. Copy the revised content to [generate a QRCode](https://www.google.com/search?q=qr+code+generator+online&sxsrf=AOaemvIsNI2H6dKtGyc_vGGsJpQYcPT8jA%3A1631499580792&ei=PLU-Yd3tL7yB1e8P5f6CqAk&oq=qrcode+generator+&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgAMgcIABCABBAKMgcIABCABBAKMgcIABCABBAKMgcIABCABBAKMgoIABCABBCHAhAUMgcIABCABBAKMgcIABCABBAKMgcIABCABBAKMgcIABCABBAKMgcIABCABBAKOgcIIxCwAxAnOgcIABBHELADOgcIABCwAxBDSgQIQRgAUO8fWO8fYK8uaAFwAngAgAFDiAFDkgEBMZgBAKABAcgBCsABAQ&sclient=gws-wiz-serp){target="_blank"}, or save it as `.conf` file.

The WireGuard connection may down a while when the public IP address changes, after the DDNS url update to the new public IP address, the conneciton will resume. The DDNS is updated every 10 minutes. If the connection doesn't resume, please make sure the DDNS url is point to tne new public IP address, then turn off the WireGaurd connection and turn on again.

## WireGuard Client App

We can use another GL.iNet router as WireGuard Client, or use their official app on other devices with various OS.

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
