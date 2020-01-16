<template>
  <div>
    <!-- 轮播图 -->
    <el-carousel height="700px" class="carousel">
      <el-carousel-item v-for="(item, index) in banners" :key="index">
        <!-- 动态绑定-   图片路径为nuxt.config.js中的axios     no-repeat清除图片外边距-->
        <!-- <div class="banner" :style="`background:url(${item}) center center no-repeat;`"></div> -->
        <!-- 动态渲染图片拿到后台数据 -->
        <div
          class="banner"
          :style="`
             background:url(${$axios.defaults.baseURL}${item.url}) center center no-repeat;           
             `"
        ></div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banners: [
        // 静态--图片
        // 动态-轮播图数据
        // "http://157.122.54.189:9095/assets/images/th01.jfif",
        // "http://157.122.54.189:9095/assets/images/th02.jfif"
      ]
    };
  },
  mounted() {
    // $axios是挂载个实例下的axios方法
    this.$axios({
      url: "/scenics/banners"
    }).then(res => {
      const { data } = res.data;
      // 服务器的轮播图数据
      this.banners = data;
    });
  }
};
</script>

<style scoped lang="less">
.carousel {
  min-width: 1000px;
}
.banner {
  height: 700px;
}
</style>