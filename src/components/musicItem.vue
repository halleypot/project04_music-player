<template>
  <div>
    <template name="musicItem">
      <van-cell-group >
        <van-cell
          center
          :title="title"
          :label="label"
        >
          <!-- 使用 right-icon 插槽来自定义右侧图标 -->
          <template #right-icon>
            <van-icon @click="$router.push({name:'player', query: {id} })" size="25" name="play-circle-o" />
          </template>
        </van-cell>
      </van-cell-group>
    </template>
  </div>
</template>

<script>
export default {
  props: ["title", "label", "id"],

};
    
</script>

<style>
</style>