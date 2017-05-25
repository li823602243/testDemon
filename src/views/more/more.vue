<template>
  <div>
  我是更多。。。。。
  </div>
</template>

<script>

export default {
 created () {
     this.$store.commit('UPDATE_TITLE', "更多");
  }
}
</script>