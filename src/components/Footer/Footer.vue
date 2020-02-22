<template>
  <div id="container">
    <div class="btn">
      <div class="app">下载APP</div>
      <div class="computer">电脑版</div>
    </div>
    <p>网易公司版权所有 © 1997-{{time}}</p>
    <p>食品经营许可证：JY13301080111719</p>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        time:0
      }
    },
    mounted () {
        let myDate = new Date()
        this.time = myDate.getFullYear()
    }
  }

</script>

<style scoped lang="stylus">
#container
  background #414141
  height 244px
  width 100%
  text-align center
  margin-bottom 98px
  .btn
    height 50%
    width 100%
    display flex
    justify-content space-around
    padding 50px 130px
    box-sizing border-box
    margin-bottom 40px
    div
      height 65px
      width 172px
      background pink
      text-align center
      line-height 65px
      background #414141
      border 2px solid #fff
      color #fff
  p
    color #898989
      


</style>
