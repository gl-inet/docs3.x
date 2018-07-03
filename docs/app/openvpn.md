# OpenVPN Client Setting
This docs is only related to OpenVPN client.

OpenVPN client is pre-installed in GL.iNet routers GL-AR150, GL-AR300M, GL-MT300N, GL-MT300A, GL-USB150, GL-AR750, GL-B1300 from firmware v2.19.

Download the firmware for each devices: http://downlaod.gl-inet.com/firmware/

The newest firmware maybe put in testing folder: http://download.gl-inet.com/firmware/testing/


*Note: You need to subscribe your own VPN service and get an OpenVPN configuration file (.ovpn) from your service provider. If you have subscribed but don't know how to download the configuration file, please read the section "How to get the configuration file".*

This guide assumes that you have set up the router properly.



## 1. Create an OpenVPN connection

### 1) Go to OpenVPN page

Click the OpenVPN icon on the toolbar. It will ask you to upload the configuration files. This file can be a single .ovpn file or a zip/tar.gz file which contains multiple .ovpn files.

Be careful that some .ovpn files use separated ca, cert, crl files. These files must be zipped together with the .ovpn file before upload.

![Basic UI](https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/11.jpg)



### 2) Upload your configuration file

Simply Drap and drop your file to the area indicated so that it will be uploaded to the router automatically. Next, the router will start to check the file. Refresh the page when you see the file has been successfully uploaded and the .ovpn file has been imported.

![Basic UI](https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/12.jpg)



For zip/tar.gz file, the router will unzip the zip/tar.gz file  and check each .ovpn file inside.

![Basic UI](https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/14.jpg)



In some cases, it will ask you to enter your username and password. This usually happen when your configuration file can be downloaded without login your personal account.

![Basic UI](https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/15.jpg)



### 3) Connect to the OpenVPN server

After refreshing the page, you will be able to configure the OpenVPN connection.

![Basic UI](https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/16.jpg)



Please create the VPN connection by following the steps below:

* Check "Enable".
* Check "Force VPN" if you want to force all Internet traffic to go through VPN. However, you will lose Internet access if the VPN is disconnected.
* Then choose a .ovpn file which you want to use.
* Now click "Apply"

The router will show the connection progress. Once it is connected, you will be able to see data sent and received.

![Basic UI](https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/18.jpg)



## 2. Manage ovpn files

From firmware `v2.20`, there is a simple ovpn manager where you can check the current list of ovpn files. You can purge all the files and start to use another vpn service.

We would like to add more functions in the ovpn manager, you can send us a wish list via email or in the forum. Some proposed functions (this doesn't mean this feature will come in the near future) include:

* Server and port probe: to detect if the server is online. This is useful if you are in a censored area and some servers are not accessible at all. But this process is very time consuming.
* To intergrate ovpn files into one. Generally the VPN service providers provides one ovpn file for each server then you will have hundreds of ovpn file. You can integrate these files into one and let the router to connect to a random sever.
* Delete, order and ranking servers. Now we don't have a algorithms to rank the servers, as you will not know the speed unless you try. We can record the speed if you have tried.
* Manage multiple VPN services. While most people just use one service, we don't know if this is necessary.

![ovpn manager](https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/7.jpg)



## 3. Get the config File

We have tested different VPN service providers. Therefore, if you don't know how to get the configuration file, you can follow the instruction below according to your service provider. However, you have to contact your service provider for the configuration file if they haven't been listed  below. 

If you use other service providers and have problem of setting up the OpenVPN, please contact [support@gl-inet.com](mailto:support@gl-inet.com)

#OpenVPN Service providers:

Service providers are list according to their names as below,

##A - D 

###AirVPN

https://airvpn.org/?referred_by=402389

1. Login your AirVPN acoount

   ![ovpn manager](https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/AirVPN1.png)

   ​

2. Choose Config Generator on the left and then choose Linux as your operating system. Next, choose your preferred server.

   ![ovpn manager](https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/AirVPN2.png)

   ​

3. You will be able to see the download page of the configuration file.

   ![ovpn manager](https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/AirVPN3.png)

   ​

---

### Astrill

<https://www.astrill.com/>

*Information quoted from Astrill official instruction

<https://wiki.astrill.com/Astrill_Setup_Manual:How_to_configure_OpenVPN_with_OpenVPN_application_on_Windows>

1. Generate and Download Astrill Openvpn configuration ZIP

   ![ovpn manager](https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/Astrill1.png)

   ![ovpn manager](https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/Astrill2.png)

   ​

2. Type a Description like OPENVPN_GUI.

   ​

3. Click on ADD to my certificates button.

   ![ovpn manager](https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/Astrill3.png)

   ​

4. Once OpenVPN certificate is added, click on Download button.

   ![ovpn manager](https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/Astrill4.png)

   ​


---

### CactusVPN

https://www.cactusvpn.com/

Download directly from: https://www.cactusvpn.com/downloads/

![ovpn manager](https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/CactusVPN1.jpg)



---
##E - H

### ExpressVPN

https://www.expressvpn.com/

*Information quoted from ExpressVPN official instruction.
https://www.expressvpn.com/support/vpn-setup/manual-config-for-linux-with-openvpn/#download

1. Log in to your account.

   ![ovpn manager](https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/ExpressVPN1.jpg)

   ​

2. Once you’ve logged in to the website, click on Set Up ExpressVPN on the Active Subscriptions page. This will take you to the Downloads page.

   ![ovpn manager](https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/ExpressVPN2.png)

   ​

3. Click on Manual Config on the left side of the screen and then select the OpenVPN tab on the right. You will first see your username and password and then a list of OpenVPN configuration files.

   Find the location(s) you want to connect to (e.g., Los Angeles, New York, Hong Kong), then download and save the .ovpn file(s) to your desktop.

   Note: Please have your username and password ready, as you will be asked to enter them later in the setup process.

   ![ovpn manager](https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/ExpressVPN3.png)

   ​

---

### FinchVPN 

https://www.finchvpn.com/

1. Login your FinchVPN account via https://www.finchvpn.com/login.

   ![ovpn manager](https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/finchvpn1.jpg)

   ​

2. Go to the Download page and click Download under FinchVPN OpenVPN Config.

   ![ovpn manager](https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/finchvpn2.jpg)

   ​

3. Choose Linux

   ![ovpn manager](https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/finchvpn3.jpg)

   ​

4. Choose the protocol based on your preference. Generally, you can choose the first one “Port 8484 over UDP”

   ![ovpn manager](https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/finchvpn4.jpg)

   ​

5. Remember to tick the box to include your username and password before download the file.

   ![ovpn manager](https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/finchvpn5.jpg)

   ​


---

### Free VPN Software

<http://freevpnsoftware.net/>

Download by right click the links below and save as.
US Server: http://freevpnsoftware.net/downloads/US.freevpnsoftware.net.ovpn
UK Server: http://freevpnsoftware.net/downloads/UK.freevpnsoftware.net.ovpn



---

### HideMyAss

https://www.hidemyass.com/

Download directly from: http://hidemyass.com/vpn-config/vpn-configs.zip



---
##I - P

### Ivacy

https://billing.ivacy.com/page/22852

Download directly from: https://s3.amazonaws.com/ivacy-apps/openvpn-files/OpenVPN-Configs.zip



---

### NordVPN

https://go.nordvpn.net/aff_c?offer_id=15&aff_id=12016&url_id=902

Download directly from: <https://downloads.nordcdn.com/configs/archives/servers/ovpn.zip>



---

### PIA

https://www.privateinternetaccess.com/pages/buy-vpn/glinet

Download directly from: <https://www.privateinternetaccess.com/openvpn/openvpn.zip>



---

### Proxy.sh

<https://proxy.sh/panel/aff.php?aff=1458>

 Download according to the service that you have subscribed:

For $2 customers:https://proxy.sh/s/openvpn

For $5 customers:https://proxy.sh/m/openvpn

For $10 customers: https://proxy.sh/l/openvpn

For $20 customers:https://proxy.sh/p/openvpn



---

### Proxpn

https://secure.proxpn.com/?a_aid=5ac450e27df6f

1. Download the file here: <https://www.proxpn.com/proxpn_mac_source.tar.gz. 

   Extract the file. From the folder “MaxOSX”, find and open the folder “config” and then “ssl”. You will see 3 files and 1 folder. Copy these 3 files “ca.crt”, “client.crt”, “client.key” and paste them into the folder “config”.

   ![ovpn manager](https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/ProXPN1.jpg)


2. Open “proxpn.ovpn” with text editor and delete the “#” in line 4.

   ![ovpn manager](https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/ProXPN2.jpg)



   You can also change to other services, including:

   ```
   uk.proxpn.com - United Kingdom
   nl.proxpn.com - Netherlands
   sg.proxpn.com - Singapore
   seattle.proxpn.com - Seattle
   miami.proxpn.com - Miami

   ```

3. Zip them into one file and upload to the router.

   ![ovpn manager](https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/ProXPN3.jpg)


---

###PureVPN

https://billing.purevpn.com/aff.php?aff=35535

Download directly from: <https://s3-us-west-1.amazonaws.com/heartbleed/linux/linux-files.zip>



---
##S - T
###SaferVPN

https://safervpn.com/?a_aid=563

Download directly from:
https://www.safervpn.com/support/articles/214036025-What-are-SaferVPN-s-OpenVPN-configuration-files-for-manual-setup-

![ovpn manager](https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/SaferVPN1.jpg)



---

###StrongVPN

<https://strongvpn.com/>

1. Login with your StrongVPN account and then you will be able to see the summary of your VPN account. Click “Change Server”.

   ![ovpn manager](https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/StrongVPN1.png)

   ​

2. Filter the servers by clicking OPEN and choose one of the server from the list.

   ![ovpn manager](https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/StrongVPN2.png)

   ​

   ​

   ![ovpn manager](https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/StrongVPN3.png)

   ​

3. Go back to accounts summary and click Account Setup Instructions.

   ![ovpn manager](https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/StrongVPN4.png)

   ​

4. Click Linux/Max config file.

   ![ovpn manager](https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/StrongVPN5.png)

   ​


---

###TCPVPN

<https://www.tcpvpn.com/home>

1. You can find different servers on their webpage: https://www.tcpvpn.com/home. Choose your preferred server.

   ![ovpn manager](https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/TCPVPN1.jpg)

   ​

2. Choose your preferred server location.

   ![ovpn manager](https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/TCPVPN2.jpg)

   ​

3. You will see the download page of the configuration file. Click Dowload Config (.ovpv).

   ![ovpn manager](https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/TCPVPN3.jpg)

   ​

---

###TorGuard

https://torguard.net/

1. If you are using TorGuard, you need to login the control panel and generate the ovpn file from the "Tools" menu. Please select "All", using udp or tcp and select Cipher. Then press `Generate Config` and the zip file will be downloaded automatically.![Generate ovpn](https://static.gl-inet.com/docs/en/2.x/app/src/torguard.jpg)



2. The username and password for openvpn connection is different from your control panel login. You can change the service username and password in Security manual. You can generate a random login username and password.![Set password](https://static.gl-inet.com/docs/en/2.x/app/src/torguard1.jpg)


---

###TotalVPN

https://www.totalvpn.com

Download directly from: https://pseudio.freshdesk.com/helpdesk/attachments/8005828145



---
##V - W
###VPN.AC

https://vpn.ac/aff.php?aff=1424

Download directly from: https://vpn.ac/ovpn/

![ovpn manager](https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/VPNAC1.jpg)



---

###VPNBook

https://www.vpnbook.com/

The OpenVPN configuration files are available on the website of VPNBook: https://www.vpnbook.com/. 
The username and password are listed below the download link.

![ovpn manager](https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/VPNBook1.jpg)



---

###VPNGate

http://www.vpngate.net/en/

The OpenVPN configuration files are listed on the VPN Gate website: http://www.vpngate.net/en/
according to the server location.

1. Click OpenVPN Config file under the column “OpenVPN”.

   ![ovpn manager](https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/VPNGate1.jpg)

   ​

2. You will see the download page.

   ![ovpn manager](https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/VPNGate2.jpg)

   ​

---

###VPN Unlimited

https://www.vpnunlimitedapp.com/en

*Information quoted from VPN unlimited official instruction
https://www.vpnunlimitedapp.com/en/info/manuals/how-to-manually-create-vpn-conf

Start out by logging in to your User Office, press Manage for the VPN Unlimited service, and follow a few simple steps:

1. Select a device

   Pick a device from the list or create a new one. If you are out of free slots, delete an old device or buy extra slots.

   ![ovpn manager](https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/KeepSolid1.png)

   ​

2. Choosethe desired server location

    VPN Unlimited offers a large variety ofservers, namely 400+ in 70+ locations. In this case, let it be Germany.

   ​

3. Select the VPN protocol

   For the IKEv2 protocol, you will also need to specify your device’s platform.

   ![ovpn manager](https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/KeepSolid2.png)

   ​

4. Create a configuration

   Press Generate and you will get all the data required to set up a VPN connection.

   ![ovpn manager](https://static.gl-inet.com/docs/en/2.x/app/src/openvpn/KeepSolid3.png)




#OpenVPN Compatibilities

We have checked a number of public vpn service providers and tested the compatibilities. What you need to do is purchase a subscription from them and download the ovpn files.

Here is a list of compatible services (v2.20).

__Note: For service issues, please contact the service provider directly.__

1. TorGuard,[https://torguard.net/](https://torguard.net/aff.php?aff=3040)
2. Astrill, https://www.astrill.com
3. FinchVPN, https://www.finchvpn.com/
4. Free Vpn Software, http://freevpnsoftware.net/
5. VPNBook, http://www.vpnbook.com/
6. VPNGate, http://www.vpngate.net/
7. VPN Area, https://vpnarea.com
8. NordVPN, [https://go.nordvpn.net](https://go.nordvpn.net/aff_c?offer_id=15&aff_id=12016&url_id=902)
9. PIA, [https://www.privateinternetaccess.com](https://www.privateinternetaccess.com/pages/buy-vpn/glinet)
10. PureVPN, https://www.purevpn.com/
11. TotalVPN, https://www.totalvpn.com
12. Strong VPN, http://strongvpn.com/
13. HideMyAss, https://www.hidemyass.com
14. Proxy.sh, [https://proxy.sh](https://proxy.sh/panel/aff.php?aff=1458)
15. TCPVPN, https://www.tcpvpn.com
16. Vpn.AC, [https://vpn.ac](https://vpn.ac/aff.php?aff=1424)
17. Proxpn, [https://secure.proxpn.com](https://secure.proxpn.com/?a_aid=5ac450e27df6f)
18. ExpressVPN, https://www.expressvpn.com/
19. Airvpn, [https://airvpn.org](https://airvpn.org/?referred_by=402389)
20. CactusVpn, https://www.cactusvpn.com/
21. SaferVPN, [https://safervpn.com](https://safervpn.com/?a_aid=563)
22. Ivacy, [https://billing.ivacy.com](https://billing.ivacy.com/page/22852)




# Discussions