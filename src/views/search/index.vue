<template>
  <div>
    <van-search
      @input="searchSong"
      v-model="key"
      placeholder="请输入搜索关键词"
    />
    <!-- 热门歌曲建议 -->
    <div v-if="!key" class="search_wrap">
      <p class="hot_title">热门搜索</p>

      <div class="hot_name_wrap">
        <span
          class="hot_item"
          v-for="(item, index) in hotSongList"
          :key="index"
          @click="searchSong(item.first)"
          >{{ item.first }}</span
        >
      </div>
    </div>

    <!-- 热门歌曲搜索结果 -->
    <div v-else class="search_wrap">
      <p class="hot_title">最佳匹配</p>

      <musicItem
        v-for="(item, index) in searchList.songs"
        :key="index"
        :title="item.name"
        :label="item.artists[0].name + '-' + item.name"
        :id="item.id"
      />
     
    </div>
  </div>
</template>

<script>
import { hotSongAPI, keywordsAPI } from "@/api";

export default {
  
  data() {
    return {
      key: "",
      hotSongList: [],
      searchList: [],
      timerId: null,
      
    };
  },

  methods: {
    searchSong(val) {
      clearTimeout(this.timerId);

      this.timerId = setTimeout(() => {
        if (val) this.key = val;

        keywordsAPI({
          keywords: this.key,
        }).then((res) => {
          this.searchList = res.data.result;
        });
      }, 500);
    },
  },

  created() {
    hotSongAPI.then((res) => {
      // console.log(res);
      this.hotSongList = res.data.result.hots;
    });
  },
};
</script>

<style>
/* 搜索容器的样式 */
.search_wrap {
  padding: 10px;
}

/*热门搜索文字标题样式 */
.hot_title {
  font-size: 16px;
  color: #666;
}

/* 热搜词_容器 */
.hot_name_wrap {
  margin: 10px 0;
}

/* 热搜词_样式 */
.hot_item {
  display: inline-block;
  height: 35px;
  margin-right: 10px;
  margin-bottom: 15px;
  padding: 10px 10px;
  font-size: 16px;
  line-height: 35px;
  color: #333;
  border-color: #d3d4da;
  border-radius: 20px;
  border: 1px solid #d3d4da;
}
</style>