# DDNS

ダイナミックDNS（DDNS)とは、ドメイン名をネットワークデバイスの動的IPアドレスに更新するために使用されるサービスです。

今はファームウェア3.010以上しかサポートしません。

## セットアップ

GoodCloudはファームウェア3.010以上しかサポートしません。

### ファームウェアファイルダウンロード

GL-X750(Spitz) テストファームウェア <a href="https://dl.gl-inet.com/firmware/x750/testing/" target="_blank">GL-X750 テストファームウェアダウンロード</a>

GL-AR750S(Slate) テストファームウェア <a href="https://dl.gl-inet.com/firmware/ar750s/testing/" target="_blank">GL-AR750S テストファームウェアダウンロード</a>

GL-AR750 テストファームウェア <a href="https://dl.gl-inet.com/firmware/ar750/testing/" target="_blank">GL-AR750 テストファームウェアダウンロード</a>

GL-B1300 テストファームウェア <a href="https://dl.gl-inet.com/firmware/b1300/testing/" target="_blank">GL-B1300 テストファームウェアダウンロード</a>

GL-USB150(Microuter) テストファームウェア <a href="https://dl.gl-inet.com/firmware/usb150/testing/" target="_blank">GL-USB150 テストファームウェアダウンロード</a>

GL-AR150 テストファームウェア <a href="https://dl.gl-inet.com/firmware/ar150/testing/" target="_blank"> テストファームウェアダウンロード</a>

GL-AR300M(Shadow) テストファームウェア <a href="https://dl.gl-inet.com/firmware/ar300m/testing/" target="_blank">GL-AR300M テストファームウェアダウンロード</a>

GL-MT300N-V2(Mango) テストファームウェア <a href="https://dl.gl-inet.com/firmware/mt300n-v2/testing/" target="_blank">GL-MT300N-V2 テストファームウェアダウンロード</a>

GL-MT300A テストファームウェア <a href="https://dl.gl-inet.com/firmware/mt300a/testing/" target="_blank">GL-MT300A テストファームウェアダウンロード</a>

GL-MT300N テストファームウェア <a href="https://dl.gl-inet.com/firmware/mt300n/testing/" target="_blank">GL-MT300N テストファームウェアダウンロード</a>

他のデバイスも計画中です。

### ローカルアップグレード

ブラウザ（Chromeがおすすめ）を開いて、ルーターの管理者パネルをアクセスします(デフォルトurl：<a href="http://192.168.8.1" target="_blank">http://192.168.8.1</a>)。

左側に「アップグレード」ー＞「ローカルアップグレード」、ダウンロードしたファームウェアを選択し、「インストール」ボタンをクリックします。インストールには数分かかります。

## 1) gl-cloud-ui をインストール

![install-gl-cloud-ui](https://static.gl-inet.com/docs/jp/3/app/ddns/install-gl-cloud-ui.png)

ルーターの管理者パネルにアクセスします(デフォルトurl：<a href="http://192.168.8.1" target="_blank">http://192.168.8.1</a>)、左側に「アプリケーション」ー＞「ソフトバーグ」、「更新」をクリックしてソフトバーグをアップデートする、"gl-cloud-ui"を入力して、「インストール」ボタンをクリックします。インストール完了後、「アプリケーション」で「リモートアクセス」選択が増えます。
## 2) DDNS を有効にする

![enable-ddns](https://static.gl-inet.com/docs/jp/3/app/ddns/enable-ddns.png)

左側にアプリケーションー＞リモートアクセス、「起動DDNS」をクリックし、利用規約・プライバシーポリシーを同意し、"応用する"をクリックします。
普通に数分がかかります。

「起動 DDNS」の隣のアイコンにマウスを移動すると、デバイスのDDNS URLが表示されます。

![ddns-url](https://static.gl-inet.com/docs/jp/3/app/ddns/ddns-url.png)

ルーターの背面ラベルに印刷されているDDNSドメインが変更されました。 あなたのDDNS URLがルータの裏側の `xxxxxxx.gl-inet.com`であれば、新しいDDNS URLは` xxxxxxx.glddns.com`になります。
## 3) DDNSが有効になっているを確認

あなたのDDNSが有効になっているかどうか確認するために `nslookup`コマンドを使用してください。 `nslookup`コマンドを使うときは、DDNSのURLを使うようにしてください。


`nslookup xx5007c.glddns.com 8.8.8.8`

![nslookup](https://static.gl-inet.com/docs/en/3/app/ddns/nslookup.png)

## 4) HTTP リモートアクセス

![HTTP-Remote-Access](https://static.gl-inet.com/docs/jp/3/app/ddns/HTTP-Remote-Access.png)

***HTTPは暗号化されていないので、自己責任で使用してください。***
 
ルーターがNATの下流にある場合は、より高いレベルのルーターでポート転送を設定する必要があります。
HTTPリモートアクセスを有効にするあと、どこでもDDNS urlで管理者パネルをアクセスすることができます。

## 5) SSH リモートアクセス

![SSH-Remote-Access](https://static.gl-inet.com/docs/jp/3/app/ddns/SSH-Remote-Access.png)

SSHリモートアクセスを有効にする後、あなたはどこにでもターミナルでsshを使用できる。

## 6) アンインストール

DDNSがほしくなれば、無効にしてはいいです。

![disable ddns](https://static.gl-inet.com/docs/jp/3/app/ddns/disable-ddns.png)

![after disable ddns](https://static.gl-inet.com/docs/jp/3/app/ddns/after-disable-ddns.png)

DDNSを無効にする後、インターフェースは上のようなものです。

DDNS機能をアンインストールしてスペースを節約したい場合は、`gl-cloud-ui`、` gl-ddns`、そして `gl-mqtt`ソフトバーグをアンインストールする必要があります。

![uninstall gl-cloud-ui](https://static.gl-inet.com/docs/jp/3/app/ddns/uninstall-gl-cloud-ui.png)

`gl-cloud-ui`ソフトバーグをアンインストールします。

![uninstall ddns](https://static.gl-inet.com/docs/jp/3/app/ddns/uninstall-gl-ddns.png)

`gl-ddns`ソフトバーグをアンインストールします。

![uninstall mqtt](https://static.gl-inet.com/docs/jp/3/app/ddns/uninstall-gl-mqtt.png)

`gl-mqtt`ソフトバーグをアンインストールします。
