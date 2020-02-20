<template>
  <div>
    <top-container></top-container>
    <banner-container></banner-container>
    <nav-container></nav-container>
    <router-view></router-view>
  </div>
</template>

<script>
import topContainer from '@/components/common/TopContainer'
import bannerContainer from '@/components/common/BannerContainer'
import navContainer from '@/components/common/NavContainer'
export default {
  name: 'App',
  components: {
    topContainer,
    bannerContainer,
    navContainer
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
</style>
