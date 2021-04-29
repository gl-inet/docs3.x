# DDNS

Dynamic Domain Name Service (DDNS) is a service used to map a domain name to the dynamic IP address of a network device.

## Setup

DDNS requires firmware v3.010 or higher. 

### Download firmware file

Open this website to download the latest firmware <a href="https://docs.gl-inet.com/en/3/release_notes/" target="_blank">https://docs.gl-inet.com/en/3/release_notes/</a>

### Local upgrade

Open a web browser (we recommend Chrome) to access router Web Admin Panel(default url is <a href="http://192.168.8.1" target="_blank">http://192.168.8.1</a>).

At the left side, UPGRADE -> Local Upgrade, select the firmware file you have downloaded, you can turn off "Keep Settings" for a clean install and more stable, click "Install" button. It takes several minutes to install.

## 1) Install gl-cloud-ui plug

(If your firmware version is equal or greater than v3.021, please jump to <a href="#2-enable-ddns">Step 2</a>)

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

Use `nslookup` command to check if your DDNS is enabled. You need to change `xx5007c.glddns.com` to your DDNS url when use `nslookup` command.

`nslookup xx5007c.glddns.com 8.8.8.8`

![nslookup](https://static.gl-inet.com/docs/en/3/app/ddns/nslookup.png)

The output above means the DDNS url has maped to a IP address.

## 4) HTTP Remote Access

This function requires a public network IP.

If your router is behind NAT, you may need to set up port forward in higher level router. It use port 80.

![HTTP-Remote-Access](https://static.gl-inet.com/docs/en/3/app/ddns/HTTP-Remote-Access.png)

Follow the steps above, to enable HTTP Remote Access. 

*** HTTP is not encrypted, use at your own risk.***

After you enable HTTP Remote Access, you can access Admin Panel anywhere by your DDNS url of http, e.g. `http://xxxxxxx.glddns.com`. If you use port forward, you should be access like `http://xxxxxxx.glddns.com:YourExternalPort`.

## 5) HTTPS Remote Access

This function requires a public network IP.

If your router is behind NAT, you may need to set up port forward in higher level router. It use port 443.

![HTTPS-Remote-Access](https://static.gl-inet.com/docs/en/3/app/ddns/HTTPS-Remote-Access.png)

This function use self-signed certificates, so the browers will indicate that "Your connection is not private". I will show you how to use it anyway on Chrome iOS. Other browers are the similar process.

![HTTPS-Remote-Access-on-iOS-Chrome](https://static.gl-inet.com/docs/en/3/app/ddns/https-remote-access-ios-chrome-1.png)

As show above, click "Advanced".

![HTTPS-Remote-Access-on-iOS-Chrome](https://static.gl-inet.com/docs/en/3/app/ddns/https-remote-access-ios-chrome-2.png)

As show above, click "Processed to xxxxxxx.glddns.com (unsafe)".

After you enable HTTPS Remote Access, you can access Admin Panel anywhere by your DDNS url of https, e.g. `https://xxxxxxx.glddns.com`. If you use port forward, you should be access like `https://xxxxxxx.glddns.com:YourExternalPort`.

## 6) SSH Remote Access

This function requires a public network IP.

If your router is behind NAT, you may need to set up port forward in higher level router. It use port 22.

![SSH-Remote-Access](https://static.gl-inet.com/docs/en/3/app/ddns/SSH-Remote-Access.png)

Follow the steps above, to enable SSH Remote Access, then you can ssh to your router anywhere. 

## 7) Turn Off

If you don't want to use DDNS, just disable it.

![disable ddns](https://static.gl-inet.com/docs/en/3/app/ddns/disable-ddns.png)

![after disable ddns](https://static.gl-inet.com/docs/en/3/app/ddns/after-disable-ddns.png)

After disable DDNS, the interface is like above.
