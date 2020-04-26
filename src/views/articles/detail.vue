<template>
  <div>
    <el-row type="flex">
      <el-col :span="4"></el-col>
      <el-col :span="16">
        <div class="articles-content">
          <el-row type="flex">
            <el-col :span="17">
              <div class="title">
                <div class="title-head">
                  {{data.title}}
                </div>
                <div class="date">
                  <div class="fl">{{data.date}}</div>
                  <div class="fr">
                  <div class="total-pageviews fl" style="padding-right:10px;">总浏览量：{{data.totalPageviews}}</div>
                  <div class="total-like fl" style="padding-right:10px;">总点赞量：{{data.totalLiked}}</div>
                  <div class="total-coin fl" style="padding-right:10px;">总投币量：{{data.totalCoin}}</div>
                </div>
                  </div>
              </div>
              <div class="data">
                <div class="text color-1"
                     v-html="data.articlesContent">
                  {{data.articlesContent}}
                </div>
              </div>
              <div style="margin-bottom:20px">
                喜欢的话就点赞投币打赏一下吧~~
              </div>
              <div>
                <div class="fl" style="margin-right:20px;">
                  <div>
                    <el-button type="success" icon="el-icon-thumb" circle></el-button>
                  </div>
                  <div style="text-align:center">点赞</div>
                </div>
                <div class="fl">
                  <div>
                    <el-button type="primary" icon="el-icon-coin" circle></el-button>
                  </div>
                  <div style="text-align:center">投币</div>
                </div>
              </div>
            </el-col>
            <el-col :span="7">
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="4"></el-col>
    </el-row>
  </div>
</template>

<style lang="scss">
.el-icon-thumb{
  color:#fff !important;
}
.el-icon-coin{
  color:#fff !important;
}
.articles-content {
  padding-left: 192px;
  .title {
    margin-bottom: 40px;
    margin-top: 20px;
    padding: 30px 0px;
    border-bottom: 1px solid #d8d9dc;
    .title-head {
      font-size: 44px;
      line-height: 66px;
      padding-bottom: 7px;
    }
    .date {
      line-height: 25px;
      color: #919797;
    }
  }
  .data {
    margin-bottom: 80px;
    .text {
      line-height: 25px;
    }
    .color-1 {
      color: #5f6464;
    }
  }
}
</style>

<script>
import * as articles from '@/api/articles'
export default {
    data () {
        return {
            data: {
            }
        }
    },
    components: {
    },
    created () {
        this.init()
    },
    methods: {
        init () {
            articles.detail(this.$router.currentRoute.query.id).then((result) => {
                this.data = result.data
            })
        }
    }
}
</script>
