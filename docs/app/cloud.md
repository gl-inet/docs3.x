# クラウドサービス

## 紹介
GL.iNetクラウド管理サービスが簡単にリモートでルーターをアクセスしたり、管理したりすることが提供します。

#### オンラインルーター状態をチェック
- オンラインオフィス状態をチェック
- 　RAMと平均負荷をチェック

#### 　リモートでルーターをセットアープ
- 　リモートでルーターを設定（SSID,パスワードなど）

#### 　ルーターに接続しているクライアントをリモートで監視する
- 　誰があなたのネットワークを使用していることをチェック
- 　リアルタイムトラフィック監視とクライアントをブロック

#### 　ルーターをバッチ操作
- 　設定テンプレートを設定してルーターをバッチ設定
- 　ルーターをバッチリブート・アップグレード

#### 　グループでルーターを管理
- 　デバイスを異なったグループに分割
- 　一つのページでデバイスを管理

## 　セットアープ

GoodCloud が3.010以上のファームウェアしかサポートしません。
### ファームウェアファイルをダウンロード

GL-X750(Spitz) テストファームウェア <a href="https://dl.gl-inet.com/firmware/x750/testing/" target="_blank">GL-X750 テストファームウェアダウンロード</a>

GL-AR750S(Slate) テストファームウェア <a href="https://dl.gl-inet.com/firmware/ar750s/testing/" target="_blank">GL-AR750S テストファームウェアダウンロード</a>

GL-AR750 テストファームウェア <a href="https://dl.gl-inet.com/firmware/ar750/testing/" target="_blank">GL-AR750 テストファームウェアダウンロード</a>

GL-B1300 テストファームウェア <a href="https://dl.gl-inet.com/firmware/b1300/testing/" target="_blank">GL-B1300 テストファームウェアダウンロード</a>

GL-AR150 テストファームウェア <a href="https://dl.gl-inet.com/firmware/ar150/testing/" target="_blank"> GL-AR150 テストファームウェアダウンロード</a>

GL-AR300M(Shadow) テストファームウェア <a href="https://dl.gl-inet.com/firmware/ar300m/testing/" target="_blank">GL-AR300M テストファームウェアダウンロード</a>

GL-MT300N-V2(Mango) テストファームウェア <a href="https://dl.gl-inet.com/firmware/mt300n-v2/testing/" target="_blank">GL-MT300N-V2 テストファームウェアダウンロード</a>

GL-MT300A テストファームウェア <a href="https://dl.gl-inet.com/firmware/mt300a/testing/" target="_blank">GL-MT300A テストファームウェアダウンロード</a>

GL-MT300N テストファームウェア <a href="https://dl.gl-inet.com/firmware/mt300n/testing/" target="_blank">GL-MT300N テストファームウェアダウンロード</a>


### ローカルアップグレード

ブラウザー（Chromeがおすすめ）を開いて、ルーターの管理者パネルをアクセスします(デフォルトurl：<a href="http://192.168.8.1" target="_blank">http://192.168.8.1</a>)。

左側に「アップグレード」ー＞「ローカルアップグレード」、ダウンロードしたファームウェアを選択し、「インストール」ボタンをクリックします。インストールには数分かかります。


## 1. ルーター管理者パネルでクラウド管理を有効にする

### 1) gl-cloud-ui をインストール

ルーターの管理者パネルにアクセスします(デフォルトurl：<a href="http://192.168.8.1" target="_blank">http://192.168.8.1</a>)。

![install-gl-cloud-ui](https://static.gl-inet.com/docs/jp/3/app/ddns/install-gl-cloud-ui.png)

左側に「アプリケーション」ー＞「ソフトバーグ」、「更新」をクリックしてソフトバーグをアップデートする、"gl-cloud-ui"を入力して、「インストール」ボタンをクリックします。インストール完了後、「アプリケーション」で「リモートアクセス」選択が増えます。

### 2) クラウド管理を有効にする

![enable-cloud-management](https://static.gl-inet.com/goodcloud/docs/enable-cloud-management.png)

クラウド管理を有効にして、あなたのデバイスに近いデータサーバーを選択します。今は「日本」選択がありません、「Global」を選択してください。

## 2. GoodCloudウェブサイトでデバイスを追加

### 1) GoodCloudアカウントを登録

 <a href="https://www.goodcloud.xyz" target="_blank">https://www.goodcloud.xyz</a>を訪問し、GoodCloudウェブサイトをアクセスします。今GoodCloudで日本語がありません。

アカウントを登録し、ログインします。
### 2) 地域を選択

右上隅で、ルーターの管理者パネルで選択した地域を選択する。

![select region button](https://static.gl-inet.com/goodcloud/docs/select-region-button2.png)

### 3) 新しいグループを追加

左側に -> Groups List -> Add group.

以下の手順に従って新しいグループを追加してください。

![add group](https://static.gl-inet.com/goodcloud/docs/add-group.png)

### 4) デバイスを追加

左側に -> Devices List -> Add Device、GoodCloudにデバイスをバインドする方法は3つあります：「Auto discover」、「Manually add」、「Bulk import」。

以下の手順に従ってデバイスを追加します。

![add device](https://static.gl-inet.com/goodcloud/docs/add-device.png)

デバイスとブラウザが同じLANでいったら、デバイスが自動的に発見されるようになり、「Device」リストで表示されます。DDNSまたはデバイスIDがルーターの背面で表示されます。

注意：ここに「DDNS」/「デバイスID」と入力して、ルーターが本当にオリジナルのものであること、または有効であることを確認します。 DDNS機能とクラウド機能は別物です。

「Refresh」をクリックし、デバイスを自動的に再発見します。

![auto discover](https://static.gl-inet.com/goodcloud/docs/auto-discover.png)

自動的に発見することができない場合は、「Manually add」を選択してください。必要な情報がルーターの背面にあります。

![manually add device](https://static.gl-inet.com/goodcloud/docs/manually-add-device.png)

一部の新製品では、DDNSがデバイスIDに変更されました。

![manually add device](https://static.gl-inet.com/goodcloud/docs/manually-add-device-device-id.png)

 
「Bulk import」機能は、追加するデバイスが多数ある場合に適しています。

### 5) ルーターのWeb管理パネルのバインド情報

ルーターを成功にGoodCloudに追加した後、ルーターの管理者パネルに戻って、「アプリケーション」ー＞「リモートアクセス」ー＞「クラウド管理」、「F5」を押してこのページを更新する、それはバインドしたGoodCloudユーザー名を表示し、あなたがユーザー名に留まると、GoodCloudアカウントのメールアドレスが表示されます。

![goodcloud-binded](https://static.gl-inet.com/docs/jp/3/app/cloud/goodcloud-binded.png)

バインドされたGoodCloudのユーザー名は間違いたら、<a href="mailto:admin@goodcloud.xyz">admin@goodcloud.xyz</a>にメールして助けを求めます。

## アンインストール

クラウドがほしくなれば、ルーター管理者パネルで簡単に無効にすることができます。GoodCloudウェブサイトで設定する必要ないです。

![disable cloud](https://static.gl-inet.com/docs/jp/3/app/cloud/disable-cloud.png)

クラウド機能をアンインストールしてスペースを節約したい場合は、`gl-cloud-ui`、` gl-ddns`、そして `gl-mqtt`ソフトバーグをアンインストールする必要があります。

![uninstall gl-cloud-ui](https://static.gl-inet.com/docs/jp/3/app/ddns/uninstall-gl-cloud-ui.png)

`gl-cloud-ui`ソフトバーグをアンインストールします。

![uninstall ddns](https://static.gl-inet.com/docs/jp/3/app/ddns/uninstall-gl-ddns.png)

`gl-ddns`ソフトバーグをアンインストールします。

![uninstall mqtt](https://static.gl-inet.com/docs/jp/3/app/ddns/uninstall-gl-mqtt.png)

`gl-mqtt`ソフトバーグをアンインストールします。