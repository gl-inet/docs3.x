# Shadowsocks設定（3.0以上のファームウェア）
このガイドで、あなたは弊社のルーターでshadowsocksサーバーとクライアントをセットアップすることが習えます。デフォルト設定はshadowsocksがありません。この原因で、ソフトバーグをアップグレードしてソフトウエアをインストールすることが必要です。
##1. ソフトバーグを更新

1.1. ルーターにアクセスして、セットアップを完了して、インターネットに接続することを確認します。

1.2. 3.0UI界面の左で**アプリケーションー＞ソフトバーグ**を選択します。
![531126941652](https://static.gl-inet.com/docs/ja/3/app/ss/ssupdate3.png)

1.3.  **更新**をクリックします。
![1531131885168](https://static.gl-inet.com/docs/ja/3/app/ss/updateapp2.png)

1.4. ソフトバーグで下記のパッケージをインストールします：

	(1). gl-ss
	
	(2). gl-ss-server

![1531132234092](https://static.gl-inet.com/docs/ja/3/app/ss/ssapp1.png)

	(3). shadowsocks-libev-server
	
	(4). shadowsocks-libev

![1531132281302](https://static.gl-inet.com/docs/ja/3/app/ss/ssapp2.png)

	(5). luci-app-shawdowsocks

![1531132348012](https://static.gl-inet.com/docs/ja/3/app/ss/app3.png)


 パッケージをインストールするたびに、次の成功ウィンドウがポップアップします。

![1531132507191](https://static.gl-inet.com/docs/ja/3/app/ss/successinstall.png)

1.5. そして、すべてのパッケージがインストールされた後、あなたはさらに2つの選択を見つけることができます、SSサーバーとSSクライアントはVPNプルダウンメニューに表示されます。

![1531132665720](https://static.gl-inet.com/docs/ja/3/app/ss/ss-ui.png)

##*2*. SSサーバーをセットアープしてSSサービスをスタートします

2.1. **VPN-> SS サーバー**をクリックして、SSサーバーの設定ページがそのように表示されます：

![1531133147709](https://static.gl-inet.com/docs/ja/3/app/ss/SSstart1.png)

2.2. 三つの設定パートを入力します

ポート　- SS サーバーポート

パスワード　- クライアントがこのサーバーに接続するときに使うSSサービスパスワード

暗号化 -　暗号化方式リストの1つを選択してください

![1531133599325](https://static.gl-inet.com/docs/ja/3/app/ss/Encryption.png)

2.3. すべてのセクションのセットが完了後、**起動**ボタンをクリックしてSSサーバーを起動します。Shadowsocksサーバーの前のドットが緑色に変わり、IPアドレスが表示されます。これはSSサーバーの**公衆IP**です。

![1531145001203](https://static.gl-inet.com/docs/ja/3/app/ss/SSserverstart.png)



## 3. PCまたはスマホでSSを使用

### 3.1. あなたのプラントフォームによってクライアントをダウンロード：

https://shadowsocks.org/en/download/clients.html

### 3.2. デバイスでクライアントを設定

デバイスでShadowsocksクライアントをインストール（iOS, Android または Windows）、以下の情報を設定：

ホスト: **あなたの公衆IPアドレス**（**2.3**ステップでチェックできます）

ポート: `443`

パスワード: **あなたのパスワード**（ssサーバーで設定のパスワードと同じ）

暗号化: `rc4-md5`（ssサーバーで設定の選択と同じ）

### 3.3. プライベートShadowsocksサービスを使い始めます

設定完了あと、デバイスでshadowsocksをスタートします、お楽しんでください。

スマホのWebブラウザを開いて、それが実行可能かどうかをテストまたは確認できます。次に、IPアドレスをチェックするWebサイトにアクセスして、IPアドレスがSSサーバーのパブリックIPアドレスと同じかどうかを確認します。

## 4.ルーターでShadowsocksをセットアープ

4.1. VPNプルダウンメニューで**SSクライアント**を選択します

 ![1531132665720](https://static.gl-inet.com/docs/ja/3/app/ss/ss-ui2.png)

4.2. **管理**をクリックしてSSクライアントをセットアープします

![1531146315346](https://static.gl-inet.com/docs/ja/3/app/ss/SSclient1.png)

 

4.3. **新しいShadowsocksクライアントを追加する**をクリックして、ポップアップウィンドウに以下の情報を入力します：
![1531146414239](https://static.gl-inet.com/docs/ja/3/app/ss/SSclient2.png) 

プロフィール : あなたのSSサーバーの名称

IP: "**あなたの公衆IP**"

ポート: `443`

パスワード: "**あなたのパスワード**"

暗号化: `RC4-MD5`

"**添加**"をクリックします

![1531146629368](https://static.gl-inet.com/docs/ja/3/app/ss/SSclient3.png)


セットアップが完了し、**状態**ページに自動的に戻ります。これでSSクライアントのプルダウンメニューでさきの設定を選択できます。

![1531146946588](https://static.gl-inet.com/docs/ja/3/app/ss/SSclient4.png)

"**接続**"をクリックして、連接を作ります。

![1531147086778](https://static.gl-inet.com/docs/ja/3/app/ss/SSclient5.png)

SSクライアントがSSサーバーに接続成功あと、緑の色**接続**ボタンが赤色の**切断する**に変わります。
SSサービスを楽しんでください。

