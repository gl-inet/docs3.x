
# Extensible Authentication Protocol (EAP)

## Introduction
You can connect to EAP (Extensible Authentication Protocol) Wi-Fi network which requires username and password authentication on GL.iNet routers.

This guide is how to connect an EAP Wi-Fi network via Admin Panel. 

* All models are supported EAP **EXCEPT** GL-MT300N-V2, microuter-N300, GL-MT1300

---
## Connect via Admin Panel
### 1. Visit the Admin Panel 

![](https://static.gl-inet.com/docs/en/3/troubleshooting/EAP/Picture1.png)

Visit the Admin Panel and click “Scan” in the Internet -> Repeater.


![](https://static.gl-inet.com/docs/en/3/troubleshooting/EAP/Picture2.png)

You can find and connect to the EAP SSID to connect directly.

### 2. SSID

![](https://static.gl-inet.com/docs/en/3/troubleshooting/EAP/Picture3.png)

Or choose “Other” in the end of drop-down list of SSID, then select EAP type in Wi-Fi Security drop-down list.

### 3. Wi-Fi Security 

![](https://static.gl-inet.com/docs/en/3/troubleshooting/EAP/Picture4.png)

Currently, we only support two types: 802.1X EAP/WPA and 802.1X EAP/WPA2.

### 4. Type

![](https://static.gl-inet.com/docs/en/3/troubleshooting/EAP/Picture5.png)

Choose 2.4G or 5G. 

### 5. User Name and Password 

![](https://static.gl-inet.com/docs/en/3/troubleshooting/EAP/Picture6.png)

Enter your User Name and Password and then click join.

---

## Connect via Luci

Our web page only supports few EAP types for now so you may need to connect via Luci page in most situations.

### 1. Visit the Luci page

Go to MORE SETTINGS->Advanced.

![](https://static.gl-inet.com/docs/en/3/troubleshooting/EAP/7.png)

Input your web password.

![](https://static.gl-inet.com/docs/en/3/troubleshooting/EAP/8.png)

Then you will enter luci page.

### 2. Connect to EAP wifi

Go to Network->Wifi(or Wireless).

![](https://static.gl-inet.com/docs/en/3/troubleshooting/EAP/9.png)

Click 'Scan' on 2.4G section or 5G section.

![](https://static.gl-inet.com/docs/en/3/troubleshooting/EAP/10.png)

Join the network you want.

![](https://static.gl-inet.com/docs/en/3/troubleshooting/EAP/11.png)

---