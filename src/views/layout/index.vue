<template>
  <div>
    <!-- top -->
    <van-nav-bar :title="$route.meta.title" fixed />
    <!-- body -->
    <div class="main">
      <router-view />
    </div>
    <!-- bottom -->
    <van-tabbar route v-model="active">
      <van-tabbar-item name="home" replace to="/layout/home" icon="home-o">首頁</van-tabbar-item>
      <van-tabbar-item name="search" replace to="/layout/search" icon="search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "home",
    };
  },
};
</script>

<style scoped>
.main {
  padding-top: 46px;
  padding-bottom: 50px;
}
</style>