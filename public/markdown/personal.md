以下、個人で開発していたコードの一部になります。


# - Github Stats

My GitHub stats (powered by [github-readme-stats](https://github.com/anuraghazra/github-readme-stats)):

[![github stats](https://github-readme-stats.vercel.app/api?username=hidenari-yuda&show_icons=true&hide_title=true&hide_border=true)](https://co.ai-st.art)

[![top langs](https://github-readme-stats.vercel.app/api/top-langs/?username=hidenari-yuda&layout=compact&hide_border=true)](https://co.ai-st.art)



# - I Contributed to Open Source Projects

## PRs
https://github.com/TheAlgorithms/Go/pull/624

https://github.com/kunishou/databricks-dolly-15k-ja/pull/27



# - Clean gRPC

個人開発のサービスで使用していたコードをアーカイブ的に公開しています。gRPCの勉強のために作成したものです。

## 使用スタック
Backend:Go, Docker
Frontend:React, NextJs, TypeScript
Infrastructure:gRPC, Envoy, Google Cloud Platform, MySQL, Firebase

## 構成
フロントエンド:Firebase Hosting
バックエンド:Artifact Registoryに配置したBackendのDockerコンテナを、Cloud Runで動かす。
DB: MySQLをCloud SQLで動しています。極力費用を抑えたかったため、Cloud SQLのリージョン等はアイオワあたりに設定しています。

## 改善点
費用を抑えたかったためロードバランサーでgRPCを制御するのではなく、DockerコンテナにEnvoyサーバーを立て、そこからバックエンドにHTTP1.1でリクエストを送るようにしたため、複雑かつ不安定な構成になってしまった。



# - Expert AI

SlackAppで業務内の記録をメモとしてデータを溜めて、それを元に質問から回答を生成できると便利かと思い作成しました。

## 構成
Backend:Python, LangChain, Faiss, Docker
Infrastructure:GCP(Cloud Run, Cloud SQL, Artifact Registory, Datastore, Storage), Firebase(Store)

LLMの部分は、SlackAppから取得したテキストデータをFaissを使用して、類似度の高いデータを取得しています。PineconeなどのベクトルDBは費用が高いため、Faissでベクトル化したものをCloud Storageに保存する形をとっています。

## 改善点
SlackAppのタイムアウトにより、処理がうまくいっていたとしてもタイムアップになる
->リクエストを直接CloudRunのサーバーに送っているため、間にすぐレスポンスを返すサーバーorバランサーを立てる

## App Link
https://co.ai-st.art/memo



# - Django

個人開発のサービスで使用していたコードをアーカイブ的に公開しています。django, gptの勉強のために作成したものです。

## 使用スタック
Backend:Go, Docker
Frontend:React, NextJs, TypeScript
Infrastructure:Google Cloud Platform(Cloud Run, Cloud SQL, ), MySQL, Firebase

## 構成
バックエンド:Artifact Registoryに配置したBackendのDockerコンテナを、Cloud Runで動かす。
DB: MySQLをCloud SQLで動しています。ベクトルDBは、費用を抑えるため,
Faissでベクトル化したものをCloud Storageに保存しています。

## 改善点
実験的に多くのサービスを入れているため、可読性が低い。



# - Worker AI

SlackAppで業務内の記録をメモとしてデータを溜めて、それを元に質問から回答を生成できると便利かと思い作成しました。

## 構成
Backend:Python, LangChain, Faiss, Docker
Infrastructure:GCP(Cloud Run, Cloud SQL, Artifact Registory, Datastore, Storage), Firebase(Store)

SlackApp

## 改善点
SlackAppのタイムアウトにより、処理がうまくいっていたとしてもタイムアップになる
->リクエストを直接CloudRunのサーバーに送っているため、間にすぐレスポンスを返すサーバーorバランサーを立てる



# - どこいこちゃん

## 使用スタック
Backend:Go, Docker
Frontend:React, NextJs, TypeScript
Infrastructure:gRPC, Envoy, Google Cloud Platform, MySQL, Firebase

## 構成
フロントエンド:Firebase Hosting
バックエンド:Artifact Registoryに配置したBackendのDockerコンテナを、Cloud Runで動かす。
DB: MySQLをCloud SQLで動しています。極力費用を抑えたかったため、Cloud SQLのリージョン等はアイオワあたりに設定しています。

## 改善点
費用を抑えたかったためロードバランサーでgRPCを制御するのではなく、DockerコンテナにEnvoyサーバーを立て、そこからバックエンドにHTTP1.1でリクエストを送るようにしたため、複雑かつ不安定な構成になってしまった。



Below is a part of the code that was developed privately.



# - Github Stats

My GitHub stats (powered by [github-readme-stats](https://github.com/anuraghazra/github-readme-stats)):.

[! [github stats](https://github-readme-stats.vercel.app/api?username=hidenari-yuda&show_icons=true&hide_title=true&hide_border=true )](https://co.ai-st.art))

[! [top langs](https://github-readme-stats.vercel.app/api/top-langs/?username=hidenari-yuda&layout=compact&hide_border=true)](https://) co.ai-st.art)



# - I Contributed to Open Source Projects

## PRs
https://github.com/TheAlgorithms/Go/pull/624

https://github.com/kunishou/databricks-dolly-15k-ja/pull/27



# - Clean gRPC

This is an archive of code I used in my personal development service, created for learning gRPC.

## Stacks used
Backend:Go, Docker
Frontend:React, NextJs, TypeScript
Infrastructure: gRPC, Envoy, Google Cloud Platform, MySQL, Firebase

## Configuration
Frontend:Firebase Hosting
Backend: Backend Docker container placed in Artifact Registory, Cloud Run
DB: MySQL with Cloud SQL. Cloud SQL region is set around Iowa to keep costs as low as possible.

## Improvements
Instead of using a load balancer to control gRPC, we set up an Envoy server in a Docker container and sent HTTP 1.1 requests to the backend from the Envoy server.



# - Expert AI

I thought it would be useful to use SlackApp to store records of work as memos and generate answers from questions based on them.

## Composition
Backend:Python, LangChain, Faiss, Docker
Infrastructure:GCP(Cloud Run, Cloud SQL, Artifact Registory, Datastore, Storage), Firebase(Store)

The LLM part uses Faiss to retrieve text data retrieved from SlackApp with a high degree of similarity; vector DBs such as Pinecone are expensive, so we use Faiss to vectorize the data and store it in Cloud Storage.

## Improvements
SlackApp timeout causes timeout even if the process is working well.
->Requests are sent directly to CloudRun's server, so a server or balancer must be set up in between that returns a response immediately.

## App Link
https://co.ai-st.art/memo



## Django

This is an archive of code used in personal development services, created to study django and gpt.

## Stacks used
Backend:Go, Docker
Frontend:React, NextJs, TypeScript
Infrastructure:Google Cloud Platform(Cloud Run, Cloud SQL, ), MySQL, Firebase

## Configuration
Backend: Backend Docker container placed in Artifact Registory, running Cloud Run.
DB: MySQL running on Cloud SQL. Vector DB is vectorized by Faiss to save cost.
Vector DB is vectorized by Faiss and stored in Cloud Storage.

## Improvements
Readability is low because of experimental use of many services.



# - Worker AI

I created this code because I thought it would be useful to be able to store data as notes in SlackApp for records within a business and generate answers from questions based on those notes.

## Composition
Backend:Python, LangChain, Faiss, Docker
Infrastructure:GCP(Cloud Run, Cloud SQL, Artifact Registory, Datastore, Storage), Firebase(Store)

SlackApp

## Improvements
SlackApp timeout causes timeout even if the process is working.
->Since requests are sent directly to CloudRun server, set up a server or balancer that responds immediately in between.



# - Dokoiko

## Stacks used
Backend:Go, Docker
Frontend:React, NextJs, TypeScript
Infrastructure: gRPC, Envoy, Google Cloud Platform, MySQL, Firebase

## Configuration
Frontend:Firebase Hosting
Backend: Backend Docker container placed in Artifact Registory, Cloud Run
DB: MySQL with Cloud SQL. Cloud SQL region is set around Iowa to keep costs as low as possible.

## Improvements
Instead of using a load balancer to control gRPC, we set up an Envoy server in a Docker container and sent HTTP 1.1 requests to the backend from the Envoy server.