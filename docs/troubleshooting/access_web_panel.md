# Access Web Panel

Sometimes you may be unable to access 192.168.8.1 to login web admin panel, please follow the guide below to solve this problem.

---

## Check connection/router's IP address 

Make sure your WAN/LAN port connection is correct. WAN port is connected to an internet source and LAN port is connected to devices. If connected by wifi, make sure the SSID is correct.

Then follow the steps below to check the router's IP address.

<details>
        <summary>Windows 7 / Windows 10</summary>
<ol type="1">
         <li>Go to Control Panel -> Network and Internet -> Network and Sharing Center -> Change adapter settings.</li>
         <li>Right click Local Area Connection -> Status .</li>
         <li>Click Details -> Check IPv4 Default Gateway if it is 192.168.8.1(Correct results).
         <img src="https://static.gl-inet.com/docs/en/3/troubleshooting/access_web_panel/1.png"/></li>
        </ol>
        </details>

*Your ip address results determine the next step.*

---

## Your IP address is incorrect

If the IP address is incorrect, check your connection again.

<ol type="1">
   <li>

   Try [Reset](reset.md) to back to default factory.

   </li>
   <li>

   If the reset doesn't work, you can try [debrick via uboot](debrick.md).

   </li>
</ol>

---

## Your IP address is correct


<ol type="1">
   <li>

   Make sure you are using Chrome/Firefox, then try to access 192.168.8.1 again.

   </li>
   <li>

   In order to avoid problems caused by the cache, click **ctrl+shift+n** in Chrome to enter the incognito mode. Then try to access 192.168.8.1 again. 

   <img src="https://static.gl-inet.com/docs/en/3/troubleshooting/access_web_panel/2.png"/></li>
   </li>
</ol>

---
