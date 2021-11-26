# IPv6

The IPv6 function allows you to enable and configure IPv6 on this router. 

**The current version of the firewall, VPN, terminal list, cloud service, etc., may not support IPv6 for the time being. Therefore, the IPv6 function can only be used for configuration within this interface.**

_**Note: If you use functions of both VPN and IPv6 at the same time, it's likely to cause IPv6 data leakage.**_

![ipv6](https://static.gl-inet.com/docs/en/3/tutorials/ipv6/ipv6.png){class="glboxshadow"}

Enable it.

![ivp6](https://static.gl-inet.com/docs/en/3/tutorials/ipv6/ipv6_enabled.png){class="glboxshadow"}

* WAN

    - _**Network Interface**_: There are three types of network interface for selection: `wan`, `wwan` and `tethering`.

    Your current connection of the internet is one to one correspondence with the Network Interface. Please refer to the following correspondence:

    |            Internet connection| IPv6 Network Interface |
    | ----------------------------: | :--------------------- |
    |              Cable Connection | WAN                    |
    |                Wi-Fi Repeater | WWAN                   |
    |                     Tethering | Tethering              |

    - _**Address Type**_: Address type includes Automatic and Manual. It's similar to IPv4, the router can get IPv6 Address and gateway automatically. Or you can input custom IPv6 address and gateway manually. 

    - _**DNS acquisition method**_: It's similar to DNS server, the router can config a DNS server automaticall. Or you can input one or two custom DNS server manually.

* LAN

    - _**Mode**_: There three Modes for selection, `Native`, `NAT6` and `Static IPv6`.

    - _**Native mode**_: The router will assign a public IPv6 address to each device connected to this router automatically. 

    - _**NAT6 mode**_: The router will assign a dynamic internal IPv6 address for all LAN devices connected to the router.

    - _**Static IPv6**_: This mode is similar to NAT6 mode, the router will assign a static IPv6 address range, all devices connected to the router will get an IPv6 address in the address range. 

    - _**DNS acquisition method**_: It's similar to DNS server, the router can config a DNS server automaticall. Or you can input one or two custom DNS server manually.
