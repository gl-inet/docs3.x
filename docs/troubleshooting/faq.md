# FAQ

## General

<details>
<summary>Why can't I access the router through 192.168.8.1?</summary>
<p>Please check <a href="https://docs.gl-inet.com/en/3/setup/mini_router/first-time_setup/">setup</a> to make sure you have connected to the router properly. Then, use <b>Chrome</b> or <b>Firefox</b> to visit 192.168.8.1. Don't use Internet Explorer.</p>
<p> If the problem still exists, <a href="https://docs.gl-inet.com/en/3/troubleshooting/reset/">reset</a> the router or re-install the firmware by <a href="https://docs.gl-inet.com/en/3/troubleshooting/debrick/">Uboot.</a></p>
</details>

<details>
<summary>What should I do if my router is bricked?</summary>
<p>Please re-install the firmware by <a href="https://docs.gl-inet.com/en/3/troubleshooting/debrick/">Uboot.</a></p>
</details>


<details>
<summary>How to check the firmware version of the router?</summary>
<ol type="1">
<li>Access web Admin Panel via 192.168.8.1.</li>
<li>Click <b>Upgrade</b> and check <b>Current Version</b>
<p><img src="https://static.gl-inet.com/docs/en/3/setup/mini_router/upgrade/firmware.jpg" /></p>
</ol>
</details>

<details>
<summary>How to create a separated subnet from the main network?</summary>
<p>GL.iNet routers will create a 192.168.8.1/24 subnet by default.</p>
</details>

<details>
<summary>Can I set up the router as a bridge so that it works like I am connecting to my main router directly?</summary>
<p>Yes, GL.iNet routers work in router mode by default, which will create a separated subnet for you. However, you can change its network mode so that it can behave like an extender without DHCP.</p>
<ol type="1">
<li>Access the admin panel via 192.168.8.1</li>
<li>Go to <b>MORE SETTINGS</b> -> <b>Network mode</b>.</li>
<li>Change the network mode to <b>Access Point</b>, <b>Extender</b> or <b>WDS</b>.</li>
<img src="https://static.gl-inet.com/docs/en/3/setup/mini_router/more_settings/network_mode.jpg">
</details>

<details>
<summary>Can I use the WAN port as LAN?</summary>
<p>Yes</p>
<ol type="1">
<li>
<p>Leave the WAN port of the router unconnected.</p>
</li>
<li>
<p>Connect your device to the router and access the web Admin Panel.</p>
<img src="https://static.gl-inet.com/docs/en/3/setup/mini_router/internet/internet.jpg"/>
</li>
<li>
<p>Go to <b>Internet</b>, click <b>Use as LAN</b> under the Cable section.</p>
<img src="https://static.gl-inet.com/docs/en/3/setup/mini_router/internet/cable.jpg"/>
</li>
<li>
<p>Click <b>Yes</b> to confirm.</p>
<img src="https://static.gl-inet.com/docs/en/2.x/troubleshooting/src/WAN_LAN/wan_lan.jpg"/>
</li>
</ol>
</details>


## Wi-Fi

<details>
<summary>What is the range of the Wi-Fi coverage?</summary>
<p>Based on our test, our routers can cover around 80-100 meters in open area. Generally, the Wi-Fi coverage in a house should be around 20-30 meters.</p>
</details>

<details>
<summary>Why can't I find the default SSID of the router on my device?</summary>
<p>Please  <a href="https://docs.gl-inet.com/en/3/troubleshooting/reset/">reset</a> the router or re-install the firmware by <a href="https://docs.gl-inet.com/en/3/troubleshooting/debrick/">Uboot</a></p>
</details>

<details>
<summary>How to turn off the Wi-Fi of the router?</summary>
<ol type="1">
<li>Access web Admin Panel via 192.168.8.1.</li>
<li>Click <b>Wireless</b> and turn the <b>ON/OFF</b> button to Off</li>
<p><img src="https://static.gl-inet.com/docs/en/3/setup/mini_router/wireless/status.jpg" /></p>
</ol>
</details>

<details>
<summary>Can I hide the SSID of the router?</summary>
<ol type="1">
<li>Access web Admin Panel via 192.168.8.1.</li>
<li>Click <b>Wireless</b>, choose the WiFi you want to change, click <b>Modify</b>
<li>Change SSID Visibility to Hidden</li>
<p><img src="https://static.gl-inet.com/docs/en/3/troubleshooting/faq/wireless.jpg" /></p>
</ol>
</details>

<details>
<summary>Can I set up multiple SSIDs on the router?</summary>
<ol type="1">
<li>Go to <b>Luci</b> (http://192.168.8.1/cgi-bin/luci) -> <b>Network</b> -> <b>Wireless</b>.</li>
<li>Click <b>Add</b> to create a new wireless interface.</li>
<li>In <b>Interface Configuration</b>, you can input your own SSID. Please choose <i>Access Point (WDS)</i> <b>Mode</b> and tick <i>lan</i> for the <b>Network</b>.</li>
<li>Move to <b>Wireless Security</b> to configure the Encryption.</li>
<li>Click <b>Save & Apply</b> and then reboot your router.</li>
<p><i>Note: In the Advanced Settings of Interface Configuration, you can leave it blank. If you want to give it a name such as wlan0, please use different names for different wireless interfaces.</i></p>
<p><i>Note: The name of the interface can be changed in the Advanced Settings of Interface Configuration, you can leave it blank. If you want to give it a name such as wlan0, please use different names for different wireless interfaces.</i></p>
</ol>
</details>

<details>
<summary>My device can only be connected through Ethernet cable.  Can I use this router to connect my device to a wireless network?</summary>
<p>Yes, please connect your device to the LAN port of the router and then set up <a href="https://docs.gl-inet.com/en/3/setup/mini_router/internet/#2-repeater">repeater</a>.</p>
<p><i>Note:<li>For Microuter, if your device has USB port, connect Microuter to it and check if Microuter can create a USB to Ethernet connection. Then set up repeater.</li><li>For GL-AR300M-Lite, since it has only one WAN port, you can only do that after you have connected to it wirelessly and changed its WAN port to LAN port.</li></i></p>
</details>

<details>
<summary>Can I connect to an existing Wi-Fi network (i.e. public Wi-Fi or hotel Wi-Fi) and then create my own Wi-Fi network? </summary>
<p>Yes, our routers will boardcast their own Wi-Fi network by default. Once you have connected to the router, you can connect it to an existing Wi-Fi network.</p>
</details>

<details>
<summary>Why there is no captive portal page for me to enter my authentication information when I connect to a public hotspot?</summary>
<p>Please follow the instructions below to disable the DNS rebind protection.</p>
<ol type="1">
<li>
	<p>Connect to the public hotspot which requires authentication through captive portal.</p>
    <img src="https://static.gl-inet.com/docs/en/2.x/troubleshooting/src/captive_portal/1.jpg"/>
    <img src="https://static.gl-inet.com/docs/en/2.x/troubleshooting/src/captive_portal/6.jpg"/>
</li>
<li>
    <p>Go to Admin Panel -> MORE SETTINGS -> Custom DNS Server. Then, disable <b>DNS Rebinding Attack Protection</b>.</p>
	<img src="https://static.gl-inet.com/docs/en/2.x/troubleshooting/src/captive_portal/4.jpg"/>
</li>
<li>
	<p>Use your web browser to visit a webpage, it will be redirected to the captive portal of the hotspot automatically.</p>
    <p>If you are using smartphone but your web browser doesn't redirect to the captive portal. Please turn off the Wi-Fi of your smartphone and then turn it on and reconnect to the Wi-Fi of your router again. The captive portal should be popped up directly after you entered the Wi-Fi password.
    </p>
	<img src="https://static.gl-inet.com/docs/en/2.x/troubleshooting/src/captive_portal/7.jpg"/>
</li>
</ol>
</details>

<details>
<summary>Which 2.4GHz/5GHz WiFi channels can I choose on this router?</summary>
<p>For 2.4GHz, you can choose channel 1 to 11.</p>
<p>For 5GHz, you can choose channel 36 to 48, 149 to 165. Our routers don't support DFS Channel 52 to 140.</p>
</details>

<details>
<summary>Can I connect to a EAP (Extensible Authentication Protocol) Wi-Fi network which requires username and password authentication?</summary>
<p>Yes, the Admin Panel will ask you for your authentication information when you connect to a EAP Wi-Fi network. However, GL-MT300N-V2 doesn’t support EAP.</p>
</details>


## Hardware/Accessory

<details>
<summary>Can I power on the router using the USB port of my computer or power bank?</summary>
<p>The USB port on a computer or a GOOD power bank should be able to provide enough power for the router.</p><p>However, it may cause malfunction if the power input is unstable or insufficient.</p>
</details>

<details>
<summary>Can I install my own external antenna?</summary>
<p>Only the external antenna version or the product model marked with suffix "<b>Ext</b>" (e.g. GL-AR300M-Ext) has antenna jack. You can connect a <b>RP-SMA</b> Wi-Fi antenna to it.</p>
<p>However, For internal antenna version, you <b>cannot</b> connect any external antenna to it.</p>
</details>

<details>
<summary>Can it work with 3G/4G USB modem?</summary>
<p>Yes, only Microuter (GL-USB150) doesn't support USB modem. Please find the list of compatible USB modem <a href="https://docs.gl-inet.com/en/3/setup/mini_router/internet/#compatible-modems">here</a>.</p>
</details>

<details>
<summary>Does this router work with SIM card directly?</summary>
<p>Only our <b>4G Smart Router (GL-MiFi)</b> with built-in LTE module supports this feature. You can insert a <b>Micro SIM</b> into the SIM card slot of the router and then set up 3G/4G modem in the web Admin Panel.</p>
<p>Please find the detailed setup instruction <a href="https://docs.gl-inet.com/en/3/setup/4g_smart_router/internet/#3-3g4g-modem">here</a>.</p>
</details>

<details>
<summary>Can I share the network data from my phone to the router?</summary>
<p>Yes, you can connect your smartphone to the USB port of the router and then set up <a href="https://docs.gl-inet.com/en/3/setup/mini_router/internet/#4-tethering/">Tethering</a>. It works with Andriod and iPhone, but doesn’t work with Windows phone.</p>
</details>

<details>
<summary>Does it charge my phone's battery during Tethering?</summary>
<p>Yes, when you connect your phone to the USB port of the router, the router will charge your phone. However, the charging rate may be slower than the power consumption rate of your phone.</p>
</details>

<details>
<summary>Can I connect my USB printer to the router?</summary>
<p>It doesn’t work with USB printer by default. You need to install necessary driver and printer server (cups).</p>
</details>

<details>
<summary>Can I use this router with USB storage device (e.g. USB stick, USB hard drive)?</summary>
<p>Yes, please make sure your storage device is formatted in FAT32, NTFS, Ext3, Ext4. exFAT is not supported.</p>
<p>We have tested 64GB USB stick and 1TB USB hard drive but we haven't tested the storage device with higher storage capacity so far.
</details>

<details>
<summary>Can I connect another Wi-Fi dongle to the USB port of the router so as to create another radio?</summary>
<p>Yes, our routers support Wi-Fi dongles with 3070 or 8187 chipset.</p>
</details>

<details>
<summary>Can I power on the router over Ethernet cable (PoE)?</summary>
<p>Only GL-AR150 and GL-AR750 have PoE option.</p>
<p>The PoE only works on the <b>WAN port</b>. You should use an active or passive 48V 802.3af PoE injector. Also, <b>don't</b> use USB power and PoE at the same time. Otherwise, the router will burn immediately.
</details>


## Applications

<details>
<summary>Which VPN protocol and VPN service provider does the router support?</summary>
<p>Our routers support OpenVPN and WireGuard.</p>
<p>Please check <a href="https://docs.gl-inet.com/en/3/app/openvpn/#get-your-configuration-file" target="_blank">here</a> for the list of compatible OpenVPN service providers.</p>
<p>Please check <a href="https://docs.gl-inet.com/en/3/app/wireguard/#wireguard-providers" target="_blank">here</a> for the list of WireGuard service providers.</p>
</details>

<details>
<summary>How to install OpenWrt package to the router?</summary>
<p>You can install OpenWrt package to the router through Admin Panel.</p>
<ol type="1">
<li>Access the web Admin Panel via 192.168.8.1</li>
<li>Go to <b>APPLICATIONS</b> -> <b>Plug-ins</b>.</li>
<li>Click <b>Update</b> to update the package repository and install the package that you need.</li>
<p>Or You can SSH to the router. We suggest <a href="http://127.0.0.1:8000/app/ssh/#1-download-and-install-a-putty">Putty</a> for Windows users. Mac/Linux users can use <b>Terminal</b>.<br>Once you have SSH to the router, you can install OpenWrt package by these commands:
<br><i>opkg update<br>opkg install PackageName</i></p>
</details>

<details>
<summary>Why my OpenVPN connection returned Auth_failed?</summary>
<P>Your username/password for OpenVPN login over a router with your VPN provider is not the same username password combination (email/password) you use when you login the VPN provider's website. You should be able to find the configuration on the account dashboard.</p>
</details>