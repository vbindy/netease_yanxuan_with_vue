<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="pictuer in lbts">
        <img class="imgs" :src="pictuer.picUrl" alt="">
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- 如果需要滚动条 -->
    <div class="swiper-scrollbar"></div>
  </div>
</template>

<script>
  import Swiper from "swiper"
  window.onload=function(){


  var mySwiper = new Swiper ('.swiper-container', {
   // direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    autoPlay:true,

    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },

    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    //如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })
  }

  export default {

        name: "lbt",
    mounted (){
      this.$store.dispatch('getLbtList')
          /*
        this.$store.dispatch('getShopSea')
        this.$store.dispatch('getMisteNav')*/
    },
    computed:{
          lbts(){
            return this.$store.state.lbt
          }
    }
    }
</script>

<style scoped lang="stylus">
  @import '../../../node_modules/swiper/dist/css/swiper.min.css'

  .swiper-container
    width: 375px;
    height: 187px;
    .swiper-wrapper
      width 100%
      height 100%
      .swiper-slide
        width 100%
        height 100%
        .imgs
          width 100%
          height 100%
</style>
