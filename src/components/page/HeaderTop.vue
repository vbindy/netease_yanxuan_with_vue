<template>
  <div class="title-wrap">
    <span class="title">
      </span>
    <span class="search">
      <i class="iconfont icon-sousuo"></i>
      <i class="search-kuang">搜索商品, 共19899款好物</i>

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
    background-color white
    position fixed
    z-index 100
    left 0
    top 0
    margin 0
    padding 10px 10px 5px 10px
    width 100%
    height 30px


    display flex
    flex-wrap nowrap
    .title

      background-image url("https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png")
      background-repeat no-repeat
      background-size 100% 100%
      height 21px
      width 65px


    .search
      display inline-block
      flex 1
      margin 0 10px
      height 25px
      width auto
      border-radius 5px
      background-color  rgba(227,175,176,0.2)

      .iconfont
        float left
        margin 4px 0 0 13px
        font-size 18px
        color grey
        font-weight bold
        font-style block

      .search-kuang
        float left
        color grey
        font-size 15px
        font-style normal
        margin 5px 0 0 7px
    .login
      margin-right 20px
      border 1px red solid
      border-radius 5px
      color red
      padding 2px
      display inline-block
      height 16px
      width 35px
      line-height 16px
      text-align  center
      font-size 13px


  /*justify-content:center*/


</style>
