<template>
  <div>
   我是消息
  </div>
</template>

<script>

export default {
 created () {
     this.$store.commit('UPDATE_TITLE', "消息");
  }
}
</script>