# DDNS

Dynamic Domain Name Service(DDNS) is a service used to map a domain name to the dynamic IP address of a network device.

only support testing firmware v3.010 and above right now. 

## Setup

GoodCloud only support testing firmware v3.010 and above right now. 

### Donwload firmware file

GL-X750(Spitz) testing firmware <a href="https://dl.gl-inet.com/firmware/x750/testing/" target="_blank">GL-X750 testing firmware download</a>

GL-AR750S(Slate) testing firmware <a href="https://dl.gl-inet.com/firmware/ar750s/testing/" target="_blank">GL-AR750S testing firmware download</a>

GL-AR750 testing firmware <a href="https://dl.gl-inet.com/firmware/ar750/testing/" target="_blank">GL-AR750 testing firmware download</a>

GL-B1300 testing firmware <a href="https://dl.gl-inet.com/firmware/b1300/testing/" target="_blank">GL-B1300 testing firmware download</a>

GL-USB150(Microuter) testing firmware <a href="https://dl.gl-inet.com/firmware/usb150/testing/" target="_blank">GL-USB150 testing firmware download</a>

GL-AR150 testing firmware <a href="https://dl.gl-inet.com/firmware/ar150/testing/" target="_blank"> testing firmware download</a>

GL-AR300M(Shadow) testing firmware <a href="https://dl.gl-inet.com/firmware/ar300m/testing/" target="_blank">GL-AR300M testing firmware download</a>

GL-MT300N-V2(Mango) testing firmware <a href="https://dl.gl-inet.com/firmware/mt300n-v2/testing/" target="_blank">GL-MT300N-V2 testing firmware download</a>

GL-MT300A testing firmware <a href="https://dl.gl-inet.com/firmware/mt300a/testing/" target="_blank">GL-MT300A testing firmware download</a>

GL-MT300N testing firmware <a href="https://dl.gl-inet.com/firmware/mt300n/testing/" target="_blank">GL-MT300N testing firmware download</a>

Other devices will coming soon.

### Local upgrade

Open a web browser (we recommend Chrome) and to access router Web Admin Panel(default url is <a href="http://192.168.8.1" target="_blank">http://192.168.8.1</a>).

At the left side, UPGRADE -> Local Upgrade, select the firmware file you download, you can turn off "Keep Settings" for more stable, click "Install" button. It takes several minutes to install.

## 1) Install gl-cloud-ui plug

![install-gl-cloud-ui](https://static.gl-inet.com/docs/en/3/app/ddns/install-gl-cloud-ui.png)

Access to router Admin Panel (default is <a href="http://192.168.8.1" target="_blank">http://192.168.8.1</a>), at the left sidebar, APPLICATIONS -> Plug-ins,
click "Update" button to updage Plug-ins, then input "gl-cloud-ui" and click "Install" button. After installation, press "F5" to refresh Admin Panel, a new item "Remote Access" will appear inside APPLICATIONS.

## 2) Enable DDNS 

![enable-ddns](https://static.gl-inet.com/docs/en/3/app/ddns/enable-ddns.png)

At the left sidebar, APPLICATIONS -> Remote Access, toggle "Enabled DDNS", agree Terms of Services & Privacy Policy, click "Apply" button.
Generally it take several minutes to take effect.

Move mouse to hover the icon besides "Enabled DDNS", it will display the DDNS url of your device.

![ddns-url](https://static.gl-inet.com/docs/en/3/app/ddns/ddns-url.png)

The DDNS domain printed on the back label of router has changed. If your DDNS url is `xxxxxxx.gl-inet.com` on the back of router, new DDNS url will be `xxxxxxx.glddns.com`. 

## 3) Check if DDNS is enabled

Use `nslookup` command to check if your DDNS is enabled. Make sure you use your DDNS url when use `nslookup` command.

`nslookup xx5007c.glddns.com 8.8.8.8`

![nslookup](https://static.gl-inet.com/docs/en/3/app/ddns/nslookup.png)

## 4) HTTP Remote Access

![HTTP-Remote-Access](https://static.gl-inet.com/docs/en/3/app/ddns/HTTP-Remote-Access.png)

Follow the steps above, to enable HTTP Remote Access. 

*** HTTP is not encrypted, use at your own risk.***

If your router is behind NAT, you may need to set up port forward in higher level router. 

After you enable HTTP Remote Access, you can access Admin Panel anywhere by your DDNS url as you in LAN.

## 5) SSH Remote Access

![SSH-Remote-Access](https://static.gl-inet.com/docs/en/3/app/ddns/SSH-Remote-Access.png)

Follow the steps above, to enable SSH Remote Access, then you can use Terminal tools to ssh anywhere. 

## 6) Uninstall

If you don't want DDNS, just disable it.

![disable ddns](https://static.gl-inet.com/docs/en/3/app/ddns/disable-ddns.png)

![after disable ddns](https://static.gl-inet.com/docs/en/3/app/ddns/after-disable-ddns.png)

After disable DDNS, the interface is like above.

If you want uninstall DDNS feature to save space, you need to uninstall `gl-cloud-ui`, `gl-ddns`, and `gl-mqtt` plug-ins.

![uninstall gl-cloud-ui](https://static.gl-inet.com/docs/en/3/app/ddns/uninstall-gl-cloud-ui.png)

Follow the steps above, to uninstall `gl-cloud-ui` plug-in.

![uninstall ddns](https://static.gl-inet.com/docs/en/3/app/ddns/uninstall-gl-ddns.png)

Follow the steps above, to uninstall `gl-ddns` plug-in.

![uninstall mqtt](https://static.gl-inet.com/docs/en/3/app/ddns/uninstall-gl-mqtt.png)

Follow the steps above, to uninstall `gl-mqtt` plug-in.
