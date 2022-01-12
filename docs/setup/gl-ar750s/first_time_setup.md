# GL.iNet Slateギガビットルーターを使い始めよう

モデル:

GL-AR750S-Ext

![router](https://static.gl-inet.com/docs/jp/3/setup/gl-ar750s/first_time_setup/router.jpg)

---

## 1. 電源を入れます 

Micro USBパワーケーブルをルーターのパワーポートに差し込みます。**5V/2A**のパワーアダプターを利用することを確認してください。それはなければ、故障になるかもしれません。

![Power on](https://static.gl-inet.com/docs/en/3/setup/gl-ar750s/first_time_setup/power1.jpg)



*注意:TFカードホットプラグがサポート**しません**。TFカードが利用ほしい場合は、充電前、カードをルーターに挿入してください。*


## 2. 接続 

イーサネットケーブルまたはWiFiでルーターに繋がれます。


注意: この手順では、デバイスをローカルエリアネットワーク（LAN）に接続だけです。インターネットにアクセスすることはありません。続けて、以下の手順を操作した後、[ネットワーク](internet.md)に従ってインターネット接続を設定してください。


### LANで接続 
イーサネットケーブルでデバイスをルーターのLAN ポートに接続します。

![connect via lan](https://static.gl-inet.com/docs/en/3/setup/slate/first_time_setup/connect.jpg)



### WiFiで接続
ルーターのSSIDを探してデフォルトパスワードを入力します：***goodlife***.

*注意：以下のルーターのSSIDが製品の底面で印刷されています：*

- **GL-AR750S-XXX**
- **GL-AR750S-XXX-5G**




## 3.Web管理パネルにアクセス


webブラウザ(Firefox,Chromeがおすすめ)を開いて、[http://192.168.8.1](http://192.168.8.1) にアクセスします。



### 1) 言語を設定

管理パネルで言語を設定することが必要です。現在、ルーターが**日本語**、**English**、**简体中文**、**繁體中文**、**Deutsch**、**Français**、**Español**、**Italiano**、**한국어**をサポートします。

![initial setup](https://static.gl-inet.com/docs/jp/3/setup/gl-ar750s/first_time_setup/welcome.png)

*注意: ブラウザが常にLuci（http://192.168.8.1/cgi-bin/luci)にリダイレクトされる場合は、次のURLにアクセスしてください: [http://192.168.8.1/index](http://192.168.8.1/index)*
  

### 2) 管理者パスワード設定


ここで、デフォルトパスワードではない、新しいパスワードをセットしてください。パスワードは5文字以上でなければなりません。`続き`をクリックして確認します。

![password](https://static.gl-inet.com/docs/jp/3/setup/gl-ar750s/first_time_setup/password.png)

*注意: このパスワードは、管理者パネルまたはLinuxセステムで利用されます。WiFiパスワードが変わりません。*



### 3) 管理パネル
以上のセットが完了後、ルーターの管理者パネルに入ります。ルーターの状況を確認したり、設定を変更することができます。

![admin panel](https://static.gl-inet.com/docs/jp/3/setup/gl-ar750s/first_time_setup/main_ui.png)

