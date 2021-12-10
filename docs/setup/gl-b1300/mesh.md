# Mesh

Mesh is available on GL-B1300 and GL-S1300 after firmware v3.022.

You need at least two of mesh supported routers to establish mesh network.

## Mesh network setup steps

1) Power on Main Node

Select one GL-B1300/GL-S1300 as the main node for the [Initial Setup](../first_time_setup/), then make [Cable Connection](../internet/#1-cable) between WAN port of Main Node and LAN port of upstream router/modem.

2) Power on Sub Nodes

Power on to all sub nodes without any ethernet cable connection.

![power on main node and sub nodes](https://static.gl-inet.com/docs/en/3/setup/gl-b1300/mesh/b1300_mesh_1.jpg){class="glboxshadow"}

3) Start Pairing Mode on Main Node

Hold the **Mesh Button**, the **Mesh Light** will start flashing slowly, after about 5 seconds it will flash quickly, then release your hand. The main node is now in pairing mode.

4) Start Pairing Mode on Sub Nodes

Follow step 3) to start pairing mode on sub nodes; initial setup is unnecessary.

![start paring mode on main node and sub node](https://static.gl-inet.com/docs/en/3/setup/gl-b1300/mesh/b1300_mesh_2.jpg){class="glboxshadow"}

5) Establish Mesh Network

The mesh network starts working when **Mesh LED Lights** of all nodes are solid.

![mesh network setup completed](https://static.gl-inet.com/docs/en/3/setup/gl-b1300/mesh/b1300_mesh_3.jpg){class="glboxshadow"}

## Mesh network established status

The **Mesh** icon will replace **Wireless** after mesh network established. Repeater function is not available in mesh mode.

All SSIDs including 2.4Ghz and 5Ghz become one and same password.

You can find devices MAC address, connected nodes and connection methods in mesh clients.

![mesh network status](https://static.gl-inet.com/docs/en/3/setup/gl-b1300/mesh/mesh.png){class="glboxshadow"}

**CLIENTS** management in mesh.

![clients page](https://static.gl-inet.com/docs/en/3/setup/gl-b1300/clients/mesh-client.png){class="glboxshadow"}

You can manage all devices connected to mesh network in [CLIENTS](../clients/).

## Stop Mesh Network

When you want to stop the mesh network, hold the **Mesh Button** for 5 seconds and release it until the **Mesh Light** stops blinking.
