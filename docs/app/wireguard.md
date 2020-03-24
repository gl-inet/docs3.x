# WireGuard Settings for Firmware 3.0  

WireGuard is an extremely simple yet fast and modern VPN that utilizes **state-of-the-art cryptography**. It aims to be [faster](https://www.wireguard.com/performance/), [simpler](https://www.wireguard.com/quickstart/), leaner, and more useful than IPSec, while avoiding the massive headache. It intends to be considerably more performant than OpenVPN. 

You can setup and use WireGuard easily in firmware 3.0, wireGuard server and clients are pre-installed in firmware 3.0. 



---

## WireGuard Server

You can set up a WireGuard server on GL.iNet router with firmware 3.0. Click `+ Create a New User`.

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
    <p>If you are using <a href="https://torguard.net/aff.php?aff=3040" target="_blank">TorGuard</a>, you need to login the control panel and Enable WireGuard Access from the "Tools" menu. </p>
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
</details>

### 3) Connect to the WireGuard server

Click `Connect`. You will see the upload and download traffic when it is connected successfully.

![1531206410246](https://static.gl-inet.com/docs/en/3/app/wireguard/WGC5.png)



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



