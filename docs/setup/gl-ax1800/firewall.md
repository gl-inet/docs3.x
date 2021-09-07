# FIREWALL

In `FIREWALL`, you can set up firewall rules like **port forwarding**, **open port** and **DMZ**.

<div class="gl-lightbox" itemscope itemtype="http://schema.org/ImageGallery">
  <figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
    <a href="https://static.gl-inet.com/docs/en/3/setup/gl-ax1800/firewall/firewall_page.png" itemprop="contentUrl" data-size="1261x363">
      <img src="https://static.gl-inet.com/docs/en/3/setup/gl-ax1800/firewall/firewall_page.png" itemprop="thumbnail" alt="firewall" class="glboxshadow">
    </a>
  </figure>
</div>

## Port Forwards

Port Forwarding allows remote computers to connect to a specific computer or service behind the firewall in the LAN (such as web servers, FTP servers, etc).

To set up port forwarding, click `Port Forwards`and input the required parameters or click `Add a New One`.

![Port Forwards](https://static.gl-inet.com/docs/en/3/setup/gl-ax1800/firewall/port_forwards.png){class="glboxshadow"}

**Name:** The name of the rule.

**Protocol:** The protocol used, you can choose TCP, UDP, or both TCP and UDP.

**Internal IP:** The IP address assigned by the router to the device which needs to be accessed remotely.

**External Ports:** The numbers of external ports. You can enter a specific port number or a range of service ports (E.g **100-300**).

**Internal Ports:** The internal port number of the device. You can enter a specific port number. Leave it blank if it is same as the external port.

**Status:** Activate of Deactivate the rule.

## Open Ports on Router

The router's services, such as web, FTP and so on, require their respective ports to be opened on the router in order to be publicly reachable.

To open a port, click `Open Ports on Router` and input the required parameters or click `Add a New One`.

![Port Forwards](https://static.gl-inet.com/docs/en/3/setup/gl-ax1800/firewall/open_port.png){class="glboxshadow"}

**Name:** The name of the rule which can be specified by the user.

**Port:** The port number that you want to open.

**Protocol:** The protocol used, you can choose TCP, UDP, or both TCP and UDP.

**Status:** Activate of Deactivate the rule.

## DMZ

DMZ allows you to expose one computer to the Internet, so that all the inbounds packets will be redirected to the computer you set.

Click `DMZ` and enable `Open DMZ`. Input the internal IP address (E.g. 192.168.8.100) of your device which is going to receive all the inbound packets.

![Port Forwards](https://static.gl-inet.com/docs/en/3/setup/gl-ax1800/firewall/dmz.png){class="glboxshadow"}
