# GL.iNetトラベルルーターを使い始めます

モデム:

GL-MT300N, GL-MT300N-V2 (Firmware 3.0 has not released yet)

GL-AR150, GL-AR150-PoE, GL-AR150-Ext-2, GL-AR150-Ext-PoE-2

GL-AR300M, GL-AR300M-Ext, GL-AR300M16, GL-AR300M16-Ext, GL-AR300M-Lite

![router](https://static.gl-inet.com/docs/ja/3/セットアップ/nanoルーター/最初のセットアップ/構造.jpg)

*注意：**GL-AR300M-Lite**が一つのイーサネットポートしかありません。*



---

## 1.電源を入れます

マイクロUSB電源ケーブルを電源ポートに入れます。標準の5V / 1A電源アダプタを使用していることを確認してください。そではなければ、故障になるかもしれません。

![Power on](https://static.gl-inet.com/docs/ja/3/セットアップ/nanoルーター/最初のセットアップ/power.jpg)

## 2.接続 

イーサネットケーブルまたはWiFiでルーターに接続できる。

*注意：この手順では、デバイスをルーターのローカルエリアネットワーク（LAN）に接続します。あなたは現在インターネットにアクセスすることはできません。インターネットに接続するには、以下の設定手順を完了して、インターネットに従ってインターネット接続を設定してください。



### LANで接続
イーサネットケーブルであなたのデバイスを接続します。

![connect via lan](https://static.gl-inet.com/docs/en/3/setup/mini_router/first-time_setup/connect.jpg)

*注意：**GL-AR300M-Lite**には、イーサネットポートが一つしかありません、そしてWANとして使います。最初にルーターを設定するたびに、WiFiだけで接続することができます。WiFiを接続する後、ネットワークでWANポートをLANポートに変化することができます、そしてLANでルーターを接続できるようになります。*



### WiFiで接続
ルーターのSSIDを探してパスワードを入力します：***goodlife***

*注意：以下のルーターのSSIDがルーターの底面で印刷されています：*

- **GL-AR150-XXX**

- **GL-AR300M-XXX**

- **GL-AR300M-XXX-NOR**




## 3.Web管理パネルをアクセスします

webブラウザ(Firefox,Chromeがおすすめ)を開いて、[http://192.168.8.1](http://192.168.8.1) をアクセスします。



### 1）言語設定
管理パネルで言語をセットすることが必要です。現在、ルーターが**日本語**、**English**、**简体中文**、**繁體中文**、**Deutsch**、**Français**、**Español**をサポートします。

![initial setup](https://static.gl-inet.com/docs/ja/3/セットアップ/nanoルーター/最初のセットアップ/言語設定.png)

*Note: ブラウザが常にLuci（http://192.168.8.1/cgi-bin/luci)にリダイレクトされる場合は、次のURLにアクセスしてください: [http://192.168.8.1/index.html](http://192.168.8.1/index.html)*

  

### 2）管理者パスワード設定
ルーターはデフォルトパスワードがありません、パスワードをセットすることが必要です。パスワードは5文字以上でなければなりません。`続き`をクリックして確認します。

![password](https://static.gl-inet.com/docs/ja/3/セットアップ/nanoルーター/最初のセットアップ/パスワード設定.png)

*注意：このパスワードは、管理者パネルまたはLinuxセステムで利用します、WiFiパスワードが変わりません。*



### 3）管理パネル
以上のセットが完了後、あなたがルーターの管理者パネルに入ります。状況を確認したり、ルーターの設定を変更することができます。

![admin panel](https://static.gl-inet.com/docs/ja/3/セットアップ/nanoルーター/最初のセットアップ/管理者パネル.png)
