<template>
  <div>
    <div class="title">推荐歌单</div>

    <!-- 中间部分一 -->
    <van-row gutter="15">
      <van-col span="8" v-for="item in musicList" :key="item.id">
        <van-image width="120" :src="item.picUrl" fit="cover" />
        <div class="song_name">{{ item.name }}</div>
      </van-col>
    </van-row>

    <!-- 中间部分二 -->
    <div class="title">最新音乐</div>
    
    <music-item 
    v-for="item in songList" :key="item.id"
    :title="item.name"
    :label="item.song.artists[0].name + ' - ' + item.name "
    :id="item.id"
    />

  

  </div>
</template>

<script>
import { recomSongAPI, latestSongAPI } from "@/api/index.js";

export default {
  data() {
    return {
      musicList: [],
      songList: [],
    };
  },

  created() {
    recomSongAPI({
      limit: 6,
    }).then((res) => {
      this.musicList = res.data.result;
    });

    latestSongAPI( {
      limit: 20
    })
    .then(res => {
      this.songList = res.data.result
    })
  },
};
</script>

<style>
/* 标题 */
.title {
  padding: 10px 15px;
  margin: 0 0 15px 0;
  background-color: #eee;
  color: #333;
  font-size: 15px;
} 
/* 推荐歌单 - 歌名 */
.song_name {
  text-align: center;
  font-size: 16px;
  padding: 0 5px;
  margin-bottom: 10px;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
  -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
  -webkit-line-clamp: 2; /** 显示的行数 **/
  overflow: hidden; /** 隐藏超出的内容 **/
}
</style>