# How to Setup OpenVPN Client on GL.iNet router

OpenVPN is an open-source VPN protocol that makes use of virtual private network (VPN) techniques to establish safe site-to-site or point-to-point connections. 

GL.iNet routers have pre-installed OpenVPN Client and Server.

We recommend WireGuard over OpenVPN because it is much faster. For setup a WireGuard Client, please check out [here](wireguard_client.md).

If you have already bought OpenVPN service from a provider, but don't know how to get the configuration file, please refer to [get configuration files from OpenVPN service providers](#get-configuration-files-from-openvpn-service-providers) or ask its support.

We can setup OpenVPN Client via web Admin Panel and [mobile app](mobile_app.md). For the mobile app, it has already integrated NordVPN.

## Setup OpenVPN Client

There is a video tutorial as ExpressVPN as example, please check out [here](#video-tutorial).

OpenVPN client requires OpenVPN configuration file (.ovpn) to create the OpenVPN connection.

1. Access to web Admin Panel, on the left side -> VPN -> OpenVPN Client

2. Click **Add a New OpenVPN Configuration**.

    ![add a new openvpn configuration](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/add_a_new_openvpn_configuration.png){class="glboxshadow"}

3. Upload your OpenVPN configuration file

    Simply drag and drop your file to the pop up windows. It can be a single .ovpn file or a zip/tar.gz file which contains multiple .ovpn files.

    Be careful that some .ovpn files use separated ca, cert, crl files. These files must be zipped together with the .ovpn file before upload.

    ![Upload openvpn config](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/upload_openvpn_config.png){class="glboxshadow"}

    You may encouter some problems, like not enough space, invalid file, authorization failed, all other VPN services must be stopped first, please check out [here](#video-tutorial).

4. Enter a description for your OpenVPN configuration file and then click **Submit** to finish the upload process. In some cases, it will ask you to enter the username and password. If you don't know the username and password, please contact the OpenVPN service provider.

    ![uploaded openvpn config](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/uploaded_openvpn_config.png){class="glboxshadow"}

5. You can now click **Connect** to start the OpenVPN connection.

    ![has imported openvpn config](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/imported_openvpn_config.png){class="glboxshadow"}

    If your configureation file is an archive file, like .zip, you can switch server at the cog icon.

    ![switch server zip config](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/switch_server_zip_config.png){class="glboxshadow"}

6. Once connected, you should find your IP address, data received/sent.

    ![connected openvpn](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/connected_openvpn_config.png){class="glboxshadow"}

**Note:** It can't running VPN Client and Server at the same time, and also can't running OpenVPN Client and WireGuard Client at the same time.

## Manage configuration files

Click **Management** to check the list of configuration files. You can modify the **Description**, **User Name** and **Password** of each configuration file. You can also add, delete a configuration file or even purge all your uploaded configuration files.

![edit openvpn config](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/edit_openvpn_config.png){class="glboxshadow"}

## Setup OpenVPN server on GL.iNet router

You can get a GL.iNet router to set as OpenVPN server, and get another GL.iNet router to set as OpenVPN client. For setup OpenVPN server, please check out [here](openvpn_server.md).

## Get configuration files from OpenVPN service providers

We have tested different VPN service providers. Therefore, if you don't know how to get the configuration file, you can follow the instruction below. However, you have to contact your service provider for the configuration file if they are not listed below. 

If you have any problem in the setup of OpenVPN, please contact [support@glinet.biz](mailto:support@glinet.biz) or report in [this forum post](https://forum.gl-inet.com/t/openvpn-and-wireguard-compatibility-report/15621){target="_blank"}.

??? "NordVPN"
    ### NordVPN

    [Official Website](https://go.nordvpn.net/aff_c?offer_id=15&amp;aff_id=12016&amp;url_id=902){target="_blank"}

    1. **Find your login details**
    
        NordVPN service credentials are different from your NordVPN account credentials, namely your email address and your password. You'll need NordVPN service credentials to connect to the VPN using the manual OpenVPN configuration method in the router.

        Login the [Official Website](https://go.nordvpn.net/aff_c?offer_id=15&amp;aff_id=12016&amp;url_id=902){target="_blank"}, go to the Nord Account dashboard, where you will find the service credentials.

        ![nordacc](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/nordvpn/nordacc.jpg){class="glboxshadow"}

        ![nordlogin](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/nordvpn/nordlogin.jpg){class="glboxshadow"}

        ![nordvpn service credential](https://static.gl-inet.com/docs/router/en/4/tutorials/openvpn_client/nordvpn_service_credentials.png){class="glboxshadow"}

    2. **Choose a NordVPN server**

        Go to [NordVPN recommended server utility here](https://nordvpn.com/servers/tools/){target="_blank"}. It will recommend a server base on your network, click **Show available protocols** to download the UDP or TCP config. Click [here](openvpn_tcp_udp.md) to see the difference.

        ![nordvpn server utility](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/nordvpn/nordvpn_server_utility.png){class="glboxshadow"}

    You can download all servers configs [here](https://downloads.nordcdn.com/configs/archives/servers/ovpn.zip).

    Tips: if the zip file is too big to upload, you can delete some .ovpn in .zip file or upload single .ovpn file.

    [Refer link](https://support.nordvpn.com/Connectivity/Router/1047409122/GL-iNet-setup-with-NordVPN.htm){target="_blank"}

    You can also use [mobile app](mobile_app.md) to setup NordVPN.

??? "ExpressVPN"
    ### ExpressVPN

    [Official Website](https://go.expressvpn.com/c/4130682/1645813/16063){target="_blank"}

    Information quoted from [Expressvpn official instruction](https://www.expressvpn.com/support/vpn-setup/manual-config-for-linux-with-openvpn/#download){rel="sponsored" target="_blank"}

    1. Go to [ExpressVPN](https://go.expressvpn.com/c/4130682/1645813/16063){rel="sponsored" target="_blank"} website, and log in with your ExpressVPN credentials.

        ![expressvpn account click sign in](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/expressvpn/expressvpn-account-click-sign-in.jpg){target="_blank"}

        **Enter the verification code** that is sent to your email.

    2. In the "Set up your devices" section, click on **More**.

    ![expressvpn, set up your devices, more](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/expressvpn/set_up_your_devices_more.png){class="glboxshadow"}

    3. Click on **Manual Configuration**.

    ![expressvpn, set up your devices, manual configuration](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/expressvpn/set_up_your_devices_manual_configuration.png){class="glboxshadow"}

    4. You will see your **username**, **password**, and a list of **OpenVPN configuration files**.

        ![expressvpn, setup info](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/expressvpn/setup_info.png){class="glboxshadow"}

        Click the location(s) you want in order to download the .ovpn file(s).

        **Keep this browser window open**. You will need this information for the setup later.

    [Refer link](https://www.expressvpn.com/support/vpn-setup/manual-config-for-linux-with-openvpn/#download){rel="sponsored" target="_blank"}

??? "PIA (Private Internet Access)"
    ### PIA (Private Internet Access)

    [Official Website](https://privateinternetaccess.com/offer/GLiNET_71dx4t8bl){target="_blank"}

    [Download](https://www.privateinternetaccess.com/openvpn/openvpn.zip) directly.

    Tips: if the zip file is too big to upload, you can delete some .ovpn in .zip file or upload single .ovpn file.

??? "CyberGhost"
    ### CyberGhost

    [Official Website](https://www.cyberghostvpn.com/offer/GLiNet_rem6fdij){target="_blank"}

    Information quoted from [CyberGhost official instruction](https://support.cyberghostvpn.com/hc/en-us/articles/213811885-Router-How-to-configure-OpenVPN-for-flashed-DD-WRT-routers){target="_blank"}

    1. Login your CyberGhost VPN online account.

        ![login](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/cyberghost/cyberghost1.png){class="glboxshadow"}

    2. Select "**VPN**" from the left-side menu, then click "**Configure Device**" and create your server configuration, as described below:

        ![config device](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/cyberghost/cyberghost2.jpg){class="glboxshadow"}

        ![save config](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/cyberghost/cyberghost3.jpg){class="glboxshadow"}

    3. Now create your server configuration, as described below:

        * **Protocol** : **OpenVPN 2.3**
        * **Country** : Since native protocol connections may only be used with exactly one server you now have to choose the country you want to surf from; the server to be used in this country will be chosen by CyberGhost automatically.
        * **Server group** : Choose the server group and the OpenVPN protocol (UDP or TCP) you want to use

        **OpenVPN UDP** allows higher speed than the TCP version but can result in broken downloads in some cases. This is the default setting.
        
        **OpenVPN TCP** allows more stable connections than the UDP version but is a bit slower. Choose this version, if you have recurrent connection issues such as sudden disconnections.

        Once the desired parameters are chosen, save them with **Save Configuration**

    4. To view the **OpenVPN** credentials that are generated for you on the configuration dashboard, press **View Configuration**.

        ![view configuration](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/cyberghost/cyberghost4.png){class="glboxshadow"}

    5. After setting up your connection preferences, please take note of the following:

        * **Server Group** : This is the address of the country (server) you want to be connected with, e.g. '12345-1-ca.cg-dialup.net'. This address changes with every country you have chosen in the step before. The actual single server to be used will be chosen automatically by CyberGhost.
        * **Username** : A solely for this protocol generated user name. This is NOT your regular CyberGhost account user name, it's used only to authenticate with CyberGhost servers via Manual Configurations. You will need this when set up OpenVPN on GL.iNet routers.
        * **Password** : A solely for protocol usage generated password. This is NOT your regular CyberGhost account password, it's used only to authenticate with CyberGhost servers via Manual Configurations. You will need this when set up OpenVPN on GL.iNet routers.

        Once done, please download the configuration file. For that click on *Download Configuration* and download the config file to your computer

        ![save config](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/cyberghost/cyberghost5.png){class="glboxshadow"}

??? "PrivateVPN"
    ### PrivateVPN

    [Official Website](https://affiliate.privatevpn.com/scripts/click.php?a_aid=5e3a511658bc3){target="_blank"}

    [Download](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/privatevpn/PrivateVPN-TUN.zip){target="_blank} directly.

    [Here](https://privatevpn.com/client/PrivateVPN-TUN.zip) is the official download link. Due to a bug encountered while importing the router, the file name inside contains special characters 'Bogotá'. We have renamed it and provided the download link above. We will fix this bug in future versions.

    Tips: if the zip file is too big to upload, you can delete some .ovpn in .zip file or upload single .ovpn file.

??? "Proton VPN"
    ### Proton VPN

    [Official Website](https://go.getproton.me/aff_c?offer_id=26&aff_id=1612){target="_blank"}

    **Proton VPN has WireGuard service, we recommend to use WireGuard, checkout [here](wireguard_client.md#wireguard-providers)**.

    1. Login your [Proton VPN](https://go.getproton.me/aff_c?offer_id=26&aff_id=1612){target="_blank"} account.

    2. Click **Download** in the left-hand side.

    3. Choose Router platform, protocol etc, find your target country to download configuration file.

        ![protonvpn openvpn configuration file](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/protonvpn/proton_openvpn_configuration_file.jpg){class="glboxshadow"}

    4. The credential for connect OpenVPN is not the one that login Proton website's dashboard. You can find the crdential at **Account -> OpenVPN/IKEv2 username**

        ![protonvpn openvpn credential](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/protonvpn/protonvpn_openvpn_credential.jpg){class="glboxshadow"}

??? "PureVPN"
    ### PureVPN

    [Official Website](https://billing.purevpn.com/aff.php?aff=35535){target="_blank"}

    [Download](https://d32d3g1fvkpl8y.cloudfront.net/heartbleed/router/Recommended-CA2.zip) directly.

    Tips: if the zip file is too big to upload, you can delete some .ovpn in .zip file or upload single .ovpn file.

    [Refer link](https://support.purevpn.com/openvpn-files)

    GL.iNet routers don't support the [dedicated IP](https://www.purevpn.com/dedicated-ip){target="_blank"} feature of PureVPN, because it needs PPTP.

??? "Surfshark"
    ### Surfshark

    [Official Website](https://get.surfshark.net/aff_c?offer_id=926&aff_id=1400){target="_blank"}

    1. **Find your login details**

        Surfshark service credentials are different from your Surfshark account credentials, namely your email address and your password. You'll need Surfshark service credentials to connect to the VPN using the manual OpenVPN configuration method in the router.

        Login the [Official Website](https://get.surfshark.net/aff_c?offer_id=926&aff_id=1400){target="_blank"}, go to [this page](https://my.surfshark.com/vpn/manual-setup/router){target="_blank"}, where you will find all of the details required for a manual connection.

        ![surfshark service credential](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/surfshark/surfshark_service_credential.png){class="glboxshadow"}

    2. **Choose a Surfshark server**

        Select the **Locations** tab, where you will see all of the Surfshark servers.

        ![surfshark locations](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/surfshark/surfshark_locations.png){class="glboxshadow"}

        It will ask to choose TCP or UDP. Click [here](openvpn_tcp_udp.md) to see the difference.

        ![surfshark tcp udp](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/surfshark/surfshark_udp_tcp.png){class="glboxshadow" width="400"}

    You can download all configs [here](https://api.surfshark.com/v1/server/configurations) directly.

    Tips: if the zip file is too big to upload, you can delete some .ovpn in .zip file or upload single .ovpn file.

    [Refer link](https://support.surfshark.com/hc/en-us/articles/360011856259-How-to-set-up-Surfshark-on-GL-iNet-router-3-x-firmware-){target="_blank"}

??? "StrongVPN"
    ### StrongVPN

    [Official Website](https://strongvpn.com/?tr_aid=5ac44bd241ca7){target="_blank"}

    1. Login with your [StrongVPN](https://strongvpn.com/?tr_aid=5ac44bd241ca7){target="_blank"} account and then you will be able to see VPN Accounts Summary. Click Account Setup Instructions”.

        ![strongvpn setup 1](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/strongvpn/strong_vpn_setup_01.jpg){class="glboxshadow"}

    2. Find the Manual setup section, follow the steps to get configuration.

        ![strongvpn get config](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/strongvpn/strong_vpn_setup_02.jpg){class="glboxshadow"}

??? "OVPN"
    ### OVPN

    [Official Website](https://www.ovpn.com/en?ref=glinet){target="_blank"}
    
    Just login, then you can easily get the OpenVPN configurations file by click the menu below.

    ![get ovpn configuration files](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/ovpn/get_ovpn_configuration_files.jpg){class="glboxshadow"}

    Choose the server and download.

    ![download ovpn openvpn configuration files](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/ovpn/download_configuration_files.jpg){class="glboxshadow"}

    The username and password are the same you login OVPN.

??? "AirVPN"
    ### AirVPN

    [Official Website](https://airvpn.org/?referred_by=402389){target="_blank"}

    1. Login your AirVPN acoount

        ![airvpn client detail](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/airvpn/airvpn1.png){class="glboxshadow"}

    2. Choose Config Generator on the left and then choose Linux as your operating system. Next, choose your preferred server.

        ![openvpn config generator](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/airvpn/airvpn2.png){class="glboxshadow"}

    3. You will be able to see the download page of the configuration file.

        ![download config](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/airvpn/airvpn3.png){class="glboxshadow"}

??? "Astrill" 
    ### Astrill

    [Official Website](https://www.astrill.com/a/dik2masnw6ig){target="_blank"}

    Information quoted from [Astrill official instruction](https://wiki.astrill.com/Astrill_Setup_Manual:How_to_configure_OpenVPN_with_OpenVPN_application_on_Windows){target="_blank"}

    1. Generate and Download Astrill Openvpn configuration ZIP

        ![astrill vpn tools](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/astrillvpn/astrill1.png){class="glboxshadow"}

        ![create new certificate](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/astrillvpn/astrill2.png){class="glboxshadow"}

    2. Type a Description like OPENVPN_GUI.

    3. Click on ADD to my certificates button.

        ![create new certificate](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/astrillvpn/astrill3.png){class="glboxshadow"}

    4. Once OpenVPN certificate is added, click on Download button.

        ![download certificate](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/astrillvpn/astrill4.png){class="glboxshadow"}

??? "bolehvpn"
    ### bolehvpn

    [Official Website](https://www.bolehvpn.net/){target="_blank"}

    Login in [Dashboard](https://users.bolehvpn.net/){target="_blank"}, download your configuration files and select the [Linux_iOS inline](https://users.bolehvpn.net/download/inline/6){target="_blank"} format. Extract the zip files after completing the download.

    Tips: if the zip file is too big to upload, you can delete some .ovpn in .zip file or upload single .ovpn file.

    [Refer link](https://www.bolehvpn.net/clients-installations/#1487691248224-0c435dba-d612){target="_blank"}

??? "CactusVPN"
    ### CactusVPN

    [Official Website](https://billing.cactusvpn.com/aff.php?aff=2310){target="_blank"}

    [Download](https://www.cactusvpn.com/downloads/){target="_blank"} directly.

    ![download cactusvpn openvpn profiles](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/cactusvpn/cactusvpn1.jpg){class="glboxshadow"}

??? "Cryptostorm"
    ### Cryptostorm

    [Official Website](https://cryptostorm.is/){target="_blank"}

    [Download](https://cryptostorm.is/configs/ecc/){target="_blank"} directly.

??? "FastestVPN"
    ### FastestVPN

    [Official Website](https://go.fastestvpn.com/affiliate/pap?a_aid=5ffd2a3e9d687){target="_blank"}

    Download FastestVPN Config Files zip folder for OpenVPN TCP and UDP from [here](https://support.fastestvpn.com/download/openvpn-tcp-udp-config-files/)

    Tips: if the zip file is too big to upload, you can delete some .ovpn in .zip file or upload single .ovpn file.

    [Refer link](https://support.fastestvpn.com/tutorials/routers/gl-inet/openvpn){target="_blank"}

??? "FinchVPN"
    ### FinchVPN

    [Official Website](https://www.finchvpn.com/){target="_blank"}

    1. Login your FinchVPN account.

        ![finchvpn login](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/finchvpn/finchvpn1.jpg){class="glboxshadow"}

    2. Go to the Download page and click Download under FinchVPN OpenVPN Config.

        ![finchvpn download page](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/finchvpn/finchvpn2.jpg){class="glboxshadow"}

    3. Choose Linux

        ![finchvpn](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/finchvpn/finchvpn3.jpg){class="glboxshadow"}

    4. Choose the protocol based on your preference. Generally, you can choose the first one **Port 8484 over UDP**

        ![finchvpn](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/finchvpn/finchvpn4.jpg){class="glboxshadow"}

    5. Remember to tick the box to include your username and password before download the file.

        ![finchvpn](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/finchvpn/finchvpn5.jpg){class="glboxshadow"}

??? "HideIPVPN"
    ### HideIPVPN

    [Official Website](https://www.hideipvpn.com/){target="_blank"}

    1. Login your HideIPVPN account.

    2. Go to Package on the left side, click the your package, make sure it is active.

        ![hideipvpn client area](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/hideipvpn/package.jpg){class="glboxshadow"}

    3. On the VPN tab, there is VPN Login Details of username and password, this is for login when OpenVPN connection

        ![hideipvpn client area](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/hideipvpn/vpn_username_password.jpg){class="glboxshadow"}

    4. Scroll down to download OpenVPN config files.

        ![hideipvpn client area](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/hideipvpn/openvpn_config_files.jpg){class="glboxshadow"}

??? "Hide.me VPN"
    ### Hide.me VPN

    [Official Website](https://hide.me/?friend=glinet){target="_blank"}

    1. Login your Hide.me account, find the Server Locations on the left side.

    2. Download the OpenVPN Configuration for Windows.

        ![hide.me vpn dashboard](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/hideme/hideme_dashboard.jpg){class="glboxshadow"}

??? "Hotspot Shield"
    ### Hotspot Shield

    [Official Website](https://trk.aclktrkr.com/aff_c?offer_id=59&aff_id=3722){target="_blank"}

    1. Go to [https://www.hotspotshield.com/](https://www.hotspotshield.com/) and click on Account. Sign in if you’re asked.

        ![hotspot shield login](https://static.gl-inet.com/docs/router/en/4/interface_guide/openvpn_client/hotspot_shield/hotspotshield_front_page.png){class="glboxshadow"}

    2. Go to [https://app.hotspotshield.com/app/hotspotshield/router](https://app.hotspotshield.com/app/hotspotshield/router)

        Go to the Select location dropdown and pick the virtual location that the router will use. Now click on "Download file". The configuration file (config.ovpn) will be downloaded to your computer. The username and password will need to be entered when you set up the OpenVPN client on the router.

        ![hotspot shield link router](https://static.gl-inet.com/docs/router/en/4/interface_guide/openvpn_client/hotspot_shield/link_router.png){class="glboxshadow"}

    [Refer link](https://support.hotspotshield.com/hc/en-us/articles/360038538012-How-do-I-install-Hotspot-Shield-on-my-GL-iNet-router)

??? "IPVANISH"
    ### IPVANISH

    [Official Website](https://affiliate.ipvanish.com/aff_c?offer_id=1&aff_id=3073){target="_blank"}

    - You can download all of the config files for all of the servers from [here](https://configs.ipvanish.com/configs/configs.zip), it contain all the server config file(.ovpn) and a certificate file(.crt). The .zip file maybe a little big for some models, please delete the configuration(.ovpn) of the server that you will not use.

        ![ipvanish all openvpn configs](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/ipvanish/ipvanish_all_openvpn_configs.png){class="glboxshadow"}

    - You can also download individual server configuration files [here](https://www.ipvanish.com/software/configs/), but you will need to download **ca.ipvanish.com.crt** as well. Before uploading to the router, you need to compress the **ca.ipvanish.com.crt** and .ovpn configuration files into a .zip archive.

        ![ipvanish openvpn config file with certificate file](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/ipvanish/ipvanish_openvpn_config_file_with_certificate_file.png){class="glboxshadow"}

    [Refer link](https://support.ipvanish.com/hc/en-us/articles/360001329813-Android-OpenVPN-Setup)

??? "IVACY"
    ### IVACY

    [Official Website](https://billing.ivacy.com/page/22852){target="_blank"}

    [Download OpenVPN UDP Configs](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/ivacy/IVACY_OpenVPN_Configs_UDP.zip)

    [Download OpenVPN TCP Configs](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/ivacy/IVACY_OpenVPN_Configs_TCP.zip)

    [Refer link](https://support.ivacy.com/setup_guide/how-to-setup-ivacy-on-gl-inet-router/)

??? "IVPN"
    ### IVPN

    [Official Website](https://www.ivpn.net/){target="_blank"}

    1. Download the [OpenVPN config files](https://www.ivpn.net/releases/config/ivpn-openvpn-config.zip).

    2. Find the Account ID on [IVPN Client Area](https://www.ivpn.net/clientarea/login){target="_blank"}.

    3. When drag the config file to Add a New OpenVPN Configuration, you will be asked to enter User Name and Password. The User Name is your Account ID that begins with letters **ivpn**. The password can be anything, like **ivpn**

        ![ivpn set up on gl.inet router](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/ivpn/ivpn_set_up_openvpn_client.png){class="glboxshadow"}

    [Refer link](https://www.ivpn.net/setup/gnu-linux-terminal.html)

??? "OysterVPN"
    ### OysterVPN

    [Official Website](https://go.oystervpn.net?a_aid=glinet){target="_blank"}

    1. Access [the OysterVPN server list page](https://support.oystervpn.com/server-list/){target="_blank"}, click **Download .ovpn file** to download the configuration file.

        ![download oystervpn .ovpn file](https://static.gl-inet.com/docs/router/en/4/interface_guide/openvpn_client/oystervpn/download_ovpn_file.png){class="glboxshadow"}

    2. The username and password for OpenVPN connection are the same as the one you use to login OysterVPN.

    Tips: if the zip file is too big to upload, you can delete some .ovpn in .zip file or upload single .ovpn file.
    
??? "PrivadoVPN"
    ### PrivadoVPN

    [Official Website](https://privadovpn.com/#a_aid=GLINET){target="_blank"}

    Just login, then you can easily find the **Download VPN Configuration**.

    ![PrivadoVPN OpenVPN configuration](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/privadovpn/privadovpn_openvpn_configuration.png){class="glboxshadow"}

    Tips: if the zip file is too big to upload, you can delete some .ovpn in .zip file or upload single .ovpn file.

??? "SaferVPN"
    ### SaferVPN

    [Official Website](https://safervpn.com/?a_aid=563){target="_blank"}

    [Download](https://support.safervpn.com/hc/en-us/articles/360035425314-What-are-SaferVPN-s-OpenVPN-configuration-ovpn-files-for-manual-setup) directly.

    ![safervpn openvpn config](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/safervpn/safervpn1.png){class="glboxshadow"}


<!--<div id="starvpn"></div>

 ??? "StarVPN"

    [Official Website](https://www.starvpn.com/dashboard/aff.php?aff=91){target="_blank"}

    StarVPN has WireGuard service, we recommend to use WireGuard, checkout [here](../wireguard_client/#starvpn).

    1. **Register an account with StarVPN**

        Head on over to their [pricing plan](https://www.starvpn.com/#pricing){target="_blank"} options and choose a VPN plan that suits your needs. You can register on checkout or directly [here](https://www.starvpn.com/dashboard/register.php){target="_blank"}

    2. VPN Login Information

        Log into the StarVPN member area [dashboard](https://www.starvpn.com/dashboard){target="_blank"}. You can find your VPN username and password for each slot in the Manage Slots Section or dashboard area.

        ![starvpn credential](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/starvpn/vpn-username_edited-2.jpg){class="glboxshadow"}

        For multiple slots, the VPN configuration settings and credentials can be located in the “Manage Slots” section.

        ![starvpn credential](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/starvpn/vpn-username_slots_edited-1024x355.jpeg){class="glboxshadow"}

    3. Download OpenVPN Configuration File

        The next step, you must download the VPN server configuration files necessary so that the OpenVPN Software knows where to connect to.   Download the configuration file in the members area dashboard.

        ![download starvpn config](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/starvpn/download-ovpn_edited.jpg){class="glboxshadow"}

        Some GL.iNet routers do not support IPv6 or DNS Leak Protection, as a result you may experience an IP or connection error. Edit the ovpn configuration file and disable IPv6 by performing these simple tasks.

        ![troubleshooting](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/starvpn/troubleshooting.jpg){class="glboxshadow"} -->

??? "StreamVPN"
    ### StreamVPN

    [Official Website](https://billing.streamvpn.com/account/signup?aff_t=aaf341756f7b94ed3f040f78292b80f1db1adf3318eacb87dd9c4ad4e08fde11a%3A2%3A%7Bs%3A6%3A%22aff_id%22%3Bs%3A6%3A%22645311%22%3Bs%3A6%3A%22off_id%22%3Bi%3A10%3B%7D){target="_blank"}

    1. Login with your [StreamVPN](https://billing.streamvpn.com/account/signup?aff_t=aaf341756f7b94ed3f040f78292b80f1db1adf3318eacb87dd9c4ad4e08fde11a%3A2%3A%7Bs%3A6%3A%22aff_id%22%3Bs%3A6%3A%22645311%22%3Bs%3A6%3A%22off_id%22%3Bi%3A10%3B%7D){target="_blank"} account and then you will be able to see your subscription information. Click **Install & Guides**.

        ![streamvpn subscription info](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/streamvpn/streamvpn_subscription.png){class="glboxshadow"}

    2. Click **VPN Router**, it will download a .zip archive file called `StreamVPN.zip`.

        ![streamvpn guide, vpn router](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/streamvpn/streamvpn_guide_router.png){class="glboxshadow"}

    **Note:** Only the configuration file name contains "Primary" work.

??? "VPN.AC"
    ### VPN.AC

    [Official Website](https://vpn.ac/aff.php?aff=1424){target="_blank"}

    [Download](https://vpn.ac/ovpn/).

    <img class="glboxshadow" alt="vpn.ac donwoad configuration" src="https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/vpn.ac/vpn.ac1.png" />

??? "VPNGate"
    ### VPNGate

    [Official Website](https://www.vpngate.net/en/){target="_blank"}

    The OpenVPN configuration files are listed on the [VPN Gate website](https://www.vpngate.net/en/) according to the server location.

    1. Click OpenVPN Config file under the column **OpenVPN**.

        ![VPNGate server list](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/vpngate/vpngate1.png){class="glboxshadow"}

    2. You will see the download page.

        ![VPNGate download page](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/vpngate/vpngate2.png){class="glboxshadow"}

??? "VPN Unlimited(KeepSolid)"
    ### VPN Unlimited(KeepSolid)

    [Official Website](https://keepsolid.g2afse.com/click?pid=270&offer_id=7){target="_blank"}

    Information quoted from [VPN unlimited official instruction](https://www.vpnunlimitedapp.com/en/info/manuals/how-to-manually-create-vpn-conf){target="_blank"}

    Start out by logging in to your User Office, press Manage for the VPN Unlimited service, and follow a few simple steps:

    1. Select a device

        Pick a device from the list or create a new one. If you are out of free slots, delete an old device or buy extra slots.

        ![vpn unlimited openvpn config](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/vpnunlimited/keepsolid1.png){class="glboxshadow"}

    2. Choose the desired server location
    
        VPN Unlimited offers a large variety of servers, namely 400+ in 70+ locations. In this case, let it be Germany.

    3. Select the VPN protocol

        selece OpenVPN protocol.

        ![vpn unlimited select protocol](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/vpnunlimited/keepsolid2.png){class="glboxshadow"}

    4. Create a configuration

        Press Generate and you will get all the data required to set up a VPN connection.

        ![vpn unlimited generate configuration](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/vpnunlimited/keepsolid3.png){class="glboxshadow"}

??? "VyprVPN"
    ### VyprVPN

    VyprVPN offers the OpenVPN files here: [Where can I find the OpenVPN files? – VyprVPN Support](https://support.vyprvpn.com/hc/en-us/articles/360038096131-Where-can-I-find-the-OpenVPN-files-){target="_blank"}

    The provided zip file contains two folders with the .ovpn files. One called OpenVPN160 one OpenVPN256. Just delete the OpenVPN160 folder from the zip file then upload it to GL.iNet router as usual.

??? "ZoogVPN"
    ### ZoogVPN

    [Official Website](https://zoogvpn.com/pricing?ref=xrsyzx){target="_blank"}

    Sign in its [official website](https://zoogvpn.com/pricing?ref=xrsyzx){target="_blank"}, then access the [OpenVPN configuration files page](https://app.zoogvpn.com/setup/configuration-files){target="_blank"}, you will find all the servers here. Download the configuration file in the TCP column or UDP column.

    ![zoogvpn openvpn configuration files](https://static.gl-inet.com/docs/router/en/3/tutorials/openvpn_client/zoogvpn/zoogvpn_openvpn_config_files.png)

    Then follow the [guide to setup OpenVPN Client on GL.iNet router](#setup-openvpn-client), the username and password are the same as the ones used to log into ZoogVPN website.

## Video tutorial

These video tutorial as ExpressVPN as example to setup OpenVPN Client.

<iframe width="560" height="315" src="https://www.youtube.com/embed/oSTA9-bBUIg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

4 Common Problems and Solution When Configuring OpenVPN

<iframe width="560" height="315" src="https://www.youtube.com/embed/sAb6lyH4pGc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
