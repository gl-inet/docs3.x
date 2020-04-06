# OpenVPN

GL.iNet routers have pre-installed OpenVPN server and client. 


---

## OpenVPN Client

OpenVPN client requires OpenVPN configuration file (.ovpn) to create the OpenVPN connection. If you have your own VPN service provider but you don't know how to get the configuration file, please refer to [Get your configuration file](openvpn.md#get-your-configuration-file).

Click `+ Add a New VPN Configuration` to upload the configuration file.

![client](https://static.gl-inet.com/docs/en/3/app/openvpn/src/client.jpg)



### 1) Upload your OpenVPN configuration file

Simply drag and drop your file to the pop up windows. It can be a single .ovpn file or a zip/tar.gz file which contains multiple .ovpn files.

Be careful that some .ovpn files use separated ca, cert, crl files. These files must be zipped together with the .ovpn file before upload.

![Upload](https://static.gl-inet.com/docs/en/3/app/openvpn/src/upload.jpg)



### 2) Enter Description, Username and Password

Enter a description for your OpenVPN configuration file and then click `Submit` to finish the upload process. In some cases, it will ask you to enter your username and password.

![add](https://static.gl-inet.com/docs/en/3/app/openvpn/src/add.jpg)



### 3) Connect to the OpenVPN server

You can now click `Connect` to start the OpenVPN connection.

![connect](https://static.gl-inet.com/docs/en/3/app/openvpn/src/connect.jpg)



Once connected, you should find your IP address, data received/sent.

![connected](https://static.gl-inet.com/docs/en/3/app/openvpn/src/connected.jpg)



### 4) Manage configuration files

Click `Management` to check the list of configuration files. You can modify the **Description**, **User name** or **Password** of each configuration file. You can also add, delete a configuration file or even purge all your uploaded configuration files.

If your configuration file is a zip/tar.gz file which includes multiple ovpn files, you can choose an individual .ovpn file that you would like to connect in **Server**.

![management](https://static.gl-inet.com/docs/en/3/app/openvpn/src/management.jpg)



## Get your configuration file

We have tested different VPN service providers. Therefore, if you don't know how to get the configuration file, you can follow the instruction below. However, you have to contact your service provider for the configuration file if they are not listed below. 

If you have any problem in the setup of OpenVPN, please contact [support@gl-inet.com](mailto:support@gl-inet.com)

Recommended:

<details>
<summary>NordVPN</summary>
<p><a href="https://go.nordvpn.net/aff_c?offer_id=15&amp;aff_id=12016&amp;url_id=902" target="_blank">Official Website</a>

Tips: if the zip file is too big to upload, you can upload single ovpn file.</p>

<a href="https://downloads.nordcdn.com/configs/archives/servers/ovpn.zip">Download</a> directly.
</details>


<details>
<summary>PIA</summary>
<p><a href="https://www.privateinternetaccess.com/pages/buy-vpn/glinet" target="_blank">Official Website</a></p>

<a href="https://www.privateinternetaccess.com/openvpn/openvpn.zip">Download</a> directly.
</details>


<details>
<summary>Surfshark</summary>
<p><a href="https://get.surfshark.net/aff_c?offer_id=6&aff_id=1400" target="_blank">Official Website</a></p>

<p>Login and <a href="https://api.surfshark.com/v1/server/configurations">Download</a> directly.</p>
</details>


<details>
<summary>PureVPN</summary>
<p><a href="https://billing.purevpn.com/aff.php?aff=35535" target="_blank">Official Website</a></p>

<a href="https://s3-us-west-1.amazonaws.com/heartbleed/router/Recommended-CA2.zip">Download</a> directly.
</details>


<details>
<summary>TorGuard</summary>
<p><a href="https://torguard.net/aff.php?aff=3040" target="_blank">Official Website</a></p>
<ol type="1">
<li>
    <p>If you are using <a href="https://torguard.net/aff.php?aff=3040" target="_blank">TorGuard</a>, you need to login the control panel and generate the ovpn file from the "Tools" menu. Please select "All", using udp or tcp and select Cipher. Then press <code>Generate Config</code> and the zip file will be downloaded automatically.<img alt="Generate ovpn" src="https://static.gl-inet.com/docs/en/3/app/wireguard/torguard_generate_ovpn.jpg"/></p>
</li>
<li>
    <p>The username and password for openvpn connection is different from your control panel login. You can change the service username and password in my service credentials. </p>
    <p><img alt="torguard my service credentials" src="https://static.gl-inet.com/docs/en/3/app/wireguard/torguard_my_service_credentials.jpg"/></p>
    <p>You can generate a random login username and password.<img alt="Set password" src="https://static.gl-inet.com/docs/en/3/app/wireguard/torguard_set_password.jpg"/></p>
</li>
</ol>
</details>


<details>
<summary>PrivateVPN</summary>
<p><a href="https://affiliate.privatevpn.com/scripts/click.php?a_aid=5e3a511658bc3" target="_blank">Official Website</a></p>
<a href="https://privatevpn.com/client/PrivateVPN-TUN.zip">Download</a> directly.
</details>


<details>
<summary>Proton VPN</summary>
<p><a href="https://proton.go2cloud.org/SH9s" target="_blank">Official Website</a></p>
<ol type="1">
<li>Login your <a href="https://proton.go2cloud.org/SH9s">Proton VPN</a> account.</li>
<p><img alt="ovpn manager" src="https://static.gl-inet.com/docs/en/3/app/openvpn/proton1.png" /></p>
<li>Click "Download" in the left-hand side.</li>
<p><img alt="ovpn manager" src="https://static.gl-inet.com/docs/en/3/app/openvpn/proton2.png" /></p>
<li>Choose Router</li>
<p><img alt="ovpn manager" src="https://static.gl-inet.com/docs/en/3/app/openvpn/proton3.png" /></p>
<li>Choose the protocol based on your preference and download the configuration files.</li>
<p><img alt="ovpn manager" src="https://static.gl-inet.com/docs/en/3/app/openvpn/proton4.png" /></p>
</ol>
</details>


<details>
<summary>ExpressVPN</summary>
<p><a href="https://www.linkev.com/?a_fid=glinet" target="_blank">Official Website</a></p>

<p>*Information quoted from <a href="https://www.expressvpn.com/support/vpn-setup/manual-config-for-linux-with-openvpn/#download">Expressvpn official instruction</a></p>
<ol type="1">

<li>Log in to your <a href="https://www.linkev.com/?a_fid=glinet" target="_blank">ExpressVPN</a> account.</li>
<p><img alt="ovpn manager" src="https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/ExpressVPN1.jpg" /></p>
<li>Once you’ve logged in to the website, click on Set Up ExpressVPN on the Active Subscriptions page. This will take you to the Downloads page.</li>
<p><img alt="ovpn manager" src="https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/ExpressVPN2.png" /></p>
<li>Click on Manual Config on the left side of the screen and then select the OpenVPN tab on the right. You will first see your username and password and then a list of OpenVPN configuration files.</li>
<p>Find the location(s) you want to connect to (e.g., Los Angeles, New York, Hong Kong), then download and save the .ovpn file(s) to your desktop.</p>
<p>Note: Please have your username and password ready, as you will be asked to enter them later in the setup process.</p>
<p><img alt="ovpn manager" src="https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/ExpressVPN3.png" /></p>
</ol>

</details>


Others:

<details>
<summary>AirVPN</summary>
<p><a href="https://airvpn.org/?referred_by=402389" target="_blank">Official Website</a></p>

<ol type="1">
<li>Login your AirVPN acoount</li>
<p><img alt="ovpn manager" src="https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/AirVPN1.png" /></p>
<li>Choose Config Generator on the left and then choose Linux as your operating system. Next, choose your preferred server.</li>
<p><img alt="ovpn manager" src="https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/AirVPN2.png" /></p>
<li>You will be able to see the download page of the configuration file.</li>
<p><img alt="ovpn manager" src="https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/AirVPN3.png" /></p>

</ol>

</details>



<details>
<summary>Astrill</summary>
<p><a href="https://www.astrill.com/a/dik2masnw6ig" target="_blank">Official Website</a></p>
<p>*Information quoted from <a href="https://wiki.astrill.com/Astrill_Setup_Manual:How_to_configure_OpenVPN_with_OpenVPN_application_on_Windows">Astrill official instruction</a></p>
<ol type="1">
<li>Generate and Download Astrill Openvpn configuration ZIP</li>
<p><img alt="ovpn manager" src="https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/Astrill1.png" /></p>
<p><img alt="ovpn manager" src="https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/Astrill2.png" /></p>
<li>Type a Description like OPENVPN_GUI.</li>
<li>Click on ADD to my certificates button.</li>
<p><img alt="ovpn manager" src="https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/Astrill3.png" /></p>
<li>Once OpenVPN certificate is added, click on Download button.</li>
<p><img alt="ovpn manager" src="https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/Astrill4.png" /></p>
</ol>
</details>


<details>
<summary>CactusVPN</summary>
<p><a href="https://www.cactusvpn.com/">Official Website</a></p>
<p><a href="https://www.cactusvpn.com/downloads/">Download</a> directly.</p>
<p><img alt="ovpn manager" src="https://static.gl-inet.com/docs/en/3/app/openvpn/CactusVPN1.jpg" /></p>
</details>


<details>
<summary>Cryptostorm</summary>
<p><a href="https://cryptostorm.is/">Official Website</a></p>
<p><a href="https://cryptostorm.is/configs/ecc/">Download</a> directly.</p>
</details>


<details>
<summary>CyberGhost</summary>
<p><a href="https://support.cyberghostvpn.com/hc/en-us">Official Website</a></p>
<p>*Information quoted from <a href="https://support.cyberghostvpn.com/hc/en-us/articles/213811885-Router-How-to-configure-OpenVPN-for-flashed-DD-WRT-routers?fbclid=IwAR0_IicBlnNzVqlKh0mAHFyM6uvsGgBQooYfMyJ0bHgb13Eidn8KhXnd6Y0">CyberGhost official instruction</a></p>
<ol type="1">
<li>Login your CyberGhost VPN online account.</li>
<p><img alt="ovpn manager" src="https://static.gl-inet.com/docs/en/3/app/openvpn/Cyberghost/Cyberghost1.png" /></p>
<li>Click on 'My Devices'  > click 'Other' > choose 'Configure new device'.</li>
<p><img alt="ovpn manager" src="https://static.gl-inet.com/docs/en/3/app/openvpn/Cyberghost/Cyberghost2.png" /></p>
<li>At the new screen, in the 'Server configuration' tab, the desired parameters can be configured. For the purpose of setting OpenVPN for your DD-WRT Router, choose 'OpenVPN' from the Protocol drop down menu. Your desired country and server group, as described below, need to be defined too:</li>
<p><img alt="ovpn manager" src="https://static.gl-inet.com/docs/en/3/app/openvpn/Cyberghost/Cyberghost3.png" /></p>
<ul>
<li>Protocol: For Router configurations, please choose OpenVPN</li>
<li>Country: Since native protocol connections may only be used with exactly one server you now have to choose the country you want to surf from; the server to be used in this country will be chosen by CyberGhost automatically.</li>
<li>Server group: Choose the server group and the OpenVPN protocol (UDP or TCP) you want to use:
<p>UDP allows higher speed than the TCP version, but can result in broken downloads in some cases. This is the default setting.</p>
<p>TCP allows more stable connections than the UDP version, but is a bit slower. Choose this version, if you have recurrent connection issues such as sudden disconnections.</p>
</li>
</ul>
<p>After setting up your preferred settings, save them with 'Save and download configuration'.</p>
</ol>
</details>



<details>
<summary>FinchVPN</summary>
<p><a href="https://www.finchvpn.com/">Official Website</a></p>

<ol type="1">

<li>Login your FinchVPN account.</li>
<p><img alt="ovpn manager" src="https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/finchvpn1.jpg" /></p>
<li>Go to the Download page and click Download under FinchVPN OpenVPN Config.</li>
<p><img alt="ovpn manager" src="https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/finchvpn2.jpg" /></p>
<li>Choose Linux</li>
<p><img alt="ovpn manager" src="https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/finchvpn3.jpg" /></p>
<li>Choose the protocol based on your preference. Generally, you can choose the first one “Port 8484 over UDP”</li>
<p><img alt="ovpn manager" src="https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/finchvpn4.jpg" /></p>
<li>Remember to tick the box to include your username and password before download the file.</li>
<p><img alt="ovpn manager" src="https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/finchvpn5.jpg" /></p>
</ol>
</details>



<details>
<summary>HideMyAss</summary>
<p><a href="https://www.hidemyass.com/">Official Website</a></p>
<a href="https://vpn.hidemyass.com/vpn-config/vpn-configs.zip">Download</a> directly.
</details>


<details>
<summary>IPVANISH</summary>
<p><a href="https://www.ipvanish.com/" target="_blank">Official Website</a></p>
<p>You can download all of the config files for all of the servers from <a href="https://www.ipvanish.com/software/configs/">www.ipvanish.com/software/configs/ (configs.zip).</a> </p>
<p><img src="https://static.gl-inet.com/docs/en/3/app/openvpn/ipvanish_download_openvpn_configs.jpg" />></p>
<p>Drag the configs.zip to the New OpenVPN Configuration dialog</p>
<p><img src="https://static.gl-inet.com/docs/en/3/app/openvpn/ipvanish_drag_import_configs.jpg" /></p>
<p>User Name and Password is your IPVanish username and password.</p>
<p><a href="https://support.ipvanish.com/hc/en-us/articles/360001329813-Android-OpenVPN-Setup" target >Refer link</a></p>
</details>


<details>
<summary>Ivacy</summary>
<p><a href="https://billing.ivacy.com/page/22852" target="_blank">Official Website</a></p>
<a href="https://s3.amazonaws.com/ivacy-apps/openvpn-files/OpenVPN-Configs.zip">Download</a> directly.
</details>


<details>
<summary>Proxy.sh</summary>
<p><a href="https://proxy.sh/panel/aff.php?aff=1458" target="_blank">Official Website</a></p>

<p>Download according to the service that you have subscribed:</p>
<p><a href="https://proxy.sh/s/openvpn">$2 customers</a></p>
<p><a href="https://proxy.sh/m/openvpn">$5 customers</a></p>
<p><a href="https://proxy.sh/l/openvpn">$10 customers</a></p>
<p><a href="https://proxy.sh/p/openvpn">$20 customers</a></p>

</details>





<details>
<summary>Proxpn</summary>
<p><a href="https://secure.proxpn.com/?a_aid=5ac450e27df6f" target="_blank">Official Website</a></p>

<a href="https://www.proxpn.com/updater/locations.html">Download</a> directly.

</details>


<details>
<summary>SaferVPN</summary>
<p><a href="https://safervpn.com/?a_aid=563" target="_blank">Official Website</a></p>

<a href="https://support.safervpn.com/hc/en-us/articles/360035425314-What-are-SaferVPN-s-OpenVPN-configuration-ovpn-files-for-manual-setup-">Download</a> directly.

<p><img alt="ovpn manager" src="https://static.gl-inet.com/docs/en/3/app/openvpn/SaferVPN1.png" /></p>

</details>





<details>
<summary>StrongVPN</summary>
<p><a href="https://strongvpn.com/">Official Website</a></p>

<ol type="1">

<li>Login with your StrongVPN account and then you will be able to see the summary of your VPN account. Click “Change Server”.</li>
<p><img alt="ovpn manager" src="https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/StrongVPN1.png" /></p>
<li>Filter the servers by clicking OPEN and choose one of the server from the list.</li>
<p><img alt="ovpn manager" src="https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/StrongVPN2.png" /></p>
<p><img alt="ovpn manager" src="https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/StrongVPN3.png" /></p>
<li>Go back to accounts summary and click Account Setup Instructions.</li>
<p><img alt="ovpn manager" src="https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/StrongVPN4.png" /></p>
<li>Click Linux/Max config file.</li>
<p><img alt="ovpn manager" src="https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/StrongVPN5.png" /></p>

</ol>

</details>




<details>
<summary>VPN.AC</summary>
<p><a href="https://vpn.ac/aff.php?aff=1424" target="_blank">Official Website</a></p>

<a href="https://vpn.ac/ovpn/">Download</a> directly.

<p><img alt="ovpn manager" src="https://static.gl-inet.com/docs/en/3/app/openvpn/VPN.Ac1.png" /></p>

</details>






<details>
<summary>VPNGate</summary>
<p><a href="http://www.vpngate.net/en/">Official Website</a></p>

<ol type="1">

<p>The OpenVPN configuration files are listed on the <a href="http://www.vpngate.net/en/">VPN Gate website</a>
according to the server location.</p>
<li>Click OpenVPN Config file under the column “OpenVPN”.</li>
<p><img alt="ovpn manager" src="https://static.gl-inet.com/docs/en/3/app/openvpn/VPNGate1.png" /></p>
<li>You will see the download page.</li>
<p><img alt="ovpn manager" src="https://static.gl-inet.com/docs/en/3/app/openvpn/VPNGate2.png" /></p>
</ol>

</details>





<details>
<summary>VPN Unlimited</summary>
<p><a href="https://keepsolid.g2afse.com/click?pid=270&offer_id=7" target="_blank">Official Website</a></p>

<ol type="1">

<p>*Information quoted from <a href="https://www.vpnunlimitedapp.com/en/info/manuals/how-to-manually-create-vpn-conf">VPN unlimited official instruction</a></p>
<p>Start out by logging in to your User Office, press Manage for the VPN Unlimited service, and follow a few simple steps:</p>
<li>Select a device</li>
<p>Pick a device from the list or create a new one. If you are out of free slots, delete an old device or buy extra slots.</p>
<p><img alt="ovpn manager" src="https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/KeepSolid1.png" /></p>
<li>
<p>Choosethe desired server location</p>
<p>VPN Unlimited offers a large variety ofservers, namely 400+ in 70+ locations. In this case, let it be Germany.</p>
</li>
<li>Select the VPN protocol</li>
<p>For the IKEv2 protocol, you will also need to specify your device’s platform.</p>
<p><img alt="ovpn manager" src="https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/KeepSolid2.png" /></p>
<li>Create a configuration</li>
<p>Press Generate and you will get all the data required to set up a VPN connection.</p>
<p><img alt="ovpn manager" src="https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/KeepSolid3.png" /></p>

</ol>

</details>

---

## OpenVPN Server

You can set up an OpenVPN server on GL.iNet router. Click `+ Generate a configuration file`.

![server](https://static.gl-inet.com/docs/en/3/app/openvpn/src/server.jpg)



### 1) Server configuration

There are preset OpenVPN server configurations. You can also click `Modify` to change them manually. Click `Apply` when you finish.

![ server configuration](https://static.gl-inet.com/docs/en/3/app/openvpn/src/server_settings.jpg)



### 2) Export OpenVPN configuration file

Click `Export Config` to download the OpenVPN configuration file which you need to upload when you are configuring your OpenVPN client.

![server export](https://static.gl-inet.com/docs/en/3/app/openvpn/src/server_export.jpg)



### 3) Start the OpenVPN server

Click `Start` to start your OpenVPN server. Otherwise, you will not be able to connect to the OpenVPN server by using its configuration file.

![start server](https://static.gl-inet.com/docs/en/3/app/openvpn/src/server_settings.jpg)

![started](https://static.gl-inet.com/docs/en/3/app/openvpn/src/server_connected.jpg)

