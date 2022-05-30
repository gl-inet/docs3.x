# Setup OpenVPN Server on GL.iNet router

OpenVPN is an open-source VPN protocol that makes use of virtual private network (VPN) techniques to establish safe site-to-site or point-to-point connections. 

GL.iNet routers have pre-installed OpenVPN Client and Server.

We recommend WireGuard over OpenVPN because it is much faster. For setup a WireGuard Server, please check out [here](../wireguard_server).

---

## Make sure Internet Service Provider assigns you a public IP address

Please check if you Internet Service Provider assigns you a public IP address [here](../how_to_check_if_isp_assigns_you_a_public_ip_address).

**If no, you can't connect to the WireGaurd Server.**

An alternative method is to use a reverse proxy solution, we suggest [AstroRelay](https://www.astrorelay.com/){target="_blank"}.

## Network Topology

* If GL.iNet router is the main router in your network, this is simple, please move to the next step.
* If you already have a main router, then the GL.iNet router is under the main router, you may need to setup a port forward on the main router.
* If you already have a main router, the GL.iNet router is several levels below it and you need to set up port forward on each level.

## Initialize OpenVPN Server

Access to web Admin Panel, on the left side -> VPN -> OpenVPN Server. Click `Generate a Configuration File`.

![initialize openvpn server](https://static.gl-inet.com/docs/en/3/tutorials/openvpn_server/initialize_openvpn_server.png){class="glboxshadow"}

## Setup OpenVPN Server

### Server configuration

There are preset OpenVPN server configurations. You can also click `Modify` to change them manually. Click `Apply` when you finish.

![openvpn server configuration](https://static.gl-inet.com/docs/en/3/tutorials/openvpn_server/openvpn_server_settings.png){class="glboxshadow"}

**Allow Access Local Network:** Enable this will allow every client that connect to this OpenVPN Server be able to access your LAN. Please use with caution.

**Note that you can't running VPN Client and Server at the same time, and also can't running OpenVPN Client and WireGuard Client at the same time.**

### Export OpenVPN configuration file

Click `Export Config` on the bottom right to download the OpenVPN configuration file.

![openvpn server export configuration](https://static.gl-inet.com/docs/en/3/tutorials/openvpn_server/openvpn_server_export_config.png){class="glboxshadow"}

### Start the OpenVPN server

Click `Start` to start your OpenVPN server. Otherwise, you will not be able to connect to the OpenVPN server by using its configuration file.

![openvpn server configuration](https://static.gl-inet.com/docs/en/3/tutorials/openvpn_server/openvpn_server_settings.png){class="glboxshadow"}

It started.

![started](https://static.gl-inet.com/docs/en/3/tutorials/openvpn_server/openvpn_server_started.png){class="glboxshadow"}

### To check if OpenVPN Server is working properly

To check if OpenVPN Server is working properly, we can use another device connected to another network and use the OpenVPN configuration we exported earlier to connect and see whether it connects properly and whether the IP address is the IP of OpenVPN Server.

The simpliest way is to use a cell phone with [OpenVPN official client app](https://openvpn.net/vpn-client/){target="_blank"} installed, turn off its Wi-Fi connection, and only connect to Internet via 3G/4G/5G. Then open the OpenVPN app, import the OpenVPN configuration we previously exported . Enable the connection, check if the phone has Internet access and whether its IP address is the IP of your OpenVPN Server.

There are several common reasons cause failed:

* The Internet Service Provider doesn't assign you a public IP address, please check [here](#make-sure-internet-service-provider-assigns-you-a-public-ip-address).
* You may need setup port forwarding, please check [here](#network-topology).
* The port you are using for OpenVPN Server is blocked by the Internet Service Provider, change to another port, or contact the Internet Service Provider.
* Some countries/regions may block the VPN connection.

### If your public IP address is dynamic

Some Internet Service Providers may change your IP address sometimes. To overcome this, enable the [DDNS](../ddns), then edit the configuration to replace DDNS url with your public IP address.

1. Open the configuration file(.ovpn) with a text editor(e.g. [Atom](https://atom.io/){target="_blank"}, [Sublime](https://www.sublimetext.com/){target="_blank"}).
2. Edit the configuration to replace DDNS url with your public IP address.

    ![ddns replace ip](https://static.gl-inet.com/docs/en/3/tutorials/openvpn_server/ddns_replace_ip.png){class="glboxshadow"}

    After replaced.

    ![ddns replaced ip](https://static.gl-inet.com/docs/en/3/tutorials/openvpn_server/ddns_replaced_ip.png){class="glboxshadow"}

3. Save the `.ovpn` file.

The OpenVPN connection may down a while when the public IP address changes, after the DDNS url update to the new public IP address, the conneciton will resume. The DDNS is updated every 10 minutes. If the connection doesn't resume, please make sure the DDNS url is point to tne new public IP address, then turn off the OpenVPN connection and turn on again.

## OpenVPN Client App

We can use another GL.iNet router as OpenVPN Client, or use their official app on other devices with various OS.

- Please refer to OpenVPN Official Website: [https://openvpn.net/vpn-client/](https://openvpn.net/vpn-client/){target="_blank"}

