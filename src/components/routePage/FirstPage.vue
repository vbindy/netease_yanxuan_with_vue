<template>
  <div>
  <HeaderTop></HeaderTop>
    <div class="wrap">FirstPage.vue 首页</div>
  </div>
</template>

<script>
  import HeaderTop from "../page/HeaderTop"
    export default {
        name: "first-page",
      components:{
        HeaderTop
      }
    }
</script>

<style scoped lang="stylus">
  .wrap
    position absolute
    top 50px
    font-size 20px


</style>
