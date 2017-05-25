<template>
 <div>我是公告详情</div>
</template>

<script>
export default {
 created () {
     this.$store.commit('UPDATE_TITLE', "公告详情");
  }
}
</script>
