<template>
  <div class="title-wrap">
    <span class="title"><img
      src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png"
      alt=""></span>
    <span class="search">
      <input type="text">
    </span>
    <a href="javascript:;" class="login">登录</a>
 

  </div>
</template>

<script>
  export default {
    name: "header-top"
  }
</script>

<style scoped lang="stylus">
  .title-wrap
    position fixed
    z-index 100
    left 0
    top 0
    padding 10px
    width 100%
    height 50px
    display flex
    flex-wrap nowrap
    .title

      zoom 1
      img
        height 40px
        width 100px
    .search
      display inline-block
      height 40px
      width 100px
    .login
      display inline-block
      height 50px
      width 25px

  /*justify-content:center*/


</style>
