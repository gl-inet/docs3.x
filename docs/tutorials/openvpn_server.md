# OpenVPN

OpenVPN is an open-source VPN protocol that makes use of virtual private network (VPN) techniques to establish safe site-to-site or point-to-point connections. 

GL.iNet routers have pre-installed OpenVPN Client and Server.

## Setup OpenVPN Server

You can set up an OpenVPN server on GL.iNet router. Click `+ Generate a configuration file`.

![server](https://static.gl-inet.com/docs/en/3/tutorials/openvpn/src/server.jpg){class="glboxshadow"}


### Server configuration

There are preset OpenVPN server configurations. You can also click `Modify` to change them manually. Click `Apply` when you finish.

![server configuration](https://static.gl-inet.com/docs/en/3/tutorials/openvpn/src/server_settings.jpg){class="glboxshadow"}

Note that you can't running VPN Client and Server at the same time, and also can't running OpenVPN Client and WireGuard Client at the same time.

### Export OpenVPN configuration file

Click `Export Config` to download the OpenVPN configuration file which you need to upload when you are configuring your OpenVPN client.

![server export](https://static.gl-inet.com/docs/en/3/tutorials/openvpn/src/server_export.jpg){class="glboxshadow"}

### Start the OpenVPN server

Click `Start` to start your OpenVPN server. Otherwise, you will not be able to connect to the OpenVPN server by using its configuration file.

![start server](https://static.gl-inet.com/docs/en/3/tutorials/openvpn/src/server_settings.jpg){class="glboxshadow"}

![started](https://static.gl-inet.com/docs/en/3/tutorials/openvpn/src/server_connected.jpg){class="glboxshadow"}
