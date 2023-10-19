# How to set up OpenVPN server via AstroRelay?

Scenario: If you want to set up OpenVPN server in GL.iNet router at home/office to remote access your local service, but your ISP doesn't provide a public IP address.

[AstroRelay](https://www.astrorelay.com){target="_blank"} can provide a secure reverse proxy tunnel, which you can access your resources behind NAT and firewall.

1. Follow the guide [here](openvpn_server.md) to set up OpenVPN server and ignoring that your don't have a public IP address. Please enalbe **Allow Access Local Network**.

    ![set up openvpnd server](https://static.gl-inet.com/docs/router/en/3/tutorials/set_up_openvpn_server_via_astrorelay/start_ovpn_server.jpg){class="glboxshadow"}

    Then export a OpenVPN configuration. Below image is an example.

    ![openvpn config](https://static.gl-inet.com/docs/router/en/3/tutorials/set_up_openvpn_server_via_astrorelay/astroovpnpastelink.jpg){class="glboxshadow"}

2. Please sign up an AstroRelay account and Follow the [tutorial](https://www.astrorelay.com/tutorial.html){target="_blank"}.

    When add a new domain, please choose the server closest to your router.

    ![astrorelay add a new domain](https://static.gl-inet.com/docs/router/en/3/tutorials/set_up_wireguard_server_via_astrorelay/astrorelay_add_a_new_domain.png){class="glboxshadow"}

    When add a new link, the **Destination Host IP** is your router's IP address, this time is **192.168.48.1**.

    ![link for openvpn server](https://static.gl-inet.com/docs/router/en/3/tutorials/set_up_openvpn_server_via_astrorelay/astroovpnaddlink.jpg){class="glboxshadow"}

    You can get a link finally, like **testforx3000.arlab1.cc:37202**, you can click the icon to copy the link.

    ![astrorelay link](https://static.gl-inet.com/docs/router/en/3/tutorials/set_up_openvpn_server_via_astrorelay/astroovpncopylink.jpg){class="glboxshadow"}

3. Replace this link after the **Remote** in the OpenVPN configuration and replace the **":"** with a space. Then you can use the modified config in OpenVPN client app.

    ![replace link in openvpn config](https://static.gl-inet.com/docs/router/en/3/tutorials/set_up_openvpn_server_via_astrorelay/astroovpnconfig.jpg){class="glboxshadow"}

4. When you are not at home/office, you can use the OpenVPN client app with the configuration created above to access your home/office local service as you at home/office.

    ![openvpn up](https://static.gl-inet.com/docs/router/en/3/tutorials/set_up_openvpn_server_via_astrorelay/astroovpnup.jpg){class="glboxshadow"}

