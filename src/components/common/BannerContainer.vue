<template>
  <div>
    <a
      href="#"
      :style="{backgroundImage:`url(${banner})`}"
      class="banner-pic"
    />
  </div>
</template>

<script>
export default {
    data () {
        return {
            banner: require('assets/top/banner.jpg')
        }
    }
}
</script>

<style lang="scss">
.banner-pic {
  display: block;
  width: 100%;
  height: 180px;
  background-size: auto 100%;
}
</style>
