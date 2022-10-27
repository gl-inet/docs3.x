# How to set up WireGuard server via AstroRelay?

Scenario: If you want to set up WireGuard server in GL.iNet router at home/office to remote access your local service, but your ISP doesn't provide a public IP address.

[AstroRelay](https://www.astrorelay.com){target="_blank"} can provide a secure reverse proxy tunnel, which you can access your resources behind NAT and firewall.

1. Follow the guide [here](../wireguard_server) to set up WireGuard server and ignoring that your don't have a public IP address. Please enalbe **Allow Access Local Network**.

    ![set up wireguard server](https://static.gl-inet.com/docs/en/3/tutorials/set_up_wireguard_server_via_astrorelay/start_wireguard_server.png){class="glboxshadow"}

    Then create a WireGuard configuration. Below image is an example.

    ![wireguard config](https://static.gl-inet.com/docs/en/3/tutorials/set_up_wireguard_server_via_astrorelay/wireguard_config.png){class="glboxshadow"}

2. Please sign up an AstroRelay account and Follow the [tutorial](https://www.astrorelay.com/tutorial.html){target="_blank"}.

    When add a new domain, please choose the server closest to your router.

    ![astrorelay add a new domain](https://static.gl-inet.com/docs/en/3/tutorials/set_up_wireguard_server_via_astrorelay/astrorelay_add_a_new_domain.png){class="glboxshadow"}

    When add a new link, the **Destination Host IP** is your router's IP address, default is **192.168.8.1**.

    ![link for wireguard server](https://static.gl-inet.com/docs/en/3/tutorials/set_up_wireguard_server_via_astrorelay/astrorelay_wg_server.png){class="glboxshadow"}

    You can get a link finally, like **wg_server_test.arlab1.cc:35701**.

    ![astrorelay link](https://static.gl-inet.com/docs/en/3/tutorials/set_up_wireguard_server_via_astrorelay/astrorelay_link.png){class="glboxshadow"}

3. Replace this link with the **Endpoint** in the WireGuard configuration. Then you can use the modified config in WireGuard cient app.

    ![replace link in wireguard config](https://static.gl-inet.com/docs/en/3/tutorials/set_up_wireguard_server_via_astrorelay/replace_endpoint_in_wireguard_config.png){class="glboxshadow"}

4. When you are not at home/office, you can use the WireGuard client app with the configuration created above to access your home/office local service as you at home/office.

