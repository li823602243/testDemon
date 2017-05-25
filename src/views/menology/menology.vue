<template>
 <div>{{$store.state.headerTitle}}</div>
</template>

<script>
export default {
data () {
return {

}
},
 created () {
     this.$store.commit('UPDATE_TITLE', "工作日历");
  }
}
</script>
