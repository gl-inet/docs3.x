# WireGuard設定  

WireGuardは、最先端の暗号技術を利用している簡単で快速な現代VPNです。それの目標は、IPSecよりも[快速](https://www.wireguard.com/performance/)で[簡単](https://www.wireguard.com/quickstart/)で、大規模な閉塞を避けるに有用なVPNです。それはOpenVPNよりもかなり高性能であることを意図しています。

ファームウェア3.0でWireGuardをセットアップして利用することができます、WireGuardサーバーとクライアントがインストールされています。



---

## WireGuardサーバー

あなたは、ファームウェア3.0を使用しているGL.iNetルーターでWireGuardサーバーをセットアップできます。`WireGuardサーバーを初期化します`をクリックします。

![1531199972139](https://static.gl-inet.com/docs/ja/3/app/wireguard/WGS1.png)



### 1) WireGuardを起動する 

簡単でデフォルト**ローカル**IPと**ローカルポート**設定を使用することができます、自分で設定することもできます。`起動`をクリックして、WireGuardサーバーを起動します。

![Sever Configuration](https://static.gl-inet.com/docs/ja/3/app/wireguard/WGS2.png)



### 2) ユーザーを追加します

WireGuardに接続する時、ユーザーを追加してコンフィグレーションを適用することが必要です。

`管理`をクリックして、`新しいユーザーを追加します`をクリックします. 

![Add Client](https://static.gl-inet.com/docs/ja/3/app/wireguard/WGS3.png)



新しいクライアントの**名称**を設定して、`添加`をクリックします。

![Name](https://static.gl-inet.com/docs/ja/3/app/wireguard/WGS4.png)



### 3) クライアントに使うコンフィグレーションをゲットします

現在添加したクライアントリストがチェックできるようになります。いらないクライアントを`削除`することができます。`設定`をクリックして、WireGuardクライアントをセットアップする時必要なコンフィグレーションをゲットします。QRコード、アロケーションファイル、JSONフォーマット三つのコンフィグレーションが提供します。

![Configurations](https://static.gl-inet.com/docs/ja/3/app/wireguard/configurations.png)



ほかのGL.iNetをクライアントに使用する時、**JSON**コンフィグレーションをコピーして、WireGuardクライアントを設定する時にそれを直接貼り付けます。

![Configurations](https://static.gl-inet.com/docs/ja/3/app/wireguard/json.png)





## WireGuard クライアント

WireGuardクライアントをセットアップするため、`ファイルを追加します`をクリックしてください。

![Client](https://static.gl-inet.com/docs/ja/3/app/wireguard/WGC1.png)



### 1) サーバーの名称を設定します

名称を設定して、`続き`をクリックします。

![Name](https://static.gl-inet.com/docs/ja/3/app/wireguard/name.png)



### 2) 設定情報を入力します

サーバーから`JSON`フォーマットを設定情報にコピーします、または手動で設定情報を入力します。

**Azirevpn**または**Mullvad**を使用している場合、`そのほか`をクリックして、あなたの**AzireVPN**または**Mullvad**アカウントを使って、WireGuardクライアントを直接セットアップ。

`添加`をクリックして、WireGuardクライアントセットアップを完了します。

![Configuraion](https://static.gl-inet.com/docs/ja/3/app/wireguard/configurations1.png)



### 3) WireGuardに接続

`接続`をクリックします。接続が成功する時、アップロードとダウンロードが見えます。

![1531206410246](https://static.gl-inet.com/docs/ja/3/app/wireguard/WGC5.png)



## Wireguard App 

スマホでWireGuard Appをダウンロードすることも可能です。

- Android: https://play.google.com/apps/testing/com.wireguard.android

- iOS: https://itunes.apple.com/us/app/wireguard/id1441195209?mt=8