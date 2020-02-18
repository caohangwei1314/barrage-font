<template>
  <div>
    <top-container></top-container>
    <router-view></router-view>
  </div>
</template>

<script>
import topContainer from '@/components/common/TopContainer'

export default {
  name: 'App',
  components: {
    topContainer
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
