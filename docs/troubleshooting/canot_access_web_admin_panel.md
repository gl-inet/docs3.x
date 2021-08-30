# Can't Access Web Admin Panel

Sometimes you may be unable to access 192.168.8.1 to login web Admin Panel, please follow the guide below to solve this problem. 192.168.8.1 is the default IP address of the router, as well as for access web Admin Panel, you may have changed this IP.

---

## Check the connection

If connected by ethernet cable, make sure your WAN/LAN port connection is correct. WAN port is connected to an Internet source and LAN port is connected to devices.

If connected by Wi-Fi, make sure the SSID is correct.

## Check router's IP address

Then follow the steps below to check the router's IP address.

=== "Windows 7"

    Control Panel -> Network and Internet -> Network and Sharing Center -> Change adapter settings

    Right click the network -> Status -> Details
    
    The IP address of router is the `IPv4 DNS Server`
    
    ![property of network on windows 7](https://static.gl-inet.com/docs/en/3/troubleshooting/canot_access_web_panel/property_of_network_win7.jpg)

=== "Windows 10"

    Settings -> Network & Internet -> Status, Click the Properties of Ethernet or Wi-Fi

    The IP address of router is the `IPv4 DNS servers`

    ![property of network on windows 10](https://static.gl-inet.com/docs/en/3/troubleshooting/canot_access_web_panel/property_of_network_win10.jpg)

=== "Mac OS"

    Coming soon

## Access the router's IP address

1. Make sure you are using Chrome/Edge/Safari, then try to access your IP address again.
2. In order to avoid problems caused by the browser cache and extension, please open the incognito window. Then try to access the IP address of router again.
3. Try [Reset](../reset) to back to factory default.
4. If the reset doesn't work, you can try [Debrick via uboot](../debrick).
