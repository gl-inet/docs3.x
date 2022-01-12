# FAQ

## General

<details>
  <summary>How to create a separated subnet from the main network?</summary>
  <p>
    GL.iNet routers will create a 192.168.8.1/24 subnet by default.
  </p>
</details>

## Wi-Fi

<details>
<summary>What is the range of the Wi-Fi coverage?</summary>
<p>Based on our test, our routers can cover around 80-100 meters in open area. Generally, the Wi-Fi coverage in a house should be around 20-30 meters.</p>
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
<p>Yes, only Microuter (GL-USB150) doesn't support USB modem. Please find the list of compatible USB modem <a href="../../setup/mini_router/internet/#compatible-modems">here</a>.</p>
</details>

<details>
<summary>Does this router work with SIM card directly?</summary>
<p>Only our <b>4G Smart Router (GL-MiFi)</b> with built-in LTE module supports this feature. You can insert a <b>Micro SIM</b> into the SIM card slot of the router and then set up 3G/4G modem in the web Admin Panel.</p>
<p>Please find the detailed setup instruction <a href="../../setup/gl-mifi/internet/#3-3g4g-modem">here</a>.</p>
</details>

<details>
<summary>Can I share the network data from my phone to the router?</summary>
<p>Yes, you can connect your smartphone to the USB port of the router and then set up <a href="../../setup/mini_router/internet/#4-tethering/">Tethering</a>. It works with Andriod and iPhone, but doesn’t work with Windows phone.</p>
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
<p>Please check <a href="../../tutorials/openvpn_client/#get-your-configuration-file" target="_blank">here</a> for the list of compatible OpenVPN service providers.</p>
<p>Please check <a href="../../tutorials/wireguard_client/#wireguard-providers" target="_blank">here</a> for the list of WireGuard service providers.</p>
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