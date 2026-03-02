# Set up OpenVPN Server on GL.iNet router

OpenVPN is an open-source VPN protocol that uses virtual private network (VPN) techniques to establish secure site-to-site or point-to-point connections. 

GL.iNet routers have pre-installed OpenVPN Server and Client. You can set a GL.iNet router as an OpenVPN server or client and establish VPN connection.

We recommend WireGuard over OpenVPN because it is much faster. For setting up a WireGuard server, please check [here](wireguard_server.md).

---

## Make sure you have a public IP address

Please click [here](how_to_check_if_isp_assigns_you_a_public_ip_address.md) to check if you Internet Service Provider assigns you a public IP address.

**If not, your router cannot be set as an OpenVPN Server.**

Alternative methods:

1. If you have a primary router, log in to it and check if it gets a public IP from your ISP.

2. Ask your ISP for a public IP address. This may incur an extra fee.

3. If the above two methods don't work (e.g., if your network is behind CGNAT), you may try our SD-WAN solution [AstroWarp](https://www.astrowarp.net/){target="_blank"}.

## Confirm if Port Forwarding is required

* If GL.iNet router is the primary router in your network, no port forwarding is required. Please move to the next step.

* If a primary router is already in use and the GL.iNet router is configured as a secondary router, you will need to configure port forwarding on the primary router. Refer to [here](https://docs.gl-inet.com/router/en/4/tutorials/how_to_set_up_port_forwarding/){target="_blank"} for instructions, and reach out to the primary router’s technical support if necessary.

* If a primary router is already in use and the GL.iNet router is several levels below the primary router, configure port forwarding on each intermediate level.

## Initialize OpenVPN Server

Log in to the web Admin Panel, and navigate to VPN -> OpenVPN Server. Click `Generate a Configuration File`.

![initialize openvpn server](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_server/initialize_openvpn_server.png){class="glboxshadow"}

## Set up OpenVPN Server

### Server configuration

There are preset OpenVPN server configurations. You can also click `Modify` to change them manually. Click `Apply` when you finish.

![openvpn server configuration](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_server/openvpn_server_settings.png){class="glboxshadow"}

**Allow Access Local Network:** Enable this will allow every client that connect to this OpenVPN Server be able to access your LAN. Please use with caution.

### Export OpenVPN configuration file

Click `Export Config` on the bottom right to download the OpenVPN configuration file.

![openvpn server export configuration](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_server/openvpn_server_export_config.png){class="glboxshadow"}

### Enable DDNS (Optional)

Some Internet Service Providers may assign you a dynamic IP address, which means it changes from time to time. In this case, please enable the [DDNS](ddns.md), then edit the configuration to replace the public IP address with your DDNS url.

1. Open the configuration file(.ovpn) with a text editor (e.g. [Atom](https://atom.io/){target="_blank"}, [Sublime](https://www.sublimetext.com/){target="_blank"}).
2. Edit the configuration to replace DDNS url with your public IP address.

    ![ddns replace ip](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_server/ddns_replace_ip.png){class="glboxshadow"}

    After replaced.

    ![ddns replaced ip](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_server/ddns_replaced_ip.png){class="glboxshadow"}

3. Save the `.ovpn` file.

The OpenVPN connection may down a while when the public IP address changes, after the DDNS url update to the new public IP address, the conneciton will resume. The DDNS is updated every 10 minutes. If the connection doesn't resume, please make sure the DDNS url is point to tne new public IP address, then turn off the OpenVPN connection and turn on again.

### Start the OpenVPN server

Click `Start` to start your OpenVPN server. Otherwise, you will not be able to connect to the OpenVPN server by using its configuration file.

![openvpn server configuration](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_server/openvpn_server_settings.png){class="glboxshadow"}

It started.

![started](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_server/openvpn_server_started.png){class="glboxshadow"}

## Check if OpenVPN Server is working properly

Connect another device (e.g., another GL.iNet router, a laptop, or a smartphone) to a different network, then import the previously exported OpenVPN configuration file to it. Start the VPN connection and check if it connects to your OpenVPN Server successfully, and if its IP address is the OpenVPN Server's IP.

The simplest method is to use a smartphone with the official [OpenVPN App](https://openvpn.net/vpn-client/){target="_blank"} installed. First, disable the smartphone's Wi-Fi and connect exclusively to the internet via cellular data (4G/5G). Then open the OpenVPN app, import the configuration file, and initiate the connection. Check if the smartphone can access the internet and if its IP address matches the OpenVPN Server's IP.

If the connection fails, there are several common reasons:

* The Internet Service Provider doesn't assign you a public IP address. Please check [here](#make-sure-you-have-a-public-ip-address).
* You may need to set up port forwarding. Please check [here](#confirm-if-port-forwarding-is-required).
* The port used for the OpenVPN Server is blocked by your Internet Service Provider. Change to another port, or contact the Internet Service Provider for further assistance.
* Some countries/regions may block the VPN connection.

## OpenVPN Client App

Please refer to [OpenVPN Official Website](https://openvpn.net/vpn-client/){target="_blank"}.
