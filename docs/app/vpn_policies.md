# VPN Policies

Starting from firmware version 3.022, users can define VPN routing policies. For example, it is possible to use VPN for a specific website/IP while maintaining a normal Internet traffic without VPN for others.

`The VPN policies do not apply in guest network.`

![policies](https://static.gl-inet.com/docs/en/3/app/policies/policies.jpg)

## Settings

**Enable VPN Policy**: Turn on/off VPN policies.

**Use VPN for all process on the router**: Generally, the traffic of all processes running on the router such as GoodCloud will be routed through VPN if there is a connected VPN client (e.g. WireGuard, OpenVPN, Shadowsocks). In this case, these processes will lose Internet if VPN is disconnected. In order to ensure a proper operation of these processes, you can disable this option. As a result, they will not use VPN.

**Please Choose Policy**: The item can be either **Domain/IP** (e.g. gl-inet.com / 192.168.1.1 / 192.168.1.0/24) or **Mac address** (24:F0:94:5C:8E:F9).

![policies](https://static.gl-inet.com/docs/en/3/app/policies/settings.jpg)



## Add VPN policy

You can only configure either **Use VPN for** or **Do not use VPN for**. Click the arrow to switch among **Use VPN for** and **Do not use VPN for**. To add a policy, enter the domain/IP or Mac address into the box and then click `Add`. Finally, click `Apply` to activate the policy. 

For example, if we want to route only the traffic of `gl-inet.com` through VPN, we need to add *gl-inet.com* under **Use VPN for**.

![policies](https://static.gl-inet.com/docs/en/3/app/policies/use_vpn.jpg)

However, if we want to route all traffic through VPN except `gl-inet.com`, we need to add *gl-inet.com* under **Do not use VPN for**.

![policies](https://static.gl-inet.com/docs/en/3/app/policies/dont_use_vpn.jpg)



## Clear DNS cache

If you are using domain-based policy, it may not work unless you clear your DNS cache. Please follow the instructions below to clear your DNS cache.

**Windows**: Press **Win + R** and run **cmd**. Execute command `ipconfig /flushdns`.

**MacOS**: Open **Terminal** and execute command `sudo killall -HUP mDNSResponder`.

**Ubuntu**: Open **Terminal** and execute command `sudo service network-manager restart`.

![policies](https://static.gl-inet.com/docs/en/3/app/policies/dns_cache.jpg)

You may also need to clear DNS cache in your browser.

**Chrome**: Visit [chrome://net-internals/#dns](chrome://net-internals/#dns). Click `Clear host cache`.

**Firefox**: Open Firefox and press `Ctrl` + `Shift` + `Delete`. Select **Time range** to **Everything** and check only **Cache**. Finally, click `Clear Now`.