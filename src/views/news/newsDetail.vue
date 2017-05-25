<template>
  <div>
  我是新闻详情
  </div>
</template>

<script>

export default {
 created () {
     this.$store.commit('UPDATE_TITLE', "新闻详情");
  }
}
</script>