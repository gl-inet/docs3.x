
# Extensible Authentication Protocol (EAP)

## Introduction

You can connect to EAP (Extensible Authentication Protocol) Wi-Fi network which requires username and password authentication on GL.iNet routers.

This guide is how to connect an EAP Wi-Fi network via Admin Panel. 

* All models are supported EAP **EXCEPT** GL-MT300N-V2, microuter-N300, GL-MT1300

---
## Connect via web Admin Panel

### 1. Visit the web Admin Panel

![repeater scan](https://static.gl-inet.com/docs/router/en/3/tutorials/eap/Picture1.png){class="glboxshadow"}

Visit the web Admin Panel and click “Scan” in the Internet -> Repeater.

![repeater scanning](https://static.gl-inet.com/docs/router/en/3/tutorials/eap/Picture2.png){class="glboxshadow"}

You can find and connect to the EAP SSID to connect directly.

### 2. SSID

![repeater ssid choose other](https://static.gl-inet.com/docs/router/en/3/tutorials/eap/Picture3.png){class="glboxshadow"}

Or choose “Other” in the end of drop-down list of SSID, then select EAP type in Wi-Fi Security drop-down list.

### 3. Wi-Fi Security

![repeater Wi-Fi security](https://static.gl-inet.com/docs/router/en/3/tutorials/eap/Picture4.png){class="glboxshadow"}

Currently, we only support two types: 802.1X EAP/WPA and 802.1X EAP/WPA2.

### 4. Type

![repeater type](https://static.gl-inet.com/docs/router/en/3/tutorials/eap/Picture5.png){class="glboxshadow"}

Choose 2.4G or 5G. 

### 5. User Name and Password 

![repeater username password](https://static.gl-inet.com/docs/router/en/3/tutorials/eap/Picture6.png){class="glboxshadow"}

Enter your User Name and Password and then click join.

---

## Connect via LuCI

Our web page only supports few EAP types for now so you may need to connect via LuCI page in most situations.

### 1. Visit the LuCI page

Please [login to LuCI](../../tutorials/what_is_luci/).

### 2. Connect to EAP Wi-Fi

Go to Network -> Wireless.

![luci menu network wireless](https://static.gl-inet.com/docs/router/en/3/tutorials/eap/9.png){class="glboxshadow"}

Click 'Scan' on 2.4G section or 5G section.

![luci wireless overview](https://static.gl-inet.com/docs/router/en/3/tutorials/eap/10.png){class="glboxshadow"}

Join the network you want.

![luci join network](https://static.gl-inet.com/docs/router/en/3/tutorials/eap/11.png){class="glboxshadow"}
