<template>
  <div>
   我是通信录
  </div>
</template>

<script>

export default {
 created () {
     this.$store.commit('UPDATE_TITLE', "通信录");
  }
}
</script>