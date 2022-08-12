# ネットワーク

四つのインターネットにアクセスする方法があります：**有線接続**、**無線中継**、**3G/4Gモデル**、**テザリング**。

![connection method](https://static.gl-inet.com/docs/jp/3/setup/gl-ar750s/first_time_setup/method.jpg)



`ネットワーク`をクリックして、ネットワークに繋がります。

![internet](https://static.gl-inet.com/docs/jp/3/setup/gl-ar750s/first_time_setup/main_ui.png)

  

---

## 1) 有線接続

ルーターをモデムまたはメインルーターに接続してインターネットにアクセスします。

イーサネットケーブルをルーターのWANポートに入れる前、`LANポートとして使用` をクリックして、WANポートをLANポートに変更して利用することができます。それはルーターを無線中継に利用する時に役立ちます。もう一つのLANポートを利用できるようになります。

![cable](https://static.gl-inet.com/docs/jp/3/setup/mini_router/internet/ケーブル.png)



イーサネットケーブルをルーターのWANポートに入れる後、接続情報が有線セクションに表示されます。DHCPがデフォルトのプロトコルです。`修正`をクリックして、プロトコルを変更できます。

![cable](https://static.gl-inet.com/docs/jp/3/setup/mini_router/internet/ケーブルセクション.png)



### DHCP

DHCPはデフォルトと一般的なプロトコルです。手動で設定する必要はありません。

![dhcp](https://static.gl-inet.com/docs/jp/3/setup/mini_router/internet/デフォルトプロトコル.png)


### Static

あなたのインターネットサーバープロバイダー(ISP)が静的IPアドレスを提供し、またはネットワーク情報（IPアドレス、ゲートウェイ、ネットマスク）を手動で設定ほしい時に、Staticが必要です。

Staticを選択する時、自分の望みに設定を変更して、`適用`をクリックしてください。

![static](https://static.gl-inet.com/docs/jp/3/setup/mini_router/internet/せいたい.png)




### PPPoE

PPPoEが多くのインターネットサーバープロバイダー(ISP)に要求されます。
一般に、あなたのプロバイダーは、インターネット接続用のモデムとユーザー名・パスワードを提供します。

PPPoEを選択し、ユーザー名とパスワードを入力して、`適用`をクリックします。

![PPPoE](https://static.gl-inet.com/docs/jp/3/setup/mini_router/internet/PPPoE.png)



---

## 2)無線中継

中継とは他の無線ネットワークに接続することです。例えば、ホテルと喫茶店のフリーWiFiを利用することです。

ルーターはデフォルトでWISP（ワイヤレスインターネットサービスプロバイダー）モードを使用します。このモードは、自分のサブネットを構築し、ファイアウォールとして公用ネットワークから保護します。

中継セクションで、`スキャン`をクリックして近くの無線ネットワークを検索します。

![repeater scan](https://static.gl-inet.com/docs/jp/3/setup/mini_router/internet/中継.png)



リストの中で一つのSSIDを選択し、パスワードを入力します。**ネットワークを保存**を開いて、使用しているの無線ネットワークを保存することができます。最後に、参加を`クリック`します。

![connect wifi](https://static.gl-inet.com/docs/jp/3/setup/mini_router/internet/中継スキャン.png)





---

## 3) USB 3G/4G　モデム

USB 3G/4Gモデムでインターネットに接続できます。SIMカードをUSBモデムに挿し、USBモデムをルーターのUSBポートに差し込みます。SIMカードを検出されると、3G/4Gモデムセクションが有効になり、USBモデムを設定できるようになります。

一部のモデムはホストレスモードで動作することを注意してください。これは、3G/4Gモデムモードではなく、テザリングを通じて設定されます。

一般に、以下の3つの基本パラメータで3G/4Gモデムを設定します。`適用`をクリックして続きます。

- •	デバイス：モデムがQMI対応の場合は、**/dev/cdc-wdm0** を選択してください。それでなければ、**/dev/ttyUSB**を選択します。**dev/ttyUSB**が0から3までのいくつかの**ttyUSB**があります。モデムスペックによって正しい**ttyUSB**を選択してください。まず**ttyUSB0**をお勧めします。
- **サービスタイプ**：SIMカードのサービスタイプを示します。
- **APN**:SIMカードキャリアと確認します。

![modem](https://static.gl-inet.com/docs/jp/3/setup/mini_router/internet/3G4G.png)

高級設定:

- **ナンバー**：一般に、ここはデフォルト設定であり、手動でセットする必要がありません。しかしながら、この情報があったら、入力してください。
- **ピンコード、ユーザーネーム、パスワード**：一般に、ロックされていないSIMカードはここで入力必要がないです。でも、ロックされているSIMカードが使用していったら、ごサービスプロバイダーと連絡してください。

![modem](https://static.gl-inet.com/docs/jp/3/setup/mini_router/internet/3G4Gセット.png)



SIMカードのIPアドレスが見せる時、接続ができました。

![modem connect](https://static.gl-inet.com/docs/jp/3/setup/mini_router/internet/modem2.jpg)

![modem connected](https://static.gl-inet.com/docs/jp/3/setup/mini_router/internet/modem3.jpg)



### 適用モデム

以下は、テストした使用できるモデムのリストです。

| モデル                                  | 3G/4G | テストしました | テストする人       | コメント* |
| -------------------------------------- | ----- | ------ | --------------- | --------- |
| Quectel EC20-E, EC20-A, EC20-C         | 4G    | はい    | GL.iNet         |           |
| Quectel EC25-E, EC25-A, EC25-V, EC25-C | 4G    | はい    | GL.iNet         |           |
| Quectel UC20-E                         | 3G    | はい    | GL.iNet         |           |
| ZTE ME909s-821                         | 4G    | はい    | GL.iNet         |           |
| Huawei E1550                           | 3G    | はい    | GL.iNet         |           |
| Huawei E3276                          | 4G    | はい    | GL.iNet         |           |
| TP-Link MA260                          | 3G    | はい    | GL.iNet         |           |
| ZTE M823                               | 4G    | はい    | Arnas Risqianto |           |
| ZTE MF190                              | 3G    | はい    | Arnas Risqianto |           |
| Huawei E3372                           | 4G    | はい    | anonymous       |           |
| Pantech UML290VW (Verizon)             | 4G    | はい    | GL.iNet/steven  | QMI       |
| Pantech UML295 (Verizon)               | 4G    | はい    | GL.iNet/steven  | ホストレス |
| Novatel USB551L (Verizon)              | 4G    | はい    | GL.iNet/steven  | QMI       |
| Verizon U620L (Verizon)                | 4G    | はい   |                 | ホストレス |
|                                        |       |        |                 |           |

*QMI: このモデムがQMIモードをサポートします、**デバイスリスト**で**/dev/cdc-wdm0**を選択してください。

*ホストレスモード: このモデムがテザリングモードをサポートします。3G/4Gモデムではなく、テザリングを設定してください。

 サポートモデムについてに[http://ofmodemsandmen.com/modems.html](http://ofmodemsandmen.com/modems.html)も参考できます。



---

## 4.テザリング

テザリングとは、USBケーブルでスマホからルーターにネットワークを共有することです。ホストレスモデムは、モデムのセットアップ時にもテザリングで利用します。

ホストレスモデムテザリングの場合は、ルーターのUSBポートに差し込みます。

iPhoneテザリングの場合は、ルータのUSBポートに差し込み、設定->インターネット共有->ほかの人の接続を許可、**信頼しますか**というメッセージをポップアップしたら、**信頼**をクリックしてください。（アクセスできないなら、**ほかの人の接続を許可**を複数オンオフしてください。）

Androidテザリングの場合は、ルータのUSBポートに差し込み、設定->パーソナルホットスポット->Usbネットワーク共有 をオンにしてください。

デバイスに差し込む後、テザリングセクションがアップデートして、ごデバイスがデバイスリストで見えます。デバイスの名称は**eth**または**usb**で始まり、例えば**eth2**、**usb0**。 ご使いのデバイスを選択して`接続`をクリックしてください。

![tethering](https://static.gl-inet.com/docs/jp/3/setup/mini_router/internet/テザリング.png)

