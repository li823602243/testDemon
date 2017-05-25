<template>
  <div>
   我是课程表
  </div>
</template>

<script>

export default {
 created () {
     this.$store.commit('UPDATE_TITLE', "课程表");
  }
}
</script>