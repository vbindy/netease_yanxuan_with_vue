<!--
<template>

</template>

<script>
    export default {
        name: "footer-nav"
    }
</script>

<style scoped>

</style>
-->


<template>
  <footer class="footer_guide border-1px">
    <div class="guide_item" @click="goto('/firstpage')" ><!--:class="{on: isCurrent('/firstpage')}"-->
      <span class="item_icon">
        <i class="iconfont icon-shouye"></i>
      </span>
      <span>首页</span>
    </div>
    <!--2-->
    <div class="guide_item" @click="goto('/classify')" ><!--:class="{on: isCurrent('/classify')}"-->
      <span class="item_icon">
        <i class="iconfont icon-shujia"></i>
      </span>
      <span>分类</span>
    </div>


    <div class="guide_item" @click="goto('/discernment')" ><!--:class="{on: isCurrent('/discernment')}"-->
      <span class="item_icon">
        <i class="iconfont icon-shitu"></i>
      </span>
      <span>识物</span>
    </div>


    <div class="guide_item" @click="goto('/shoppingcar')" ><!--:class="{on: isCurrent('/shoppingcar')}"-->
      <span class="item_icon">
        <i class="iconfont icon-gouwuche"></i>
      </span>
      <span>购物车</span>
    </div>
    <div class="guide_item" @click="goto('/profile')" ><!--:class="{on: isCurrent('/profile')}"-->
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>我的</span>
    </div>
  </footer>
</template>

<script>
  export default {
    methods: {
      goto(path) {
        this.$router.replace(path)
      },
      isCurrent(path) {
        // console.log(this.$route.path)
        return this.$route.path === path

      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide
    bottom-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flexf !important
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #02a774
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>
