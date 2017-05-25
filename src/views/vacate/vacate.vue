<template>
  <div>
   我是请假列表
  </div>
</template>

<script>

export default {
 created () {
     this.$store.commit('UPDATE_TITLE', "请假列表");
  }
}
</script>