<template>
 <div style="height:100%;">
   <view-box ref="viewBox"  body-padding-top="46px" body-padding-bottom="55px">
    <topBar  slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;"></topBar>
    <router-view></router-view>
    <navBar  slot="bottom"></navBar>
   </view-box>
 </div>

<!--  <div style="height:100%;">
 <view-box ref="viewBox">
   <topBar></topBar>
    <router-view></router-view>
    <navBar></navBar>
  </view-box>
<topBar></topBar>
 <router-view></router-view>
<navBar></navBar>
</div> -->
</template>

<script>
import { ViewBox } from 'vux'
import navBar from './components/NavBar'
import topBar from './components/TopBar'


export default {
  components: {
   ViewBox,
   navBar,
   topBar
  }
}
</script>
<style>
  html, body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }


</style>