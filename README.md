# scratch-realtime-earthquake-viewer-page

**v1.6から、試験的にクラウド変数サーバーを、TurboWarpのサーバーから、このページ独自のサーバーを使用するように変更しました。それに伴い、このページ用の利用規約とプライバシーポリシーを作成しました。詳しくは[利用規約・プライバシーポリシー](terms.md)をご覧ください。**  
なお、[Scratch版](https://scratch.mit.edu/projects/636244032)や[TurboWarp版](https://turbowarp.org/636244032)では、それぞれ[Scratchのプライバシーポリシー](https://scratch.mit.edu/privacy_policy)、[TurboWarpのプライバシーポリシー](https://turbowarp.org/privacy.html)に従ってください。

Scratchで作成した[リアルタイム地震ビューアー](https://scratch.mit.edu/projects/636244032)を[Turbowarp Packager](https://packager.turbowarp.org/#636244032)でパッケージ化したものです。  
このプロジェクトはScratchで共有されているため、[/assets](https://github.com/kotoho7/scratch-realtime-earthquake-viewer-page/tree/main/assets) にある画像や音声は [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/deed.ja) になります。

## 概要

クラウド変数を使ってリアルタイムに地震・津波情報を受信するプロジェクトです。  
主に以下の情報をリアルタイムに見ることができます。

- **地震情報と地震情報の履歴9件**
- **緊急地震速報 (とリアルタイムの揺れ)**
- **津波予報と津波観測情報**

基本的に Project DM-D.S.S (dmdata.jp) からデータを受信しています。  
※常に動作している保証はありません。情報を受信できなかったり、バグが発生する可能性もあるので注意。  

実際の動作はこんな感じです(v1.4.2)  
<https://youtu.be/STpFd15nSkg>

### 配信や動画への使用について

このページで表示される画面を配信や動画等に使用する場合、個別の許可を取る必要はありません。ただし、動作の安定性や信頼性は一切保証できないため、利用者の自己責任で使用してください。

### 問い合わせ

このプロジェクトに関する問い合わせは以下の場所で対応できます。

- [製作者X](https://twitter.com/kotoho76)
- [Scratch プロジェクトページ](https://scratch.mit.edu/projects/636244032)
- [YouTube コミュニティ投稿](https://www.youtube.com/post/UgkxGV7Jutqt9kMEByTHdihpdSBVYzcl0_Ue)

## 操作方法

基本的には揺れの検出や地震情報で自動的に画面が切り替わります

|操作|方法|
|---|---|
|拡大/縮小|左下のボタン or マウスのスクロール or ダブルタップからの長押し|
|カメラリセット|左下のボタン|
|左のタブ切り替え|タブのアイコンクリック|
|タブのスクロール|マウスのスクロールとドラッグ|
|再起動|Zキー + Qキー|

## 緊急地震速報の注意事項

このプロジェクトでは、高度利用者向けの **緊急地震速報（予報）** が表示されます。以下の特徴を踏まえて情報を活用してください。

- 地震発生後、数秒で情報が作成されるため、誤報が発生することがあります。
- 地震検知直後の情報は震源やマグニチュード、予測震度の精度が低いことがあります。
- 通常でも推定震度は1階級程度の誤差があります。
- 深さ150kmより深い地震の場合、予想最大震度は発表されません（※実際の揺れに基づいて発表される場合もあります）。

## 情報の取得元

- 緊急地震速報 (再配信許可取得済み) & 地震情報 & 津波情報  
[Project DM(Disaster Mitigation)-Data Send Service](https://dmdata.jp/docs/telegrams/)

- 地震情報の更新 (2日前まで)  
[気象庁 震度データベース検索](https://www.data.jma.go.jp/svd/eqdb/data/shindo/)

- (リアルタイム震度)  
[防災科学技術研究所 長周期地震動モニタ](https://www.lmoni.bosai.go.jp/monitor/)

- (海底地震計)  
[海洋状況表示システム(海しる) 強震動情報](https://www.msil.go.jp/)

### 作成にあたり参考にした記事

- 多項式補間を使用して強震モニタ画像から数値データを決定する  
<https://qiita.com/NoneType1/items/a4d2cf932e20b56ca444>

### 使用した素材

#### 日本地図

- 気象庁 予報区等GISデータ  
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
