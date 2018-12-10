# DDNS

Dynamic Domain Name Service(DDNS) is a service used to map a domain name to the dynamic IP address of a network device.

DDNS on v3.x firmware only support GL-AR750S(Slate) with testing firmware <a href="https://dl.gl-inet.com/firmware/ar750s/" target="_blank">v3.010</a> and above right now, other devices will coming soon.

## 1) Install gl-cloud-ui plug

![install-gl-cloud-ui](https://static.gl-inet.com/docs/en/3/app/ddns/install-gl-cloud-ui.png)

Access to router Admin Panel (http://192.168.8.1), at the left sidebar, APPLICATIONS -> Plug-ins,
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

Follow the steps above, to enable SSH Remote Access, then you can use Terminal toos to ssh anywhere. 