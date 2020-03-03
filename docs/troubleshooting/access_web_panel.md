# Access Web Panel

Sometimes you may be unable to access 192.168.8.1 to login web admin panel, please follow the guide below to solve this problem.

---

## Check connection/router's ip address 

Make sure your WAN/LAN port connection is correct. WAN port is connected with internet source and LAN port is connected to devices. If you are connected by wifi, make sure the SSID is correct.

Then follow steps below to check router's ip address.

<details>
        <summary>Windows 7 / Windows 10</summary>
<ol type="1">
        	<li>Go to Control Panel -> Network and Internet -> Network and Sharing Center -> Change adapter settings.</li>
        	<li>Right click Local Area Connection -> Status .</li>
        	<li>Click Details -> Check IPv4 DHCP Server if it is 192.168.8.1(Correct results).</li>
        </ol>
        </details>

*Your ip address results determine the next step.*

---

## Your ip address is incorrect

If the ip address is incorrect, check your connection again.

<ol type="1">
   <li>

   Try [Reset](reset.md) to back to default factory.

   </li>
   <li>

   If reset doesn't work, you can try [debrick via uboot](debrick.md).

   </li>
</ol>

---

## Your ip address is correct


<ol type="1">
   <li>

   Make sure you are using Chrome/Firefox, then try to access 192.168.8.1 again.

   </li>
   <li>

   In order to avoid problem caused by cache, click **ctrl+shift+n** in Chrome to enter incognito mode. Then try to access 192.168.8.1 again. 

   </li>
</ol>

---

*If following the steps above didn't solve your problem, please contact support@gl-inet.com for further help.*