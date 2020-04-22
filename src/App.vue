<template>
  <div>
    <top-container />
    <!-- <banner-container />
    <nav-container /> -->
    <router-view />
    <foot-container />
  </div>
</template>

<script>
import topContainer from '@/components/common/TopContainer'
// import bannerContainer from '@/components/common/BannerContainer'
// import navContainer from '@/components/common/NavContainer'
import footContainer from '@/components/common/FootContainer'
export default {
    name: 'App',
    components: {
        topContainer,
        // bannerContainer,
        // navContainer,
        footContainer
    }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  color: #000;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
a {
  text-decoration: none;
}
.wp {
  margin: 0 auto;
  width: 1163px;
  height: 100%;
}
li {
  list-style: none;
}
.clearfixs{
  overflow:hidden
}
.el-button--primary span{
    color: #FFF;
}
</style>
