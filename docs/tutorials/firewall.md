# FIREWALL

On the left side of web Admin Panel -> FIREWALL

In `FIREWALL`, you can set up firewall rules like **port forwarding**, **open port** and **DMZ**.

![firewall page](https://static.gl-inet.com/docs/router/en/3/setup/share/firewall/port_forwards.png){class="glboxshadow"}

## Port Forwards

Port Forwarding allows remote computers to connect to a specific computer or service behind the firewall in the LAN (such as web servers, FTP servers, etc).

To set up port forwarding, click `Port Forwards`and input the required parameters or click `Add a New One`.

![Port Forwards](https://static.gl-inet.com/docs/router/en/3/setup/share/firewall/port_forwards.png){class="glboxshadow"}

**Name:** The name of the rule.

**Protocol:** The protocol used, you can choose TCP, UDP, or both TCP and UDP.

**Internal IP:** The IP address assigned by the router to the device which needs to be accessed remotely.

**External Zone:** The options for external zone are `wan`, `guestZone`, `wireguard`.

* `wan` is selected when you want to allow a service in the WAN zone. E.g., a web server is running on a LAN device in your home, it can only access when you at home, but you want it to be accessable outside your home, then you can set the external zone as `wan`.
You can access it via `wan_ip`:`external_port`. Note: Access outside your home need public IP.

* `guestZone` is for allowing your service to be accessed by devices connected to the guest Wi-Fi. E.g., when a web server is running on a LAN device in your home, it can only be accessed by your devices in the LAN, but not the guest LAN (which is isolated from the default LAN) by default. If you want the web server to be accessable in the guest LAN, you should set the external zone to `guestZone`. You can access the enabled service via `wan_ip`:`external_port`. 

* `wireguard`, when the router is running WireGuard server, there will have the `wireguard` option. E.g., a web server is running on a LAN device in your home. When you connect to your router's WireGuard Server, by default your access to the web server on the intranet is not granted. To make it accessable, set the external zone as `wireguard`. Then it can be accessed via `wan_ip`:`external_port`.

**External Ports:** The numbers of external ports. You can enter a specific port number here.

**Internal Ports:** The internal port number of the device. You can enter a specific port number. Leave it blank if it is same as the external port.

**Status:** Activate of Deactivate the rule.

## Open Ports on Router

The router's services, such as web, FTP and so on, require their respective ports to be opened on the router in order to be publicly reachable.

To open a port, click `Open Ports on Router` and input the required parameters or click `Add a New One`.

![Port Forwards](https://static.gl-inet.com/docs/router/en/3/setup/share/firewall/open_port.png){class="glboxshadow"}

**Name:** The name of the rule which can be specified by the user.

**Port:** The port number that you want to open.

**Protocol:** The protocol used, you can choose TCP, UDP, or both TCP and UDP.

**Status:** Activate of Deactivate the rule.

## DMZ

DMZ allows you to expose one computer to the Internet, so that all the inbounds packets will be redirected to the computer you set.

Click `DMZ` and enable `Open DMZ`. Input the internal IP address (E.g. 192.168.8.100) of your device which is going to receive all the inbound packets.

![Port Forwards](https://static.gl-inet.com/docs/router/en/3/setup/share/firewall/dmz.png){class="glboxshadow"}
