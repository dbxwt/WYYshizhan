<template>
  <div class="headers">
    <slot name="top"></slot>
    <slot name="bottom"></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style scoped lang="stylus">
.headers
  width 100%
  height 700px
  padding 20px
  box-sizing border-box
  background #fff
  .header-top
    display flex
    padding 20px
    box-sizing border-box
    .left
      flex 1
      font-size 35px
      span
        margin-right 10px
    .right
      flex 1 
      font-size 35px
      text-align right
   .header-bottom
     display flex
     justify-content space-between
     flex-wrap wrap
     background #fff
     >div
      width 216px
      margin-bottom 50px
      padding-bottom 10px
      box-sizing border-box
      position relative
      background #fff
      .bottom-div
        height 30px
        border-radius 10px
        border 3px solid red
        display inline-block
        position absolute
        left 0
        bottom -30px
        color red
      img
        width 100%
        height 216px
        display block
        margin-bottom 10px
        background #eee
      p
        font-size 15px
      span
        font-size 30px
        margin-right 10px
        margin-bottom 10px
        color red


 
</style>
