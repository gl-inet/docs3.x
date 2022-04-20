# Setup WireGuard on GL.iNet router

WireGuard is an extremely simple yet fast and modern VPN that utilizes **state-of-the-art cryptography**. It aims to be [faster](https://www.wireguard.com/performance/), [simpler](https://www.wireguard.com/quickstart/), leaner, and more useful than IPSec, while avoiding the massive headache. It intends to be considerably more performant than OpenVPN. 

GL.iNet routers have pre-installed WireGuard Server and Client.

If you are looking for a WireGuard provider, [check out this directly](#wireguard-providers).

We can setup WireGuard Client via web Admin Panel and [mobile app](../mobile_app). For the mobile app, it has already integrated some WireGuard Service Providers, they are AzireVPN, MullvadVPN, TorGuardVPN, OVPN, WeVPN, StrongVPN, PIA VPN, SpiderVPN.

For setup via web Admin Panel, please follow the guide below.

---

## Setup WireGuard Client

There is a video tutorial, please check out [here](#video-tutorial).

To setup a WireGuard Client, please click `+ Set up WireGuard Manually`.

![setup wireguard manually](https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/setup_wireguard_manually.png){class="glboxshadow"}

### Input the configuration

There are different methods to input the configuration.

![paste wireguard config](https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/paste_wireguard_config.png){class="glboxshadow"}

For AzireVPN and MullvadVPN users, please choose the `Providers` tab, for more detail, access [here](#wireguard-providers).

You can paste the configuration on `Configuration` tab, or create from scratch on `Manual Input` tab.

![add a new wireguard config](https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/add_a_new_wireguard_config.png){class="glboxshadow"}

### Specify the name of your server

Specify a descriptive name and then click `Next`.

![config name](https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/input_config_name.png){class="glboxshadow"}

![connect wireguard](https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/wireguard_connect.png){class="glboxshadow"}

Choose the server and click `Connect`.

![wireguard connected](https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/wireguard_connected.png){class="glboxshadow"}

If connected, it will show the traffic info of upload and download .

**Note that you can't running VPN Client and Server at the same time, and also can't running OpenVPN Client and WireGuard Client at the same time.**

### WireGuard Providers

If you are using [AzireVPN](https://www.azirevpn.com/aff/9x7wisg4){target="_blank"} or [Mullvad](https://mullvad.net/), it has integrated their services.

<details>
  <summary>AzireVPN</summary>
  <ul>
    <li>
      <p>
        Select <a href="https://www.azirevpn.com/aff/9x7wisg4" target="_blank">AzireVPN</a> as the provider, enter your User Name and Password and then click `Next`.
      </p>
      <p>
        <img class="glboxshadow" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/azirevpn/setup_azirevpn.png" alt="Configuraion" />
      </p>
      <p>It will take several minutes to get configs, please be patient.</p>
    </li>
    <li>You can also use <a href="../mobile_app">mobile app</a> to setup AzireVPN.</li>
  </ul>
</details>

<details>
  <summary>Mullvad</summary>
  <ul>
    <li>
      <p>
        Select Mullvad as the provider, enter your Account Number and then click "Add" to finish the WireGuard Client setup.
      </p>
      <p>
        <img class="glboxshadow" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/mullvadvpn/setup_mullvadvpn.png" alt="Configuraion" />
      </p>
      <p>
        It will take several minutes to get configs, please be patient.
      </p>
    </li>
    <li>You can also use <a href="../mobile_app">mobile app</a> to setup Mullvad.</li>
  </ul>
</details>

Other recommended WireGuard provider:

<details>
  <summary>OVPN</summary>
  <p>
    <a href="https://www.ovpn.com/en?ref=glinet" target="_blank">Office Website</a>
  </p>
  <ol type="1">
    <li>
      <p>
        Login <a href="https://www.ovpn.com/en?ref=glinet" target="_blank">www.ovpn.com</a>, find the menu below to get WireGuard configuration files.
      </p>
      <p>
        <img class="glboxshadow" alt="" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/ovpn/get_wireguard_configuration_files.jpg"/>
      </p>
    </li>
    <li>
      <p>Click Generate WireGuard keys, choose the server you wanted, then download the config.</p>
      <p>
        <img class="glboxshadow" alt="" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/ovpn/download_wireguard_configuration_files.jpg"/>
      </p>
    </li>
    <li>
      <p>
        Open the config by text edit software, copy the content.
      </p>
      <p>
        The config may contain IPv6 content, as GL.iNet routers is not support IPv6 good enough, so please delete the IPv6 content. I have a example show below, the highlight content is the IPv6 content.
      </p>
      <p>
        <img class="glboxshadow" alt="remove wireguard ipv6 content" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/ovpn/remove_wireguard_ipv6_content.jpg" />
      </p>
    </li>
    <li>
      <p>
        Login web Admin Panel, VPN --> WireGuard Client --> Set up WireGuard Manually
      </p>
      <p>
        <img class="glboxshadow" alt="setup wireguard manually" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/setup_wireguard_manually.png" />
      </p>
    </li>
    <li>
      <p>
        Paste the configuration text to the Configuration windows. Click <b>Next</b>
      </p>
      <p>
        <img class="glboxshadow" alt="paste wireguard config" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/add_a_new_wireguard_config.png" />
      </p>
    </li>
    <li>
      <p>
        Specify the name of your server and click <b>Add</b>
      </p>
      <p>
        <img class="glboxshadow" alt="input config name" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/input_config_name.png" />
      </p>
    </li>
    <li>
      <p>
        Connect to the WireGuard server by clicking <b>Connect</b>
      </p>
      <p>
        <img class="glboxshadow" alt="connect wireguard" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/wireguard_connect.png" />
      </p>
    </li>
    <li>
      <p>
        You will see the upload and download traffic when it is connected successfully.
      </p>
      <p>
        <img class="glboxshadow" alt="wiregaurd connected" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/wireguard_connected.png" />
      </p>
    </li>
    <li>You can also use <a href="../mobile_app">mobile app</a> to setup OVPN.</li>
  </ol>
</details>

<details>
  <summary>TorGuard</summary>
  <p>
    <a href="https://torguard.net/aff.php?aff=3040" target="_blank">Official Website</a>
  </p>
  <ol type="1">
    <li>
      <p>
        If you are using <a href="https://torguard.net/aff.php?aff=3040" target="_blank">TorGuard</a>, you need to login the control panel and find <b>Config Generator</b> from the <b>Tools</b> menu. 
      </p>
      <p>
        <img class="glboxshadow" alt="torguard enable wireguard access" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/torguard/torguard_menu.jpg" />
      </p>
    </li>
    <li>
      <p>
        On the Config Generator page, choose <b>VPN Tunnel type</b> to WireGuard, select <b>VPN Server</b>, input <b>VPN Username</b> and <b>VPN Password</b>, click <b>Generate Config</b> button, wait a second, you will find the config on <b>Config Output</b> section.
      </p>
      <p>
        <img class="glboxshadow" alt="torguard generate wireguard config" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/torguard/torguard_generate_wireguard_config.png" />
      </p>
      <p>
        You can find the <b>VPN Username</b> and <b>VPN Password</b> below
      </p>
      <p>
        <img class="glboxshadow" alt="torguard vpn username vpn password" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/torguard/torguard_vpnusername_vpnpassword.png" />
      </p>
    </li>
    <li>
      <p>
        Copy the config content. Please note that the first line is <b># TorGuard WireGuard Config</b>, delete the first line before copy it.
      </p>
    </li>
    <li>
      <p>Login web Admin Panel, VPN --> WireGuard Client --> Set up WireGuard Manually</p>
      <p>
        <img class="glboxshadow" alt="setup wireguard manually" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/setup_wireguard_manually.png" />
      </p>
    </li>
    <li>
      <p>Paste the configuration text to the Configuration windows. Click <b>Next</b></p>
      <p>
        <img class="glboxshadow" alt="paste wireguard config" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/add_a_new_wireguard_config.png" />
      </p>
    </li>
    <li>
      <p>Specify the name of your server and click <b>Add</b></p>
      <p>
        <img class="glboxshadow" alt="input config name" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/input_config_name.png" />
      </p>
    </li>
    <li>
      <p>Connect to the WireGuard server by clicking <b>Connect</b></p>
      <p>
        <img class="glboxshadow" alt="connect wireguard" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/wireguard_connect.png" />
      </p>
    </li>
    <li>
      <p>You will see the upload and download traffic when it is connected successfully.</p>
      <p>
        <img class="glboxshadow" alt="wiregaurd connected" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/wireguard_connected.png" />
      </p>
    </li>
    <li>You can also use <a href="../mobile_app">mobile app</a> to setup TorguardVPN.</li>
  </ol>
  <p>
    <a href="https://torguard.net/knowledgebase.php?action=displayarticle&id=250" target="_blank">Refer link</a>
  </p>
</details>

<details>
  <summary>VPN.AC</summary>
  <p>
    <a href="https://vpn.ac/aff.php?aff=1424" target="_blank">Official Website</a>
  </p>
  <ol type="1">
    <li>
      <p>If you are using <a href="https://vpn.ac/aff.php?aff=1424" target="_blank">VPN.AC</a>, you need to login the control panel and find WireGuard Manager from the "Services" menu. </p>
      <p><img class="glboxshadow" alt="VPN.AC WireGuard Manager" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/vpnac/vpn.ac_wireguard_manager.jpg" /></p>
    </li>
    <li>
      <p>Create the config and download.</p>
      <p><img class="glboxshadow" alt="VPN.AC create wireguard profiles" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/vpnac/vpn.ac_create_wireguard_profiles.jpg" /></p>
    </li>
    <li>
      <p>Extract file, open the config by text edit software, copy the content.</p>
    </li>
    <li>
      <p>Login web Admin Panel, VPN --> WireGuard Client --> Set up WireGuard Manually</p>
      <p><img class="glboxshadow" alt="setup wireguard manually" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/setup_wireguard_manually.png" /></p>
    </li>
    <li>
      <p>Paste the configuration text to the Configuration windows. Click <b>Next</b></p>
      <p><img class="glboxshadow" alt="paste wireguard config" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/add_a_new_wireguard_config.png" /></p>
    </li>
    <li>
      <p>Specify the name of your server and click <b>Add</b></p>
      <p><img class="glboxshadow" alt="input config name" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/input_config_name.png" /></p>
    </li>
    <li>
      <p>Connect to the WireGuard server by clicking <b>Connect</b></p>
      <p><img class="glboxshadow" alt="connect wireguard" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/wireguard_connect.png" /></p>
    </li>
    <li>
      <p>You will see the upload and download traffic when it is connected successfully.</p>
      <p><img class="glboxshadow" alt="wiregaurd connected" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/wireguard_connected.png" /></p>
    </li>
  </ol>
</details>

<details>
  <summary>StrongVPN</summary>
  <p>
    <a href="https://strongvpn.com/?tr_aid=5ac44bd241ca7" target="_blank">Official Website</a>
  </p>
  <ol type="1">
    <li>
      <p>If you are using <a href="https://strongvpn.com/?tr_aid=5ac44bd241ca7" target="_blank">StrongVPN</a>, sign in at <a href="https://wg.strongvpn.com" target="_blank">https://wg.strongvpn.com</a></p>
    </li>
    <li>
      <p>Select a location from the drop down menu, click <b>GENERATE</b>, open the downloaded text file.</p>
      <p><img class="glboxshadow" alt="strongvpn wireguard configuration generator" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/strongvpn/strongvpn_wireguard_configuration_generator.png" /></p>
    </li>
    <li>
      <p>Open the config by text edit software, copy the content.</p>
    </li>
    <li>
      <p>Login web Admin Panel, VPN --> WireGuard Client --> Set up WireGuard Manually</p>
      <p><img class="glboxshadow" alt="setup wireguard manually" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/setup_wireguard_manually.png" /></p>
    </li>
    <li>
      <p>Paste the configuration text to the Configuration windows. Click <b>Next</b></p>
      <p><img class="glboxshadow" alt="paste wireguard config" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/add_a_new_wireguard_config.png" /></p>
    </li>
    <li>
      <p>Specify the name of your server and click <b>Add</b></p>
      <p><img class="glboxshadow" alt="input config name" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/input_config_name.png" /></p>
    </li>
    <li>
      <p>Connect to the WireGuard server by clicking <b>Connect</b></p>
      <p><img class="glboxshadow" alt="connect wireguard" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/wireguard_connect.png" /></p>
    </li>
    <li>
      <p>You will see the upload and download traffic when it is connected successfully.</p>
      <p><img class="glboxshadow" alt="wiregaurd connected" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/wireguard_connected.png" /></p>
    </li>
    <li>You can also use <a href="../mobile_app">mobile app</a> to setup StrongVPN.</li>
  </ol>
  <p>
    <a href="https://support.strongvpn.com/hc/en-us/articles/360035942554-WireGuard-GLiNet-Routers" target="_blank">Refer link</a>
  </p>
</details>

<details>
  <summary>WeVPN</summary>
  <p><a href="https://www.wevpn.com/aff/glinet" target="_blank">Official Website</a></p>
  <ol type="1">
    <li>
      <p>Access the Members Area to make a custom config using the Config Generator.</p>
      <p><img class="glboxshadow" alt="wevpn manual configuration generator" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/wevpn/wevpn_1.jpg" /></p>
    </li>
    <li>
      <p>When you select the WireGuard protocol, you will need to select <b>Add device</b> for the region selected.</p>
      <p><img class="glboxshadow" alt="wevpn manual configuration generator" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/wevpn/wevpn_2.jpg" /></p>
    </li>
    <li>
      <p>Select the Download option. Open it by a text editor, copy the content.</p>
    </li>
    <li>
      <p>Login web Admin Panel, VPN --> WireGuard Client --> Set up WireGuard Manually</p>
      <p><img class="glboxshadow" alt="setup wireguard manually" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/setup_wireguard_manually.png" /></p>
    </li>
    <li>
      <p>Paste the configuration text to the Configuration windows. Click <b>Next</b></p>
      <p><img class="glboxshadow" alt="paste wireguard config" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/add_a_new_wireguard_config.png" /></p>
    </li>
    <li>
      <p>Specify the name of your server and click <b>Add</b></p>
      <p><img class="glboxshadow" alt="input config name" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/input_config_name.png" /></p>
    </li>
    <li>
      <p>Connect to the WireGuard server by clicking <b>Connect</b></p>
      <p><img class="glboxshadow" alt="connect wireguard" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/wireguard_connect.png" /></p>
    </li>
    <li>
      <p>You will see the upload and download traffic when it is connected successfully.</p>
      <p><img class="glboxshadow" alt="wiregaurd connected" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/wireguard_connected.png" /></p>
    </li>
    <li>You can also use <a href="../mobile_app">mobile app</a> to setup WeVPN.</li>
  </ol>
  <p><a href="https://wevpn.com/support/hc/en-us/search/click?data=BAh7CjoHaWRsKwgmhcHUUwA6CXR5cGVJIgxhcnRpY2xlBjoGRVQ6CHVybEkiTWh0dHBzOi8vd2V2cG4uemVuZGVzay5jb20vaGMvZW4tdXMvYXJ0aWNsZXMvMzYwMDUxNzM3ODk0LVdpcmVndWFyZC1TZXR1cAY7B1Q6DnNlYXJjaF9pZEkiKTg1MzYyYTliLTFiNjQtNDgxZi1hOTZiLTIzMTE3NzQ4ZGMwMwY7B0Y6CXJhbmtpBg%3D%3D--708754fd43f05b5496036ebe0747c5a6dac84bf3">Refer link</a></p>
</details>

<details>
  <summary>Windscribe</summary>
  <p><a href="https://windscribe.com/" target="_blank">Official Website</a></p>
  <ol type="1">
    <li>
      <p>Login then access the <a href="https://windscribe.com/getconfig/wireguard">WireGuard Config Generator</a>. Select location and port you'd like to use, then click Download Config.</p>
      <p><img class="glboxshadow" alt="windscribe WireGuard Config Generator" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/windscribe/windscribe_01.jpg" /></p>
    </li>
    <li>
      <p>Open it by a text editor, copy the content.</p>
    </li>
    <li>
      <p>Login web Admin Panel, VPN --> WireGuard Client --> Set up WireGuard Manually</p>
      <p><img class="glboxshadow" alt="setup wireguard manually" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/setup_wireguard_manually.png" /></p>
    </li>
    <li>
      <p>Paste the configuration text to the Configuration windows. Click <b>Next</b></p>
      <p><img class="glboxshadow" alt="paste wireguard config" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/add_a_new_wireguard_config.png" /></p>
    </li>
    <li>
      <p>Specify the name of your server and click <b>Add</b></p>
      <p><img class="glboxshadow" alt="input config name" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/input_config_name.png" /></p>
    </li>
    <li>
      <p>Connect to the WireGuard server by clicking <b>Connect</b></p>
      <p><img class="glboxshadow" alt="connect wireguard" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/wireguard_connect.png" /></p>
    </li>
    <li>
      <p>You will see the upload and download traffic when it is connected successfully.</p>
      <p><img class="glboxshadow" alt="wiregaurd connected" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/wireguard_connected.png" /></p>
    </li>
  </ol>
  </ol>
</details>

<details>
  <summary>PrivateVPN</summary>
  <p><a href="https://affiliate.privatevpn.com/scripts/click.php?a_aid=5e3a511658bc3" target="_blank">Official Website</a></p>
  <ol type="1">
    <li>
      <p>Login then access the <a href="https://privatevpn.com/control-panel" target="_blank">Control panel</a></p>
      <p><img class="glboxshadow" alt="PrivateVPN Control panel" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/privatevpn/privatevpn_wireguard_1.jpg" /></p>
    </li>
    <li>
      <p>Select a server</p>
      <p><img class="glboxshadow" alt="select a server" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/privatevpn/privatevpn_wireguard_2.jpg" /></p>
    </li>
    <li>
      <p>Click GENERATE CONFIG, then copy the config.</p>
      <p><img class="glboxshadow" alt="generate config" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/privatevpn/privatevpn_wireguard_3.jpg" /></p>
    </li>
    <li>
      <p>Paste the configuration text to the Configuration windows. Click <b>Next</b></p>
      <p><img class="glboxshadow" alt="paste wireguard config" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/add_a_new_wireguard_config.png" /></p>
    </li>
    <li>
      <p>Specify the name of your server and click <b>Add</b></p>
      <p><img class="glboxshadow" alt="input config name" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/input_config_name.png" /></p>
    </li>
    <li>
      <p>Connect to the WireGuard server by clicking <b>Connect</b></p>
      <p><img class="glboxshadow" alt="connect wireguard" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/wireguard_connect.png" /></p>
    </li>
    <li>
      <p>You will see the upload and download traffic when it is connected successfully.</p>
      <p><img class="glboxshadow" alt="wiregaurd connected" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/wireguard_connected.png" /></p>
    </li>
  </ol>
</details>


<details>
  <summary>PIA (Private Internet Access)</summary>
  <p>
    <a href="https://privateinternetaccess.com/offer/GLiNET_71dx4t8bl" target="_blank">Official Website</a>
  </p>
  <p>It can't downlaod the WireGaurd configs from its website, please use <a href="../mobile_app">mobile app</a> to setup PIA VPN.</p>
</details>


<details>
  <summary>VPN Unlimited(KeepSolid)</summary>
  <p>
    <a href="https://keepsolid.g2afse.com/click?pid=270&offer_id=7" target="_blank">Official Website</a>
  </p>
  <ol type="1">
    <li>
      <p>If you are using <a href="https://keepsolid.g2afse.com/click?pid=270&offer_id=7" target="_blank">VPN Unlimited</a>, sign in to your <a href="https://my.keepsolid.com/" target="_blank">User Office</a> > select the VPN Unlimited® application > click <b>Manage</b>.</p>
      <p><img class="glboxshadow" alt="vpn unlimited setup on gl.inet router" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/vpnunlimited/01.jpg" /></p>
    </li>
    <li>
      <p>Press the field under <b>Device</b> and click <b>Manually create a new device…</b> > set it’s custom name, for example WireGuard  > choose appropriate location of the <b>Server</b> > select the <b>WireGuard</b>® protocol from the dropdown menu > click <b>Generate</b>. </p>
      <p><img class="glboxshadow" alt="vpn unlimited setup on gl.inet router" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/vpnunlimited/02.jpg" /></p>
    </li>
    <li>
      <p>The configuration parameters will then appear below in the text format. You’ll need them for further configuration of your GL.iNet router.</p>
      <p><img class="glboxshadow" alt="vpn unlimited setup on gl.inet router" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/vpnunlimited/03.jpg" /></p>
    </li>
    <li>
      <p>Login web Admin Panel, VPN --> WireGuard Client --> Set up WireGuard Manually</p>
      <p><img class="glboxshadow" alt="setup wireguard manually" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/setup_wireguard_manually.png" /></p>
    </li>
    <li>
      <p>
        The <b>Add a New WireGuard</b>® <b>Client</b> window will appear. In the <b>Configuration</b> tab, paste the details of the manual configuration settings you’ve generated before: 
      </p>
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
      <p><img class="glboxshadow" alt="vpn unlimited setup on gl.inet router" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/vpnunlimited/add_a_new_wireguard_config.png" /></p>
      <p>Once completed, click <b>Add</b>.</p>
    </li>
    <li>
      <p>Specify the name of your server and click <b>Add</b></p>
      <p><img class="glboxshadow" alt="input config name" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/input_config_name.png" /></p>
    </li>
    <li>
      <p>Connect to the WireGuard server by clicking <b>Connect</b></p>
      <p><img class="glboxshadow" alt="connect wireguard" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/wireguard_connect.png" /></p>
    </li>
    <li>
      <p>You will see the upload and download traffic when it is connected successfully.</p>
      <p><img class="glboxshadow" alt="wiregaurd connected" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/wireguard_connected.png" /></p>
    </li>
  </ol>
  <p><a href="https://www.vpnunlimitedapp.com/help/manuals/wireguard-setup-on-glinet-router" target="_blank">Refer link</a></p>
</details>


<details>
  <summary>12VPX</summary>
  <p><a href="https://12vpx.com/?aff=1174" target="_blank">Official Website</a></p>
  <ol type="1">
  <li>
    <p>If you are using <a href="https://12vpx.com/?aff=1174" target="_blank">12VPX</a>, login then access <a href="https://12vpx.com/setup/wireguard" target="_blank">this page</a>, you will see the configs of all servers.
  </li>
  <li>
    <p>Copy the WireGuard config.</p>
  </li>
  <li>
    <p>Login web Admin Panel, VPN --> WireGuard Client --> Set up WireGuard Manually</p>
    <p><img class="glboxshadow" alt="setup wireguard manually" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/setup_wireguard_manually.png" /></p>
  </li>
  <li>
    <p>Paste the configuration text to the Configuration windows. Click <b>Next</b></p>
    <p><img class="glboxshadow" alt="paste wireguard config" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/add_a_new_wireguard_config.png" /></p>
  </li>
  <li>
    <p>Specify the name of your server and click <b>Add</b></p>
    <p><img class="glboxshadow" alt="input config name" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/input_config_name.png" /></p>
  </li>
  <li>
    <p>Connect to the WireGuard server by clicking <b>Connect</b></p>
    <p><img class="glboxshadow" alt="connect wireguard" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/wireguard_connect.png" /></p>
  </li>
  <li>
    <p>You will see the upload and download traffic when it is connected successfully.</p>
    <p><img class="glboxshadow" alt="wiregaurd connected" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/wireguard_connected.png" /></p>
  </li>
</details>


<details>
  <summary>IVPN</summary>
  <p><a href="https://www.ivpn.net/" target="_blank">Official Website</a></p>
  <ol type="1">
    <li>
      <p>If you are using <a href="https://www.ivpn.net/" target="_blank">IVPN</a>, you need to generate the WireGuard config manually. Follow the guide base on your OS.</p>
      <p><a href="https://www.ivpn.net/setup/windows-10-wireguard/" target="_blank">Windows</a>, <a href="https://www.ivpn.net/setup/macos-wireguard/" target="_blank">macOS</a>, <a href="https://www.ivpn.net/setup/linux-wireguard/" target="_blank">Linux</a></p>
    </li>
    <li>
      <p>After generated the config, copy it.</p>
    </li>
    <li>
      <p>Login web Admin Panel, VPN --> WireGuard Client --> Set up WireGuard Manually</p>
      <p><img class="glboxshadow" alt="setup wireguard manually" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/setup_wireguard_manually.png" /></p>
    </li>
    <li>
      <p>Paste the configuration text to the Configuration windows. Click <b>Next</b></p>
      <p><img class="glboxshadow" alt="paste wireguard config" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/add_a_new_wireguard_config.png" /></p>
    </li>
    <li>
      <p>Specify the name of your server and click <b>Add</b></p>
      <p><img class="glboxshadow" alt="input config name" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/input_config_name.png" /></p>
    </li>
    <li>
      <p>Connect to the WireGuard server by clicking <b>Connect</b></p>
      <p><img class="glboxshadow" alt="connect wireguard" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/wireguard_connect.png" /></p>
    </li>
    <li>
      <p>You will see the upload and download traffic when it is connected successfully.</p>
      <p><img class="glboxshadow" alt="wiregaurd connected" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/wireguard_connected.png" /></p>
    </li>
  </ol>
  <p><a href="https://www.ivpn.net/setup/gnu-linux-wireguard.html" target="_blank">Refer link</a></p>
</details>


<details>
  <summary>TRUST.ZONE</summary>
  <p><a href="https://trust.zone/" target="_blank">Official Website</a></p>
  <ol type="1">
    <li>
      <p>Access <a href="https://trust.zone/setup">https://trust.zone/setup</a> and login</p>
    </li>
    <li>
      <p>Scroll down to the WireGuard section, choose the port you want, then download a config of specific server or a zip file of all configs</p>
    </li>
    <li>
      <p>Extract and open it by a text editor, copy the content.</p>
    </li>
    <li>
      <p>Login web Admin Panel, VPN --> WireGuard Client --> Set up WireGuard Manually</p>
      <p><img class="glboxshadow" alt="setup wireguard manually" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/setup_wireguard_manually.png" /></p>
    </li>
    <li>
      <p>Paste the configuration text to the Configuration windows. Click <b>Next</b></p>
      <p><img class="glboxshadow" alt="paste wireguard config" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/add_a_new_wireguard_config.png" /></p>
    </li>
    <li>
      <p>Specify the name of your server and click <b>Add</b></p>
      <p><img class="glboxshadow" alt="input config name" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/input_config_name.png" /></p>
    </li>
    <li>
      <p>Connect to the WireGuard server by clicking <b>Connect</b></p>
      <p><img class="glboxshadow" alt="connect wireguard" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/wireguard_connect.png" /></p>
    </li>
    <li>
      <p>You will see the upload and download traffic when it is connected successfully.</p>
      <p><img class="glboxshadow" alt="wiregaurd connected" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/wireguard_connected.png" /></p>
    </li>
  </ol>
</details>


<details>
  <summary>ANONINE</summary>
  <p><a href="https://anonine.com/" target="_blank">Official Website</a></p>
  <ol type="1">
    <li>
      <p>Fellow the guide below to generate WireGuard configs.
      <p><a href="https://help.anonine.com/support/solutions/articles/5000817193-anonine-wireguard-installation-guide-for-windows-10" target="_blank">Windows</a>, <a href="https://help.anonine.com/support/solutions/articles/5000817206-anonine-wireguard-installation-guide-for-macos" target="_blank">macOS</a>, <a href="https://help.anonine.com/support/solutions/articles/5000817191--anonine-wireguard-installation-guide-for-ubuntu-18-04" target="_blank">Ubuntu</a>, <a href="https://help.anonine.com/support/solutions/articles/5000817310--anonine-wireguard-installation-for-android" target="_blank">Android</a>, <a href="https://help.anonine.com/support/solutions/articles/5000823286--anonine-wireguard-installation-for-ios" target="_blank">iOS</a></p>
    </li>
    <li>
      <p>After generated the config, copy it.</p>
    </li>
    <li>
      <p>Login web Admin Panel, VPN --> WireGuard Client --> Set up WireGuard Manually</p>
      <p><img class="glboxshadow" alt="setup wireguard manually" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/setup_wireguard_manually.png" /></p>
    </li>
    <li>
      <p>Paste the configuration text to the Configuration windows. Click <b>Next</b></p>
      <p><img class="glboxshadow" alt="paste wireguard config" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/add_a_new_wireguard_config.png" /></p>
    </li>
    <li>
      <p>Specify the name of your server and click <b>Add</b></p>
      <p><img class="glboxshadow" alt="input config name" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/input_config_name.png" /></p>
    </li>
    <li>
      <p>Connect to the WireGuard server by clicking <b>Connect</b></p>
      <p><img class="glboxshadow" alt="connect wireguard" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/wireguard_connect.png" /></p>
    </li>
    <li>
      <p>You will see the upload and download traffic when it is connected successfully.</p>
      <p><img class="glboxshadow" alt="wiregaurd connected" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/wireguard_connected.png" /></p>
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
      <p>After generated the config, copy it.</p>
    </li>
    <li>
      <p>Login web Admin Panel, VPN --> WireGuard Client --> Set up WireGuard Manually</p>
      <p><img class="glboxshadow" alt="setup wireguard manually" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/setup_wireguard_manually.png" /></p>
    </li>
    <li>
      <p>Paste the configuration text to the Configuration windows. Click <b>Next</b></p>
      <p><img class="glboxshadow" alt="paste wireguard config" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/add_a_new_wireguard_config.png" /></p>
    </li>
    <li>
      <p>Specify the name of your server and click <b>Add</b></p>
      <p><img class="glboxshadow" alt="input config name" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/input_config_name.png" /></p>
    </li>
    <li>
      <p>Connect to the WireGuard server by clicking <b>Connect</b></p>
      <p><img class="glboxshadow" alt="connect wireguard" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/wireguard_connect.png" /></p>
    </li>
    <li>
      <p>You will see the upload and download traffic when it is connected successfully.</p>
      <p><img class="glboxshadow" alt="wiregaurd connected" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/wireguard_connected.png" /></p>
    </li>
  </ol>
</details>

<details>
  <summary>StarVPN</summary>
  <p>
    <a href="https://www.starvpn.com/">Official Website</a>
  </p>
  <ol>
    <li>
      <p>
        <strong>Register an account with StarVPN</strong>
      </p>
      <p>
        Head on over to our <a href="https://www.starvpn.com/#pricing">pricing plan</a> options and choose a VPN plan that suits your needs.&nbsp; &nbsp;You can register on checkout or directly<a href="https://www.starvpn.com/dashboard/register.php"> here.</a>
      </p>
    </li>
    <li>
      <p>
        <strong>Download Wireguard Configuration</strong>
      </p>
      <p>
        Log into the StarVPN member area <a href="https://www.starvpn.com/dashboard">dashboard</a>.&nbsp; Click on Wireguard Config to download the configuration file. Each slot will contain a unique wireguard configuration file. 
      </p>
      <p>
        <img class="glboxshadow" alt="starvpn download wireguard config" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/starvpn/download-config_edited.jpg" />
      </p>
    </li>
    <li>
      <p>
        The config may contain IPv6 content, as GL.iNet routers is not support IPv6 good enough, so please delete the IPv6 content.
      </p>
      <img class="glboxshadow" alt="startvpn wireguard configuration remove ipv6 content" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/starvpn/starvpn_wireguard_configuration_remove_ipv6.jpg" />
    </li>
    <li>
      <p>
        Login web Admin Panel, VPN --> WireGuard Client --> Set up WireGuard Manually
      </p>
      <p>
        <img class="glboxshadow" alt="setup wireguard manually" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/setup_wireguard_manually.png" />
      </p>
    </li>
    <li>
      <p>
        Paste the configuration text to the Configuration windows. Click <b>Next</b>
      </p>
      <p>
        <img class="glboxshadow" alt="paste wireguard config" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/starvpn/add_a_new_wireguard_config.jpg" />
      </p>
    </li>
    <li>
      <p>
        Specify the name of your server and click <b>Add</b>
      </p>
      <p>
        <img class="glboxshadow" alt="input config name" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/input_config_name.png" />
      </p>
    </li>
    <li>
      <p>
        Connect to the WireGuard server by clicking <b>Connect</b>
      </p>
      <p>
        <img class="glboxshadow" alt="connect wireguard" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/wireguard_connect.png" />
      </p>
    </li>
    <li>
      <p>
        You will see the upload and download traffic when it is connected successfully.
      </p>
      <p>
        <img class="glboxshadow" alt="wiregaurd connected" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/wireguard_connected.png" />
      </p>
    </li>
  </ol>
  <a href="https://www.starvpn.com/wireguard-setup-on-gl-inet-router/">Refer link</a>
</details>

<details>
  <summary>SpiderVPN</summary>
  <p>
    <a href="https://spidervpn.org/#a_aid=5ddfa0372e7ff">Official Website</a>
  </p>
  <ol type="1">
    <li>
      <p>
        Login <a href="https://spidervpn.org/#a_aid=5ddfa0372e7ff">www.spidervpn.org</a>, find the section to get your VPN configuration. Follow the steps to get the configuration.
      </p>
      <p>
        <img class="glboxshadow" alt="get spider vpn configuration" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/spidervpn/spidervpn_config_1.jpg" />
      </p>
    </li>
    <li>
      <p>Download the vpn configuration</p>
      <p>
        <img class="glboxshadow" alt="download spider vpn configuration" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/spidervpn/spidervpn_config_2.jpg" />
      </p>
    </li>
    <li>
      <p>Open the config by text edit software, copy the content.</p>
    </li>
    <li>
      <p>Login web Admin Panel, VPN --> WireGuard Client --> Set up WireGuard Manually</p>
      <p>
        <img class="glboxshadow" alt="setup wireguard manually" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/setup_wireguard_manually.png" />
      </p>
    </li>
    <li>
      <p>
        Paste the configuration text to the Configuration windows. You need to adjust the format, make sure there is a space on each side of the equals sign. Click <b>Next</b>
      </p>
      <p>
        <img class="glboxshadow" alt="paste wireguard config" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/add_a_new_wireguard_config.png" />
      </p>
    </li>
    <li>
      <p>Specify the name of your server and click <b>Add</b></p>
      <p>
        <img class="glboxshadow" alt="input config name" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/input_config_name.png" />
      </p>
    </li>
    <li>
      <p>Connect to the WireGuard server by clicking <b>Connect</b></p>
      <p>
        <img class="glboxshadow" alt="connect wireguard" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/wireguard_connect.png" />
      </p>
    </li>
    <li>
      <p>You will see the upload and download traffic when it is connected successfully.</p>
      <p>
        <img class="glboxshadow" alt="wiregaurd connected" src="https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/wireguard_connected.png" />
      </p>
    </li>
    <li>You can also use <a href="../mobile_app">mobile app</a> to setup SpiderVPN.</li>
  </ol>
</details>

Suggest a WireGuard provider? Please contact [support@gl-inet.com](mailto:support@gl-inet.com)

### Connect to the WireGuard server

Click `Connect`. You will see the upload and download traffic when it is connected successfully.

![1531206410246](https://static.gl-inet.com/docs/en/3/tutorials/wireguard_client/connect_wireguard.png){class="glboxshadow"}

## Video Tutorial

How to Set Up an WireGuard Client on GL.iNet Routers

<iframe width="560" height="315" src="https://www.youtube.com/embed/oTrche1jprQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
