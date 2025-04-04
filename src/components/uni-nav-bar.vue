<template>
  <view class="nav-bar" :style="{
    paddingTop: `${statusBarHeight}px`,
    height: `${statusBarHeight + navBarHeight}px`,
    backgroundColor: backgroundColor
  }">
    <view class="nav-bar-content" :style="{ height: `${navBarHeight}px` }">
      <slot name="left">
        <!-- 默认返回按钮 -->
        <view class="left-btn icon-btn">
        </view>
      </slot>

      <view class="title">
        <slot name="title">{{ title }}</slot>
      </view>

      <slot name="right">
        <view class="right-btn icon-btn">
        </view>
      </slot>

    </view>
  </view>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const statusBarHeight = ref(0)
const navBarHeight = ref(44);
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  leftText: {
    type: String,
    default: ''
  },
  rightText: {
    type: String,
    default: ''
  },
  leftIcon: {
    type: String,
    default: ''
  },
  rightIcon: {
    type: String,
    default: ''
  },
  backgroundColor: {
    type: String,
    default: ''
  },
  fixed: {
    type: [Boolean, String],
    default: false
  },
  color: {
    type: String,
    default: ''
  },
  statusBar: {
    type: [Boolean, String],
    default: false
  },
  shadow: {
    type: [Boolean, String],
    default: false
  }
})

onMounted(() => {
  // 获取系统信息
  // #ifdef MP-WEIXIN
  statusBarHeight.value = uni.getWindowInfo().statusBarHeight
  // #endif
  // #ifndef MP-WEIXIN
  statusBarHeight.value = uni.getSystemInfoSync().statusBarHeight
  // #endif

  // #ifdef MP-WEIXIN
  const menuButton = wx.getMenuButtonBoundingClientRect()
  navBarHeight.value = menuButton.height
  // #endif
})

const onBack = () => {
  uni.navigateBack({ delta: 1 })
}
</script>

<style scoped lang="scss">
.nav-bar {
  width: 100%;
  background-color: transparent;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

  .nav-bar-content {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 30rpx;
    justify-content: space-between;
    box-sizing: border-box;
    position: relative;
  }

  .icon-btn {


    width: 80rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 36rpx;


  }

  .title {
    flex: 1;
    text-align: center;
    font-size: 34rpx;
    color: white;
    font-weight: bold;
  }
}
</style>
