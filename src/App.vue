<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";


onLaunch(() => {
  console.log("App Launch");

});
onShow(() => {
  console.log("App Show");
  // #ifdef MP-WEIXIN
  checkUpdate()
  // #endif
});
const checkUpdate = () => {
  const updateManager = uni.getUpdateManager();

  updateManager.onCheckForUpdate(function (res) {
    console.log(res.hasUpdate);
  });

  updateManager.onUpdateReady(function (res) {
    uni.showModal({
      title: '更新提示',
      content: '新版本已经准备好，是否重启应用？',
      success(res) {
        if (res.confirm) {
          // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
          updateManager.applyUpdate();
        }
      }
    });

  });

  updateManager.onUpdateFailed(function (res) {
    // 新的版本下载失败
  });

}
onHide(() => {
  console.log("App Hide");
});
</script>
<style lang="scss">
/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
@import "uview-plus/index.scss";

// page {
//   button {
//     background-color: transparent;
//     outline: none;
//   }
// }</style>
