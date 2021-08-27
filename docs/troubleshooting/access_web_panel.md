# Can't Access Web Admin Panel

Sometimes you may be unable to access 192.168.8.1 to login web Admin Panel, please follow the guide below to solve this problem.

---

## Check the connection

If connected by ethernet cable, make sure your WAN/LAN port connection is correct. WAN port is connected to an Internet source and LAN port is connected to devices.

If connected by Wi-Fi, make sure the SSID is correct.

## Check router's IP address

Then follow the steps below to check the router's IP address.



=== "Windows 7"

    Control Panel -> Network and Internet -> Network and Sharing Center -> Change adapter settings

    Right click the network -> Status -> Details
    
    the IP address of router is the `IPv4 DNS Server`
    
    ![property of network](https://static.gl-inet.com/docs/en/3/troubleshooting/canot_access_web_panel/property_of_network_win7.png)

=== "Windows 10"

    Settings -> Network & Internet -> Status, Click the Properties of Ethernet or Wi-Fi

    the IP address of router is the `IPv4 DNS servers`

    ![property of network](https://static.gl-inet.com/docs/en/3/troubleshooting/canot_access_web_panel/property_of_network_win10.jpg)

=== "Mac OS"

    Coming soon

*Your IP address results determine the next step.*

### Your IP address is incorrect

If the IP address is incorrect, check your connection again.

1. Try [Reset](reset) to back to factory default.
2. If the reset doesn't work, you can try [Debrick via uboot](debrick).

### Your IP address is correct

1. Make sure you are using Chrome/Firefox, then try to access 192.168.8.1 again.
2. In order to avoid problems caused by the cache, click **Ctrl + Shift + n** in Chrome to enter the incognito mode. Then try to access 192.168.8.1 again.
   ![access web admin panel via browser incognito mode](https://static.gl-inet.com/docs/en/3/troubleshooting/canot_access_web_panel/2.png)
