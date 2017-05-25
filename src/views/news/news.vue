<template>
  <div>
  我是新闻
  </div>
</template>

<script>

export default {
 created () {
     this.$store.commit('UPDATE_TITLE', "新闻");
  }
}
</script>