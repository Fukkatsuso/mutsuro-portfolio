<template>
  <div>
    <SubTitle name="About me" />
    <div>
      <div class="profile-table">
        <table>
          <tr
            v-for="item in profile"
            :key="item.title"
          >
            <th>{{ item.title }}</th>
            <td>{{ item.content }}</td>
          </tr>
        </table>
      </div>
      <div class="profile-link">
        <a
          href="https://github.com/Fukkatsuso"
          target="_blank"
        ><font-awesome-icon
          class="github-icon hover-icon"
          :icon="githubIcon"
        /></a>
        <a
          href="https://blog.fukkatsuso.com"
          target="_blank"
        ><font-awesome-icon
          class="blog-icon hover-icon"
          :icon="blogIcon"
        /></a>
      </div>
    </div>

    <SubTitle name="Activity" />
    <div class="profile-activity">
      <h3>DeNAに新卒入社</h3>
      <ul>
        <li>IT基盤部でインフラエンジニアとして勤務</li>
        <li>blog: <a href="https://engineering.dena.com/blog/2024/11/terraform-s3-management/" target="_blank">Terraform を活用した効率的な S3 バケット管理手法</a></li>
      </ul>

      <h3>九州大学 システム情報科学府 情報理工学専攻 修了</h3>
      <ul>
        <li>AIと倫理について研究</li>
      </ul>

      <h3>インターン@株式会社AIoT</h3>
      <ul>
        <li>バックエンドを主に担当(Go, NestJS)</li>
        <li>時々フロントも(Vue.js, React)</li>
      </ul>
      
      <h3>競技プログラミングのコンテスト</h3>
      <ul>
        <li>AtCoderのレート: 1100付近(緑色)</li>
      </ul>

      <h3>ロボコンサークルで大会に出場</h3>
      <ul>
        <li>NHK学生ロボコン2018ベスト4+アイデア賞</li>
        <li>NHK学生ロボコン2019ベスト4+デザイン賞</li>
        <li>キャチロボバトルコンテスト2019ベスト8+審査員特別賞</li>
      </ul>
    </div>

    <SubTitle name="Future" />
    <div class="profile-future">
      <p>使う人のことを思いやって開発できるエンジニアになりたい</p>
      <p>サーバーサイドを中心に技術力を上げ、ゆくゆくはフルスタックを目指していきたい</p>
      <p>個人でもチームでも多くのアプリやサービスを開発したい</p>
    </div>
  </div>
</template>

<script>
import SubTitle from '@/components/SubTitle.vue'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBlog } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'About',
  components: {
    SubTitle,
  },
  data () {
    return {
      profile: [
        {
          title: 'Name',
          content: '無津呂 樹 (Mutsuro Tatsuki)',
        },
        {
          title: 'Age',
          content: this.age(1999, 3, 14),
        },
        {
          title: 'From',
          content: '福岡県',
        },
        {
          title: 'Company',
          content: 'DeNA',
        },
        {
          title: 'Language',
          content: 'Go, Japanese',
        },
        {
          title: 'Editor',
          content: 'VSCode',
        },
        {
          title: 'Favorite',
          content: 'ポケモン, 平沢進, factorio',
        },
      ],
      githubIcon: faGithub,
      blogIcon: faBlog,
    }
  },
  methods: {
    age: function(year, month, day) {
      var now = new Date
      let res = ((now.getFullYear()-year)*10000 + (now.getMonth()+1-month)*100 + (now.getDate()-day)) / 10000
      return Math.floor(res)
    },
  },
}
</script>

<style lang="scss">
.profile-card {
  width: 80%;
  max-width: 450px;
  margin-right: auto;
  margin-left: auto;
  padding: 1em 1.5em;
  background-color: #ffffff;
  border-radius: 2px;
  box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.1);
}

.profile-table {
  @extend .profile-card;
  margin-bottom: 1em;
  text-align: left;
  table {
    width: 100%;
    margin: 0;
    padding: 0;
    tr {
      height: 2.5em;
      th {
        width: 25%;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.5);
      }
      td {
        font-size: 1em;
        width: 75%;
      }
    }
  }
}

.profile-link {
  $sub-color: #4dd0e1;
  text-align: center;
  font-size: 2.8em;
  a {
    margin: 0.2em;
  }
  .github-icon {
    border-radius: 50%;
  }
  .blog-icon {
    border-radius: 20%;
  }
  .hover-icon {
    color: $sub-color;
    background-color: #ffffff;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2);
  }
  .hover-icon:hover {
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);    
  }
}

.profile-activity {
  @extend .profile-card;
  text-align: left;
  ul {
    list-style: none;
  }
}

.profile-future {
  @extend .profile-card;
  text-align: left;
}
</style>