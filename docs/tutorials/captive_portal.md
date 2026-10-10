# Set a Captive Portal

!!! warning "Discontinued Feature — Not Available in Firmware 4.x"

    GL.iNet has discontinued its built-in Captive Portal feature. This feature was available in certain firmware 3.x versions but is **not included in firmware 4.x**, and there are currently no plans to reintroduce it.

    The instructions below are retained for reference by users running older, compatible firmware versions. They do not apply to firmware 4.x.

    Users who require captive portal functionality may explore third-party OpenWrt packages, such as those described in the [OpenWrt Captive Portal documentation](https://openwrt.org/docs/guide-user/services/captive-portal/start). However, compatibility with GL.iNet firmware and individual router models is not guaranteed, and these solutions are not equivalent to the discontinued built-in feature.

A captive portal is a web page accessed with a web browser that is displayed to newly connected users of a Wi-Fi network before they are granted broader access to network resources.

The built-in Captive Portal feature was introduced in firmware v3.022 and is available only on supported devices running compatible firmware 3.x versions. It is not available in firmware 4.x.

## 1. Turn on Captive Portal

Open a web browser (we recommend Chrome) and to access router web Admin Panel(default url is <a href="http://192.168.8.1" target="_blank">http://192.168.8.1</a>).

The Captive Portal is only worked on Guest Wi-Fi. Please enable your guest WiFi.

At the left sidebar, APPLICATIONS -> Portal, follow the steps below to enable Captive Portal.

![turn on captive portal](https://static.gl-inet.com/docs/router/en/3/tutorials/captive_portal/turn-on-captive-portal.png){class="glboxshadow"}

1) Turn on captive portal. 

2) Set free internet time.

3) Certification URL is the default page that clients will force redirect to when they are connected, e.g. `https://www.gl-inet.com`

4) Apply the configuration.

For desktop client, please use browser to access a http(not https) website, e.g. `http://neverssl.com` or `http://apple.com/?` , then you will see the portal.

Below is the Portal on iPhone, click the "GET CONNECTED" button to access the internet. On Android and desktop platform, it's a similar interface.

![portal on iPhone](https://static.gl-inet.com/docs/router/en/3/tutorials/captive_portal/portal-on-ios.png){class="glboxshadow"}

## 2. Change the default page

The default page is located `/etc/nodogsplash/htdocs/`, use SSH or WinSCP to change this page. For more information about how to use SSH and WinSCP, please access [this](../tutorials/ssh.md). You may need basic HTML and CSS knowledge to change this page, please learn these from <a href="https://www.w3schools.com/" target="_blank">w3school</a> or other sites.

If you want to change the picture on the default page, just replace the image on `/etc/nodogsplash/htdocs/images/portal_login.png`.

After you had change the page, it need to disable Portal and enable Portal again to reload the modified default page.

## 3. Disable Captive Portal

Follow the steps below to disable Captive Portal.

![turn off captive portal](https://static.gl-inet.com/docs/router/en/3/tutorials/captive_portal/turn-off-captive-portal.png){class="glboxshadow"}
