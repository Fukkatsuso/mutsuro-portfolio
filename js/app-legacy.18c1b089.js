(function(){"use strict";var t={361:function(t,n,e){e(6992),e(8674),e(9601),e(7727);var o=e(9963),r=e(6252),i={id:"app"};function a(t,n,e,o,a,u){var l=(0,r.up)("Navigation"),c=(0,r.up)("router-view"),s=(0,r.up)("Footer");return(0,r.wg)(),(0,r.iD)("div",i,[(0,r.Wm)(l),(0,r.Wm)(c),(0,r.Wm)(s)])}var u=(0,r.Uk)(" Top "),l=(0,r.Uk)(" About "),c=(0,r.Uk)(" Skills "),s=(0,r.Uk)(" Works "),m=(0,r.Uk)(" Contact ");function p(t,n){var e=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("nav",null,[(0,r.Wm)(e,{to:"/"},{default:(0,r.w5)((function(){return[u]})),_:1}),(0,r.Wm)(e,{to:"/about"},{default:(0,r.w5)((function(){return[l]})),_:1}),(0,r.Wm)(e,{to:"/skills"},{default:(0,r.w5)((function(){return[c]})),_:1}),(0,r.Wm)(e,{to:"/works"},{default:(0,r.w5)((function(){return[s]})),_:1}),(0,r.Wm)(e,{to:"/contact"},{default:(0,r.w5)((function(){return[m]})),_:1})])}var k=e(3744);const f={},d=(0,k.Z)(f,[["render",p]]);var g=d;function h(t,n){return(0,r.wg)(),(0,r.iD)("footer")}const v={},b=(0,k.Z)(v,[["render",h]]);var w=b,S={name:"App",components:{Navigation:g,Footer:w}};const _=(0,k.Z)(S,[["render",a]]);var y=_,C=e(2119),D={class:"top-content-container"};function W(t,n,e,o,i,a){var u=(0,r.up)("SubTitle");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("div",D,[(0,r.Wm)(u,{class:"top-title",name:"Mutsuro Tatsuki's Portfolio Site"})])])}e(8309);var A=e(3577),G={class:"sub-title"};function T(t,n,e,o,i,a){return(0,r.wg)(),(0,r.iD)("div",G,[(0,r._)("h2",null,(0,A.zw)(e.name),1)])}var N={name:"SubTitle",props:{name:{type:String,required:!0}}};const j=(0,k.Z)(N,[["render",T]]);var I=j,R={name:"Top",components:{SubTitle:I}};const q=(0,k.Z)(R,[["render",W]]);var H=q,P={class:"profile-table"},L={class:"profile-link"},M={href:"https://github.com/Fukkatsuso",target:"_blank"},O={href:"https://blog.fukkatsuso.com",target:"_blank"},z=(0,r.uE)('<div class="profile-activity"><h3>インターン@株式会社AIoT</h3><ul><li>バックエンドを主に担当(Go, NestJS)</li><li>時々フロントも(Vue.js, React)</li></ul><h3>鈴木研究室に所属</h3><ul><li>データマイニングに関する研究</li></ul><h3>競技プログラミングのコンテスト</h3><ul><li>AtCoderのレート: 1100付近(緑色)</li></ul><h3>ロボコンサークルで大会に出場</h3><ul><li>NHK学生ロボコン2018ベスト4+アイデア賞</li><li>NHK学生ロボコン2019ベスト4+デザイン賞</li><li>キャチロボバトルコンテスト2019ベスト8+審査員特別賞</li></ul></div>',1),E=(0,r._)("div",{class:"profile-future"},[(0,r._)("p",null,"使う人のことを思いやって開発できるエンジニアになりたい"),(0,r._)("p",null,"サーバーサイドを中心に技術力を上げ，ゆくゆくはフルスタックを目指していきたい"),(0,r._)("p",null,"個人でもチームでも多くのアプリやサービスを開発したい")],-1);function Z(t,n,e,o,i,a){var u=(0,r.up)("SubTitle"),l=(0,r.up)("font-awesome-icon");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(u,{name:"About me"}),(0,r._)("div",null,[(0,r._)("div",P,[(0,r._)("table",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.profile,(function(t){return(0,r.wg)(),(0,r.iD)("tr",{key:t.title},[(0,r._)("th",null,(0,A.zw)(t.title),1),(0,r._)("td",null,(0,A.zw)(t.content),1)])})),128))])]),(0,r._)("div",L,[(0,r._)("a",M,[(0,r.Wm)(l,{class:"github-icon hover-icon",icon:i.githubIcon},null,8,["icon"])]),(0,r._)("a",O,[(0,r.Wm)(l,{class:"blog-icon hover-icon",icon:i.blogIcon},null,8,["icon"])])])]),(0,r.Wm)(u,{name:"Activity"}),z,(0,r.Wm)(u,{name:"Future"}),E])}var F=e(1417),U=e(1436),x={name:"About",components:{SubTitle:I},data:function(){return{profile:[{title:"Name",content:"無津呂 樹 (Mutsuro Tatsuki)"},{title:"Age",content:this.age(1999,3,14)},{title:"From",content:"福岡県"},{title:"University",content:"九州大学 システム情報科学府 情報理工学専攻 修士1年"},{title:"Language",content:"Go, Ruby, Japanese"},{title:"Editor",content:"VSCode"},{title:"Favorite",content:"MONKEY MAJIK, 平沢進, ポケモン"}],githubIcon:F.zhw,blogIcon:U.M_6}},methods:{age:function(t,n,e){var o=new Date,r=(1e4*(o.getFullYear()-t)+100*(o.getMonth()+1-n)+(o.getDate()-e))/1e4;return Math.floor(r)}}};const V=(0,k.Z)(x,[["render",Z]]);var K=V,J={class:"skills-flex-container"};function Q(t,n,e,o,i,a){var u=(0,r.up)("SubTitle"),l=(0,r.up)("SkillCard");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(u,{name:"Skills"}),(0,r._)("div",J,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.skills,(function(t){return(0,r.wg)(),(0,r.j4)(l,{key:t.name,name:t.name,term:t.term,content:t.content},null,8,["name","term","content"])})),128))])])}var X={class:"skill-card"},Y={class:"skil-name"},B={class:"skill-term"},$={class:"skill-content"};function tt(t,n,e,o,i,a){return(0,r.wg)(),(0,r.iD)("div",X,[(0,r._)("h3",Y,(0,A.zw)(e.name),1),(0,r._)("p",B," 使用歴："+(0,A.zw)(e.term),1),(0,r._)("p",$,(0,A.zw)(e.content),1)])}var nt={name:"SkillCard",props:{name:{type:String,required:!0},term:{type:String,required:!0},content:{type:String,required:!0}}};const et=(0,k.Z)(nt,[["render",tt]]);var ot=et,rt={name:"Skills",components:{SubTitle:I,SkillCard:ot},data:function(){return{skills:[{name:"Go",term:"1年半(実務3ヶ月)",content:"個人でもインターンでもバックエンド開発で使用しています．                    使えば使うほど良さに気づける好きな言語です．"},{name:"C/C++",term:"2年半",content:"C言語は最初に触れた言語です．                    C++はロボットのプログラミングに使用していました．"},{name:"Ruby",term:"1年",content:"サーバーサイドや競技プログラミングに使用しています．                    便利なメソッドやライブラリが豊富なところが好きですが，それらに頼らず自分で処理を書きたいと思うようになったきっかけもこの言語です．"},{name:"JavaScript",term:"1年",content:"Web開発で必要になった際に適宜使っている程度で，簡単なものしか記述したことがなく得意というわけではありません．                    調べながらであれば大体の処理は書けそうな気がします．"},{name:"HTML/CSS",term:"1年",content:"Webアプリのフロントエンドで使用しています．                    インターンの帳票開発でも使った経験があります．                    あまり見た目にこだわらないタイプ（無駄なアニメーションは不要派）なので，個人開発では最低限のデザインで済ませがちです．"},{name:"NestJS",term:"実務3ヶ月",content:"インターンで新規開発プロジェクトに参加して使用することとなったフレームワークです．                    Goによるサーバーサイドのコード構成と比べて複雑で最初は手こずりましたが，機能追加であれば対応できると思います．"},{name:"Vue.js",term:"1年弱(実務2,3週間)",content:"新しめなフロントエンド技術習得の第1歩に選びました．                    このポートフォリオに使用しています．                    インターンでも何度か触り，Vuexの使い方を知りました．"},{name:"React",term:"実務2週間",content:"インターンで機能追加のタスクに取り組んだ際に触った経験があるレベルです．"},{name:"Ruby on Rails",term:"1年",content:"かつてWebアプリ作成で主に使用していたフレームワークです．                    Webの勉強をするにつれて，なんでもござれなRailsは基礎を学ぶのに不向きだと思うようになり，現在は使っていません．"},{name:"Sinatra",term:"2ヶ月",content:"サーバーサイドのコードを極力自分で書きたいという気持ちが高まって，その頃はRubyをメイン言語にしていたので触ってみました．                    DockerやMySQLを使って簡単なAPIサーバを立てるくらいはできます．"},{name:"MySQL",term:"半年(実務半年弱)",content:"Sinatraを使い始めたのを機に自力でSQLを書くようになりました．                    DBの扱いはまだ不慣れですが，SQL自体は好きな方だと思います．                    インターンでも深く触れない程度に触っています．"},{name:"Docker",term:"1年弱(実務半年)",content:"開発環境はDockerで作るようにしています．                    コンテナの立ち上げ・破棄が手軽にでき，ローカル環境が汚れないので気に入っています．                    ネットワーク周りの理解は怪しいです．"},{name:"Git/GitHub, Bitbucket",term:"2年半(実務半年)",content:"個人開発でも実務のチーム開発でも，プロジェクトのソース管理に使用しています．                    リファレンスを見ながらであれば，チーム開発に必要な基本操作は可能です．                    GitHub Actionsで開発フローを自動化するのが好きです．"},{name:"GCP",term:"1年",content:"もともと自作アプリのホスティング先として，無料枠の豊富なGCPのApp EngineやCloud Runを利用していました．                    2020年8月にUdemyの講座で主要なサービスをざっと勉強しました．                    Cloud DNS+GAEを使ったブログ，Cloud Scheduler+Cloud Run+Cloud SQLを使った仮想通貨取引botなどの個人開発経験があります．"}]}}};const it=(0,k.Z)(rt,[["render",Q]]);var at=it,ut=(e(9254),{class:"works-flex-container"});function lt(t,n,e,o,i,a){var u=(0,r.up)("SubTitle"),l=(0,r.up)("WorkCard");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(u,{name:"Works"}),(0,r._)("div",ut,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.works,(function(t){return(0,r.wg)(),(0,r.j4)(l,{key:t.name,name:t.name,timing:t.timing,content:t.content,tech:t.tech,link:t.link},null,8,["name","timing","content","tech","link"])})),128))])])}var ct={class:"work-card"},st={class:"work-name"},mt={class:"work-timing"},pt={class:"work-content"},kt={class:"work-tech"},ft=["href"];function dt(t,n,e,o,i,a){var u=(0,r.up)("font-awesome-icon");return(0,r.wg)(),(0,r.iD)("div",ct,[(0,r._)("h3",st,(0,A.zw)(e.name),1),(0,r._)("p",mt,(0,A.zw)(e.timing),1),(0,r._)("p",pt,(0,A.zw)(e.content),1),(0,r._)("p",kt,(0,A.zw)(e.tech),1),e.link?((0,r.wg)(),(0,r.iD)("a",{key:0,href:e.link,target:"_blank"},[(0,r.Wm)(u,{class:"work-link-icon",icon:i.workLinkIcon},null,8,["icon"])],8,ft)):(0,r.kq)("",!0)])}var gt={name:"WorkCard",props:{name:{type:String,required:!0},timing:{type:String,required:!0},content:{type:String,required:!0},tech:{type:String,required:!0},link:{type:String,required:!1,default:""}},data:function(){return{workLinkIcon:U.Xjp}}};const ht=(0,k.Z)(gt,[["render",dt]]);var vt=ht,bt={name:"Works",components:{SubTitle:I,WorkCard:vt},data:function(){return{works:[{name:"仮想通貨取引bot",timing:"2021.04-2021.09",content:"仮想通貨を自動取引するbotを開発しました．                    お金を扱うため，デプロイ・テスト・本番DBのマイグレーションを自動化するなど，属人的なミスを排除することにこだわりました．                    さらにテストしやすいコードにするために，レイヤードアーキテクチャを導入しています．",tech:"Go, Vue.js, MySQL, Docker, GCP",link:"https://dashboard-qboqrrfuaq-an.a.run.app"},{name:"オータムハッカソン@DeNA",timing:"2021.09",content:"コロナ禍で孤独な時間が増え寂しい思いをしている人に向けた，誕生日を祝ってもらうサービスを4人チームで開発しました．                    チームとしては「リアルに匹敵するほどの強い思い出を残す」を軸に，UI/UXにこだわったり，OGP画像でお祝いを演出したりと工夫しました．                    2日間のハッカソンで，サーバーサイド（Go）とEC2へのデプロイなどを担当しました．",tech:"Go, Docker(, Next.js)",link:"https://github.com/ryoSSS/2021_DeNA_hackathon"},{name:"インターン@株式会社AIoT",timing:"2020.11-2021.09",content:"主に企業の業務用システムを一次請けで開発している，正社員・インターン合わせて20人弱の滋賀県にある会社です．                    言語やフレームワークの垣根なく，バックエンドもフロントエンドも経験させてもらいました．．                    役割としては，月40〜50時間ほど，機能追加やエラー対応のタスクに取り組みました．",tech:"Go, NestJS, etc."},{name:"ブログ",timing:"2020.08",content:"Markdownで書いた記事からHugoで静的サイトを生成し，GoogleAppEngineでホスティングしている技術ブログです．                    GitHubにpushするとMarkdownのLintからGAEへのデプロイまで自動でやってくれるワークフローを作り，運用を楽にしました．",tech:"Hugo, Docker, GAE",link:"https://blog.fukkatsuso.com"},{name:"数独ソルバー",timing:"2020.07",content:"数独パズルをテーブルに入力すると解いてくれるアプリです．                    大抵の問題は1,2秒以内に解いてくれると思います．                    数独の画像から数字を読み取ってテーブルに書き起こしてくれる機能もついています（精度は保証できません）．",tech:"Go, Vue.js, Docker",link:"https://sudoku-solver-3fhwuagqeq-an.a.run.app"},{name:"飲食店検索LINEbot",timing:"2020.03",content:"位置情報から周辺の飲食店を検索できるLINEbotです．                    遠征先での食事処選びにいつも困っていたので，即決できるようなアプリ等が欲しいと思い作りました．                    元々Sinatra + ホットペッパーAPI + Herokuで作っていたものを，Go + GooglePlacesAPI + CloudRunに置き換えています．",tech:"Go, Docker, CloudRun",link:"https://line.me/R/ti/p/%40438ryinm"},{name:"portfolio",timing:"2019.09",content:"このポートフォリオサイトです．                    Vue.jsでSPAとして作成しています．                    マテリアルデザインを意識して仕上げました．                    個性がなさすぎるので面白いポイントを1つ作れないかと画策中です．",tech:"HTML, CSS, Vue.js, Docker",link:"https://github.com/Fukkatsuso/portfolio"},{name:"stoch",timing:"2019.08",content:"GA technologiesさんのハッカソンイベントで3人+メンター1人で制作したWebアプリです．                    商品名で在庫のある近くの店が検索でき，欲しい商品に最短距離でたどり着けるというものです．                    発案やルーティングやフロントエンド(一部)を担当しました．",tech:"Rails"},{name:"数独アプリ",timing:"2019.06",content:"好きな数独をテーマに，Railsアプリ制作の練習で作りました．                    数独パズルの選択・解答・答え合わせのみ実装済です．                    現在開発はストップしていますが，その後数独問題生成&ソルバーを作り，さらに「数独ソルバー」アプリを作るきっかけになりました．",tech:"Rails",link:"https://sudoku-rails-app.herokuapp.com"},{name:"4足歩行ロボット制御",timing:"2018.09-2019.04",content:"NHK学生ロボコン2019に向け制作した4足歩行ロボットで，歩行プログラムを担当しました．                    春休み中悩み抜いたのが記憶に色濃く残っています．                    これに比べるとWeb関連の制作物の苦労度合いが低すぎるのでアピールに困っています．",tech:"C++, 気合",link:"https://drive.google.com/open?id=1yeCTWXlxsmA1EgzNQnJ2zXAiVHBXivDq"},{name:"競技プログラミング",timing:"2017.04-",content:"AtCoderというサイトで開かれているコンテストに参加しています．                    現在のレート帯は緑です．                    学生のうちに水色になりたいです．                    第3回PAST(Practical Algorithm Skill Test)の成績は中級(64点)でした．",tech:"C/C++ -> Ruby -> Go",link:"https://atcoder.jp/users/mutsuro_626"}]}}};const wt=(0,k.Z)(bt,[["render",lt]]);var St=wt,_t={class:"contact"},yt=(0,r._)("td",null,"mutsuro314@gmail.com",-1);function Ct(t,n,e,o,i,a){var u=(0,r.up)("SubTitle"),l=(0,r.up)("font-awesome-icon");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(u,{name:"Contact"}),(0,r._)("div",_t,[(0,r._)("table",null,[(0,r._)("tr",null,[(0,r._)("th",null,[(0,r.Wm)(l,{icon:i.emailIcon},null,8,["icon"])]),yt])])])])}var Dt=e(6024),Wt={name:"Contact",components:{SubTitle:I},data:function(){return{emailIcon:Dt.FU$}}};const At=(0,k.Z)(Wt,[["render",Ct]]);var Gt=At,Tt=(0,C.p7)({history:(0,C.PO)("/portfolio/"),routes:[{path:"/",name:"top",component:H},{path:"/about",name:"about",component:K},{path:"/skills",name:"skills",component:at},{path:"/works",name:"works",component:St},{path:"/contact",name:"contact",component:Gt}]}),Nt=Tt,jt=e(7130),It=(0,o.ri)(y);It.component("font-awesome-icon",jt.GN),It.use(Nt),It.mount("#app")}},n={};function e(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return t[o](i,i.exports,e),i.exports}e.m=t,function(){var t=[];e.O=function(n,o,r,i){if(!o){var a=1/0;for(s=0;s<t.length;s++){o=t[s][0],r=t[s][1],i=t[s][2];for(var u=!0,l=0;l<o.length;l++)(!1&i||a>=i)&&Object.keys(e.O).every((function(t){return e.O[t](o[l])}))?o.splice(l--,1):(u=!1,i<a&&(a=i));if(u){t.splice(s--,1);var c=r();void 0!==c&&(n=c)}}return n}i=i||0;for(var s=t.length;s>0&&t[s-1][2]>i;s--)t[s]=t[s-1];t[s]=[o,r,i]}}(),function(){e.d=function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,o){var r,i,a=o[0],u=o[1],l=o[2],c=0;if(a.some((function(n){return 0!==t[n]}))){for(r in u)e.o(u,r)&&(e.m[r]=u[r]);if(l)var s=l(e)}for(n&&n(o);c<a.length;c++)i=a[c],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(s)},o=self["webpackChunkmutsuro_portfolio"]=self["webpackChunkmutsuro_portfolio"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(361)}));o=e.O(o)})();
//# sourceMappingURL=app-legacy.18c1b089.js.map