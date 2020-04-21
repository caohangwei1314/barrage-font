<template>
  <div class="wp clearfixs">
    <div class="articles-line">
      <a :href="'/articles/detail?id=' + data.id"
          class="click">
        <div class="left">
          <a class="li">
            <img :src="GLOBAL.oss + data.image"
                  class="img" />
          </a>
        </div>
        <div class="content left">
          <h3>{{data.title}}</h3>
          <h4>{{data.updateTime | date('yyyy-MM-dd')}}</h4>
          <p>{{data.simpleDesc}}</p>
        </div>
      </a>
    </div>
  </div>
</template>

<style lang="scss">
.articles-line {
  margin: 0 0 32px 0;
  .click {
    width: 100%;
    height: 100%;
    display: block;
    cursor: pointer;
  }
  .left {
    float: left;
  }
  .content {
    width: 760px;
    height: 136px;
    padding-left: 32px;
    h3 {
      margin: 0;
      font-size: 20px;
      color: #2a2e2e;
      line-height: 30px;
    }
    h4 {
      margin: 0;
      font-size: 16px;
      color: #919797;
      line-height: 29px;
      padding-bottom: 9px;
    }
    p {
      margin: 0;
      line-height: 25px;
      color: #5f6464;
    }
  }
  .li {
    width: 204px;
    height: 136px;
    display: block;
    .img {
      width: 204px;
      height: 136px;
    }
  }
}
</style>

<script>
export default {
    props: ['data'],
    data () {
        return {
            items: {
            }
        }
    },
    methods: {

    }
}
</script>
