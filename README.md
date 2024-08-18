# リアルタイム地震ビューアー

> [!IMPORTANT]
> v1.6から独自のクラウド変数サーバーを使用するようになりました。この変更に伴い、利用規約とプライバシーポリシーを作成しました。[利用規約・プライバシーポリシー](terms.md)をご覧ください。  
> [Scratch版](https://scratch.mit.edu/projects/636244032)や[TurboWarp版](https://turbowarp.org/636244032)では、それぞれ[Scratchのプライバシーポリシー](https://scratch.mit.edu/privacy_policy)、[TurboWarpのプライバシーポリシー](https://turbowarp.org/privacy.html)が適用されます。

> [!NOTE]
> このアプリケーションはScratchで作成した[リアルタイム地震ビューアー](https://scratch.mit.edu/projects/636244032)を[Turbowarp Packager](https://packager.turbowarp.org/#636244032)でパッケージ化したものです。  
> このプロジェクトはScratchで共有されているため、[/assets](https://github.com/kotoho7/scratch-realtime-earthquake-viewer-page/tree/main/assets) にある画像や音声は [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/deed.ja) になります。

## 概要

リアルタイムに地震・津波情報を閲覧することができます。  
基本的に操作は不要で、全自動でリアルタイムに受信した情報を表示します。

アプリ内タブごとに、以下の情報を閲覧することができます。

- **地震情報**

  地震発生後数分で気象庁から発表される **震度速報**, **震源情報**, **地震情報**, **長周期地震動情報** をリアルタイムに更新して表示します。この地震情報はTVや気象庁HPで閲覧できる地震情報と同様です。  
  最新地震の他、過去9件の地震履歴を見ることができます。

- **リアルタイム情報 (緊急地震速報)**

  地震発生直後に、気象庁から発表される **緊急地震速報（予報）**, 防災科研の強震モニタを元にした **リアルタイム震度** を表示します。  
  これらの情報は**非常に高いリアルタイム性**がありますが、予測値や相当値を含むため**参考値**であることに留意が必要です。

- **津波予報・津波観測情報**

  地震等に伴い気象庁から発表される **大津波警報**, **津波警報**, **津波注意報**, **津波予報** と、実際に津波を観測した際の **津波観測に関する情報** をリアルタイムに更新して表示します。  
  各地の津波予想高さや到達予想時間、観測された津波の高さを見ることができます。

このアプリケーションで使用されている気象庁のリアルタイム電文については、基本的に [Project DM-D.S.S (dmdata.jp)](https://dmdata.jp/) からデータを受信しています。
WebSocketによるサーバーへの常時接続を行うため、気象庁が発表する情報を即時的に受信することが可能です。  

## 利用方法・インストール方法

Webアプリケーションのため、[ウェブサイト](https://kotoho7.github.io/scratch-realtime-earthquake-viewer-page/) へアクセスするだけで利用できます。

また、PWAに対応しているため、ネイティブアプリのようにデバイスへインストールすることができます。  
(全ての端末・ブラウザで使用できるとは限りません)

- デスクトップChromeの場合  
  アドレスバーのインストールボタン または メニュー → 保存と共有 → インストール

- iOSの場合  
  共有 → ホーム画面に追加

- Androidの場合  
  インストールバナー または メニュー → ホーム画面に追加

## その他

### 配信や動画への使用について

このアプリケーションで表示される画面を配信や動画等に使用する場合について、特に個別の許可を取る必要はありません。

> [!WARNING]
> ただし、動作の安定性や信頼性は一切保証できないため、利用者の自己責任で使用してください。

### 問い合わせ

このプロジェクトに関する問い合わせは以下の場所で対応できます。

- [製作者X](https://twitter.com/kotoho76)
- [Scratch プロジェクトページ](https://scratch.mit.edu/projects/636244032)
- [YouTube コミュニティ投稿](https://www.youtube.com/post/UgkxGV7Jutqt9kMEByTHdihpdSBVYzcl0_Ue)

## 緊急地震速報の注意事項

このプロジェクトでは、高度利用者向けの **緊急地震速報（予報）** が表示されます。以下の特徴を踏まえて情報を活用してください。

- 地震発生後、数秒で情報が作成されるため、誤報が発生することがあります。
- 地震検知直後の情報は震源やマグニチュード、予測震度の精度が低いことがあります。
- 通常でも推定震度は1階級程度の誤差があります。
- 深さ150kmより深い地震の場合、予想最大震度は発表されません（※実際の揺れに基づいて発表される場合もあります）。

## アプリ内で使用される情報の取得元

- 気象庁 緊急地震速報 (再配信許可取得済み) & 地震情報 & 津波情報  
[Project DM(Disaster Mitigation)-Data Send Service](https://dmdata.jp/docs/telegrams/)

- 地震情報の更新 (2日前まで)  
[気象庁 震度データベース検索](https://www.data.jma.go.jp/svd/eqdb/data/shindo/)

- (リアルタイム震度)  
[防災科学技術研究所 長周期地震動モニタ](https://www.lmoni.bosai.go.jp/monitor/)

- (海底地震計)  
[海洋状況表示システム(海しる) 強震動情報](https://www.msil.go.jp/)

## クレジット

### 作成にあたり参考にした記事

- [多項式補間を使用して強震モニタ画像から数値データを決定する](https://qiita.com/NoneType1/items/a4d2cf932e20b56ca444)  

### 日本地図

- [気象庁 予報区等GISデータ](https://www.data.jma.go.jp/developer/gis.html)
- [国土交通省 国土数値情報 湖沼データ](https://nlftp.mlit.go.jp/ksj/gml/datalist/KsjTmplt-W09-v2_2.html)

### 世界地図

- [Natural Earth 1:10m Cultural Vectors (Japan POV)](https://www.naturalearthdata.com/downloads/10m-cultural-vectors/)
- [NOAA ETOPO](https://www.ngdc.noaa.gov/mgg/global/)

### フォント

- [Akshar](https://fonts.google.com/specimen/Akshar)
- [BIZ UDPGothic](https://fonts.google.com/specimen/BIZ+UDPGothic)  
※どちらも SIL Open Font License

### 効果音

- [OtoLogic ニュース テロップ](https://otologic.jp/free/se/news-accent01.html)

※効果音のチョイスは [BSC24 地震警戒放送２４時](https://ch.nicovideo.jp/bousai-share) を参考にしています。  
※揺れ検知の効果音は [JQuake](https://jquake.net/) の効果音を参考にして作成しています。
