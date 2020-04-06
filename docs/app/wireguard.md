# WireGuard
WireGuard is an extremely simple yet fast and modern VPN that utilizes **state-of-the-art cryptography**. It aims to be [faster](https://www.wireguard.com/performance/), [simpler](https://www.wireguard.com/quickstart/), leaner, and more useful than IPSec, while avoiding the massive headache. It intends to be considerably more performant than OpenVPN. 

GL.iNet routers have pre-installed WireGuard server and client.

If you are looking for a WireGuard provider, access [this](#3-wireguard-providers) directly.

---

## WireGuard Client 

To set up a WireGuard client, please click `+ Add New Profiles`.

![Client](https://static.gl-inet.com/docs/en/3/app/wireguard/WGC1.png)



### 1) Specify the name of your server

Specify the name and then click `Next`.

![Name](https://static.gl-inet.com/docs/en/3/app/wireguard/name.jpg)



### 2) Input the configurations

There are different methods to input the configurations.

![Configuraion](https://static.gl-inet.com/docs/en/3/app/wireguard/configurations1.jpg)

You can copy the `JSON` or `Plain Text` configurations from your server to `Configuration` or input the settings manually.

![Configuraion](https://static.gl-inet.com/docs/en/3/app/wireguard/other9.1.png)

After copy the `JSON` or `Plain Text` from your server, you can paste it in the `Configuration` and then click **Add** to finish the WireGuard Client setup.

![Configuraion](https://static.gl-inet.com/docs/en/3/app/wireguard/wire1.1.PNG)


### 3) WireGuard Providers

If you are using <a href="https://www.azirevpn.com/aff/9x7wisg4" target="_blank">AzireVPN</a> or <a href="https://mullvad.net/" target="_blank">Mullvad</a>, you can click `Others` and use your **AzireVPN** or **Mullvad** account to set up WireGuard client directly.

<details>
<summary>AzireVPN</summary>

Select <a href="https://www.azirevpn.com/aff/9x7wisg4" target="_blank">AzireVPN</a> as the provider, enter your User Name and Password and then click "Add" finish the WireGuard Client setup.

![Configuraion](https://static.gl-inet.com/docs/en/3/app/wireguard/Wire2.PNG)

</details>

<details>
<summary>Mullvad</summary>
Select Mullvad as the provider, enter your Account Number and then click "Add" to finish the WireGuard Client setup.

![Configuraion](https://static.gl-inet.com/docs/en/3/app/wireguard/Wire3.PNG)

</details>

Waiting for the adding.

![Configuraion](https://static.gl-inet.com/docs/en/3/app/wireguard/Other3.PNG)

Other recommended WireGuard provider:

<details>
<summary>SpiderVPN</summary>
<p><a href="https://spidervpn.org/#a_aid=5ddfa0372e7ff">Official Website</a></p>
<p>Login in <a href="https://spidervpn.org/#a_aid=5ddfa0372e7ff">www.spidervpn.org</a>, find the section to get your VPN configuration. Follow the steps to get the configuration.</p>
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
<p><a href="https://strongvpn.com/" target="_blank">Official Website</a></p>
<p>If you are using <a href="https://strongvpn.com/" target="_blank">StrongVPN</a>, please read <a href="https://support.strongvpn.com/hc/en-us/articles/360035942554-WireGuard-GLiNet-Routers" target="_blank">this document</a></p>
</details>


<details>
<summary>VPN Unlimited</summary>
<p><a href="https://keepsolid.g2afse.com/click?pid=270&offer_id=7" target="_blank">Official Website</a></p>
<p>If you are using <a href="https://keepsolid.g2afse.com/click?pid=270&offer_id=7" target="_blank">VPN Unlimited</a>, please read <a href="https://www.vpnunlimitedapp.com/help/manuals/wireguard-setup-on-glinet-router" target="_blank">this document</a></p>
</details>


<details id="ivpnid">
<summary>12VPX</summary>
<p><a href="https://12vpx.com/" target="_blank">Official Website</a></p>
<ol type="1">
    <li>
        <p>If you are using <a href="https://12vpx.com/" target="_blank">12VPX</a>, login then access <a href="https://12vpx.com/setup/wireguard" target="_blank">this page</a>, you will see the configs of all servers.
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
        <p>If you are using <a href="https://www.ivpn.net/" target="_blank">IVPN</a>, you need to Log in to the Client Area on the IVPN website. <a href="https://www.ivpn.net/clientarea/login" target="_blank">IVPN Client Area</a>, then follow the <a href="https://www.ivpn.net/clientarea/login" target="_blank">WireGuard Setup Guides</a> </p>
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

<details>
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

### 4) Connect to the WireGuard server

Click `Connect`. You will see the upload and download traffic when it is connected successfully.

![1531206410246](https://static.gl-inet.com/docs/en/3/app/wireguard/WGC5.png)

---

## WireGuard Server

You can set up a WireGuard server on GL.iNet router. Click `+ Create a New User`.

![1531199972139](https://static.gl-inet.com/docs/en/3/app/wireguard/WGS1.png)



### 1) Start a WireGuard server

You can simply use the default parameters of **Local IP** and **Local Port**, or you can set your own value. Then click `Start` to start your own WireGuard server. 

![Sever Configuration](https://static.gl-inet.com/docs/en/3/app/wireguard/WGS2.png)



### 2) Add a new client

You have to add a new user and apply the configurations when you are connecting to this WireGuard server.

Click `Management` tab and then `Create a New User`. 

![Add Client](https://static.gl-inet.com/docs/en/3/app/wireguard/WGS3.png)



Specify the **Name** of the new client and then click `Add`.

![Name](https://static.gl-inet.com/docs/en/3/app/wireguard/WGS4.png)



### 3) Get the configuration details for your client

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



