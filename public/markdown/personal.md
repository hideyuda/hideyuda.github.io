以下、個人で開発していたコードの一部になります。

### - Clean gRPC

個人開発のサービスで使用していたコードをアーカイブ的に公開しています。gRPCの勉強のために作成したものです。

###### 使用スタック
Backend:Go, Docker
Frontend:React, NextJs, TypeScript
Infrastructure:gRPC, Envoy, Google Cloud Platform, MySQL, Firebase

###### 構成
フロントエンド:Firebase Hosting
バックエンド:Artifact Registoryに配置したBackendのDockerコンテナを、Cloud Runで動かす。
DB: MySQLをCloud SQLで動しています。極力費用を抑えたかったため、Cloud SQLのリージョン等はアイオワあたりに設定しています。

###### 改善点
費用を抑えたかったためロードバランサーでgRPCを制御するのではなく、DockerコンテナにEnvoyサーバーを立て、そこからバックエンドにHTTP1.1でリクエストを送るようにしたため、複雑かつ不安定な構成になってしまった。



### - Expert AI

SlackAppで業務内の記録をメモとしてデータを溜めて、それを元に質問から回答を生成できると便利かと思い作成しました。

###### 構成
Backend:Python, LangChain, Faiss, Docker
Infrastructure:GCP(Cloud Run, Cloud SQL, Artifact Registory, Datastore, Storage), Firebase(Store)

LLMの部分は、SlackAppから取得したテキストデータをFaissを使用して、類似度の高いデータを取得しています。PineconeなどのベクトルDBは費用が高いため、Faissでベクトル化したものをCloud Storageに保存する形をとっています。

###### 改善点
SlackAppのタイムアウトにより、処理がうまくいっていたとしてもタイムアップになる
->リクエストを直接CloudRunのサーバーに送っているため、間にすぐレスポンスを返すサーバーorバランサーを立てる

###### App Link
https://co.ai-st.art/memo



### - Django

個人開発のサービスで使用していたコードをアーカイブ的に公開しています。django, gptの勉強のために作成したものです。

###### 使用スタック
Backend:Go, Docker
Frontend:React, NextJs, TypeScript
Infrastructure:Google Cloud Platform(Cloud Run, Cloud SQL, ), MySQL, Firebase

###### 構成
バックエンド:Artifact Registoryに配置したBackendのDockerコンテナを、Cloud Runで動かす。
DB: MySQLをCloud SQLで動しています。ベクトルDBは、費用を抑えるため,
Faissでベクトル化したものをCloud Storageに保存しています。

###### 改善点
実験的に多くのサービスを入れているため、可読性が低い。



### - Worker AI

SlackAppで業務内の記録をメモとしてデータを溜めて、それを元に質問から回答を生成できると便利かと思い作成しました。

###### 構成
Backend:Python, LangChain, Faiss, Docker
Infrastructure:GCP(Cloud Run, Cloud SQL, Artifact Registory, Datastore, Storage), Firebase(Store)

SlackApp

###### 改善点
SlackAppのタイムアウトにより、処理がうまくいっていたとしてもタイムアップになる
->リクエストを直接CloudRunのサーバーに送っているため、間にすぐレスポンスを返すサーバーorバランサーを立てる



### - どこいこちゃん

###### 使用スタック
Backend:Go, Docker
Frontend:React, NextJs, TypeScript
Infrastructure:gRPC, Envoy, Google Cloud Platform, MySQL, Firebase

###### 構成
フロントエンド:Firebase Hosting
バックエンド:Artifact Registoryに配置したBackendのDockerコンテナを、Cloud Runで動かす。
DB: MySQLをCloud SQLで動しています。極力費用を抑えたかったため、Cloud SQLのリージョン等はアイオワあたりに設定しています。

###### 改善点
費用を抑えたかったためロードバランサーでgRPCを制御するのではなく、DockerコンテナにEnvoyサーバーを立て、そこからバックエンドにHTTP1.1でリクエストを送るようにしたため、複雑かつ不安定な構成になってしまった。
