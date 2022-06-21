# How to Setup OpenVPN Client on GL.iNet router

OpenVPN is an open-source VPN protocol that makes use of virtual private network (VPN) techniques to establish safe site-to-site or point-to-point connections. 

GL.iNet routers have pre-installed OpenVPN Client and Server.

We recommend WireGuard over OpenVPN because it is much faster. For setup a WireGuard Client, please check out [here](../wireguard_client).

If you have already bought OpenVPN service from a provider, but you don't know how to get the configuration file, please refer to [Get your configuration file](#get-your-configuration-file).

We can setup OpenVPN Client via web Admin Panel and [mobile app](../mobile_app). For the mobile app, it has already integrated NordVPN.

## Setup OpenVPN Client

There is a video tutorial as ExpressVPN as example, please check out [here](#video-tutorial).

OpenVPN client requires OpenVPN configuration file (.ovpn) to create the OpenVPN connection.

Access to web Admin Panel, on the left side -> VPN -> OpenVPN Client

![add a new openvpn configuration](https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/add_a_new_openvpn_configuration.png){class="glboxshadow"}

### Upload your OpenVPN configuration file

Simply drag and drop your file to the pop up windows. It can be a single .ovpn file or a zip/tar.gz file which contains multiple .ovpn files.

Be careful that some .ovpn files use separated ca, cert, crl files. These files must be zipped together with the .ovpn file before upload.

![Upload openvpn config](https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/upload_openvpn_config.png){class="glboxshadow"}

You may encouter some problems, like not enough space, invalid file, authorization failed, all other VPN services must be stopped first, please check out [here](#video-tutorial).

### Enter Description, Username and Password

Enter a description for your OpenVPN configuration file and then click `Submit` to finish the upload process. In some cases, it will ask you to enter the username and password. If you don't know the username and password, please contact the OpenVPN service provider.

![uploaded openvpn config](https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/uploaded_openvpn_config.png){class="glboxshadow"}

### Connect to the OpenVPN server

You can now click `Connect` to start the OpenVPN connection.

![has imported openvpn config](https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/imported_openvpn_config.png){class="glboxshadow"}

If your configureation file is an archive file, like .zip, you can switch server at the cog icon.

![switch server zip config](https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/switch_server_zip_config.png){class="glboxshadow"}

Once connected, you should find your IP address, data received/sent.

![connected openvpn](https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/connected_openvpn_config.png){class="glboxshadow"}

**Note that you can't running VPN Client and Server at the same time, and also can't running OpenVPN Client and WireGuard Client at the same time.**

### Manage configuration files

Click `Management` to check the list of configuration files. You can modify the **Description**, **User name** and **Password** of each configuration file. You can also add, delete a configuration file or even purge all your uploaded configuration files.

If your configuration file is a zip/tar.gz file which includes multiple ovpn files, you can choose an individual .ovpn file that you would like to connect in **Server**.

![edit openvpn config](https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/edit_openvpn_config.png){class="glboxshadow"}

## Get your configuration file

We have tested different VPN service providers. Therefore, if you don't know how to get the configuration file, you can follow the instruction below. However, you have to contact your service provider for the configuration file if they are not listed below. 

If you have any problem in the setup of OpenVPN, please contact [support@gl-inet.com](mailto:support@gl-inet.com)

Recommended:

<details>
<summary>NordVPN</summary>
  <p>
    <a href="https://go.nordvpn.net/aff_c?offer_id=15&amp;aff_id=12016&amp;url_id=902" target="_blank">Official Website</a>
  </p>
  <p>
    Download OpenVPN client configuration files. We recommend going into <a href="https://nordvpn.com/servers/tools/" target="_blank">NordVPN recommended server utility here</a>. It will recommend a server base on your network, click <code>Show available protocols</code> to download the UDP or TCP config.
  </p>
  <p>
    <img alt="nordvpn server utility" src="https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/nordvpn/nordvpn_server_utility.png" class="glboxshadow">
  </p>
  <p>
    When setup the connection on router, please use the NordVPN service credentials.
  </p>
  <p>
    You can find your NordVPN service credentials in the Nord Account dashboard. Copy the credentials using the “Copy” buttons on the right.
  </p>
  <p>
    <img alt="nordvpn service credentials" src="https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/nordvpn/nordvpn_service_credentials.png" class="glboxshadow">
  </p>
  <p>
    Of course you can download all servers configs <a href="https://downloads.nordcdn.com/configs/archives/servers/ovpn.zip">here</a>.
  </p>
  <p>
    Tips: if the zip file is too big to upload, you can delete some .ovpn in .zip file or upload single .ovpn file.
  </p>
  <p>
    <a href="https://support.nordvpn.com/Connectivity/Router/1047409122/GL-iNet-setup-with-NordVPN.htm" target="_blank">Refer link</a>
  </p>
  <p>You can also use <a href="../mobile_app">mobile app</a> to setup NordVPN.</p>
</details>


<details>
<summary>PIA (Private Internet Access)</summary>
  <p>
    <a href="https://privateinternetaccess.com/offer/GLiNET_71dx4t8bl" target="_blank">Official Website</a>
  </p>
  <p>
    <a href="https://www.privateinternetaccess.com/openvpn/openvpn.zip">Download</a> directly.
  </p>
</details>


<details>
<summary>Surfshark</summary>
  <p>
    <a href="https://get.surfshark.net/aff_c?offer_id=6&aff_id=1400" target="_blank">Official Website</a>
  </p>
  <p>
    Login and <a href="https://api.surfshark.com/v1/server/configurations">Download</a> directly, or read this <a href="https://support.surfshark.com/hc/en-us/articles/360011856259-How-to-set-up-Surfshark-on-GL-iNet-router-3-x-firmware-" target="_blank">guide</a>.
  </p>
</details>


<details>
<summary>PureVPN</summary>
  <p>
    <a href="https://billing.purevpn.com/aff.php?aff=35535" target="_blank">Official Website</a>
  </p>
  <p>
    <a href="https://d32d3g1fvkpl8y.cloudfront.net/heartbleed/router/Recommended-CA2.zip">Download</a> directly.
  </p>
  <p>
    <a href="https://support.purevpn.com/openvpn-files" target="_blank">Refer link</a>
  </p>
</details>


<details>
<summary>TorGuard</summary>
  <p>
    <a href="https://torguard.net/aff.php?aff=3040" target="_blank">Official Website</a>
  </p>
  <ol type="1">
    <li>
      <p>
        If you are using <a href="https://torguard.net/aff.php?aff=3040" target="_blank">TorGuard</a>, you need to login the control panel and find <b>Config Generator</b> from the <b>Tools</b> menu. Choose the <b>VPN Server</b> and some other options. Then click <b>Generate Config</b> a config file will be downloaded automatically.</p>
      <p>
        <img alt="Generate ovpn" src="https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/torguard/torguard_menu.jpg" class="glboxshadow">
      </p>
    </li>
    <li>
      <p>
        The username and password for OpenVPN connection is different from your control panel login. You can find the VPN username and VPN password below.
      </p>
      <p>
        <img alt="torguard vpn username vpn password" src="https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/torguard/torguard_vpnusername_vpnpassword.png" class="glboxshadow">
      </p>
    </li>
  </ol>
</details>


<details>
<summary>PrivateVPN</summary>
  <p>
    <a href="https://affiliate.privatevpn.com/scripts/click.php?a_aid=5e3a511658bc3" target="_blank">Official Website</a>
  </p>
  <p>
    <a href="https://privatevpn.com/client/PrivateVPN-TUN.zip">Download</a> directly.
  </p>
</details>


<details>
  <summary>Proton VPN</summary>
  <p>
    <a href="https://go.getproton.me/aff_c?offer_id=26&aff_id=1612" target="_blank">Official Website</a>
  </p>
  <p><strong>Proton VPN has WireGuard service, we recommend to use WireGuard, checkout <a href="../wireguard_client/#wireguard-providers">here</a></strong>.</p>
  <ol type="1">
    <li>
      <p>Login your <a href="https://go.getproton.me/aff_c?offer_id=26&aff_id=1612">Proton VPN</a> account.</p>
    </li>
    <li>
      <p>Click <strong>Download</strong> in the left-hand side.</p>
    </li>
    <li>
      <p>Choose Router platform, protocol etc, find your target country to download configuration file.</p>
      <p>
        <img alt="protonvpn openvpn configuration file" class="glboxshadow" src="https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/protonvpn/proton_openvpn_configuration_file.jpg" />
      </p>
    </li>
    <li>
      <p>
        The credential for connect OpenVPN is not the one that login Proton website's dashboard. You can find the crdential at <strong>Account -> OpenVPN/IKEv2 username</strong>
      </p>
      <p>
        <img alt="protonvpn openvpn credential" class="glboxshadow" src="https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/protonvpn/protonvpn_openvpn_credential.jpg" />
      </p>
    </li>
  </ol>
</details>


<details>
<summary>ExpressVPN</summary>
  <p>
    <a href="https://www.xvbelink.com/?a_fid=glinet" rel="sponsored" target="_blank">Official Website</a>
  </p>
  <p>
    *Information quoted from <a href="https://www.expressvpn.com/support/vpn-setup/manual-config-for-linux-with-openvpn/#download" rel="sponsored">Expressvpn official instruction</a>
  </p>
  <ol type="1">
    <li>
      <p>
        Go to <a href="https://www.xvbelink.com/?a_fid=glinet" target="_blank" rel="sponsored">ExpressVPN</a> website, and log in with your ExpressVPN credentials.
      </p>
      <p>
        <img alt="expressvpn account click sign in" class="glboxshadow" src="https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/expressvpn/expressvpn-account-click-sign-in.jpg" />
      </p>
      <p>
        <strong>Enter the verification code</strong> that is sent to your email.
      </p>
    </li>
    <li>
      <p>
        On the right, with <strong>OpenVPN</strong> already selected for you, you will see your <strong>username</strong>, <strong>password</strong>, and a list of <strong>OpenVPN configuration files</strong>.
      </p>
      <p>
        <img alt="" class="glboxshadow" src="https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/expressvpn/expressvpn-account-manual-configuation-openvpn.jpg" />
      </p>
      <p>
        Click the location(s) you want in order to download the .ovpn file(s).
      </p>
      <p>
        <strong>Keep this browser window open</strong>. You will need this information for the setup later.
      </p>
    </li>
  </ol>
</details>


Others:

<details>
  <summary>AirVPN</summary>
  <p>
    <a href="https://airvpn.org/?referred_by=402389" target="_blank">Official Website</a>
  </p>
  <ol type="1">
    <li>
      <p>Login your AirVPN acoount</p>
      <p>
        <img alt="ovpn manager" class="glboxshadow" src="https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/airvpn/airvpn1.png" />
      </p>
    </li>
    <li>
      <p>
        Choose Config Generator on the left and then choose Linux as your operating system. Next, choose your preferred server.
      </p>
      <p>
        <img alt="ovpn manager" class="glboxshadow" src="https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/airvpn/airvpn2.png" />
      </p>
    </li>
    <li>
      <p>You will be able to see the download page of the configuration file.</p>
      <p>
        <img alt="ovpn manager" class="glboxshadow" src="https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/airvpn/airvpn3.png" />
      </p>
    </li>
  </ol>
</details>


<details>
<summary>Astrill</summary>
  <p>
    <a href="https://www.astrill.com/a/dik2masnw6ig" target="_blank">Official Website</a>
  </p>
  <p>
    *Information quoted from <a href="https://wiki.astrill.com/Astrill_Setup_Manual:How_to_configure_OpenVPN_with_OpenVPN_application_on_Windows">Astrill official instruction</a>
  </p>
  <ol type="1">
    <li>
      <p>Generate and Download Astrill Openvpn configuration ZIP</p>
      <p>
        <img class="glboxshadow" alt="ovpn manager" src="https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/astrillvpn/astrill1.png" />
      </p>
      <p>
        <img class="glboxshadow" alt="ovpn manager" src="https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/astrillvpn/astrill2.png" />
      </p>
    </li>
    <li>Type a Description like OPENVPN_GUI.</li>
    <li>
      <p>Click on ADD to my certificates button.</p>
      <p>
        <img class="glboxshadow" alt="ovpn manager" src="https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/astrillvpn/astrill3.png" />
      </p>
    </li>
    <li>
      <p>Once OpenVPN certificate is added, click on Download button.</p>
      <p>
        <img class="glboxshadow" alt="ovpn manager" src="https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/astrillvpn/astrill4.png" />
      </p>
    </li>
</ol>
</details>


<details>
<summary>bolehvpn</summary>
  <p>
    <a href="https://www.bolehvpn.net/" target="_blank">Official Website</a>
  </p>
  <p>
    Login in <a href="https://users.bolehvpn.net/" target="_blank">Dashboard</a>, download your configuration files and select the <a href="https://users.bolehvpn.net/download/inline/6" target="_blank">Linux_iOS inline</a> format. Extract the zip files after completing the download.
  </p>
  <p>
    <a href="https://www.bolehvpn.net/clients-installations/#1487691248224-0c435dba-d612" target="_blank">Refer link</a>
  </p>
</details>


<details>
<summary>CactusVPN</summary>
  <p>
    <a href="https://billing.cactusvpn.com/aff.php?aff=2310" target="_blank">Official Website</a>
  </p>
  <p>
    <a href="https://www.cactusvpn.com/downloads/" target="_blank">Download</a> directly.
  </p>
  <p>
    <img class="glboxshadow" alt="ovpn manager" src="https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/cactusvpn/cactusvpn1.jpg" />
  </p>
</details>


<details>
<summary>Cryptostorm</summary>
  <p>
    <a href="https://cryptostorm.is/" target="_blank">Official Website</a>
  </p>
  <p>
    <a href="https://cryptostorm.is/configs/ecc/" target="_blank">Download</a> directly.
  </p>
</details>


<details>
<summary>CyberGhost</summary>
  <p>
    <a href="https://support.cyberghostvpn.com/hc/en-us" target="_blank">Official Website</a>
  </p>
  <p>
    *Information quoted from <a href="https://support.cyberghostvpn.com/hc/en-us/articles/213811885-Router-How-to-configure-OpenVPN-for-flashed-DD-WRT-routers?fbclid=IwAR0_IicBlnNzVqlKh0mAHFyM6uvsGgBQooYfMyJ0bHgb13Eidn8KhXnd6Y0" target="_blank">CyberGhost official instruction</a>
  </p>
  <ol type="1">
    <li>
      <p>Login your CyberGhost VPN online account.</p>
      <p>
        <img class="glboxshadow" alt="ovpn manager" src="https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/cyberghost/cyberghost1.png" />
      </p>
    </li>
    <li>
      <p>Click on 'My Devices'  > click 'Other' > choose 'Configure new device'.</p>
      <p>
        <img class="glboxshadow" alt="ovpn manager" src="https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/cyberghost/cyberghost2.png" />
      </p>
    </li>
    <li>
      <p>At the new screen, in the 'Server configuration' tab, the desired parameters can be configured. For the purpose of setting OpenVPN for your DD-WRT Router, choose 'OpenVPN' from the Protocol drop down menu. Your desired country and server group, as described below, need to be defined too:</p>
      <p>
        <img class="glboxshadow" alt="ovpn manager" src="https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/cyberghost/cyberghost3.png" />
      </p>
      <ul>
        <li>Protocol: For Router configurations, please choose OpenVPN</li>
        <li>
          Country: Since native protocol connections may only be used with exactly one server you now have to choose the country you want to surf from; the server to be used in this country will be chosen by CyberGhost automatically.
        </li>
        <li>Server group: Choose the server group and the OpenVPN protocol (UDP or TCP) you want to use:
          <p>UDP allows higher speed than the TCP version, but can result in broken downloads in some cases. This is the default setting.</p>
          <p>TCP allows more stable connections than the UDP version, but is a bit slower. Choose this version, if you have recurrent connection issues such as sudden disconnections.</p>
        </li>
      </ul>
      <p>After setting up your preferred settings, save them with 'Save and download configuration'.</p>
    </li>
  </ol>
</details>

<details>
<summary>FastestVPN</summary>
  <p>
    <a href="https://go.fastestvpn.com/affiliate/pap?a_aid=5ffd2a3e9d687" target="_blank">Official Website</a>
  </p>
  <p>
    Download FastestVPN Config Files zip folder for OpenVPN TCP and UDP from <a href="https://support.fastestvpn.com/download/openvpn-tcp-udp-config-files/">here</a>.
  </p>
  <p>
    <a href="https://support.fastestvpn.com/tutorials/routers/gl-inet/openvpn" target="_blank">Refer link</a>
  </p>
</details>

<details>
<summary>FinchVPN</summary>
  <p><a href="https://www.finchvpn.com/" target="_blank">Official Website</a></p>
  <ol type="1">
    <li>
      <p>Login your FinchVPN account.</p>
      <p>
        <img class="glboxshadow" alt="ovpn manager" src="https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/finchvpn/finchvpn1.jpg" />
      </p>
    </li>
    <li>
      <p>Go to the Download page and click Download under FinchVPN OpenVPN Config.</p>
      <p>
        <img class="glboxshadow" alt="ovpn manager" src="https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/finchvpn/finchvpn2.jpg" />
      </p>
    </li>
    <li>
      <p>Choose Linux</p>
      <p>
        <img class="glboxshadow" alt="ovpn manager" src="https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/finchvpn/finchvpn3.jpg" />
      </p>
    </li>
    <li>
      <p>
        Choose the protocol based on your preference. Generally, you can choose the first one “Port 8484 over UDP”
      </p>
      <p>
        <img class="glboxshadow" alt="ovpn manager" src="https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/finchvpn/finchvpn4.jpg" />
      </p>
    </li>
    <li>
      <p>Remember to tick the box to include your username and password before download the file.</p>
      <p>
        <img class="glboxshadow" alt="ovpn manager" src="https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/finchvpn/finchvpn5.jpg" />
      </p>
    </li>
  </ol>
</details>

<details>
<summary>HideIPVPN</summary>
  <p>
    <a href="https://www.hideipvpn.com/" target="_blank">Official Website</a>
  </p>
  <ol type="1">
    <li>Login your HideIPVPN account.</li>
    <li>
      <p>Go to Package on the left side, click the your package, make sure it is active.</p>
      <p>
        <img class="glboxshadow" alt="hideipvpn client area" src="https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/hideipvpn/package.jpg" />
      </p>
    </li>
    <li>
      <p>
        On the VPN tab, there is VPN Login Details of username and password, this is for login when OpenVPN connection
      </p>
      <p>
        <img class="glboxshadow" alt="hideipvpn client area" src="https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/hideipvpn/vpn_username_password.jpg" />
      </p>
    </li>
    <li>
      <p>Scroll down to download OpenVPN config files.</p>
      <p>
        <img class="glboxshadow" alt="hideipvpn client area" src="https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/hideipvpn/openvpn_config_files.jpg" />
      </p>
    </li>
  </ol>
</details>

<details>
<summary>Hide.me VPN</summary>
  <p>
    <a href="https://hide.me/?friend=glinet" target="_blank">Official Website</a>
  </p>
  <ol type="1">
    <li>Login your Hide.me account, find the Server Locations on the left side.</li>
    <li>
      <p>Download the OpenVPN Configuration for Windows.</p>
      <p>
        <img class="glboxshadow" alt="hide.me vpn dashboard" src="https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/hideme/hideme_dashboard.jpg" />
      </p>
    </li>
  </ol>
</details>

<details>
<summary>HideMyAss</summary>
  <p>
    <a href="https://click.hmavpn.com/aff_c?offer_id=1&aff_id=861" target="_blank">Official Website</a>
  </p>
  <p>
    <a href="https://vpn.hidemyass.com/vpn-config/vpn-configs.zip" target="_blank">Download</a> directly.
  </p>
</details>


<details>
<summary>IPVANISH</summary>
  <p>
    <a href="https://www.ipvanish.com/" target="_blank">Official Website</a>
  </p>
  <p>
    You can download all of the config files for all of the servers from <a href="https://www.ipvanish.com/software/configs/configs.zip">here</a>, then should upload this <strong>config.zip</strong> on the OpenVPN Client of web Admin Panel. Before uploading, please remove the servers in the .zip file that you will not use to reduce the file size.
  </p>
  <p>You can also download individual server configuration files <a href="https://www.ipvanish.com/software/configs/">here</a>, but you will need to download <strong>ca.ipvanish.com.crt</strong> as well. Before uploading to the router, you need to compress the <strong>ca.ipvanish.com.crt</strong> and .ovpn configuration files into a .zip archive and upload them.</p>
  <p>
    <img class="glboxshadow" src="https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/ipvanish/ipvanish_download_openvpn_configs.png" />
  </p>
  <p>
    <a href="https://support.ipvanish.com/hc/en-us/articles/360001329813-Android-OpenVPN-Setup" target >Refer link</a>
  </p>
</details>


<details>
<summary>IVACY</summary>
  <p>
    <a href="https://billing.ivacy.com/page/22852" target="_blank">Official Website</a>
  </p>
  <p>
    <a href="https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/ivacy/IVACY_OpenVPN_Configs_UDP.zip" target="_blank">Download OpenVPN UDP Configs</a>
  </p>
  <p>
    <a href="https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/ivacy/IVACY_OpenVPN_Configs_TCP.zip" target="_blank">Download OpenVPN TCP Configs</a>
  </p>
  <p>
    <a href="https://support.ivacy.com/setup_guide/how-to-setup-ivacy-on-gl-inet-router/" target="_blank">Refer link</a>
  </p>
</details>


<details>
<summary>IVPN</summary>
  <p>
    <a href="https://www.ivpn.net/" target="_blank">Official Website</a>
  </p>
  <ol type="1">
    <li>
      <p>Download the <a href="https://www.ivpn.net/releases/config/ivpn-openvpn-config.zip">OpenVPN config files</a>.</p>
    </li>
    <li>
      <p>Find the Account ID on <a href="https://www.ivpn.net/clientarea/login" target="_blank">IVPN Client Area</a>.</p>
    </li>
    <li>
      <p>When drag the config file to Add a New OpenVPN Configuration, you will be asked to enter User Name and Password. The User Name is your Account ID that begins with letters 'ivpn'. The password can be anything, like "ivpn"</p>
      <p><img class="glboxshadow" alt="ivpn set up on gl.inet router" src="https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/ivpn/ivpn_set_up_openvpn_client.png" /></p>
    </li>
    <p><a href="https://www.ivpn.net/setup/gnu-linux-terminal.html" target="_blank">Refer link</a></p>
  </ol>
</details>


<details>
<summary>OVPN</summary>
  <p>
    <a href="https://www.ovpn.com/en?ref=glinet" target="_blank">Office Website</a>
  </p>
  <p>
    Just login, then you can easy get the OpenVPN configurations file by click the menu below.
  </p>
  <p>
    <img class="glboxshadow" alt="get ovpn configuration files" src="https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/ovpn/get_ovpn_configuration_files.jpg"/>
  </p>
  <p>Choose the server and download.</p>
  <p>
    <img class="glboxshadow" alt="download ovpn openvpn configuration files" src="https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/ovpn/download_configuration_files.jpg"/>
  </p>
  <p>The username and password are the same you login OVPN.</p>
</details>


<details>
  <summary>SaferVPN</summary>
  <p>
    <a href="https://safervpn.com/?a_aid=563" target="_blank">Official Website</a>
  </p>
  <p>
    <a href="https://support.safervpn.com/hc/en-us/articles/360035425314-What-are-SaferVPN-s-OpenVPN-configuration-ovpn-files-for-manual-setup-">Download</a> directly.
  </p>
  <p>
    <img class="glboxshadow" alt="ovpn manager" src="https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/safervpn/safervpn1.png" />
  </p>
</details>


<details>
  <summary>StarVPN</summary>
  <p>
    <a href="https://www.starvpn.com/dashboard/aff.php?aff=91">Official Website</a>
  </p>
  <p><strong>StarVPN has WireGuard service, we recommend to use WireGuard, checkout <a href="../wireguard_client/#wireguard-providers">here</a></strong>.</p>
  <ol>
    <li>
      <p>
        <strong>Register an account with StarVPN</strong>
      </p>
      <p>
        Head on over to their <a href="https://www.starvpn.com/#pricing">pricing plan</a> options and choose a VPN plan that suits your needs. You can register on checkout or directly<a href="https://www.starvpn.com/dashboard/register.php"> here.</a>
      </p>
    </li>
    <li>
      <p>
        <strong>VPN Login Information</strong>
      </p>
      <p>
        Log into the StarVPN member area <a href="https://www.starvpn.com/dashboard">dashboard</a>. You can find your VPN username and password for each slot in the Manage Slots Section or dashboard area.
      </p>
      <p>
        <img class="glboxshadow" alt="starvpn credential" src="https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/starvpn/vpn-username_edited-2.jpg" />
      </p>
      <p>
        For multiple slots, the VPN configuration settings and credentials can be located in the “Manage Slots” section.
      </p>
      <p>
        <img class="glboxshadow" alt="starvpn credential" src="https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/starvpn/vpn-username_slots_edited-1024x355.jpeg">
      </p>
    </li>
    <li>
      <p>
        <strong>Download OpenVPN Configuration File</strong>
      </p>
      <p>
        The next step, you must download the VPN server configuration files necessary so that the OpenVPN Software knows where to connect to.   Download the configuration file in the members area dashboard. 
      </p>
      <p>
        <img class="glboxshadow" alt="download starvpn config" src="https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/starvpn/download-ovpn_edited.jpg" />
      </p>
      <p>
        Some GL.iNet routers do not support IPv6 or DNS Leak Protection, as a result you may experience an IP or connection error. Edit the ovpn configuration file and disable IPv6 by performing these simple tasks..
      </p>
      <p>
        <img class="glboxshadow" alt="troubleshooting" src="https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/starvpn/troubleshooting.jpg" />
      </p>
    </li>
    <li>
      <p>
        <strong>Login to the GL.iNet Router</strong>
      </p>
      <p>
        Login to the router web Admin Panel by accessing your web browser and entering the Router IP in the address bar. The default address is <strong>192.168.8.1</strong>.
      </p>
      <p>
        Navigate to OpenVPN Client -> + Add a New OpenVPN Configuration
      </p>
      <p>
        <img class="glboxshadow" alt="add a new openvpn configuration glinet" src="https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/starvpn/add_a_new_openvpn_configuration_glinet.jpeg" />
      </p>
    </li>
    <li>
      <p>
        <strong>Upload OpenVPN Configuration File</strong>
      </p>
      <p>
        Simply drag and drop the StarVPN ovpn configuration file that was downloaded in Step 3.
      </p>
      <p>
        <img class="glboxshadow" alt="drag and drop config file" src="https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/starvpn/drag-drop_edited2.jpg" />
      </p>
    </li>
    <li>
      <p>
        Enter Description, Username and Password
      </p>
      <p>
        Enter a description for your OpenVPN configuration file, enter your StarVPN username and password located in Step 2 of this article and then click submit to complete the upload process.
      </p>
      <p>
        <img class="glboxshadow" alt="enter username and password" src="https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/starvpn/username-password_edited.jpg" />
      </p>
    </li>
    <li>
      <p>
        <strong>Connect to the OpenVPN server</strong>
      </p>
      <p>
        Click on <strong>Connect</strong> to connect to the StarVPN VPN server.
      </p>
      <p>
        <img class="glboxshadow" alt="connect" src="https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/starvpn/connect-1024x287.jpeg" />
      </p>
    </li>
    <li>
      <p>
        Once connected, you should see your user IP address and the number of Bytes send/received.
      </p>
      <p>
        <img class="glboxshadow" alt="connected status" src="https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/starvpn/status-1024x361.jpeg" />
      </p>
      <p>
        To validate the connection, using a web browser, visit <a href="http://whatismyip.com">http://whatismyip.com</a>
      </p>
      <p>
        Once you are connected, login to the StarVPN <a href="https://starvpn.com/dashboard">dashbard </a>to configure your IP Type, Geo-location and ISP. No additional configuration files are required.
      </p>
    </li>
  </ol>
  <a href="https://www.starvpn.com/openvpn-setup-on-gl-inet-router/">Refer link</a>
</details>


<details>
  <summary>StrongVPN</summary>
  <p>
    <a href="https://strongvpn.com/?tr_aid=5ac44bd241ca7" target="_blank">Official Website</a>
  </p>
  <ol type="1">
    <li>
      <p>
        Login with your <a href="https://strongvpn.com/?tr_aid=5ac44bd241ca7" target="_blank">StrongVPN</a> account and then you will be able to see VPN Accounts Summary. Click Account Setup Instructions”.
      </p>
      <p>
        <img class="glboxshadow" alt="strongvpnsetup 1" src="https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/strongvpn/strong_vpn_setup_01.jpg" />
      </p>
    </li>
    <li>
      <p>Find the Manual setup section, follow the steps to get configuration.</p>
      <p>
        <img class="glboxshadow" alt="ovpn manager" src="https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/strongvpn/strong_vpn_setup_02.jpg" />
      </p>
    </li>
  </ol>
</details>


<details>
<summary>VPN.AC</summary>
  <p>
    <a href="https://vpn.ac/aff.php?aff=1424" target="_blank">Official Website</a>
  </p>
  <p>
    <a href="https://vpn.ac/ovpn/">Download</a> directly.
  </p>
  <p>
    <img class="glboxshadow" alt="ovpn manager" src="https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/vpn.ac/vpn.ac1.png" />
  </p>
</details>


<details>
<summary>VPNGate</summary>
  <p>
    <a href="https://www.vpngate.net/en/" target="_blank">Official Website</a>
  </p>
  <p>
    The OpenVPN configuration files are listed on the <a href="https://www.vpngate.net/en/">VPN Gate website</a> according to the server location.
  </p>
  <ol type="1">
    <li>
      <P>Click OpenVPN Config file under the column “OpenVPN”.</p>
      <p>
        <img class="glboxshadow" alt="ovpn manager" src="https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/vpngate/vpngate1.png" />
      </p>
    </li>
    <li>
      <p>You will see the download page.</p>
      <p>
        <img class="glboxshadow" alt="ovpn manager" src="https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/vpngate/vpngate2.png" />
      </p>
    </li>
  </ol>
</details>


<details>
  <summary>VPN Unlimited(KeepSolid)</summary>
  <p>
    <a href="https://keepsolid.g2afse.com/click?pid=270&offer_id=7" target="_blank">Official Website</a>
  </p>
  <p>
    *Information quoted from <a href="https://www.vpnunlimitedapp.com/en/info/manuals/how-to-manually-create-vpn-conf">VPN unlimited official instruction</a>
  </p>
  <p>
    Start out by logging in to your User Office, press Manage for the VPN Unlimited service, and follow a few simple steps:
  </p>
  <ol type="1">
    <li>
      <p>Select a device</p>
      <p>
        Pick a device from the list or create a new one. If you are out of free slots, delete an old device or buy extra slots.
      </p>
      <p>
        <img class="glboxshadow" alt="ovpn manager" src="https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/vpnunlimited/keepsolid1.png" />
      </p>
    </li>
    <li>
      <p>Choosethe desired server location</p>
      <p>VPN Unlimited offers a large variety of servers, namely 400+ in 70+ locations. In this case, let it be Germany.</p>
    </li>
    <li>
      <p>Select the VPN protocol</p>
      <p>For the IKEv2 protocol, you will also need to specify your device’s platform.</p>
      <p>
        <img class="glboxshadow" alt="ovpn manager" src="https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/vpnunlimited/keepsolid2.png" />
      </p>
    </li>
    <li>
      <p>Create a configuration</p>
      <p>
        Press Generate and you will get all the data required to set up a VPN connection.
      </p>
      <p>
        <img class="glboxshadow" alt="ovpn manager" src="https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/vpnunlimited/keepsolid3.png" />
      </p>
    </li>
  </ol>
</details>

<div id="vyprvpn"></div>

??? "VyprVPN"

    VyprVPN offers the OpenVPN files here: [Where can I find the OpenVPN files? – VyprVPN Support](https://support.vyprvpn.com/hc/en-us/articles/360038096131-Where-can-I-find-the-OpenVPN-files-){target="_blank"}

    The provided zip file contains two folders with the .ovpn files. One called OpenVPN160 one OpenVPN256. Just delete the OpenVPN160 folder from the zip file then upload it to GL.iNet router as usual.

<details>
  <summary>Wevpn</summary>
    <p>
      <a href="https://www.wevpn.com/aff/glinet" target="_blank">Official Website</a>
    </p>
    <ol type="1">
      <li>
        <p>Access the Members Area to make a custom config using the Config Generator.</p>
        <p>
          <img class="glboxshadow" alt="wevpn manual configuration generator" src="https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/wevpn/wevpn_manual_configuration_generator.jpg">
        </p>
      </li>
      <li>Choose the Protocal to UDP or TCP, the OpenVPN version, and the location. Then to download the configuration. </li>
      <li>
        <p>
          Go to the web Admin Panel, default is http://192.168.8.1, OpenVPN Client --> Add a New OpenVPN Configuration
        </p>
        <p>
          <img class="glboxshadow" alt="openvpn client" src="https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/wevpn/openvpn_client.jpg"/>
        </p>
      </li>
      <li>
        <p>It will pop up a dialog.</p>
        <p>
          <img class="glboxshadow" alt="openvpn client" src="https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/wevpn/new_openvpn_configuration.jpg"/>
        </p>
      </li>
      <li>
        <p>
          Drag the .ovpn file jsut downloaed to the dialog, it will ask username and password. Input the credentials and click <b>Submit</b>
        </p>.
        <p>
          <img class="glboxshadow" alt="openvpn client" src="https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/wevpn/wevpn_username_password.jpg"/>
        </p>
      </li>
      <li>
        <P>Choose the configuration name and click <b>Connect</b>.</p>
        <p>
          <img class="glboxshadow" alt="openvpn client" src="https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/wevpn/wevpn_connect.jpg"/>
        </p>
      </li>
    </ol>
    <p>
      <a href="https://wevpn.com/support/hc/en-us/search/click?data=BAh7CjoHaWRsKwiNKs3UUwA6CXR5cGVJIgxhcnRpY2xlBjoGRVQ6CHVybEkiS2h0dHBzOi8vd2V2cG4uemVuZGVzay5jb20vaGMvZW4tdXMvYXJ0aWNsZXMvMzYwMDUyNTAxMTMzLU9wZW5WUE4tU2V0dXAGOwdUOg5zZWFyY2hfaWRJIikxZGViNGYxYi1jNjA5LTQyOGEtOTY1ZC05ZjI1NDlhODY0YjQGOwdGOglyYW5raQY%3D--246327cee00bb00f97a2e72915f09342aea6d83e" target="_blank">Refer link</a>
    </p>
</details>

<div id="zoogvpn"></div>

??? "ZoogVPN"

    [Official Website](https://zoogvpn.com/pricing?ref=xrsyzx){target="_blank"}

    Sign in its [official website](https://zoogvpn.com/pricing?ref=xrsyzx){target="_blank"}, then access the [OpenVPN configuration files page](https://app.zoogvpn.com/setup/configuration-files){target="_blank"}, you will find all the servers here. Download the configuration file in the TCP column or UDP column.

    ![zoogvpn openvpn configuration files](https://static.gl-inet.com/docs/en/3/tutorials/openvpn_client/zoogvpn/zoogvpn_openvpn_config_files.png)

    Then follow the [guide to setup OpenVPN Client on GL.iNet router](#setup-openvpn-client), the username and password are the same as the ones used to log into ZoogVPN website.

## Video tutorial

These video tutorial as ExpressVPN as example to setup OpenVPN Client.

<iframe width="560" height="315" src="https://www.youtube.com/embed/oSTA9-bBUIg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

4 Common Problems and Solution When Configuring OpenVPN

<iframe width="560" height="315" src="https://www.youtube.com/embed/sAb6lyH4pGc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
