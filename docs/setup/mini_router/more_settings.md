# その他の設定



## 管理者パスワード

管理者パネルのパスワードを変更します、パスワードが5文字以上でなければなりません。パスワードを変更するため、現在のパスワードを入力することが必要です。

![admin password](https://static.gl-inet.com/docs/jp/3/setup/mini_router/more_settings/管理者パスワード.png)



---

## LAN IP

LAN IPは、ルーターを接続する時のデバイスのIPアドレスです。GL.iNetルーターのデフォルトIPアドレスは192.168.8.1です。メインルータのIPアドレスと競合する場合は、変更できます。

![lan ip](https://static.gl-inet.com/docs/jp/3/setup/mini_router/more_settings/LANIP.png)



---

## タイムゾーン

ルーターの活動は、ルーターの時間に従って記録されます。したがって、あなたの所在地のタイムゾーンを選択することをお勧めします。

![time zone](https://static.gl-inet.com/docs/jp/3/setup/mini_router/more_settings/タイムゾーン.png)



---

## MACアドレスクローニング

現在のクライアントのMACアドレスをルータに複製します。それはネットワークがあなたのMACアドレスをチェックするとき特にホテルで使用されます。 たとえば、スマートフォンがネットワークに登録されている場合は、スマートフォンのMACアドレスをルータに複製して、ルータもネットワークに接続できるようにすることができます。

![mac clone](https://static.gl-inet.com/docs/jp/3/setup/mini_router/more_settings/MACアドレスクローニング.png)



---

## カスタムDNSサーバー

DNSリークを防ぐ、またはそのほかの目的ために、ルーターのDNSサーバーを設定できます。

**DNS再バインド（DNS Rebinding）攻撃防御**: 一部のネットワークでは、キャプティブポータルでの認証が必要になる場合があります。 ネットワークのキャプティブポータルを解決できない場合は、このオプションを無効にしてください。

**すべてのクライアントを カバーするDNS設定**: このオプションを有効にすると、接続されているすべてのクライアントからのDNS要求がキャプチャされます。

**CloudflareのDNS over TLS機能**: TLSを介したCloudflare DNSは、DNSクエリの暗号化にTLSセキュリティプロトコルを使用します。これは、プライバシーを高め、盗聴を防ぐのに役立ちます。

**手動DNSサーバー設定**: 手動でカスタムDNSサーバーを入力します。

![custom dns server](https://static.gl-inet.com/docs/jp/3/setup/mini_router/more_settings/カスタムDNSサーバー.png)



---

## ボタン設定

モードスイッチの機能を設定します。デフォルト機能がありません。 Wireguard / OpenVPNクライアントをオンまたはオフにするトグルとして設定できます。

![button settings](https://static.gl-inet.com/docs/jp/3/setup/mini_router/more_settings/ボタン設定.png)



---

## ネットワークモード

使用状況に合わせてネットワークモードを変更します。 ルーターのネットワークモードを変更するたびに、クライアントデバイスを再接続する必要があります。

**APモード**、**無線拡張モード**、または**WDS**モードでルーターを使用すると、デフォルトのIP 192.168.8.1でWeb管理パネルにアクセスできない場合があります。 この場合Web管理パネルにアクセスしたいと思う場合メインルータによってGL.iNetルータに割り当てられたIPアドレスを使用しなければなりません。

**無線ルーターモード**: あなた自身のプライベートネットワークを作ります。 ルータはNAT、ファイアウォール、およびDHCPサーバーとして機能します。

**APモード**: 有線ネットワークに接続してワイヤレスネットワークをブロードキャストします。

**無線拡張モード**: 既存のワイヤレスネットワークのWi-Fiカバレッジを拡張します。

**WDSモード**: 無線拡張モードと同様に、メインルータがWDSモードをサポートしている場合はWDSを選択してください。

![network mode](https://static.gl-inet.com/docs/jp/3/setup/mini_router/more_settings/ネットワークモード.png)



---

## ファームウェアを復元する

ルータを工場出荷時のデフォルト設定に戻します。 設定、アプリケーション、データはすべて消去されます。

![revert firmware](https://static.gl-inet.com/docs/jp/3/setup/mini_router/more_settings/ファームウェアを復元する.png)



---

## 高級機能

OpenWrtのデフォルトのWebインターフェースであるLuciに進むには、`高級機能`をクリックしてください。 詳細なシステムログを確認したり、より高度な設定を行ったりできます。

![advanced](https://static.gl-inet.com/docs/jp/3/setup/mini_router/more_settings/高級機能.png)

*注意: ユーザーネームは**root**です。パスワードは、管理者パスワードと同じです。*