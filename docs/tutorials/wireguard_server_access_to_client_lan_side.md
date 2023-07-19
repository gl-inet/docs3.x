# How to visit WireGuard client LAN side from Server

## Topology Using GL-AX1800 as server and GL-SFT1200 as client

![topology](https://static.gl-inet.com/docs/en/3/tutorials/wiregaurd_server_access_client_lan_side/3xtopology.jpg){class="glboxshadow"}

1. Change WireGuard client LAN IP to **192.168.10.1** avoid IP confliction with Server.

2. [SSH](../ssh) into your the WireGuard Server (GL-AX1800) find and modify the file.

        cat /etc/config/wireguard_server

    ![wireguardconfig](https://static.gl-inet.com/docs/en/3/tutorials/wiregaurd_server_access_client_lan_side/wireguardconfig.jpg){class="glboxshadow"}

    Add the subnet route **192.168.10.0/24** into the configuration file

        vi /etc/config/wireguard_server

    ![viconfig](https://static.gl-inet.com/docs/en/3/tutorials/wiregaurd_server_access_client_lan_side/viconfig.jpg){class="glboxshadow"}

3. Restart the server and double confirm the subnet is added in the allowed ips line.

        /etc/init.d/wireguard_server restart

    <span></span>

        wg

    ![serverrestart](https://static.gl-inet.com/docs/en/3/tutorials/wiregaurd_server_access_client_lan_side/serverrestart.png){class="glboxshadow"}

4. Add a static route into the server route table.

        ip route add 192.168.10.0/24 dev wg0

    <span></span>

        route -n

    ![addroute](https://static.gl-inet.com/docs/en/3/tutorials/wiregaurd_server_access_client_lan_side/addroute.jpg){class="glboxshadow"}

5. Add a boot lock to avoid the route reset during the reboot.

        sed -i "/rm \/var\/run\/glwgserver.lock -rf/a\ip route add 192.168.10.0\/24 dev wg0" /etc/init.d/wireguard_server
