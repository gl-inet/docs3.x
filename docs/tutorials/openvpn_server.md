# OpenVPN

OpenVPN is an open-source VPN protocol that makes use of virtual private network (VPN) techniques to establish safe site-to-site or point-to-point connections. 

GL.iNet routers have pre-installed OpenVPN Client and Server.

## Setup OpenVPN Server

You can set up an OpenVPN server on GL.iNet router. Click `+ Generate a configuration file`.

![server](https://static.gl-inet.com/docs/en/3/tutorials/openvpn/src/server.jpg)


### Server configuration

There are preset OpenVPN server configurations. You can also click `Modify` to change them manually. Click `Apply` when you finish.

![ server configuration](https://static.gl-inet.com/docs/en/3/tutorials/openvpn/src/server_settings.jpg)

Note that you can't running VPN Client and Server at the same time, and also can't running OpenVPN Client and WireGuard Client at the same time.

### Export OpenVPN configuration file

Click `Export Config` to download the OpenVPN configuration file which you need to upload when you are configuring your OpenVPN client.

![server export](https://static.gl-inet.com/docs/en/3/tutorials/openvpn/src/server_export.jpg)

### Start the OpenVPN server

Click `Start` to start your OpenVPN server. Otherwise, you will not be able to connect to the OpenVPN server by using its configuration file.

![start server](https://static.gl-inet.com/docs/en/3/tutorials/openvpn/src/server_settings.jpg)

![started](https://static.gl-inet.com/docs/en/3/tutorials/openvpn/src/server_connected.jpg)

---

## OpenVPN Bridge

OpenVPN Bridge is supported from firmware version 3.105.

It uses tap mode to establish the connection, the VPN server will assign ip to OpenVPN Client and the devices that connected to the Client. So the Server and the devices will be in the same vpn subnet, you can access them all from OpenVPN Server.

**This application need two GL routers to complete the connection.**

### 1) Start the OpenVPN Server

Go to the OpenVPN Server page, generate a configuration file then change the Type to Bridge, there will be an ip range pool settings for the clients, normally you don't need to change the default settings.

Click 'Apply' and Start the Server, when export the config you can find the 'dev tun' is changed to 'dev tap'.

![](https://static.gl-inet.com/docs/en/3/tutorials/openvpn/ovpn_bridge/setting_page.png)

### 2) Upload tap configuration

Open another router's web page and upload the configuration file. Click 'Connect' then wait a few minutes.

The router will be assigned an ip by OpenVPN Server and become inaccessible, if the server's vpn gateway is 10.8.0.1, the router will get 10.8.0.2 and the computer connected to the router will get ip address like 10.8.0.60. 

The connected pc will get a new ip address after the connection is established successfully:

![](https://static.gl-inet.com/docs/en/3/tutorials/openvpn/ovpn_bridge/get_newip.png)

**Please pull out the lan cable and insert it again if the ip address of the connected device didn't change automatically**

After the connection is established, you can access your devices from OpenVPN Server.

### Example:

![](https://static.gl-inet.com/docs/en/3/tutorials/openvpn/ovpn_bridge/topology.png)

I can ping my phone(10.8.0.63) remotely from the local computer(192.168.8.208):

![](https://static.gl-inet.com/docs/en/3/tutorials/openvpn/ovpn_bridge/example.png)

### 3) Stop the VPN connection

If you want to stop the vpn connection or the connection failed to establish, please hold the reset button for 4s to revert the network, then the OpenVPN client router will be accessible, you can now enter the default web page and stop the vpn connection.

---