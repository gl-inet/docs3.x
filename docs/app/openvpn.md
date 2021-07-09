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

<p>Download OpenVPN client configuration files. We recommend going into <a href="https://nordvpn.com/servers/tools/" target="_blank">NordVPN recommended server utility here</a>.</p>
<p><img alt="nordvpn server utility" src="https://static.gl-inet.com/docs/en/3/app/openvpn/nordvpn/nordvpn_server_utility.jpg"> </p>
<p>As show above, download the configuration file, then go to the web Admin Panel, default is http://192.168.8.1, OpenVPN Client --> Add a New OpenVPN Configuration </p>
<p><img alt="openvpn client" src="https://static.gl-inet.com/docs/en/3/app/openvpn/nordvpn/openvpn_client.jpg"/></p>
<p>It will pop up a dialog.</p>
<p><img alt="openvpn client" src="https://static.gl-inet.com/docs/en/3/app/openvpn/nordvpn/new_openvpn_configuration.jpg"/></p>
<p>Drag the .ovpn file jsut downloaed to the dialog, it will ask username and password. Input the NordVPN credentials and click <b>Submit</b>.</p>
<p><img alt="openvpn client" src="https://static.gl-inet.com/docs/en/3/app/openvpn/nordvpn/nordvpn_username_password.jpg"/></p>
<p>Choose the configuration name and click <b>Connect</b>.</p>
<p><img alt="openvpn client" src="https://static.gl-inet.com/docs/en/3/app/openvpn/nordvpn/nordvpn_connect.jpg"/></p>

<p>Of course you can download all servers configs <a href="https://downloads.nordcdn.com/configs/archives/servers/ovpn.zip">here</a>.</p>
<p>Tips: if the zip file is too big to upload, you can delete some .ovpn in .zip file or upload single .ovpn file.</p>
<p><a href="https://support.nordvpn.com/Connectivity/Router/1047409122/GL-iNet-setup-with-NordVPN.htm" target="_blank">Refer link</a></p>
</details>


<details>
<summary>PIA</summary>
<p><a href="https://www.privateinternetaccess.com/pages/buy-vpn/glinet" target="_blank">Official Website</a></p>

<a href="https://www.privateinternetaccess.com/openvpn/openvpn.zip">Download</a> directly.
</details>


<details>
<summary>Surfshark</summary>
<p><a href="https://get.surfshark.net/aff_c?offer_id=6&aff_id=1400" target="_blank">Official Website</a></p>

<p>Login and <a href="https://api.surfshark.com/v1/server/configurations">Download</a> directly, or read this <a href="https://support.surfshark.com/hc/en-us/articles/360011856259-How-to-set-up-Surfshark-on-GL-iNet-router-3-x-firmware-" target="_blank">guide</a>.</p>
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
    <p>If you are using <a href="https://torguard.net/aff.php?aff=3040" target="_blank">TorGuard</a>, you need to login the control panel and find <b>Config Generator</b> from the <b>Tools</b> menu. Choose the <b>VPN Server</b> and some other options. Then click <b>Generate Config</b> a config file will be downloaded automatically.</p>
    <p><img alt="Generate ovpn" src="https://static.gl-inet.com/docs/en/3/app/openvpn/torguard/torguard_menu.jpg"/></p>
</li>
<li>
    <p>The username and password for OpenVPN connection is different from your control panel login. You can find the VPN username and VPN password below. </p>
    <p><img alt="torguard vpn username vpn password" src="https://static.gl-inet.com/docs/en/3/app/openvpn/torguard/torguard_vpnusername_vpnpassword.png" /></p>
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
<p><a href="https://www.xvbelink.com/?a_fid=glinet" target="_blank">Official Website</a></p>

<p>*Information quoted from <a href="https://www.expressvpn.com/support/vpn-setup/manual-config-for-linux-with-openvpn/#download">Expressvpn official instruction</a></p>
<ol type="1">

<li>Log in to your <a href="https://www.xvbelink.com/?a_fid=glinet" target="_blank">ExpressVPN</a> account.</li>
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
<summary>bolehvpn</summary>
<p><a href="https://www.bolehvpn.net/" target="_blank">Official Website</a></p>
<p>Login in <a href="https://users.bolehvpn.net/" target="_blank">Dashboard</a>, download your configuration files and select the <a href="https://users.bolehvpn.net/download/inline/6" target="_blank">Linux_iOS inline</a> format. Extract the zip files after completing the download.</p>
<p><a href="https://www.bolehvpn.net/clients-installations/#1487691248224-0c435dba-d612" target="_blank">Refer link</a></p>
</details>


<details>
<summary>CactusVPN</summary>
<p><a href="https://billing.cactusvpn.com/aff.php?aff=2310" target="_blank">Official Website</a></p>
<p><a href="https://www.cactusvpn.com/downloads/" target="_blank">Download</a> directly.</p>
<p><img alt="ovpn manager" src="https://static.gl-inet.com/docs/en/3/app/openvpn/CactusVPN1.jpg" /></p>
</details>


<details>
<summary>Cryptostorm</summary>
<p><a href="https://cryptostorm.is/" target="_blank">Official Website</a></p>
<p><a href="https://cryptostorm.is/configs/ecc/" target="_blank">Download</a> directly.</p>
</details>


<details>
<summary>CyberGhost</summary>
<p><a href="https://support.cyberghostvpn.com/hc/en-us" target="_blank">Official Website</a></p>
<p>*Information quoted from <a href="https://support.cyberghostvpn.com/hc/en-us/articles/213811885-Router-How-to-configure-OpenVPN-for-flashed-DD-WRT-routers?fbclid=IwAR0_IicBlnNzVqlKh0mAHFyM6uvsGgBQooYfMyJ0bHgb13Eidn8KhXnd6Y0" target="_blank">CyberGhost official instruction</a></p>
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
<summary>FastestVPN</summary>
<p><a href="https://go.fastestvpn.com/affiliate/pap?a_aid=5ffd2a3e9d687" target="_blank">Official Website</a></p>
<ol type="1">
<li>Download FastestVPN Config Files zip folder for OpenVPN TCP and UDP from <a href="https://support.fastestvpn.com/download/openvpn-tcp-udp-config-files/">here</a>. Extract the folder somewhere.</li>
<li>Go to the web Admin Panel, default is <a href="http://192.168.8.1" target="_blank">http://192.168.8.1</a>, OpenVPN Client --> Add a New OpenVPN Configuration</li>
<p><img alt="GL.iNet OpenVPN Client" src="https://static.gl-inet.com/docs/en/3/app/openvpn/fastestvpn/fastestvpn1.png" /></p>
<li>Go to the <b>Fastestvpn_ovpn</b> folder which you downloaded in step 1. Open <b>TCP</b> or <b>UDP</b> whichever protocol you want to connect to.</li>
<p>Select your desired server file and drag and drop in GL.iNet setup window, such as UK-UDP.</p>
<p><b>Note:</b> You can drop multiple .ovpn files.</p>
<p><img alt="GL.iNet OpenVPN Client" src="https://static.gl-inet.com/docs/en/3/app/openvpn/fastestvpn/fastestvpn2.png" /></p>
<li>Enter a description for your VPN such as “FastestVPN-UK. Then enter your FastestVPN username and Password in the respective fields.</li>
<p>Click on "Submit"</p>
<p><img alt="GL.iNet OpenVPN Client" src="https://static.gl-inet.com/docs/en/3/app/openvpn/fastestvpn/fastestvpn3.png" /></p>
<li>Click <b>Connect</b>, You’ll be connected to FastestVPN shortly.</li>
<p><img alt="GL.iNet OpenVPN Client" src="https://static.gl-inet.com/docs/en/3/app/openvpn/fastestvpn/fastestvpn4.png" /></p>
<p>Click on Disconnect when you want to disconnect the VPN.</p>
<p><img alt="GL.iNet OpenVPN Client" src="https://static.gl-inet.com/docs/en/3/app/openvpn/fastestvpn/fastestvpn5.png" /></p>
</ol>
<p><a href="https://support.fastestvpn.com/tutorials/routers/gl-inet/openvpn" target="_blank">Refer link</a></p>
</details>


<details>
<summary>FinchVPN</summary>
<p><a href="https://www.finchvpn.com/" target="_blank">Official Website</a></p>

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
<summary>HideIPVPN</summary>
<p><a href="https://www.hideipvpn.com/" target="_blank">Official Website</a></p>
<ol type="1">
<li>Login your HideIPVPN account.</li>
<li>Go to Package on the left side, click the your package, make sure it is active.</li>
<p><img alt="hideipvpn client area" src="https://static.gl-inet.com/docs/en/3/app/openvpn/hideipvpn/package.jpg" /></p>
<li>On the VPN tab, there is VPN Login Details of username and password, this is for login when OpenVPN connection</li>
<p><img alt="hideipvpn client area" src="https://static.gl-inet.com/docs/en/3/app/openvpn/hideipvpn/vpn_username_password.jpg" /></p>
<li>Scroll down to download OpenVPN config files.</li>
<p><img alt="hideipvpn client area" src="https://static.gl-inet.com/docs/en/3/app/openvpn/hideipvpn/openvpn_config_files.jpg" /></p>
</ol>
</details>

<details>
<summary>Hide.me VPN</summary>
<p><a href="https://hide.me/?friend=glinet" target="_blank">Official Website</a></p>
<ol type="1">
<li>Login your Hide.me account, find the Server Locations on the left side.</li>
<li>Download the OpenVPN Configuration for Windows.</li>
<p><img alt="hide.me vpn dashboard" src="https://static.gl-inet.com/docs/en/3/app/openvpn/hideme/hideme_dashboard.jpg" /></p>
</ol>
</details>

<details>
<summary>HideMyAss</summary>
<p><a href="https://click.hmavpn.com/aff_c?offer_id=1&aff_id=861" target="_blank">Official Website</a></p>
<a href="https://vpn.hidemyass.com/vpn-config/vpn-configs.zip" target="_blank">Download</a> directly.
</details>


<details id="ivacy">
<summary>IPVANISH</summary>
<p><a href="https://www.ipvanish.com/" target="_blank">Official Website</a></p>
<p>You can download all of the config files for all of the servers from <a href="https://www.ipvanish.com/software/configs/">www.ipvanish.com/software/configs/ (configs.zip).</a> </p>
<p><img src="https://static.gl-inet.com/docs/en/3/app/openvpn/ipvanish_download_openvpn_configs.jpg" />></p>
<p>Drag the configs.zip to the New OpenVPN Configuration dialog</p>
<p><img src="https://static.gl-inet.com/docs/en/3/app/openvpn/ipvanish_drag_import_configs.jpg" /></p>
<p>User Name and Password is your IPVanish username and password.</p>
<p><a href="https://support.ipvanish.com/hc/en-us/articles/360001329813-Android-OpenVPN-Setup" target >Refer link</a></p>
</details>


<details id="ivpnid">
<summary>IVACY</summary>
<p><a href="https://billing.ivacy.com/page/22852" target="_blank">Official Website</a></p>
<p>
    <a href="https://static.gl-inet.com/docs/en/3/app/openvpn/ivacy/IVACY_OpenVPN_Configs_UDP.zip" target="_blank">Download OpenVPN UDP Configs</a>
</p>
<p>
    <a href="https://static.gl-inet.com/docs/en/3/app/openvpn/ivacy/IVACY_OpenVPN_Configs_TCP.zip" target="_blank">Download OpenVPN TCP Configs</a>
</p>
<p>Download the UDP or TCP OpenVPN configs. Then drag the zip file to GL.iNet router New OpenVPN Configuration dialog.</p>
<p><img src="https://static.gl-inet.com/docs/en/3/app/openvpn/ivacy/add_a_new_openvpn_configuration.jpg" /></p>
<p>It will pop up a dialog ask for username and password, just input the email and password you login ivacy.com</p>
<p><img src="https://static.gl-inet.com/docs/en/3/app/openvpn/ivacy/ivacy_add_new_configs.jpg" /></p>
<p>Choose the server by click the button show in the image below, and click Connect button.</p>
<p><img src="https://static.gl-inet.com/docs/en/3/app/openvpn/ivacy/switch_servers.png" /></p>

<p><a href="https://support.ivacy.com/setup_guide/how-to-setup-ivacy-on-gl-inet-router/" target="_blank">Refer link</a></p>
</details>


<details>
<summary>IVPN</summary>
<p><a href="https://www.ivpn.net/" target="_blank">Official Website</a></p>
<ol type="1">
<li>
    <p>Download the <a href="https://www.ivpn.net/releases/config/ivpn-openvpn-config.zip">OpenVPN config files</a>.</p>
</li>
<li>
    <p>Find the Account ID on <a href="https://www.ivpn.net/clientarea/login" target="_blank">IVPN Client Area</a>.</p>
</li>
<li>
    <p>When drag the config file to Add a New OpenVPN Configuration, you will be asked to enter User Name and Password. The User Name is your Account ID that begins with letters 'ivpn'. The password can be anything, like "ivpn"</p>
    <p><img alt="ivpn set up on gl.inet router" src="https://static.gl-inet.com/docs/en/3/app/wireguard/ivpn_set_up_openvpn_client.png" /></p>
</li>
<p><a href="https://www.ivpn.net/setup/gnu-linux-terminal.html" target="_blank">Refer link</a></p>
</ol>
</details>

<details>
<summary>OVPN</summary>
<p><a href="https://www.ovpn.com/en?ref=glinet" target="_blank">Office Website</a></p>
<p>Just login, then you can easy get the OpenVPN configurations file by click the menu below.</p>
<p><img alt="get ovpn configuration files" src="https://static.gl-inet.com/docs/en/3/app/openvpn/ovpn/get_ovpn_configuration_files.jpg"/></p>
<p>Choose the server and download.</p>
<p><img alt="download ovpn openvpn configuration files" src="https://static.gl-inet.com/docs/en/3/app/openvpn/ovpn/download_configuration_files.jpg"/></p>
<p>The username and password are the same you login OVPN.</p>
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


<details id="strongvpn">
<summary>SaferVPN</summary>
<p><a href="https://safervpn.com/?a_aid=563" target="_blank">Official Website</a></p>

<a href="https://support.safervpn.com/hc/en-us/articles/360035425314-What-are-SaferVPN-s-OpenVPN-configuration-ovpn-files-for-manual-setup-">Download</a> directly.

<p><img alt="ovpn manager" src="https://static.gl-inet.com/docs/en/3/app/openvpn/SaferVPN1.png" /></p>

</details>


<details>
<summary>StrongVPN</summary>
<p><a href="https://strongvpn.com/?tr_aid=5ac44bd241ca7" target="_blank">Official Website</a></p>
<ol type="1">

<li>Login with your <a href="https://strongvpn.com/?tr_aid=5ac44bd241ca7" target="_blank">StrongVPN</a> account and then you will be able to see VPN Accounts Summary. Click Account Setup Instructions”.</li>
<p><img alt="strongvpnsetup 1" src="https://static.gl-inet.com/docs/en/3/app/openvpn/strong_vpn_setup_01.jpg" /></p>
<li>Find the Manual setup section, follow the steps to get configuration.</li>
<p><img alt="ovpn manager" src="https://static.gl-inet.com/docs/en/3/app/openvpn/strong_vpn_setup_02.jpg" /></p>
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
<p><a href="https://www.vpngate.net/en/" target="_blank">Official Website</a></p>

<ol type="1">

<p>The OpenVPN configuration files are listed on the <a href="https://www.vpngate.net/en/">VPN Gate website</a>
according to the server location.</p>
<li>Click OpenVPN Config file under the column “OpenVPN”.</li>
<p><img alt="ovpn manager" src="https://static.gl-inet.com/docs/en/3/app/openvpn/VPNGate1.png" /></p>
<li>You will see the download page.</li>
<p><img alt="ovpn manager" src="https://static.gl-inet.com/docs/en/3/app/openvpn/VPNGate2.png" /></p>
</ol>
</details>


<details>
<summary>VPN Unlimited(KeepSolid)</summary>
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


<details>
  <summary>Wevpn</summary>
  <p><a href="https://www.wevpn.com/aff/glinet" target="_blank">Official Website</a></p>
  <ol type="1">
    <li>Access the Members Area to make a custom config using the Config Generator.</li>
    <p><img alt="wevpn manual configuration generator" src="https://static.gl-inet.com/docs/en/3/app/openvpn/wevpn/wevpn_manual_configuration_generator.jpg"></p>
    <li>Choose the Protocal to UDP or TCP, the OpenVPN version, and the location. Then to download the configuration. </li>
    <li>Go to the web Admin Panel, default is http://192.168.8.1, OpenVPN Client --> Add a New OpenVPN Configuration</li>
    <p><img alt="openvpn client" src="https://static.gl-inet.com/docs/en/3/app/openvpn/wevpn/openvpn_client.jpg"/></p>
    <li>It will pop up a dialog.</li>
    <p><img alt="openvpn client" src="https://static.gl-inet.com/docs/en/3/app/openvpn/wevpn/new_openvpn_configuration.jpg"/></p>
    <li>Drag the .ovpn file jsut downloaed to the dialog, it will ask username and password. Input the credentials and click <b>Submit</b>.</li>
    <p><img alt="openvpn client" src="https://static.gl-inet.com/docs/en/3/app/openvpn/wevpn/wevpn_username_password.jpg"/></p>
    <li>Choose the configuration name and click <b>Connect</b>.</li>
    <p><img alt="openvpn client" src="https://static.gl-inet.com/docs/en/3/app/openvpn/wevpn/wevpn_connect.jpg"/></p>
  </ol>
    <p><a href="https://wevpn.com/support/hc/en-us/search/click?data=BAh7CjoHaWRsKwiNKs3UUwA6CXR5cGVJIgxhcnRpY2xlBjoGRVQ6CHVybEkiS2h0dHBzOi8vd2V2cG4uemVuZGVzay5jb20vaGMvZW4tdXMvYXJ0aWNsZXMvMzYwMDUyNTAxMTMzLU9wZW5WUE4tU2V0dXAGOwdUOg5zZWFyY2hfaWRJIikxZGViNGYxYi1jNjA5LTQyOGEtOTY1ZC05ZjI1NDlhODY0YjQGOwdGOglyYW5raQY%3D--246327cee00bb00f97a2e72915f09342aea6d83e" target="_blank">Refer link</a></p>
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

---

## OpenVPN Bridge

OpenVPN Bridge is supported from firmware version 3.105.

It uses tap mode to establish the connection, the VPN server will assign ip to OpenVPN Client and the devices that connected to the Client. So the Server and the devices will be in the same vpn subnet, you can access them all from OpenVPN Server.

**This application need two GL routers to complete the connection.**

### 1) Start the OpenVPN Server

Go to the OpenVPN Server page, generate a configuration file then change the Type to Bridge, there will be an ip range pool settings for the clients, normally you don't need to change the default settings.

Click 'Apply' and Start the Server, when export the config you can find the 'dev tun' is changed to 'dev tap'.

![](https://static.gl-inet.com/docs/en/3/app/openvpn/ovpn_bridge/setting_page.png)

### 2) Upload tap configuration

Open another router's web page and upload the configuration file. Click 'Connect' then wait a few minutes.

The router will be assigned an ip by OpenVPN Server and become inaccessible, if the server's vpn gateway is 10.8.0.1, the router will get 10.8.0.2 and the computer connected to the router will get ip address like 10.8.0.60. 

The connected pc will get a new ip address after the connection is established successfully:

![](https://static.gl-inet.com/docs/en/3/app/openvpn/ovpn_bridge/get_newip.png)

**Please pull out the lan cable and insert it again if the ip address of the connected device didn't change automatically**

After the connection is established, you can access your devices from OpenVPN Server.

### Example:

![](https://static.gl-inet.com/docs/en/3/app/openvpn/ovpn_bridge/topology.png)

I can ping my phone(10.8.0.63) remotely from the local computer(192.168.8.208):

![](https://static.gl-inet.com/docs/en/3/app/openvpn/ovpn_bridge/example.png)

### 3) Stop the VPN connection

If you want to stop the vpn connection or the connection failed to establish, please hold the reset button for 4s to revert the network, then the OpenVPN client router will be accessible, you can now enter the default web page and stop the vpn connection.

---


