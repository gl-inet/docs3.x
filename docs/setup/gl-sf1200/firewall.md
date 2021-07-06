# FIREWALL

In `FIREWALL`, you can set up firewall rules like **port forwarding**, **open port** and **DMZ**.

![Firewall](https://static.gl-inet.com/docs/en/3/setup/convexa_b/firewall/firewall.jpg)



## Port Forwards

Port Forwarding allows remote computers to connect to a specific computer or service behind the firewall in the local LAN (such as web servers, FTP servers, etc).

To set up port forwarding, click `Port Forwards`and input the required parameters or click `Add a New One`.

![Port Forwards](https://static.gl-inet.com/docs/en/3/setup/convexa_b/firewall/port_forwards.jpg)

**Name:** The name of the rule which can be specified by the user.

**Internal IP:** The IP address assigned by the router to the device which needs to be accessed remotely.

**External Ports:** The numbers of external ports. You can enter a specific port number or a range of service ports (E.g **100-300**).

**Internal Ports:** The internal port number of the device. You can enter a specific port number. Leave it blank if it is same as the external port.

**Protocol:** The protocol used, you can choose TCP, UDP, or both TCP and UDP.

**Status:** Activate of Deactivate the rule.



## Open Ports on Router

The router's services, such as web, FTP and so on, require their respective ports to be opened on the router in order to be publicly reachable.

To open a port, click `Open Ports on Router` and input the required parameters or click `Add a New One`.

![Port Forwards](https://static.gl-inet.com/docs/en/3/setup/convexa_b/firewall/open_port.jpg)

**Name:** The name of the rule which can be specified by the user.

**Port:** The port number that you want to open.

**Protocol:** The protocol used, you can choose TCP, UDP, or both TCP and UDP.

**Status:** Activate of Deactivate the rule.



## DMZ

DMZ allows you to expose one computer to the Internet, so that all the inbounds packets will be redirected to the computer you set.

Click `DMZ` and enable `Open DMZ`. Input the internal IP address (E.g. 192.168.8.100) of your device which is going to receive all the inbound packets.

![Port Forwards](https://static.gl-inet.com/docs/en/3/setup/convexa_b/firewall/DMZ.jpg)