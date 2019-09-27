# ネットワーク

四つのインターネットをアクセスする方法があります：**有線接続**、**無線中継**、**3G/4Gモデル**、**テザリング**。


`ネットワーク`をクリックして、ネットワーク接続を作ります。

![internet](https://static.gl-inet.com/docs/jp/3/setup/b1300/internet/main_ui.png)

  

---

## 1) 有線接続

ルーターをモデムまたはメインルーターに接続してインターネットをアクセスします。

イーサネットケーブルをルーターのWANポートに入れる前に、`LANポートとして使用` をクリックして、WANポートをLANポートに変更して利用することができます。ルーターを無線中継に利用する時に役が立ち、あなたがもう一つのLANポートを利用できるようになります。

![cable](https://static.gl-inet.com/docs/jp/3/setup/mini_router/internet/ケーブル.png)



イーサネットケーブルをルーターのWANポートに入れる後、接続情報が有線セクションに表示されます。DHCPがデフォルトのプロトコルです。`修正`をクリックして、プロトコルを変更できる。

![cable](https://static.gl-inet.com/docs/jp/3/setup/mini_router/internet/ケーブルセクション.png)



### DHCP

DHCPはデフォルトで一般的なプロトコルです。手動で設定する必要はありません。

![dhcp](https://static.gl-inet.com/docs/jp/3/setup/mini_router/internet/デフォルトプロトコル.png)


### Static

あなたのインターネットサーバープロバイダー(ISP)が一定のIPアドレスを提供し、あなたがネットワーク情報を手動で設定することになる時に、Staticが必要です。

Staticを選択する時、あなたの望みに設定を変更して、`応用する`をクリックしてください。

![static](https://static.gl-inet.com/docs/jp/3/setup/mini_router/internet/せいたい.png)




### PPPoE

PPPoEが多くのインターネットサーバープロバイダー(ISP)に要求される。
一般に、あなたのプロバイダーは、インターネット接続を作るに必要なモデムとユーザー名・パスワードをあなたに提供します。

PPPoEを選択し、ユーザー名とパスワードを入力して、`応用する`をクリックします。

![PPPoE](https://static.gl-inet.com/docs/jp/3/setup/mini_router/internet/PPPoE.png)



---

## 2) 無線中継

中継は、他の無線ネットワークに接続することです。例えば、ホテルまたは喫茶店でフリーWiFiを利用します。

ルーターはデフォルトでWISP（ワイヤレスインターネットサービスプロバイダー）モードを使用します。このモードは、自分のサブネットを作って、ファイアウォールとして公衆ネットワークからあなたを保護します。

中継セクションで、`スキャン`をクリックして近くの無線ネットワークを検索します。

![repeater scan](https://static.gl-inet.com/docs/jp/3/setup/mini_router/internet/中継.png)



リストの中で一つのSSIDを選択し、パスワードを入力します。**ネットワークを保存**を有効にして、使用しているの無線ネットワークを保存することができます。最後に、`添加する`をクリックします。

![connect wifi](https://static.gl-inet.com/docs/jp/3/setup/mini_router/internet/中継スキャン.png)





---

## 3) USB 3G/4G　モデム

あなたはUSB 3G/4Gモデムでインターネットを接続できる。SIMカードをUSBモデムに挿入して、USBモデムをルーターのUSBポートに差し込みます。それが検出されると、3G/4Gモデムセクションが有効になり、USBモデムを設定できるようになります。

一部のモデムはホストレスモードで動作することを注意してください。これは、3G/4Gモデムモードではなく、テザリングを通じて設定されます。

一般に、あなたは以下の3つの基本パラメータで3G/4Gモデムを設定します。`応用する` をクリックして続きます。

- **デバイス**：モデムがQMIをサポートする場合は、**/dev/cdc-wdm0 **を選択してください。そでなければ、**/dev/ttyUSB**を選択することが必要です。**dev/ttyUSB**が0から3までのいくつかの**ttyUSB**があります、あなたがモデムスペックに正しいものを選択することが必要です。まず**ttyUSB0**を試してください。
- **サービスタイプ**：あなたのSIMカードのサービスタイプを示します。
- **APN**:あなたのSIMカードキャリアを確認します。

![modem](https://static.gl-inet.com/docs/jp/3/setup/mini_router/internet/3G4G.png)

高級設定:

- **番号**：一般に、ここはデフォルト設定であり、手動でセットする必要がありません。しかしながら、この情報があったら、それを入力してください。
- **ピンコード、ユーザーネーム、パスワード**：一般に、ロックされていないSIMカードには、これらのが必要ないです。でも、ロックされているSIMカードが使用していったら、あなたのサービスプロバイダーに連絡してください。

![modem](https://static.gl-inet.com/docs/jp/3/setup/mini_router/internet/3G4Gセット.png)



SIMカードのIPアドレスが見せる時、接続ができた。

![modem connect](https://static.gl-inet.com/docs/jp/3/setup/mini_router/internet/modem2.jpg)

![modem connected](https://static.gl-inet.com/docs/jp/3/setup/mini_router/internet/modem3.jpg)



### コンパチなモデム

以下は、テストして、使用できるモデムのリストです。

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

*QMI: このモデムがQMIモードをサポートします、**デバイス**リストで**/dev/cdc-wdm0**を選択してください。

*ホストレスモード: このモデムがテザリングモードをサポートします。3G/4Gモデムではなく、テザリングを使って設定してください。

 サポートモデムについてに[http://ofmodemsandmen.com/modems.html](http://ofmodemsandmen.com/modems.html)も参考できます。



---

## 4.テザリング

テザリングは、スマホからルーターにUSBケーブルでネットワークを共有することです。ホストレスモデムは、モデムのセットアップ時にもテザリングで利用します。

ホストレスモデムテザリングの場合は、ルーターのUSBポートに差し込みます。

スマホテザリングの場合は、ルータのUSBポートに差し込み、スマホで**信頼する**をクリックします。

デバイスに差し込む後、テザリングセクションがアップデートして、あなたのデバイスがデバイスリストで見える。デバイスの名は**eth2**，**usb0**のように**eth**または**usb**で始まります。 お使いのデバイスを選択して`接続`をクリックしてください。

![tethering](https://static.gl-inet.com/docs/jp/3/setup/mini_router/internet/テザリング.png)



### EasyTether

一部の通信事業者は、テザリングを使用できないようにデータの共有を禁止しています。 しかし、あなたはEasytetheringを試すことができます。

*注意： Easytetherは無料のサービスではありません、そして、私たちは彼らと提携していません.*
