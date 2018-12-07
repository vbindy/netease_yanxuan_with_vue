<template>
    <div class="img" @click="goto('/firstpage')" >
      <img class="img-one" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544094973326&di=088488d7790ce593e4ee64eb92ada38e&imgtype=0&src=http%3A%2F%2Fpic3.16pic.com%2F00%2F09%2F73%2F16pic_973298_b.jpg" alt="">
    </div>
</template>

<script>
    export default {
        name: "not-found",
      methods: {
        goto(path) {
          this.$router.replace(path)
        },

      }
    }
</script>

<style scoped lang="stylus">
 .img
   width:100%
   height 100%
   .img-one
     width:100%
     height 100%

</style>
