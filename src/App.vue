<template>
  <div>
    <top-container></top-container>
    <banner-container></banner-container>
    <router-view></router-view>
  </div>
</template>

<script>
import topContainer from '@/components/common/TopContainer'
import bannerContainer from '@/components/common/BannerContainer'
export default {
  name: 'App',
  components: {
    topContainer,
    bannerContainer
  }
}
</script>

<style>
* {
  margin: 0;
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
</style>
