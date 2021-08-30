# Can't Access Web Admin Panel

Sometimes you may be unable to access 192.168.8.1 to login web Admin Panel, there maybe several reasons.

* You computer or mobile phone doesn't connect to router.
* 192.168.8.1 is the default IP address of the router, you may have changed this IP.
* The cache or extension of browser may cause unaccessable.
* The router is bricked.

Follow the steps to fix this issue.

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

    1. System Preferences -> Network

    2. In the left column, click on the network connection. For an Ethernet connection, the router IP address will be shown.

    ![router ip of ethernet on mac os](https://static.gl-inet.com/docs/en/3/troubleshooting/canot_access_web_panel/router_ip_of_ethernet_on_mac_os.jpg)

    For a Wi-Fi connection, click the "Advanced..." button, and then the "TCP/IP" tab on the top of the windows. The router IP address will be shown.

    ![router ip of wifi on mac os](https://static.gl-inet.com/docs/en/3/troubleshooting/canot_access_web_panel/router_ip_of_wifi_on_mac_os.jpg)

=== "iOS"

    1. Settings -> Wi-Fi
    2. Tap the information icon(blue i, in a circle) of current connected Wi-Fi. The router IP address will be shown.

    ![router ip address on iphone](https://static.gl-inet.com/docs/en/3/troubleshooting/canot_access_web_panel/router_ip_address_on_iphone.jpg)

=== "Android"

    This will vary from different Android device.

    1. Settings -> Network & internet
    2. Tab on Wi-Fi and find the network you are connected to, click on the settings icon to manage its settings
    3. Tap on the Advanced dropdown. If if offers you options for Static or Dynamic IPs, select Static
    4. Either way, you should see your router's IP under Gateway.

## Access the router's IP address

1. Make sure you are using Chrome/Edge/Safari, then try to access your IP address again.
2. In order to avoid problems caused by the browser cache and extension, please open the incognito window. Then try to access the IP address of router again.
3. If step 2 failed, try [Reset](../reset) to back to factory default.
4. If the reset doesn't work, you can try [Debrick via uboot](../debrick).
