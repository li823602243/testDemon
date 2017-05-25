<template>
  <div style="">
    <blur :blur-amount=40 :url="url">
      <p class="center"><img :src="url"></p>
    </blur>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem, Blur } from 'vux'

export default {
 created () {
     this.$store.commit('UPDATE_TITLE', "我的");
  },
  components: {
    Blur,
    Flexbox,
    FlexboxItem
  },

  data () {
    return {
      url: 'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg'
    }
  }
}
</script>

<style scoped>
.center {
  text-align: center;
  padding-top: 20px;
  color: #fff;
  font-size: 18px;
}
.center img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid #ececec;
}
</style>