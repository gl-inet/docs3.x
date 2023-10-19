# メッシュ

3.022以上のファームウェアでメッシュが利用可能です。

メッシュを利用することには、少なくとも二つのメッシュWIFIルーターが必要です。


## メッシュネットワークセットアップ

1) メインノードを起動

一つのb1300をメインノードとして使用します、[最初のセットアップ](../first_time_setup/)を完成して、WANポートにインターネットケーブルを接続します。 

2) 子ノードを起動
   子ノードを起動します。

![](https://static.gl-inet.com/docs/router/en/3/setup/convexa_b/mesh/b1300_mesh_1.jpg)

3) メインノードでペアリングモードを起動します

**メッシュボタン**を5秒間押し続け、**メッシュライト**が最初に点滅するそして加速するときにボタンをリリースします。メインノードがペアリングモードになります。


4) 子ノードをペアリングモードに起動します

手順3に従って子ノードでペアリングモードを起動します。

![](https://static.gl-inet.com/docs/router/en/3/setup/convexa_b/mesh/b1300_mesh_2.jpg)

5) メッシュネットワークを構築します

すべてのノードの**メッシュライト**が緑になると、メッシュネットワークが機能します。

![](https://static.gl-inet.com/docs/router/en/3/setup/convexa_b/mesh/b1300_mesh_3.jpg)

## メッシュネットワークの状態

メッシュネットワークがセットアップ完了あと、**メッシュ**アイコンが**無線**を取り替えます。中継が機能できません。

すべてのSSIDが一つのSSIDと一つのパスワードになります。

デバイスMACアドレス、接続しているノードと接続方法がメッシュクライアントであります。
![](https://static.gl-inet.com/docs/router/en/3/setup/convexa_b/mesh/mesh.png)

メッシュ**クライアント**管理

![](https://static.gl-inet.com/docs/router/en/3/setup/convexa_b/clients/mesh-client.png)

[CLIENTS](https://docs.gl-inet.com/jp/3/setup/b1300/clients/)ですべてのメッシュネットワークに接続しているデバイスを管理できます。

## メッシュネットワークを停止

メッシュネットワークを停止する場合は、**メッシュボタン**を5秒間押し続け、**メッシュライト**が2番目に点滅するまで放します。