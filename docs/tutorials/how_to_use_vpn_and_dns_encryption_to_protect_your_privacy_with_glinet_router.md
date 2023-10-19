# How to use VPN and DNS encryption to protect your privacy with GL.iNet router?

Privacy matters. No one likes to be watched or tracked – even if they have nothing to hide. VPN can protect your privacy.

## What is a VPN?

VPN(virtual private network), it creates a secure tunnel for your data between your device and the Internet. It protect you from online snooping, interference, and censorship.

## Setup VPN on GL.iNet router

GL.iNet router has pre-installed two VPN protocols: WireGuard and OpenVPN. There are many [articles talk about their comparison](https://www.google.com/search?q=openvpn+vs+wireguard&sxsrf=AOaemvLFXOIOcZPQ9hw26cc31ar0Yac1tA%3A1633663082696&ei=arhfYa33KaqIwbkPuJGAwAE&ved=0ahUKEwit1Oed7bnzAhUqRDABHbgIABgQ4dUDCA4&oq=openvpn+vs+wireguard&gs_lcp=Cgdnd3Mtd2l6EAxKBAhBGABQAFgAYKYjaABwAngAgAEAiAEAkgEAmAEA&sclient=gws-wiz){target="_blank"}, it depends on your personal choice.

For WireGuard, there are [some WireGuard service providers](wireguard_client.md#wireguard-providers) we haved tested, then please refer to [Setup WireGuard Client](wireguard_client.md).

For OpenVPN, there are [some OpenVPN service providers](openvpn_client.md#get-your-configuration-file) we have tested, then please refer to [Setup OpenVPN Client](openvpn_client.md).

When the VPN is connecting, make sure your current IP address is the VPN provider's IP address.

For make sure you always using VPN connect to Internet, please [Enable Internet Kill Switch](internet_kill_switch.md).

## DNS leak test

When VPN is connecting, we also need to make sure the DNS is not leak.

Learn more about [what is a DNS leak and why should I care](https://www.dnsleaktest.com/what-is-a-dns-leak.html){target="_blank"}.

Access [dnsleaktest](https://www.dnsleaktest.com) to do a **Standard test**, if ANY of the servers below are not provided by the VPN service then you have a DNS leak. NordVPN is owned by Tefincom S.A., so this test result doesn't have DNS leak.

![dns leak test nordvpn](https://static.gl-inet.com/docs/en/3/tutorials/how_to_use_vpn_and_dns_encryption_to_protect_your_privacy_with_glinet_router/dns_leak_test_nordvpn.png)

## Setup DNS encryption on GL.iNet routers

If you have DNS leak issue, please follow [this tutorial](how_to_use_cloudflare_dns_over_tls_on_glinet_router.md) to setup Clourflare DNS over TLS on GL.iNet router.

After setup then do DNS leak test again, you can find the Cloudflare on ISP column, that indicates the DNS leak issue has been solved.

![dns leak test nordvpn](https://static.gl-inet.com/docs/en/3/tutorials/how_to_use_vpn_and_dns_encryption_to_protect_your_privacy_with_glinet_router/dns_leak_test_cloudflare.png)
