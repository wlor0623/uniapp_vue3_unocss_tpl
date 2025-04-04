<template>
  <view class="">
    
  </view>
</template>

<script setup>
import { onShareAppMessage, onShareTimeline, onLoad } from '@dcloudio/uni-app';
import { reactive, ref, computed, nextTick } from 'vue'


onShareTimeline(() => {
  return {
    title: '分享到朋友圈内容',
    path: '/pages/index/index', // 分享的路径
  };
})
onShareAppMessage(() => {
  return {
    title: '分享给好友内容',
    path: '/pages/index/index', // 分享的路径
  };
});

</script>

<style></style>
