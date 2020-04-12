<template>
  <div class="block">
    <el-carousel height="332px">
      <el-carousel-item
        v-for="item in data"
        :key="item"
      >
        <img :src="item">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
    props: [
        'data'
    ]
}
</script>
<style lang="scss">
.block{
  margin-top:20px;
}
.carousel {
  width: 1163px;
  height: 332px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
