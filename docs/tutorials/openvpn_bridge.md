# OpenVPN

OpenVPN is an open-source VPN protocol that makes use of virtual private network (VPN) techniques to establish safe site-to-site or point-to-point connections. 

GL.iNet routers have pre-installed OpenVPN Client and Server.

## OpenVPN Bridge

OpenVPN Bridge is supported from firmware version 3.105.

It uses tap mode to establish the connection, the VPN server will assign ip to OpenVPN Client and the devices that connected to the Client. So the Server and the devices will be in the same vpn subnet, you can access them all from OpenVPN Server.

**This application need two GL.iNet routers to complete the connection.**

### 1) Start the OpenVPN Server

Go to the OpenVPN Server page, generate a configuration file then change the Type to Bridge, there will be an ip range pool settings for the clients, normally you don't need to change the default settings.

Click 'Apply' and Start the Server, when export the config you can find the 'dev tun' is changed to 'dev tap'.

![openvpn server](https://static.gl-inet.com/docs/en/3/tutorials/openvpn_bridge/setting_page.png){class="glboxshadow"}

### 2) Upload tap configuration

Open another router's web page and upload the configuration file. Click 'Connect' then wait a few minutes.

The router will be assigned an ip by OpenVPN Server and become inaccessible, if the server's vpn gateway is 10.8.0.1, the router will get 10.8.0.2 and the computer connected to the router will get ip address like 10.8.0.60. 

The connected PC will get a new ip address after the connection is established successfully:

![do you want to allow your pc to be discoverable by other pcs and devices on this network](https://static.gl-inet.com/docs/en/3/tutorials/openvpn_bridge/get_newip.png){class="glboxshadow"}

**Please pull out the lan cable and insert it again if the ip address of the connected device didn't change automatically**

After the connection is established, you can access your devices from OpenVPN Server.

### Example:

![network topology](https://static.gl-inet.com/docs/en/3/tutorials/openvpn_bridge/topology.png){class="glboxshadow"}

I can ping my phone(10.8.0.63) remotely from the local computer(192.168.8.208):

![ping](https://static.gl-inet.com/docs/en/3/tutorials/openvpn_bridge/example.png){class="glboxshadow"}

### 3) Stop the VPN connection

If you want to stop the vpn connection or the connection failed to establish, please hold the reset button for 4s to revert the network, then the OpenVPN client router will be accessible, you can now enter the default web page and stop the vpn connection.
