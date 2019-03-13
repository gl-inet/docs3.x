# ファイアウォール

`ファイアウォール`で、**ポート転送**や**ルーターポートを開きます**や**DMZ**そのようなファイアウォールルールを設定することができます。

![Firewall](https://static.gl-inet.com/docs/jP/3/setup/slate/firewall/firewall.png)



## ポート転送

ポート転送により、リモートコンピュータはローカルLANのファイアウォールの内側にある特定のコンピュータまたはサービス（Webサーバー、FTPサーバーなど）に接続できます。

ポート転送をクリックして、パラメーターを入力して、ポート転送を設定します。

![Port Forwards](https://static.gl-inet.com/docs/jP/3/setup/slate/firewall/port_forwards.png)

**名称:** ルールの名称です、自分で設定することができます。

**内部IP:** リモートでアクセスする必要があるデバイスにルータによって割り当てられたIPアドレス。

**外部ポート:** 外部ポート番号です、特定のポート番号またはポート範囲が入力できます。（例：**100-300**）

**内部ポート:** デバイスの内部ポート番号です、特定のポート番号を入力してください。外部ポートと同じ場合は空白のままにします。

**協議:** プロトコルです、TCPやUDPやTCPとUDP同時に使用が選択できます。

**状態:** ルールの有効化/無効化。



## ルーターポートを開きます

The router's services, such as web, FTP and so on, require their respective ports to be opened on the router in order to be publicly reachable.ルーターのweb、FTPなどのサービスを使用する時、公共ネットワークから到達可能であるためには、それぞれのポートをルーター上で開く必要があります。

ポートを開くことのために、`ルーターポートを開きます`をクリックして、必要なパラメーターを入力してください。

![Port Forwards](https://static.gl-inet.com/docs/jP/3/setup/slate/firewall/open_port.png)

**名称:** ルールの名称です、自分で設定することができます。

**ポート:** ひらきたいのポート番号。

**協議:** プロトコルです、TCPやUDPやTCPとUDP同時に使用が選択できます。

**状態:** ルールの有効化/無効化。



## DMZ

DMZを使用すると、1台のコンピュータをインターネットに公開することができ、すべての受信パケットが設定したコンピュータにリダイレクトされます。

`DMZ`をクリックして` Open DMZ`を有効にしてください。 すべての受信パケットを受信しようとしているあなたのデバイスの内部IPアドレス（例：192.168.8.100）を入力してください。

![Port Forwards](https://static.gl-inet.com/docs/jp/3/setup/slate/firewall/DMZ.png)