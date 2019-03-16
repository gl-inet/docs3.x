# ブリックを修復

あなたがDIYプロジェクトをしていたり、間違ったファームウェアをインストールしていたなら、あなたはあなたのルーターをブリックするかもしれません。 ルーターにアクセスできない場合がありますが、Ubootフェイルセーフを使用してファームウェアを再インストールできます。



---

以下の手順に従ってUboot界面にアクセスし、ファームウェアを再インストールしてください。

このビデオも参考できます。[U-Bootを使ってGL.iNetルーターを修復する](https://docs.gl-inet.com/en/3/video/tutor/#how-to-recover-glinet-mini-router-by-u-boot-failsafe)。



<ol type="1">
    <li><p>
        <b>ファームウェア</b>を事前にダウンロードすることが必要です。<a href="http://download.gl-inet.com/firmware" target="_blank">ここ</a>でファームウェアをダウンロードしてください。GL-AR300M、GL-AR300M-Ext、GL-AR750S-Extにとって、.imgファームウェアをダウンロードしてください、ほかの製品が.binファームウェアをダウンロードしてください。
        </p> 
    </li>
    <li>
        <p>イーサネットケーブルでコンピュータをルーターの<b>イーサネットポート（LANまたはWAN）</b>に接続します。ほかのポートを<b>接続しない</b>の必要があります。
        </p>
    </li>
    <li>
    	<p>まずリセットボタンを長押ししてから、そしてデバイスの電源を入れます。<b>順序で行くことが必要です</b>。
        </p>
    </li>
    <li>
    	<p>電源LEDが灯ります、そしてほかのLEDが点滅します。
        </p>
    </li>
    <li>
    	<p>以下の場合は指を離します：
        <ul>
        	<li>GL-AR150、GL-AR300M、GL-MiFi、GL-USB150、GL-AR750、GL-AR750S-Ext(Slate)、GL-X750-Ext(Spitz)にとって、LEDが<b>3回</b>点滅した。</li>
        	<li>GL-MT300N、GL-MT300A、GL-B1300にとって、LEDが<b>5回</b>点滅した。</li>
        </ul>
        </p>
    </li>
    <li>
    	<p>あなたのコンピューターのIPアドレスを<b>192.168.1.2</b>に変更します。システムによって作ったガイドを閲覧してください:</p>
        <details>
        <summary>Windows 7 / Windows 10</summary>
        <ol type="1">
        	<li>コントロールパネルー＞ネットワークとインターネットー＞ネットワークと共有センター</li>
        	<li>ローカル接続―＞プロパティ</li>
        	<li>インターネットプロトコルバージョン4（TCP/IPv4）―＞プロパティ</li>
        	<li>IPアドレスを192.168.1.2に変更します</li>
        	<img src="https://static.gl-inet.com/docs/jp/3/troubleshooting/uboot/ubootip変更.png">
        </ol>
        </details>
        <details>
        <summary>Mac</summary>
        <ol type="1">
        	<li>セステム設定ー＞ネットワーク</li>
        	<li>イーサネットー＞高級機能ー＞TCP/IP</li>
        	<li>IPv4手動を選択します</li>
        	<li>IPv4アドレスを192.168.1.2に設定します</li>
        </ol>
        </details>
	</li>
    <li>
    	<p>Firefox/Chromeで<b>http://192.168.1.1</b>をアクセスします.<img src="https://static.gl-inet.com/docs/jp/3/troubleshooting/uboot/uboot.png">
        </p>
    </li>
    <li>
    	<p><b>ファイルを選択</b>をクリックして、ファームウエアファイルを見つかりて、そして<b>Update firmware</b>をクリックします。
        </p>
        <p>GL-AR300M、 GL-AR300M-Ext,、GL-AR750S-Extにとって、.imgファームウェアをダウンロードして、Nand flashにアップロードしてください。
        <img src="https://static.gl-inet.com/docs/jp/3/troubleshooting/uboot/Nand.png"><p>
    </li>
    <li>
    	<p>約3分待ちます、更新するときにルーターの電源を切らないでください。電源LEDとWi-Fi LEDの両方が点灯している場合、またはデバイスでSSIDが見つかれる場合は、ルーターの準備が完了です。
        </p>
    </li>
    <li>
    	<p>ステップ6で変わったIP設定を元に戻し、あなたのデバイスをルーターのLAN/WIFIを接続します。あなたは再び192.168.8.1経由でルーターをアクセスできるようになります。
        </p>
    </li>
</ol>

