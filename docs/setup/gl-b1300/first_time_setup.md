# GL.iNet Convexa-B ギガビットルーターを使い始めよう

モデル:

GL-B1300

![router](https://static.gl-inet.com/docs/jp/3/setup/gl-b1300/first_time_setup/router.png)

---

## 1. 電源を入れます 

マイクロUSBパワーケーブルをルーターのパワーポートに差し込みます。**5V/2A**のパワーアダプターを利用することを確認してください、そうでなければ故障の原因になるかもしれません。

![Power on](https://static.gl-inet.com/docs/jp/3/setup/gl-b1300/first_time_setup/power.png)

*注意:TFカードホットプラグがサポート**しません**。TFカードが使いたい場合は、電源を入れる後、それをルーターにインサートしてください。*

## 2. 接続 

イーサネットケーブルまたはWiFiでルーターに接続できる。

*Note: この手順では、デバイスをルーターのローカルエリアネットワーク（LAN）に接続します。現在あなたはインターネットにアクセスすることはできません。インターネットに接続するには、以下の設定手順を完了して、[ネットワーク](internet.md)に従ってインターネット接続を設定してください。

### LANで接続 

イーサネットケーブルであなたのデバイスを接続します。

![connect via lan](https://static.gl-inet.com/docs/en/3/setup/gl-b1300/first_time_setup/connect.jpg)

### WiFiで接続

ルーターのSSIDを探してパスワードを入力します：***goodlife***.

*注意：以下のルーターのSSIDがルーターの底面で印刷されています：*

- **GL-B1300-XXX**
- **GL-B1300-XXX-5G**

## 3.Web管理パネルをアクセスします

webブラウザ(Firefox,Chromeがおすすめ)を開いて、[http://192.168.8.1](http://192.168.8.1) をアクセスします。

### 1) 言語設定

管理パネルで言語をセットすることが必要です。現在、ルーターが**日本語**、**English**、**简体中文**、**繁體中文**、**Deutsch**、**Français**、**Español**をサポートします。

![initial setup](https://static.gl-inet.com/docs/jp/3/setup/gl-b1300/first_time_setup/welcome.png)

*注意: ブラウザが常にLuci（http://192.168.8.1/cgi-bin/luci)にリダイレクトされる場合は、次のURLにアクセスしてください: [http://192.168.8.1/index](http://192.168.8.1/index)*

### 2) 管理者パスワード設定

ルーターはデフォルトパスワードがありません、パスワードをセットすることが必要です。パスワードは5文字以上でなければなりません。`続き`をクリックして確認します。

![password](https://static.gl-inet.com/docs/jp/3/setup/gl-b1300/first_time_setup/password.png)

*注意: このパスワードは、管理者パネルまたはLinuxセステムで利用します、WiFiパスワードが変わりません。*

### 3) 管理パネル

以上のセットが完了後、あなたがルーターの管理者パネルに入ります。状況を確認したり、ルーターの設定を変更することができます。

![admin panel](https://static.gl-inet.com/docs/jp/3/setup/gl-b1300/internet/main_ui.png)
