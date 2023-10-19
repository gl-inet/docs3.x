# FAQ

<details>
<summary>なんで192.168.8.1からルーターにアクセスできないですか？</summary>
<p><a href="https://docs.gl-inet.com/jp/3/setup/mini_router/first_time_setup/">セットアープ</a> をクリックし、ルーターに正しく接続したことを確認します。そして、<b>Chrome</b>または<b>Firefox</b>を使用してください。IEブラウザーを使用しないでください。</p>
<p> 問題が解決できない場合は、ルーターを<a href="https://docs.gl-inet.com/jp/3/troubleshooting/reset/">リセット</a>する、または<a href="https://docs.gl-inet.com/jp/3/troubleshooting/debrick/">Uboot</a>を使用してファームウェアを再インストールすることを試してください。</p>
</details>

<details>
<summary>ルーターがブリックしている場合はどうすればいいですか。</summary>
<p><a href="https://docs.gl-inet.com/jp/3/troubleshooting/debrick/">Uboot</a>を使ってファームウェアを再インストールしてください。</p>
</details>


<details>
<summary>ルーターのファームウェアバージョンを確認するにはどうすればいいですか？</summary>
<ol type="1">
<li>管理者パネルにアクセスする</li>
<li><b>アップグレード</b>をクリックして<b>現在のバージョン</b>をチェックしてください
<p><img src="https://static.gl-inet.com/docs/router/jp/3/setup/mini_router/upgrade/アップグレード.png"</p>
</ol>
</details>

<details>
<summary>メインネットワークから独立したサブネットを作成する方法は？</summary>
<p>GL.iNetルーターが192.168.8.1/24サブネットをデフォルトで作ります。</p>
</details>

<details>
<summary>ルーターをブリッジに設定し、メインルーターに直接接続するように実行するのはできるんですか？</summary>
<p>はい、できます。モードを変更すればいいです。</p>
<ol type="1">
<li>管理者パネルにアクセスします</li>
<li><b>その他の設定</b> -> <b>ネットワークモード</b></li>
<li>ネットワークモードに<b>APモード</b>、<b>無線拡張モード</b>または<b>WDSモード</b>に切り替えます</li>
<img src="https://static.gl-inet.com/docs/router/jp/3/setup/mini_router/more_settings/ネットワークモード.png">
</details>

<details>
<summary>WANポートをLANポートに変更することができますか？</summary>
<p>はい、できます。</p>
<ol type="1">
<li>
<p>WANポートを未接続のままに</p>
</li>
<li>
<p>デバイスをルーターに接続し、管理者パネルにアクセス</p>
<img src="https://static.gl-inet.com/docs/router/jp/3/troubleshooting/wantolan/internet.png"/>
</li>
<li>
<p><b>ネットワーク</b>に行って,有線セクションで<b>「LANポートとして使用」</b>をクリック</p>
<img src="https://static.gl-inet.com/docs/router/jp/3/troubleshooting/wantolan/lan.png"/>
</li>
<li>
<p><b>はい</b>をクリックして確認</p>
<img src="https://static.gl-inet.com/docs/router/jp/3/troubleshooting/wantolan/cable.png"/>
</li>
</ol>
</details>


## Wi-Fi

<details>
<summary>Wi-Fiの電波の届く範囲は？
</summary>
<p>実験したテストに基づいて、本社のルーターは空地でおよそ80-100メートルをカバーできます。一般に、家の中のWi-Fi電波の届く範囲はおよそ20-30メートルになるはずです。</p>
</details>

<details>
<summary>デバイスでルーターのSSIDが見つけないのはなぜですか？</summary>
<p>ルーターを<a href="https://docs.gl-inet.com/en/3/troubleshooting/reset/">リセット</a>してください、また問題があるなら、<a href="https://docs.gl-inet.com/en/3/troubleshooting/debrick/">Uboot</a>を使用してファームウェアを再インストールしてください。</p>
</details>

<details>
<summary>ルーターのWi-Fiを閉じるのはどうするんですか？</summary>
<ol type="1">
<li>管理者パネルにアクセス</li>
<li><b>無線</b>をクリックして、<b>ON/OFF</b> ボタンをクリックします</li>
<p><img src="https://static.gl-inet.com/docs/router/jp/3/setup/mini_router/wireless/無線.png"</p>
</ol>
</details>

<details>
<summary>ルーターのSSIDを隠すことができますか？</summary>
<ol type="1">
<li>管理者パネルにアクセス</li>
<li>無線でSSIDを隠す選択があります</li>
</details>

<details>
<summary>ルーターで複数のSSIDをセットアープできるんですか？</summary>
<ol type="1">
<li><b>「Luci」</b> (http://192.168.8.1/cgi-bin/luci)に行く -> <b>「Network」</b> -> <b>「Wireless」</b></li>
<li><b>「Add」</b>をクリックして新しい無線接続を作る</li>
<li><b>「Interface Configuration」</b>で、あなたがSSIDを設定できます。<i>Access Point (WDS)</i> <b>Mode</b>と<i>lan</i> を選択してください</b>.</li>
<li><b>「Wireless Security」</b>に行って暗号化技術を確認</li>
<li><b>「Save & Apply」</b>をクリックしてルーターを再起動</li>
<p><i>注意：インターフェイスの名は「Interface Configuration」->「Advanced Settings」で変更できる、ブランクにしてもいいです。同じの名を使用しないでください。</i></p>
</ol>
</details>

<details>
<summary>私のデバイスがイーサネットケーブルで接続しかできないです。ルーターを使用してデバイスを無線ネットワークに接続することができますか？</summary>
<p>はい、できます。あなたのデバイスをLANポートに接続して<a href="https://docs.gl-inet.com/jp/3/setup/mini_router/internet/#2-無線中継">無線中継</a>を設定してください。</p></details>

<details>
<summary>既存のWi-Fiに接続して、自分のネットワークを作ることができますか？</summary>
<p>はい、本社のルーターはデフォルトでWi-Fiネットワークシグナルを放送します。ルーターに接続している時、既存のネットワークに接続できます。</p>
</details>

<details>
<summary>公共ホットスポットに接続する時にキャプティブポータルが出ないのはなぜですか？
</summary>
<p>下記の手順を従って「DNS再バインド攻撃防御」を無効にします</p>
<ol type="1">
<li>
	<p>キャプティブポータルを介した認証が必要な公共ホットスポットに接続します。
    </p>
    <img src="https://static.gl-inet.com/docs/router/en/2/troubleshooting/src/captive_portal/1.jpg"/>
    <img src="https://static.gl-inet.com/docs/router/en/2/troubleshooting/src/captive_portal/6.jpg"/>
</li>
<li>
    <p>管理者パネルに行く -> 「その他の設定」 -> 「カスタマDNSサーバー」。<b>「DNS再バインド攻撃防御」</b>を無効にします。</p>
	<img src="https://static.gl-inet.com/docs/router/jp/3/troubleshooting/captive_portal/1.png"/>
</li>
<li>
	<p>ウェブブラウザーを使用してウェブページを訪問する、これがキャプティブポータルに自動的にリダイレクトします。</p>
    <p>スマホを使用する時、ウェブブラウザーがキャプティブポータルにリダイレクトしない場合は、スマートフォンのWi-Fiをオフにしてからオンにして、ルーターのWi-Fiに再接続してください。Wi-Fiパスワードを入力した直後にキャプティブポータルが表示されます。
    </p>
	<img src="https://static.gl-inet.com/docs/router/en/2/troubleshooting/src/captive_portal/7.jpg"/>
</li>
</ol>
</details>

<details>
<summary>このルーターでは、2.4GHz・5GHzのどのWiFiチャネルを選択できますか？
</summary>
<p>2.4GHzの場合は、チャンネル1から11を選択できます。
</p>
<p>5GHzの場合は、36から48、149から165までのチャンネルを選択できます。ルーターはDFSの52から140チャンネルをサポートしていません</p>
</details>

<details>
<summary>ユーザーネームとパスワード認証が必要EAP Wi-Fiネットワークに接続することができますか？</summary>
<p>はい、できます。EAP Wi-Fiネットワークに接続すると、管理パネルから認証情報の入力を求められます。しかし、GL-MT300N-V2がEAPをサポートしません。</p>
</details>


## ハードウエア/アクセサリー

<details>
<summary>コンピュータまたはパワーバンクのUSBポートを使用してルーターの電源を入れることはできますか？
</summary>
<p>コンピュータのUSBポートまたは電源バンクは、ルーターに十分な電力を供給できるはずです。</p> <p>ただし、電源が不安定な場合や不十分な場合は、故障の原因となる可能性があります。</p>
</details>

<details>
<summary>自分の外付けアンテナをインストールすることができますか？</summary>
<p>アンテナジャックが付いているのは、外部アンテナバージョンまたはサフィックス <b> 「Ext」 </b>の付いた製品モデル（GL-AR300M-Extなど）のみです。 <b> RP-SMA </b> Wi-Fiアンテナを接続できます。
</p>
<p>しかし、内部アンテナバージョンの場合、外付けアンテナを接続することはできません。</p>
</details>

<details>
<summary>このルーターは直接SIMカードを使用して作動できますか？
</summary>
<p>今本社の製品の中で、LTEモジュールがある4Gスマートルーター(GL-MiFi)しかこの機能をサポートしません。SIMカードをルーターのスロットに差し込んで、管理者パネルで3G/4Gが設定できます。</p>
</details>

<details>
<summary>スマホからネットワークデータを共用できますか？</summary>
<p>はい、できます。あなたのスマホをルーターのUSBポートに接続して、<a href="https://docs.gl-inet.com/jp/3/setup/mini_router/internet/#4-テザリング/">テザリング </a>を設定します。Andriod と iPhoneが使用できますが、Windowsスマホが使用できないです。</p>
</details>

<details>
<summary>テザリングのときルーターがスマホに給電に行えますか？</summary>
<p>はい、あなたのスマホをルーターのUSBポートに接続する時、ルーターがスマホを充電します。しかし、充電速度は、お使いのスマホの電力消費速度より遅い可能性があります。</p>

</details>

<details>
<summary>USBプリンタをルーターに接続することができますか？</summary>
<p>デフォルトでUSBプリンタが使用できないです。必要なドライバとプリンタサーバーをインストールする必要があります。</p>
</details>

<details>
<summary>ルーターでUSBストレージデバイスを使用することができますか？</summary>
<p>はい、できます。ストレージデバイスがFAT32、NTFS、Ext3、Ext4フォーマットのことを確認してください。 exFATがサポートしません。</p>
<p>64GBのUSBメモリと1TBのUSBハードドライブをテストしましたが、これまでのところより大容量のストレージデバイスはテストしていません。
</details>

<details>
<summary>別の無線を作成するために、別のWi-FiドングルをルーターのUSBポートに接続できますか？</summary>
<p>はい、できます。ルーターは3070または8187チップセットのWi-Fiドングルをサポートしています。</p>
</details>

<details>
<summary>イーサネットポート(PoE)を使用してルーターを給電に行えますか？</summary>
<p>GL-AR150 と GL-AR750しかPoEオプションがありません。</p>
<p>PoEはWANポートでのみ機能します。アクティブまたはパッシブの48V 802.3af PoEインジェクタを使用してください。 また、USB電源とPoEを同時に使用しないでください。さもなければ、ルータはすぐに燃えます。</P>
</details>


## アプリケーション

<details>
<summary>どのVPNプロトコルとVPNサービスプロバイダーがサポートしますか？</summary>
<p>本社のルーターはOpenVPNとWireGuardをサポートします。</p>
<p><a href="https://docs.gl-inet.com/en/3/app/openvpn/#get-your-configuration-file">ここ</a>をチェックして、サポートサービスプロバイダーを承知してください。</p>
</details>

<details>
<summary>OpenWrtパッケージをインストールするのはどうすればいいですか？</summary>
<p>管理者パネルでOpenWrtがインストールできる。</p>
<ol type="1">
<li>管理者パネルにアクセス</li>
<li><b>アプリケーション</b> -> <b>ソフトバーグ</b>.</li>
<li><b>更新</b>をクリックしてパッケージリポジトリをアップデートする、そして必要なパッケージをインストールします。</li>
<p>ルーターにSSHを接続するもできます。Windows ユーザーに<a href="http://127.0.0.1:8000/app/ssh/#1-download-and-install-a-putty">Putty</a>がおすすめです。
 Mac/Linux ユーザー が<b>Terminal</b>を使用できる。<br>ルーターにSSHを接続したら、次のコマンドでOpenWrtパッケージをインストールできます：
<br><i>opkg update<br>opkg install PackageName</i></p>
</details>