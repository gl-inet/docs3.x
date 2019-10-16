# メッシュ

3.022以上のファームウェアでメッシュが利用可能です。

メッシュを利用することには、少なくとも二つのメッシュWIFIルーターが必要です。


## メッシュネットワークセットアップ

1) メインノードを起動

一つのb1300をメインノードとして使用します、[最初のセットアップ](https://docs.gl-inet.com/ja/3/setup/b1300/first-time_setup/)を完成して、WANポートにインターネットケーブルを接続します。 

2) 子ノードを起動
   子ノードを起動します。

![](https://static.gl-inet.com/docs/en/3/setup/convexa_b/mesh/b1300_mesh_1.jpg)

3) Start Pairing Mode on Main Nod
メインノードでペアリングモードを起動します

Hold the **Mesh Button** for 5 seconds and release it until the **Mesh Light** blinking first accelerate. The main nod is on pairing mode.

**メッシュボタン**を5秒開に

4) Start Pairing Mode on Sub Nods　子ノードでペアリングモードを起動します

Follow step 3) to start pairing mode on sub nods, initial setup is unnecessary.

![](https://static.gl-inet.com/docs/en/3/setup/convexa_b/mesh/b1300_mesh_2.jpg)

5) Establish Mesh Network メッシュネットワークをセットアップ

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