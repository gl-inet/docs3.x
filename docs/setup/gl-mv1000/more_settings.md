# その他の設定



## 管理者パスワード

管理者パネルのパスワードを変更しては、パスワードが5文字以上でなければなりません。パスワードを変更するため、現在のパスワードを入力することが必要です。

![admin password](https://static.gl-inet.com/docs/jp/3/setup/travel_ac_router/more_settings/admin_password.png)



---

## LAN IP

LAN IPは、ルーターに接続する時デバイスのIPアドレスです。GL.iNetルーターのデフォルトIPアドレスは192.168.8.1です。メインルータのIPアドレスと競合する場合は、これが変更できます。

![lan ip](https://static.gl-inet.com/docs/jp/3/setup/travel_ac_router/more_settings/LANIP.png)



---

## タイムゾーン

ルーターの活動は、ルーターの時間に従って記録されます。したがって、あなたの所在地のタイムゾーンを選択することをお勧めします。

![time zone](https://static.gl-inet.com/docs/jp/3/setup/travel_ac_router/more_settings/time_zone.png)



---

## MACアドレスクローニング

現在のクライアントのMACアドレスをルータに複製します。それはネットワークがあなたのMACアドレスをチェックするとき特にホテルで使用されます。 たとえば、スマートフォンがネットワークに登録されている場合は、スマートフォンのMACアドレスをルータに複製して、ルーターもネットワークに接続できるようになります。

![mac clone](https://static.gl-inet.com/docs/jp/3/setup/travel_ac_router/more_settings/mac_clone.png)



---

## カスタムDNSサーバー

DNSリークを防ぐ、またはそのほかの目的ために、ルーターのDNSサーバーを設定できます。

**DNS再バインド（DNS Rebinding）攻撃防御**: 一部のネットワークは、キャプティブポータル認証が必要場合があります。ネットワークのキャプティブポータルがアクセスできない場合は、このオプションを無効にしてください。

**すべてのクライアントをカバーするDNS設定**: このオプションを有効にすると、接続されているすべてのクライアントからのDNS要求がキャプチャされます。

**CloudflareのDNS over TLS機能**: TLSを介したCloudflare DNSは、DNSクエリの暗号化にTLSセキュリティプロトコルを使用します。これは、プライバシーを高め、盗聴を防ぐのに役立ちます。

**手動DNSサーバー設定**: 手動でカスタムDNSサーバーを入力します。

![custom dns server](https://static.gl-inet.com/docs/jp/3/setup/travel_ac_router/more_settings/custom_dns_server.png)



---

## ボタン設定

モードスイッチの機能を設定します。デフォルトでこの機能がありません。Wireguard / OpenVPNクライアントをオンまたはオフにするトグルとして設定可能です。

![button settings](https://static.gl-inet.com/docs/jp/3/setup/travel_ac_router/more_settings/button_settings.png)



---

## ネットワークモード

使用状況に合わせてネットワークモードを変更します。 ルーターのネットワークモードを変更するたびに、クライアントデバイスを再接続する必要があるかもしれません。

**APモード**、**無線拡張モード**、または**WDS**モードでルーターを使用すると、デフォルトのIP 192.168.8.1でWeb管理パネルにアクセスできない場合があります。この場合でWeb管理パネルにアクセスしたいと、メインルータによってGL.iNetルータに割り当てられたIPアドレスを使用しなければなりません。

**ブリッジーモード**: 有線ネットワークにブリッジします。

![network mode](https://static.gl-inet.com/docs/jp/3/setup/mini_router/more_settings/network_mode.png)



---

## ファームウェアを復元する

ルータを工場出荷時のデフォルト設定に戻します。 設定、アプリケーション、データはすべて消去されます。

![revert firmware](https://static.gl-inet.com/docs/jp/3/setup/mini_router/more_settings/revert_firmware.png)



---

## 高級機能

Click `Advanced` to direct to Luci which is the default web interface of OpenWrt. You can check the detailed system log or conduct more advanced configurations there.

![advanced](https://static.gl-inet.com/docs/jp/3/setup/mv1000/more_settings/advanced.png)

*注意: ユーザーネームは**root**です。パスワードは、管理者パスワードと同じです。*