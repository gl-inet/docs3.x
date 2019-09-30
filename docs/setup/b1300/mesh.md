# メッシュ

3.022以上のファームウェアでメッシュが利用可能です。
Mesh is available on B1300 and S1300 after firmware v3.022. 
メッシュを利用することには、少なくとも二つのメッシュWIFIルーターが必要です。
You need at least two of mesh supported routers to establish mesh network.

## メッシュネットワークセットアップ

1) Power on Main Nod　メインノードを起動

Select one B1300/S1300 as main nod to make [Initial Setup](https://docs.gl-inet.com/en/3/setup/convexa_b/first-time_setup/) , then make [Cable Connection](https://docs.gl-inet.com/en/3/setup/convexa_b/internet/#1-cable) between WAN port of Main Nod and LAN port of up level router/modem. 

一つのb1300をメインノードとして使用して、[最初のセットアップ](https://docs.gl-inet.com/ja/3/setup/b1300/first-time_setup/)を完成して、

2) Power on Sub Nods　子ノードを起動
   
  Power on to all sub nods without any ethernet cable connection. 

![](https://static.gl-inet.com/docs/en/3/setup/convexa_b/mesh/b1300_mesh_1.jpg)

3) Start Pairing Mode on Main Nod

Hold the **Mesh Button** for 5 seconds and release it until the **Mesh Light** blinking first accelerate. The main nod is on pairing mode.

4) Start Pairing Mode on Sub Nods

Follow step 3) to start pairing mode on sub nods, initial setup is unnecessary.

![](https://static.gl-inet.com/docs/en/3/setup/convexa_b/mesh/b1300_mesh_2.jpg)

5) Establish Mesh Network

The mesh network starts working when **Mesh LED Lights** of all nods are solid. 

![](https://static.gl-inet.com/docs/en/3/setup/convexa_b/mesh/b1300_mesh_3.jpg)

## Mesh network established status

The **Mesh** icon will replace **Wireless** after mesh network established. Repeater function will not avalible in mesh mode. 

All SSIDs including 2.4Ghz and 5Ghz become one and same password.

You can find devices MAC address, connected nods and connection methods in mesh clients.
![](https://static.gl-inet.com/docs/en/3/setup/convexa_b/mesh/mesh.png)

**CLIENTS** management in mesh

![](https://static.gl-inet.com/docs/en/3/setup/convexa_b/clients/mesh-client.png)

You can manage all devices connected to mesh network in [CLIENTS](https://docs.gl-inet.com/en/3/setup/convexa_b/clients/). 

## Stop Mesh Network 

When you want to stop the mesh network, hold the **Mesh Button** for 5 seconds and release it until the **Mesh Light** blinking 2nd accelerate.