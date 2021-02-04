# WireGuard
WireGuard is an extremely simple yet fast and modern VPN that utilizes **state-of-the-art cryptography**. It aims to be [faster](https://www.wireguard.com/performance/), [simpler](https://www.wireguard.com/quickstart/), leaner, and more useful than IPSec, while avoiding the massive headache. It intends to be considerably more performant than OpenVPN. 

GL.iNet routers have pre-installed WireGuard server and client.

If you are looking for a WireGuard provider, access [this](#wireguard-providers) directly.

---

## WireGuard Client 

To set up a WireGuard client, please click `+ Set up WireGuard Manually`.

![Client](https://static.gl-inet.com/docs/en/3/app/wireguard/WGC1.png)

### Input the configuration

There are different methods to input the configuration.  

![Configuraion](https://static.gl-inet.com/docs/en/3/app/wireguard/paste_wireguard_config.png)

For AzireVPN and MullvadVPN users, choose the `Providers` tab, for more detail, access [here](#wireguard-providers).

You can paste the configuration on `Configuration` tab, or create from scratch on `Manual Input` tab.

![add a new wireguard config](https://static.gl-inet.com/docs/en/3/app/wireguard/add_a_new_wireguard_config.png)

### Specify the name of your server

Specify a descriptive name and then click `Next`.

![Name](https://static.gl-inet.com/docs/en/3/app/wireguard/input_config_name.png)

![connect wireguard](https://static.gl-inet.com/docs/en/3/app/wireguard/wireguard_connect.png)

Choose the server and click `Connect`.

![wireguard connected](https://static.gl-inet.com/docs/en/3/app/wireguard/wireguard_connected.png)

If will show upload and download traffic when connected.

### WireGuard Providers

If you are using <a href="https://www.azirevpn.com/aff/9x7wisg4" target="_blank">AzireVPN</a> or <a href="https://mullvad.net/" target="_blank">Mullvad</a>, it has integrated their services.

<details>
<summary>AzireVPN</summary>

Select <a href="https://www.azirevpn.com/aff/9x7wisg4" target="_blank">AzireVPN</a> as the provider, enter your User Name and Password and then click "Add" finish the WireGuard Client setup.

![Configuraion](https://static.gl-inet.com/docs/en/3/app/wireguard/setup_azirevpn.png)

</details>

<details>
<summary>Mullvad</summary>
Select Mullvad as the provider, enter your Account Number and then click "Add" to finish the WireGuard Client setup.

![Configuraion](https://static.gl-inet.com/docs/en/3/app/wireguard/setup_mullvadvpn.png)

</details>

Waiting for the adding. For Mullvad, it will take several minutes, please be patient.

Other recommended WireGuard provider:

<details>
<summary>OVPN</summary>
<p><a href="https://www.ovpn.com/en?ref=glinet" target="_blank">Office Website</a></p>
<p>Login <a href="https://www.ovpn.com/en?ref=glinet" target="_blank">www.ovpn.com</a>, find the menu below to get WireGuard configuration files.</p>
<p><img alt="" src="https://static.gl-inet.com/docs/en/3/app/wireguard/ovpn/get_wireguard_configuration_files.jpg"/></p>
<p>Click Generate WireGuard keys, choose the server you wanted, then download the config.</p>
<p><img alt="" src="https://static.gl-inet.com/docs/en/3/app/wireguard/ovpn/download_wireguard_configuration_files.jpg"/></p>
<p>Open the config by text edit software, copy and paste the content to router wireguard client.</p>
<p><img alt="paste wireguard config" src="https://static.gl-inet.com/docs/en/3/app/wireguard/torguard_copy_paste_wireguard_config.jpg" /></p>
<p>The config may contain IPv6 content, as GL.iNet routers is not support IPv6 good enough, so please delete the IPv6 content. I have a example show below, the highlight content is the IPv6 content.</p>
<p><img alt="remove wireguard ipv6 content" src="https://static.gl-inet.com/docs/en/3/app/wireguard/ovpn/remove_wireguard_ipv6_content.jpg" /></p>
</details>

<details>
<summary>SpiderVPN</summary>
<p><a href="https://spidervpn.org/#a_aid=5ddfa0372e7ff">Official Website</a></p>
<p>Login <a href="https://spidervpn.org/#a_aid=5ddfa0372e7ff">www.spidervpn.org</a>, find the section to get your VPN configuration. Follow the steps to get the configuration.</p>
<p>1.</p>
<p><img alt="get spider vpn configuration" src="https://static.gl-inet.com/docs/en/3/app/wireguard/spidervpn_config_1.jpg" /></p>
<p>2. download the vpn configuration</p>
<p><img alt="download spider vpn configuration" src="https://static.gl-inet.com/docs/en/3/app/wireguard/spidervpn_config_2.jpg" /></p>
<p>3. Access the web Admin Panel of your GL.iNet router, click New Profile at WireGuard Client.</p>
<p><img alt="download spider vpn configuration" src="https://static.gl-inet.com/docs/en/3/app/wireguard/spidervpn_config_4.jpg" /></p>
<p>4. open the configuration you just download from SpiderVPN website, then paste to the new Profile dialog, you need to adjust the format, make sure there is a space on each side of the equals sign.</p>
<p><img alt="download spider vpn configuration" src="https://static.gl-inet.com/docs/en/3/app/wireguard/spidervpn_config_3.jpg" /></p>
</details>

<details>
<summary>TorGuard</summary>
<p><a href="https://torguard.net/aff.php?aff=3040" target="_blank">Official Website</a></p>
<ol type="1">
<li>
    <p>If you are using <a href="https://torguard.net/aff.php?aff=3040" target="_blank">TorGuard</a>, you need to login the control panel and find Enable WireGuard Access from the "Tools" menu. </p>
    <p><img alt="torguard enable wireguard access" src="https://static.gl-inet.com/docs/en/3/app/wireguard/torguard_enable_wireguard_access.png" /></p>
</li>
<li>
    <p>Downlod the config.</p>
    <p><img alt="torguard enable wireguard access" src="https://static.gl-inet.com/docs/en/3/app/wireguard/torguard_download_wireguard_config.jpg" /></p>
</li>
<li>
    <p>Copy & paste the config content to router wireguard client.</p>
    <p>Open the config by text edit software, copy and paste the content to router wireguard client.</p>
    <p><img alt="torguard enable wireguard access" src="https://static.gl-inet.com/docs/en/3/app/wireguard/torguard_copy_paste_wireguard_config.jpg" /></p>
    <p><a href="https://torguard.net/knowledgebase.php?action=displayarticle&id=250" target="_blank">Refer link</a></p>
</li>
</ol>
</details>

<details id="strongvpn">
<summary>VPN.AC</summary>
<p><a href="https://vpn.ac/aff.php?aff=1424" target="_blank">Official Website</a></p>
<ol type="1">
<li>
    <p>If you are using <a href="https://vpn.ac/aff.php?aff=1424" target="_blank">VPN.AC</a>, you need to login the control panel and find WireGuard Manager from the "Services" menu. </p>
    <p><img alt="VPN.AC WireGuard Manager" src="https://static.gl-inet.com/docs/en/3/app/wireguard/vpn.ac_wireguard_manager.jpg" /></p>
</li>
<li>
    <p>Create the config and download.</p>
    <p><img alt="VPN.AC create wireguard profiles" src="https://static.gl-inet.com/docs/en/3/app/wireguard/vpn.ac_create_wireguard_profiles.jpg" /></p>
</li>
<li>
    <p>Copy & paste the config content to router wireguard client.</p>
    <p>Extract files, open the config by text edit software, copy and paste the content to router wireguard client.</p>
    <p><img alt="VPN.AC enable wireguard access" src="https://static.gl-inet.com/docs/en/3/app/wireguard/vpn.ac_copy_paste_wireguard_config.jpg" /></p>
</li>
</ol>
</details>

<details>
<summary>StrongVPN</summary>
<p><a href="https://strongvpn.com/?tr_aid=5ac44bd241ca7" target="_blank">Official Website</a></p>
<p>If you are using <a href="https://strongvpn.com/?tr_aid=5ac44bd241ca7" target="_blank">StrongVPN</a>, sign in at <a href="https://wg.strongvpn.com" target="_blank">https://wg.strongvpn.com</a></p>
<p>Select a location from the drop down menu, click GENERATE, open the downloaded text file, and then copy the contents of the file.</p>
<p><img alt="strongvpn wireguard configuration generator" src="https://static.gl-inet.com/docs/en/3/app/wireguard/strongvpn/strongvpn_wireguard_configuration_generator.png" /></p>
<p>Login web Admin Panel, VPN --> WireGuard Client --> Add New Profiles</p>
<p><img alt="gl.inet router new wireguard profile" src="https://static.gl-inet.com/docs/en/3/app/wireguard/strongvpn/strongvpn_1.png" /></p>
<p>Specify the name of your server and click next.</p>
<p><img alt="gl.inet router new wireguard profile" src="https://static.gl-inet.com/docs/en/3/app/wireguard/strongvpn/strongvpn_2.png" /></p>
<p>Paste the configuration text to the Configuration windows. Click <b>Add</b></p>
<p><img alt="gl.inet router new wireguard profile" src="https://static.gl-inet.com/docs/en/3/app/wireguard/strongvpn/strongvpn_3.png" /></p>
<p>Connect to the WireGuard server by clicking <b>Connect</b></p>
<p><img alt="gl.inet router new wireguard profile" src="https://static.gl-inet.com/docs/en/3/app/wireguard/strongvpn/strongvpn_4.png" /></p>
<p>You will see the upload and download traffic when it is connected successfully.</p>
<p><img alt="gl.inet router new wireguard profile" src="https://static.gl-inet.com/docs/en/3/app/wireguard/strongvpn/strongvpn_5.png" /></p>
<p><a href="https://support.strongvpn.com/hc/en-us/articles/360035942554-WireGuard-GLiNet-Routers" target="_blank">Refer link</a></p>
</details>


<details>
<summary>WeVPN</summary>
<p><a href="https://www.wevpn.com/aff/glinet" target="_blank">Official Website</a></p>
<p>1. Access the Members Area to make a custom config using the Config Generator.</p>
<p><img alt="wevpn manual configuration generator" src="https://static.gl-inet.com/docs/en/3/app/wireguard/wevpn/wevpn_1.jpg" /></p>
<p>2. When you select the Wireguard protocol, you will need to select <b>Add device</b> for the region selected.</p>
<p><img alt="wevpn manual configuration generator" src="https://static.gl-inet.com/docs/en/3/app/wireguard/wevpn/wevpn_2.jpg" /></p>
<p>3. Select the Download option. Open it by a text editor, copy the content.</p>
<p>4. Login web Admin Panel, VPN --> WireGuard Client --> Add New Profiles</p>
<p><img alt="gl.inet router new wireguard profile" src="https://static.gl-inet.com/docs/en/3/app/wireguard/wevpn/wevpn_3.png" /></p>
<p>5. Specify the name of your server and click next.</p>
<p><img alt="gl.inet router new wireguard profile" src="https://static.gl-inet.com/docs/en/3/app/wireguard/wevpn/wevpn_4.png" /></p>
<p>6. Paste the configuration text to the Configuration windows. Click <b>Add</b></p>
<p><img alt="gl.inet router new wireguard profile" src="https://static.gl-inet.com/docs/en/3/app/wireguard/wevpn/wevpn_5.png" /></p>
<p>7. Connect to the WireGuard server by clicking <b>Connect</b></p>
<p><img alt="gl.inet router new wireguard profile" src="https://static.gl-inet.com/docs/en/3/app/wireguard/wevpn/wevpn_6.png" /></p>
<p>8. You will see the upload and download traffic when it is connected successfully.</p>
<p><img alt="gl.inet router new wireguard profile" src="https://static.gl-inet.com/docs/en/3/app/wireguard/wevpn/wevpn_7.png" /></p>

<p><a href="https://wevpn.com/support/hc/en-us/search/click?data=BAh7CjoHaWRsKwgmhcHUUwA6CXR5cGVJIgxhcnRpY2xlBjoGRVQ6CHVybEkiTWh0dHBzOi8vd2V2cG4uemVuZGVzay5jb20vaGMvZW4tdXMvYXJ0aWNsZXMvMzYwMDUxNzM3ODk0LVdpcmVndWFyZC1TZXR1cAY7B1Q6DnNlYXJjaF9pZEkiKTg1MzYyYTliLTFiNjQtNDgxZi1hOTZiLTIzMTE3NzQ4ZGMwMwY7B0Y6CXJhbmtpBg%3D%3D--708754fd43f05b5496036ebe0747c5a6dac84bf3">Refer link</a></p>
</details>

<details>
<summary>Windscribe</summary>
<p><a href="https://windscribe.com/" target="_blank">Official Website</a></p>
<p>1. Login then access the <a href="https://windscribe.com/getconfig/wireguard">WireGuard Config Generator</a>. Select location and port you'd like to use, then click Download Config.</p>
<p><img alt="windscribe WireGuard Config Generator" src="https://static.gl-inet.com/docs/en/3/app/wireguard/windscribe/windscribe_01.jpg" /></p>
<p>2. Open it by a text editor, copy the content.</p>
<p>3. Login web Admin Panel, VPN --> WireGuard Client --> Add New Profiles</p>
<p><img alt="windscribe WireGuard Config Generator" src="https://static.gl-inet.com/docs/en/3/app/wireguard/windscribe/windscribe_02.jpg" /></p>
<p>4. Paste the configuration text to the Configuration windows. Click <b>Next</b></p>
<p><img alt="windscribe WireGuard Config Generator" src="https://static.gl-inet.com/docs/en/3/app/wireguard/windscribe/windscribe_03.jpg" /></p>
<p>5. Specify the name of your server and click <b>Add</b>.</p>
<p><img alt="windscribe WireGuard Config Generator" src="https://static.gl-inet.com/docs/en/3/app/wireguard/windscribe/windscribe_04.jpg" /></p>
<p>6. Connect to the WireGuard server by clicking <b>Connect</b></p>
<p><img alt="windscribe WireGuard Config Generator" src="https://static.gl-inet.com/docs/en/3/app/wireguard/windscribe/windscribe_05.jpg" /></p>
<p>7. You will see the upload and download traffic when it is connected successfully.</p>
<p><img alt="windscribe WireGuard Config Generator" src="https://static.gl-inet.com/docs/en/3/app/wireguard/windscribe/windscribe_06.jpg" /></p>
</details>

<details>
<summary>VPN Unlimited(KeepSolid)</summary>
<p><a href="https://keepsolid.g2afse.com/click?pid=270&offer_id=7" target="_blank">Official Website</a></p>
<p>If you are using <a href="https://keepsolid.g2afse.com/click?pid=270&offer_id=7" target="_blank">VPN Unlimited</a>, sign in to your <a href="https://my.keepsolid.com/" target="_blank">User Office</a> > select the VPN Unlimited® application > click <b>Manage</b>.</p>
<p><img alt="vpn unlimited setup on gl.inet router" src="https://static.gl-inet.com/docs/en/3/app/wireguard/vpnunlimited/01.jpg" /></p>

<p>Press the field under <b>Device</b> and click <b>Manually create a new device…</b> > set it’s custom name, for example WireGuard  > choose appropriate location of the <b>Server</b> > select the <b>WireGuard</b>® protocol from the dropdown menu > click <b>Generate</b>. </p>
<p><img alt="vpn unlimited setup on gl.inet router" src="https://static.gl-inet.com/docs/en/3/app/wireguard/vpnunlimited/02.jpg" /></p>

<p>The configuration parameters will then appear below in the text format. You’ll need them for further configuration of your GL.iNet router.</p>
<p><img alt="vpn unlimited setup on gl.inet router" src="https://static.gl-inet.com/docs/en/3/app/wireguard/vpnunlimited/03.jpg" /></p>

<p>Login to the web Admin Panel, default is http://192.168.8.1, click VPN > WireGuard® Client.</p>
<p><img alt="vpn unlimited setup on gl.inet router" src="https://static.gl-inet.com/docs/en/3/app/wireguard/vpnunlimited/04.jpg" /></p>

<p>Click <b>Add New Profiles</b>.</p>
<p><img alt="vpn unlimited setup on gl.inet router" src="https://static.gl-inet.com/docs/en/3/app/wireguard/vpnunlimited/05.jpg" /></p>

<p>Specify custom <b>Name</b> of server and click <b>Next</b>.</p>
<p><img alt="vpn unlimited setup on gl.inet router" src="https://static.gl-inet.com/docs/en/3/app/wireguard/vpnunlimited/06.jpg" /></p>

<p>The <b>Add a New WireGuard</b>® <b>Client</b> window will appear. In the <b>Configuration</b> tab, paste the details of the manual configuration settings you’ve generated before: </p>

<p>
[Interface]</br>
PrivateKey = <i>paste the PrivateKey from your User Office</i></br>
ListenPort = <i>paste the ListenPort details</i></br>
Address = <i>paste Address information</i></br>
DNS = <i>paste DNS details from the User Office</i></br>
</br>
[Peer]</br>
PublicKey = <i>paste PublicKey from the User Office</i></br>
PresharedKey = <i>paste PresharedKey details</i></br>
AllowedIPs = <i>paste AllowedIPs details</i></br>
Endpoint = <i>paste Endpoint information</i></br>
</p>
<p><img alt="vpn unlimited setup on gl.inet router" src="https://static.gl-inet.com/docs/en/3/app/wireguard/vpnunlimited/07.jpg" /></p>

<p>Once completed, click <b>Add</b>.</p>

<p>Click <b>Connect</b> on the <b>WireGuard®</b> <b>Client</b> tab.</p>
<p><img alt="vpn unlimited setup on gl.inet router" src="https://static.gl-inet.com/docs/en/3/app/wireguard/vpnunlimited/08.jpg" /></p>

<p><a href="https://www.vpnunlimitedapp.com/help/manuals/wireguard-setup-on-glinet-router" target="_blank">Refer link</a></p>
</details>


<details id="ivpnid">
<summary>12VPX</summary>
<p><a href="https://12vpx.com/?aff=1174" target="_blank">Official Website</a></p>
<ol type="1">
    <li>
        <p>If you are using <a href="https://12vpx.com/?aff=1174" target="_blank">12VPX</a>, login then access <a href="https://12vpx.com/setup/wireguard" target="_blank">this page</a>, you will see the configs of all servers.
    </li>
    <li>
        <p>Copy & paste the config content to router wireguard client.</p>
        <p><img alt="IVPN enable wireguard access" src="https://static.gl-inet.com/docs/en/3/app/wireguard/vpn.ac_copy_paste_wireguard_config.jpg" /></p>
    </li>
</details>

<details>
<summary>IVPN</summary>
<p><a href="https://www.ivpn.net/" target="_blank">Official Website</a></p>
<ol type="1">
    <li>
        <p>If you are using <a href="https://www.ivpn.net/" target="_blank">IVPN</a>, you need to Log in to the Client Area on the IVPN website. <a href="https://www.ivpn.net/clientarea/login" target="_blank">IVPN Client Area</a>, then follow the <a href="https://www.ivpn.net/setup/gnu-linux-wireguard.html" target="_blank">WireGuard Setup Guides</a> </p>
        <p>Skip the step 1, because WireGuard is pre-installed on GL.iNet routers.</p>
        <p><img alt="IVPN linux steup guide" src="https://static.gl-inet.com/docs/en/3/app/wireguard/ivpn_linux_setup_guide.jpg"/></p>
    </li>
    <li>
        <p>After generate the config.</p>
        <p><img alt="after generate the config" src="https://static.gl-inet.com/docs/en/3/app/wireguard/ivpn_has_create_profile.jpg" /></p>
        <p>Copy & paste the config content to router wireguard client.</p>
        <p><img alt="IVPN enable wireguard access" src="https://static.gl-inet.com/docs/en/3/app/wireguard/vpn.ac_copy_paste_wireguard_config.jpg" /></p>        
    </li>
    <p><a href="https://www.ivpn.net/setup/gnu-linux-wireguard.html" target="_blank">Refer link</a></p>
</ol>
</details>

<details id="nvpn">
<summary>ANONINE</summary>
<p><a href="https://anonine.com/" target="_blank">Official Website</a></p>
<ol type="1">
    <li>
        <p>Fellow the guide <a href="https://help.anonine.com/support/solutions/articles/5000817193-anonine-wireguard-installation-guide-for-windows-10" target="_blank">here</a> to create the config.</p>
    </li>
    <li>
    <p>Copy & paste the config content to router wireguard client.</p>
        <p><img alt="IVPN enable wireguard access" src="https://static.gl-inet.com/docs/en/3/app/wireguard/vpn.ac_copy_paste_wireguard_config.jpg" /></p>  
    </li>
</ol>
</details>


<details>
<summary>NVPN</summary>
<p><a href="https://www.nvpn.net/" target="_blank">Official Website</a></p>
<ol type="1">
    <li>
        <p>Fellow the guide <a href="https://support.nvpn.net/Knowledgebase/Article/View/428/0/how-to-use-our-wireguard#windows" target="_blank">here</a> to create the config.</p>
    </li>
    <li>
        <p>Copy & paste the config content to router wireguard client.</p>
        <p><img alt="NVPN enable wireguard access" src="https://static.gl-inet.com/docs/en/3/app/wireguard/vpn.ac_copy_paste_wireguard_config.jpg" /></p>  
    </li>
</ol>
</details>



Suggest a WireGuard provider? Please contact [support@gl-inet.com](mailto:support@gl-inet.com)

### Connect to the WireGuard server

Click `Connect`. You will see the upload and download traffic when it is connected successfully.

![1531206410246](https://static.gl-inet.com/docs/en/3/app/wireguard/WGC5.png)

---

## WireGuard Server

You can set up a WireGuard server on GL.iNet router. Click `+ Create a New User`.

![1531199972139](https://static.gl-inet.com/docs/en/3/app/wireguard/WGS1.png)



### Start a WireGuard server

You can simply use the default parameters of **Local IP** and **Local Port**, or you can set your own value. Then click `Start` to start your own WireGuard server. 

![Sever Configuration](https://static.gl-inet.com/docs/en/3/app/wireguard/WGS2.png)



### Add a new client

You have to add a new user and apply the configurations when you are connecting to this WireGuard server.

Click `Management` tab and then `Create a New User`. 

![Add Client](https://static.gl-inet.com/docs/en/3/app/wireguard/WGS3.png)



Specify the **Name** of the new client and then click `Add`.

![Name](https://static.gl-inet.com/docs/en/3/app/wireguard/WGS4.png)



### Get the configuration details for your client

You can now check the list of the clients you added. You can `Delete` any unwanted client. Please click `Configurations` to find the configuration details which you need to use when you are setting up WireGuard client. We provide QRcode, Plain Text and JSON configurations currently.

![Configurations](https://static.gl-inet.com/docs/en/3/app/wireguard/configurations.jpg)



If you are using another GL.iNet router as a client, please copy the **JSON** configuration and paste it directly when you are setting up WireGuard client.

![Configurations](https://static.gl-inet.com/docs/en/3/app/wireguard/json.jpg)


## Wireguard App Support

You can also use WireGuard App on other devices with various OS

- Please refer to WireGuard Official Website： <https://www.wireguard.com/install/>


## Visit Client’s LAN Subnet

Visit Client’s LAN Subnet from WireGuard Server LAN Subnet

1) Change WireGuard clients LAN IP to avoid IP confliction with Server

2) Modify Wireguard_Server Configuration

WinSCP or SSH into your the WireGuard Server (router) find and modify the file

```shell
/etc/config/wireguard_server
```

Add a line to the end of the config file of clients you want to visit.

```shell
list subnet '192.168.xxx.0/24'
```

**Save and Exit**



