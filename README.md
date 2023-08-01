# scratch-realtime-earthquake-viewer-page

Scratchで作成した[リアルタイム地震ビューアー](https://scratch.mit.edu/projects/636244032)を[Turbowarp Packager](https://packager.turbowarp.org/#636244032)でパッケージ化したものです。  
Github Pages を使えば簡単に公開できるようなのでお試し。Scratchで共有している素材なので、[/assets](https://github.com/kotoho7/scratch-realtime-earthquake-viewer-page/tree/main/assets) にある画像や音声は [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/deed.ja) になります。

## Scratchでの説明文

主に以下の情報を見ることができます。

- **地震情報と過去9件の地震履歴**
- **1秒ごとのリアルタイム震度と緊急地震速報**
- **津波予報と津波観測情報**

>基本的にDM-D.S.S(気象業務支援センターから直接データを配信しているサービス)から受信しているので、テレビやスマホアプリよりも早く情報が来ると思います  
>※クラウド変数を使ってデータを更新しています。止まったりバグったりしているかもしれないので注意  
>※New Scratcher や未ログインでは動きません。

実際の動作は[こんな感じ](https://youtu.be/83u_s1SKq1I)です(v1.3.1現在)。深い地震のときは[こうなります](https://youtu.be/n83NO49gfHk/)

## 操作方法

基本的には揺れの検出や地震情報で自動的に画面が切り替わります

|操作|方法|
|---|---|
|拡大/縮小|左下のボタン or マウスのスクロール or ダブルタップからの長押し|
|カメラリセット|左下のボタン|
|左のタブ切り替え|タブのアイコンクリック|
|タブのスクロール|マウスのスクロールとドラッグ|
|再起動(バグったとき用)|Z 押しながら Q|

## 表示される情報についての注意

### リアルタイム震度

- テレビなどで発表される地震情報の震度とは別物です。強震観測網(K-NET,KiK-net)で観測された震度の相当値が表示されています
- 深いところで発生する地震はプレート沿いに揺れが伝わるため、震源から遠いところが揺れることがあります(異常震域)

### 緊急地震速報

- 地震発生後、数秒で情報が作成されるため、誤報が発生することがあります
- 地震検知直後の情報は震源やマグニチュード、予測震度の精度が低いことがあります
- 通常でも推定震度は1階級程度の誤差があります
- 深さ150kmより深い地震の場合、予想最大震度は発表されません  
※実際の揺れに基づいて発表される場合もあります

## 情報の取得元

- リアルタイム震度  
[防災科学技術研究所 長周期地震動モニタ](https://www.lmoni.bosai.go.jp/monitor/)

- 緊急地震速報 (再配信許可取得済み) & 地震情報 & 津波情報  
[Project DM(Disaster Mitigation)-Data Send Service](https://dmdata.jp/docs/telegrams/)
- 地震情報の更新 (2日前まで)  
[気象庁 震度データベース検索](https://www.data.jma.go.jp/svd/eqdb/data/shindo/)

- 海底地震計  
[海洋状況表示システム(海しる) 強震動情報](https://www.msil.go.jp/)

### 参考にした解説

- 【多項式補間を使用して強震モニタ画像から数値データを決定する】  
<https://qiita.com/NoneType1/items/a4d2cf932e20b56ca444>

### 使用した素材

#### 日本地図

- 気象庁 予報区等GISデータ  
　緊急地震速報／府県予報区  
　地震情報／細分区域  
　津波予報区  
　<https://www.data.jma.go.jp/developer/gis.html>

- 国土交通省 国土数値情報 湖沼データ  
　<https://nlftp.mlit.go.jp/ksj/gml/datalist/KsjTmplt-W09-v2_2.html>

#### 世界地図

- Natural Earth 1:10m Cultural Vectors (Japan POV)  
　<https://www.naturalearthdata.com/downloads/10m-cultural-vectors/>

- NOAA ETOPO  
　<https://www.ngdc.noaa.gov/mgg/global/>

#### フォント

- Akshar  
　<https://fonts.google.com/specimen/Akshar>
- BIZ UDPGothic  
　<https://fonts.google.com/specimen/BIZ+UDPGothic>

※どちらも SIL Open Font License

#### 効果音

- OtoLogic ニュース テロップ  
　<https://otologic.jp/free/se/news-accent01.html>

※この効果音のチョイスは [BSC24 地震警戒放送２４時](https://ch.nicovideo.jp/bousai-share) を参考にしています。  
※震度検知の音は [JQuake](https://jquake.net/) の効果音を参考にして作りました。
