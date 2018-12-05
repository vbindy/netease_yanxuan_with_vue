<template>
  <div>
    <HeaderTop></HeaderTop>
    <div class="wrap">
      <div class="youbian">
        <ul class="section-item">
          <li class="section-name" v-for="item in items">
            {{ item.message }}
          </li>
        </ul>
      </div>
      <div class="ellipsis">
        <div class="img-one"></div>
        <div class="content-one">
            <span class="content-one-item">
              <span class="content-one-img"></span>
              <span class="content-one-text">三石福利价</span>
            </span>
          <span class="content-one-item">
              <span class="content-one-img"></span>
              <span class="content-one-text">三石福利价</span>
            </span>
          <span class="content-one-item">
              <span class="content-one-img"></span>
              <span class="content-one-text">三石福利价</span>
            </span>
          <span class="content-one-item">
              <span class="content-one-img"></span>
              <span class="content-one-text">三石福利价</span>
            </span>
          <span class="content-one-item">
              <span class="content-one-img"></span>
              <span class="content-one-text">三石福利价</span>
            </span>
          <span class="content-one-item">
              <span class="content-one-img"></span>
              <span class="content-one-text">三石福利价</span>
            </span>
          <span class="content-one-item">
              <span class="content-one-img"></span>
              <span class="content-one-text">三石福利价</span>
            </span>
          <span class="content-one-item">
              <span class="content-one-img"></span>
              <span class="content-one-text">三石福利价</span>
            </span>
          <span class="content-one-item">
              <span class="content-one-img"></span>
              <span class="content-one-text">三石福利价</span>
            </span>
          <span class="content-one-item">
              <span class="content-one-img"></span>
              <span class="content-one-text">三石福利价</span>
            </span> 
        </div>
      </div>

    </div>
  </div>

</template>

<script>
  import HeaderTop from '../page/HeaderTop'
    export default {
      name: "classify",
      data() {
        return {
          items: [
            {message: '12.12专区'},
            {message: '冬季专区'},
            {message: '爆品专区'},
            {message: '新品专区'},
            {message: '居家'},
            {message: '洗护'},
            {message: '饮食'},
            {message: '餐厨'},
            {message: '婴童'},
            {message: '特色区'},
            {message: '文体'},

            {message: '餐厨'},
            {message: '婴童'},
            {message: '特色区'},
            {message: '文体'}
          ]
        }
      },
      components: {
        HeaderTop

      }

    }
</script>


<style scoped lang="stylus">
  .wrap
    margin-top 47px
    .youbian
      zoom 1
      float left
      border-right 2px solid #F5F5F5
      margin-right 10px
      .section-item
        /*top-border-1px(#ab2b2b)*/
        margin-left 7px
        margin-top 7px
        width: 100%;
        .section-name
          margin-top 30px
          text-align center
          font-size 15px
          margin-right 12px
          &:nth-child(1)
            margin-top 10px

    .ellipsis
      zoom 1
      .img-one
        width 265px
        height 100px
        background-image: url(http://yanxuan.nosdn.127.net/52855d9a0c1f738f26ac125913af0012.jpg?imageView&thumbnail=0x196&quality=75);
        background-size 100% 100%
      .content-one
         display flex
         flex-wrap wrap
         .content-one-item
           zoom 1
           margin 10px
           .content-one-img
             display block
             width 55px
             height 60px
             background-image: url("http://yanxuan.nosdn.127.net/39c1c32ca2301ced934e35db33150637.png?imageView&quality=85&thumbnail=144x144")
             background-size 100% 100%
           .content-one-text
             text-align center
             font-size 12px

</style>
