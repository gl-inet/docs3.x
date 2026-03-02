# Set up WireGuard Server on GL.iNet router

WireGuard® is an extremely simple yet fast and modern VPN that utilizes state-of-the-art cryptography. It aims to be faster, simpler, leaner, and more useful than IPSec, while avoiding the massive headache. It intends to be considerably more performant than OpenVPN.

GL.iNet routers have pre-installed WireGuard Server and Client. You can set a GL.iNet router as an WireGuard server or client and establish VPN connection.

---

## Make sure you have a public IP address

Please click [here](how_to_check_if_isp_assigns_you_a_public_ip_address.md) to check if you Internet Service Provider assigns you a public IP address.

**If not, your router cannot be set as a WireGuard Server.**

Alternative methods:

1. If you have a primary router, log in to it and check if it gets a public IP from your ISP.

2. Ask your ISP for a public IP address. This may incur an extra fee.

3. If the above two methods don't work (e.g., if your network is behind CGNAT), you may try our SD-WAN solution [AstroWarp](https://www.astrowarp.net/){target="_blank"}.

## Confirm if Port Forwarding is required

* If GL.iNet router is the primary router in your network, no port forwarding is required. Please move to the next step.

* If a primary router is already in use and the GL.iNet router is configured as a secondary router, you will need to configure port forwarding on the primary router. Refer to [here](https://docs.gl-inet.com/router/en/4/tutorials/how_to_set_up_port_forwarding/){target="_blank"} for instructions, and reach out to the primary router’s technical support if necessary.

* If a primary router is already in use and the GL.iNet router is several levels below the primary router, configure port forwarding on each intermediate level.

## Initialize WireGuard Server

Log in to the web Admin Panel, and navigate to VPN -> WireGuard Server. Click `Initialize WireGuard Server`.

![initialize wireguard server](https://static.gl-inet.com/docs/router/en/3/tutorials/wireguard_server/initialize_wireguard_server.png){class="glboxshadow"}

### Start the WireGuard Server

You can simply use the default parameters of **IP Address** and **Local Port**, or set your own value. Then click `Start` to start your own WireGuard server. 

![Sever Configuration](https://static.gl-inet.com/docs/router/en/3/tutorials/wireguard_server/start_wireguard_server.png){class="glboxshadow"}

**Allow Access Local Network:** Enable this will allow every client that connect to this WireGuard Server be able to access your LAN. Please use with caution.

### Add a new client

You have to add a new user and apply the configurations when you are connecting to this WireGuard Server.

Click `Management` tab and then `Add a New User`.

![Add a wireguard client user](https://static.gl-inet.com/docs/router/en/3/tutorials/wireguard_server/add_a_new_wireguard_user.png){class="glboxshadow"}

Specify the **Name** of the new client and then click `Add`.

![input wireguard config name](https://static.gl-inet.com/docs/router/en/3/tutorials/wireguard_server/input_wireguard_config_name.png){class="glboxshadow"}

### Get the configuration details for your client

You can now check the list of the clients you added. Please click `Configurations` to find the configuration details you need to use when you are setting up WireGuard client. 

We provide QR code and Plain Text, you can use a Text Editor software to save the Plain Text to `.conf` file.

![Configuration list](https://static.gl-inet.com/docs/router/en/3/tutorials/wireguard_server/wireguard_config_list.png){class="glboxshadow"}

![wireguard configuration](https://static.gl-inet.com/docs/router/en/3/tutorials/wireguard_server/wireguard_configuration.png){class="glboxshadow"}

### Enable DDNS (Optional)

Some Internet Service Providers may assign you a dynamic IP address, which means it changes from time to time. In this case, please enable the [DDNS](ddns.md), then edit the configuration to replace the public IP address with your DDNS url.

1. Copy the content of the configuration to a text editor(e.g. [Atom](https://atom.io/){target="_blank"}, [Sublime](https://www.sublimetext.com/){target="_blank"}).
2. Edit the configuration to replace DDNS url with your public IP address.

    ![ddns replace ip](https://static.gl-inet.com/docs/router/en/3/tutorials/wireguard_server/ddns_replace_ip.png){class="glboxshadow"}

    After replaced.
    
    ![ddns replaced ip](https://static.gl-inet.com/docs/router/en/3/tutorials/wireguard_server/ddns_replaced_ip.png){class="glboxshadow"}

3. Copy the revised content to [generate a QRCode](https://www.google.com/search?q=qr+code+generator+online&sxsrf=AOaemvIsNI2H6dKtGyc_vGGsJpQYcPT8jA%3A1631499580792&ei=PLU-Yd3tL7yB1e8P5f6CqAk&oq=qrcode+generator+&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgAMgcIABCABBAKMgcIABCABBAKMgcIABCABBAKMgcIABCABBAKMgoIABCABBCHAhAUMgcIABCABBAKMgcIABCABBAKMgcIABCABBAKMgcIABCABBAKMgcIABCABBAKOgcIIxCwAxAnOgcIABBHELADOgcIABCwAxBDSgQIQRgAUO8fWO8fYK8uaAFwAngAgAFDiAFDkgEBMZgBAKABAcgBCsABAQ&sclient=gws-wiz-serp){target="_blank"}, or save it as `.conf` file.

The WireGuard connection may down a while when the public IP address changes, after the DDNS url update to the new public IP address, the conneciton will resume. The DDNS is updated every 10 minutes. If the connection doesn't resume, please make sure the DDNS url is point to tne new public IP address, then turn off the WireGuard connection and turn on again.

## Check if WireGuard Server is working properly

Connect another device (e.g., another GL.iNet router, a laptop, or a smartphone) to a different network, then import the previously exported WireGuard configuration file to it. Start the VPN connection and check if it connects to your WireGuard Server successfully, and if its IP address is the WireGuard Server's IP.

The simplest method is to use a smartphone with the official [WireGuard App](https://www.wireguard.com/install){target="_blank"} installed. First, disable the smartphone's Wi-Fi and connect exclusively to the internet via cellular data (4G/5G). Then open the WireGuard app, import the configuration file, and initiate the connection. Check if the smartphone can access the internet and if its IP address matches the WireGuard Server's IP.

If the connection fails, there are several common reasons:

* The Internet Service Provider doesn't assign you a public IP address. Please check [here](#make-sure-you-have-a-public-ip-address).
* You may need to set up port forwarding. Please check [here](#confirm-if-port-forwarding-is-required).
* The port used for the WireGuard Server is blocked by your Internet Service Provider. Change to another port, or contact the Internet Service Provider for further assistance.
* Some countries/regions may block the VPN connection.

## WireGuard Client App

- Please refer to [WireGuard Official Website](https://www.wireguard.com/install){target="_blank"}.

---

Related Articles

- [How to visit WireGuard client LAN side from Server](wireguard_server_access_to_client_lan_side.md)
