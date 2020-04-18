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
                <div class="date">{{data.createTime | date('yyyy-MM-dd')}}</div>
              </div>
              <div class="data">
                <div class="text color-1"
                     v-html="data.articlesContent">
                  {{data.articlesContent}}
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
.articles-content {
  padding-left: 192px;
  .title {
    margin-bottom: 40px;
    margin-top: 30px;
    padding: 10px 0px;
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
                id: '',
                title: '',
                articlesContent: '',
                createTime: ''
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
            this.data.title = this.$router.currentRoute.query.title
            this.data.createTime = this.$router.currentRoute.query.createTime
            articles.detail(this.$router.currentRoute.params.id).then((result) => {
                this.data.id = result.data.id
                this.data.articlesContent = result.data.articlesContent
            })
        }
    }
}
</script>
