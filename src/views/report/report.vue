<template>
  <div>
   我是成绩单
  </div>
</template>

<script>

export default {
 created () {
     this.$store.commit('UPDATE_TITLE', "成绩单");
  }
}
</script>