# GL.iNetトラベルルーターを使い始めます

モデム:

GL-MT300N, GL-MT300N-V2

GL-AR150, GL-AR150-PoE, GL-AR150-Ext-2, GL-AR150-Ext-PoE-2

GL-AR300M, GL-AR300M-Ext, GL-AR300M16, GL-AR300M16-Ext, GL-AR300M-Lite

![router](https://static.gl-inet.com/docs/jp/3/setup/mini_router/first_time_setup/構造.jpg)

*注意：**GL-AR300M-Lite**は一つだけのイーサネットポートがあります。*

---

## 1.電源を入れます

Micro USBパワーケーブルをルーターのパワーポートに差し込みます。5V/1Aのパワーアダプターを利用することを確認してください。それはなければ、故障になるかもしれません。

![Power on](https://static.gl-inet.com/docs/jp/3/setup/mini_router/first_time_setup/power.jpg)

## 2.接続 

イーサネットケーブルまたはWiFiでルーターに繋がれます。

*注意：この手順では、デバイスをローカルエリアネットワーク（LAN）に接続だけです。インターネットにアクセスすることはありません。続けて、以下の手順を操作した後、[ネットワーク](internet.md)に従ってインターネット接続を設定してください。

### LANで接続

イーサネットケーブルでデバイスを接続します。

![connect via lan](https://static.gl-inet.com/docs/router/en/3/setup/mini_router/first_time_setup/connect.jpg)

*注意：**GL-AR300M-Lite**には、イーサネットポートが一つしかない。そして、WANとして使います。最初にルーターを設定するたびに、WiFiだけで接続することができます。WiFiに接続した後、ネットワークでWANポートをLANポートに転換して、LANでルーターに接続できるようになります。*

### WiFiで接続

ルーターのSSIDを探してデフォルトパスワード***goodlife***を入力します。

*注意：以下のルーターのSSIDが製品の底面で印刷されています：*

- **GL-MT300N-XXX**

- **GL-MT300N-V2-XXX**

- **GL-AR150-XXX**
- **GL-AR300M-XXX**
- **GL-AR300M-XXX-NOR**

## 3.Web管理パネルにアクセス

webブラウザ(Firefox,Chromeがおすすめ)を開いて、[http://192.168.8.1](http://192.168.8.1) にアクセスします。

### 1）言語設定

管理パネルで言語を設定することが必要です。現在、ルーターが**日本語**、**English**、**简体中文**、**繁體中文**、**Deutsch**、**Français**、**Español**、**Italiano**、**한국어**をサポートします。

![initial setup](https://static.gl-inet.com/docs/jp/3/setup/mini_router/first_time_setup/言語設定.png)

*注意: ブラウザが常にLuci（http://192.168.8.1/cgi-bin/luci)にリダイレクトされる場合は、次のURLにアクセスしてください:  [http://192.168.8.1/index](http://192.168.8.1/index)*

### 2）管理者パスワード設定

ここで、デフォルトパスワードではない、新しいパスワードをセットしてください。パスワードは5文字以上でなければなりません。`続き`をクリックして確認します。

![password](https://static.gl-inet.com/docs/jp/3/setup/mini_router/first_time_setup/パスワード設定.png)

*注意：このパスワードは、管理者パネルまたはLinuxセステムで利用されます。WiFiパスワードが変わりません。*

### 3）管理パネル

以上のセットが完了後、ルーターの管理者パネルに入ります。ルーターの状況を確認したり、設定を変更することができます。

![admin panel](https://static.gl-inet.com/docs/jp/3/setup/mini_router/first_time_setup/管理者パネル.png)
