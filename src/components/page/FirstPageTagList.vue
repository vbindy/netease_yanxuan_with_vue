<template>
  <div>
    <div class="content-four">
      <span class="wei1"></span>
      <span class="pinpai">
           <span class="text">品牌制造直供</span>
           <span class="you"><a href="javascript:;">更多 ></a></span>
        </span>

      <span class="content-four-one">
          <div class="content-four-two" v-for="item in items">
          <span class="img01" :style="{backgroundImage: `url(${item.picUrl})`}">
            <span class="zhizao">{{item.extra.materialName}}</span>
          <span class="jiage">{{item.floorPrice}}元起</span>
          </span>
         </div>

             </span>

    </div>
    <div class="content-five">
      <span class="wei1"></span>
      <span class="pinpai">
           <span class="text">限时购&nbsp;&nbsp;&nbsp;00:00:00</span>
           <span class="you"><a href="javascript:;">更多 ></a></span>
        </span>
      <span class="content-four-one">

          <div class="content-four-two" v-for="sh in shs">
           <!--<a class="aaa" href="#">-->
            <div  class="aaa" >
            <span class="img01" :style="{backgroundImage: `url(${sh.picUrl})`}"></span>
            <span class="jiage">
            <span class="jiage01">¥{{sh.activityPrice}}</span>
            <span class="jiage02">{{sh.originPrice}}</span>
          </span>
            </div>
           <!--</a>-->
         </div>


        </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "first-page-tag-list",

    mounted() {
      /* this.$store.dispatch('getLbtList')
       this.$store.dispatch('getMisteNav')*/
      this.$store.dispatch('getShopSea')
      this.$store.dispatch('getMisteNavTwo')
    },
    computed: {
      items() {
        return this.$store.state.sea
      },
      shs(){
        return this.$store.state.two.itemList
      }
    }


  }

</script>

<style scoped lang="stylus">
  @import "../../common/stylus/mixins.styl"
  .content-four
    zoom 1
    position relative
    .wei1
      position: absolute;
      left: 0;
      top: -80px;
      width: 100%;
      height: 14px;
      background-color: #ffc0cb;

    .pinpai
      margin-bottom 15px
      clearFix()
      .text
        color #333333
        font-size 16px
        float left
        margin-left 13px
      .you
        color #333333
        float right
        font-size 16px
        margin-right 13px

    .content-four-one
      margin 10px
      display flex
      flex-wrap wrap
      .content-four-two
        background-color #FDFCF8
        width 173px
        height 132px

      .img01
        display inline-block

        background-repeat no-repeat
        background-size 90% 100%
        width: 184px
        height: 128px
        .zhizao
          margin-top 5px
          width: 100%;
          text-align center
          display block
          font-size 17px
        .jiage
          margin-top 5px
          width: 100%;
          text-align center
          display block
          font-size 13px
          color grey

  .content-five
    margin-top 80px
    zoom 1
    position relative
    .wei1
      position: absolute;
      left: 0;
      top: -40px;
      width: 100%;
      height: 14px;
      background-color: #ffc0cb;

    .pinpai
      margin-bottom 15px
      clearFix()
      .text
        color #333333
        font-size 16px
        float left
        margin-left 13px
      .you
        color #333333
        float right
        font-size 16px
        margin-right 13px

    .content-four-one
      margin 10px
      display flex
      flex-wrap wrap
      .content-four-two
        background-color #FFF
        width 110px
        /*height 132px*/
        .aaa
          display flex
          flex-direction column
          .img01
            display inline-block
            background-repeat no-repeat
            background-size 100% 100%
            width: 110px
            height: 110px

          .jiage
            margin-top 5px
            margin-left 15px
            width: 110px;

            display block
            font-size 15px
            color red
            display flex
            .jiage02
              margin-left 7px
              color grey
              text-decoration:line-through
              font-size 13px



</style>
