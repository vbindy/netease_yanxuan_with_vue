<template>
  <div>
    <div class="header">
    <HeaderTop>
      <template slot="logo" >
        <span class="title"></span>
      </template>
      <template slot="login">
        <a href="javascript:;" class="login">登录</a>
      </template>
    </HeaderTop>
    <div class="nav">
      <div class="nav-title activity">
        <span class="item " >推荐</span>
        <span class="item">居家</span>
        <span class="item">鞋包配饰</span>
        <span class="item">服饰</span>
        <span class="item">电器</span>
        <!--<span class="item">餐饮</span>-->
        <!--<span class="item">童婴</span>-->
        <!--<span class="item">特色</span>-->
      </div>
      <span class="down">
          <img class="img" src="../page/imgs/down.png" alt="">
        </span>
    </div>
  </div>
    <div class="wrap">
      <Lbt></Lbt>
      <FirstPageNavTwo></FirstPageNavTwo>

      <div class="content-two">
        <span class="item01">
          <img class="img-item01" src="https://yanxuan.nosdn.127.net/15435902383484509.png" alt="">
          <img class="img-item02" src="https://yanxuan.nosdn.127.net/15438955793172733.png" alt="">
        </span>
        <span class="item02">
          <img class="img-item03" src="https://yanxuan.nosdn.127.net/15438955793172733.png" alt="">
          <img class="img-item03" src="https://yanxuan.nosdn.127.net/15438955793172733.png" alt="">
          <img class="img-item03" src="https://yanxuan.nosdn.127.net/15438955793172733.png" alt="">

        </span>
      </div>

      <div class="content-three">
        <span class="content-three-hello"> <span class="juzhong">-  新人专享  -</span></span>
        <div class="content-three-one">
        <span class="item01">
          <img class="img-item01" src="https://yanxuan.nosdn.127.net/15435902383484509.png" alt="">
        </span>
          <span class="item02">
          <img class="img-item03" src="https://yanxuan.nosdn.127.net/15438955793172733.png" alt="">
          <img class="img-item03" src="https://yanxuan.nosdn.127.net/15438955793172733.png" alt="">

        </span>
        </div>
      </div>

      <FirstPageTagList></FirstPageTagList>
      <div class="content-six"></div>
      <div class="content-seven"></div>

      <!-- <div class="swiper-container" >
         <div class="swiper-wrapper">
           <div class="swiper-slide">
             <a href="javascript:" >
               <div class="lbt_container">
                 &lt;!&ndash;<img src="">&ndash;&gt;
               </div>
               <span id="lbtii-img"></span>
             </a>
           </div>
         </div>
         &lt;!&ndash; Add Pagination &ndash;&gt;
         <div class="swiper-pagination"></div>
       </div>-->


    </div>
  </div>
</template>

<script>
  import HeaderTop from "../page/HeaderTop"
  import Lbt from '../page/Lbt.vue'
  import FirstPageNavTwo from '../page/FirstPageNavTwo.vue'
  import FirstPageTagList from '../page/FirstPageTagList.vue'


  export default {
    name: "first-page",
    components: {
      HeaderTop,
      Lbt,
      FirstPageNavTwo,
      FirstPageTagList
    },
    mounted (){
      /*
        this.$store.dispatch('getShopSea')

        this.$store.dispatch('getLbtList')
        this.$store.dispatch('getMisteNav')*/
    }


  }

  /*span*/
  /*background-image url("https://yanxuan.nosdn.127.net/085b867e757c6880b7bcc82e05ab2dad.jpg?quality=85&thumbnail=750x0&imageView")*/

</script>

<style scoped lang="stylus">
  @import "../../common/stylus/mixins.styl"
  .header
    margin-top 50px
    position fixed
    z-index 1000
    .nav
      background #FFF
       padding 5px
      /*margin-right 5px*/
      /*margin-left 5px*/
      .nav-title
        width 100%
        display flex
        margin 0px  5px 5px 0
        &.activity
          color red
        &.activity::after
          content: ' ';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: .05333rem;
          background-color: #b4282d
        .item
          margin 0 10px 8px 10px
      .down
        position absolute

        right -48px
        top 2px
        .img
          width 0.4rem
          height 0.4rem

  .wrap
    background white
    position absolute
    margin-top 79px
    margin-bottom 50px


    /*.lbt-img*/
      /*width 100%*/
      /*height 4rem*/
      /*background-image url("https://yanxuan.nosdn.127.net/085b867e757c6880b7bcc82e05ab2dad.jpg?quality=85&thumbnail=750x0&imageView")*/
      /*background-repeat no-repeat*/
      /*background-size 100% 100%*/


    .content-two
      display flex
      justify-content space-between
      background-color red
      width 375px
      height 315px
      .item01
        margin-left 4px
      .img-item01
        width: 180px
        height: 200px
      .img-item02
        width: 180px
        height: 100px
      .item02
        display flex
        flex-direction column
        margin-right 8PX
        .img-item03
          width: 180px
          height: 100px

    .content-three
      zomm 1

      .content-three-hello
        /*新人专享*/
        width: 375px
        height: 60px
        font-size 17px
        line-height 60px
        display flex
        justify-content center

      .content-three-one
        display flex
        justify-content space-between

        width 375px
        height 315px
        .item01
          margin-left 4px
        .img-item01
          width: 180px
          height: 200px
        .img-item02
          width: 180px
          height: 100px
        .item02
          display flex
          flex-direction column
          margin-right 8PX
          .img-item03
            width: 180px
            height: 100px


</style>
