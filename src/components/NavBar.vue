<template>
    <tabbar class="foot">
      <tabbar-item selected link="/main">
        <img slot="icon" src="../assets/images/navBar/main.png">
        <img slot="icon-active" src="../assets/images/navBar/mainActive.png">
        <span slot="label">应用</span>
      </tabbar-item>
      <tabbar-item show-dot link="/messages">
        <img slot="icon" src="../assets/images/navBar/message.png">
        <img slot="icon-active" src="../assets/images/navBar/messageActive.png">
        <span slot="label">消息</span>
      </tabbar-item>
      <tabbar-item  link="/telphone">
       <img slot="icon" src="../assets/images/navBar/tel.png">
       <img slot="icon-active" src="../assets/images/navBar/telActive.png">
        <span slot="label">通讯录</span>
      </tabbar-item >
      <tabbar-item badge="2" link="/mine">
        <img slot="icon" src="../assets/images/navBar/mine.png">
        <img slot="icon-active" src="../assets/images/navBar/mineActive.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'

export default {
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>
<style>
  .foot{
    position: fixed!important;
  }
</style>