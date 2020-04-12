<template>
  <div class="top-nav">
    <div class="wp header">
      <div class="logo fl">
        <img
          :src="logo"
          width="88px"
          height="27px"
        >
      </div>
      <ul class="guide fr">
        <li class="guide-item"><a href="#">
          <span
            class="icon"
            :style="{backgroundImage:`url(${userCenter})`}"
          /></a></li>
        <li class="guide-item"><a href="#">
          <span
            class="icon"
            :style="{backgroundImage:`url(${message})`}"
          /></a></li>
        <li class="guide-item"><a href="#">
          <span
            class="icon"
            :style="{backgroundImage:`url(${history})`}"
          /></a></li>
        <li class="guide-item"><a href="#">
          <span
            class="icon"
            :style="{backgroundImage:`url(${iconUpload})`}"
          /></a></li>
        <li class="guide-item">
          <a href="#">
            <span
              class="icon"
              :style="{backgroundImage:`url(${iconCollections})`}"
            />
          </a>
        </li>
      </ul>
      <div class="search fr">
        <input
          id="search-text"
          type="text"
          placeholder="寻国风 歌舞投稿大赛"
          data-url="https://www.acfun.cn/spn/lookingforGF"
          value=""
          autocomplete="off"
        >
        <button
          id="search-btn"
          class="search-btn"
        >
          <i
            class="icon"
            :style="{backgroundImage:`url(${search})`}"
          /></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            logo: require('assets/top/logo.jpg'),
            iconCollections: require('assets/top/collection.png'),
            iconUpload: require('assets/top/upload.png'),
            history: require('assets/top/history.png'),
            message: require('assets/top/message.png'),
            userCenter: require('assets/top/userCenter.png'),
            search: require('assets/top/search.png')
        }
    }
}
</script>

<style lang="scss">
.top-nav {
  width: 100%;
  height: 46px;
  .header {
    margin-top: 12px;
    .logo {
      width: 88px;
      height: 100%;
      margin: 0;
      line-height: 50%;
    }
    .search {
      input {
        border: 1px solid #e5e5e5;
        border-right: none;
        padding: 8px 10px;
        height: 32px;
        line-height: 14px;
        border-radius: 3px 0 0 3px;
        width: 316px;
        vertical-align: top;
        color: #999;
        box-sizing: border-box;
        width: 316px;
        height: 32px;
      }
      .search-btn {
        border: none;
        width: 46px;
        height: 32px;
        line-height: 32px;
        font-size: 14px;
        vertical-align: top;
        background: #fd4c5d;
        color: #fff;
        border-radius: 0 3px 3px 0;
        padding: 0;
        cursor: pointer;
        position: relative;
        font-family: iconfont;
        .icon {
          margin: auto;
          display: block;
          width: 25px;
          height: 25px;
          background-size: 100% 100%;
        }
      }
    }
    .guide {
      flex: 3 1 200px;
      li {
        float: left;
        margin: 5px 10px 0 10px;
      }
      .icon {
        display: block;
        width: 25px;
        height: 25px;
        background-size: 100% 100%;
      }
    }
  }
}
</style>
