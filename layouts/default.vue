<template>
  <div>
    <!-- 相当于 <router-view></router-view> -->
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
// 引入公共组件
import Header from "@/components/header";
import Footer from "@/components/footer";
export default {
  // 注册
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
   box-sizing: border-box
}
ul,
li,
ol {
  list-style: none;
}
a {
  text-decoration: none;
  color: inherit;
}
a:hover {
  color: inherit;
}
em,
i {
  font-size: normal;
}
</style>
