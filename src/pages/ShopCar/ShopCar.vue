<template>
  <div id="container">
    <div class="headers">
      <span>购物车</span>
      <span class="iconfont icon-lingquanzhongxin"></span>
    </div>
    <div class="threeDay">
      <ul>
        <li>
          30天无忧退货
        </li>
        <li>
          48小时快速退款
        </li>
        <li>
          满88元免邮费
        </li>
      </ul>
    </div>
    <div class="backImg">
        <div class="Carempty">
          <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png" alt="">
        </div>
        <span>去添加点什么吧</span>
    </div>
  </div>  
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style scoped lang="stylus">
#container  
  background #F4F4F4
  .headers
    width 100%
    height 90px
    background #fff 
    padding 0 50px
    box-sizing border-box
    display flex
    justify-content space-between
    span
      &:first-child
        font-size 40px
        display inline-block
        text-align center
        line-height 90px
      &:last-child
        color red
        font-size 60px
        line-height 90px
  .threeDay
    height 70px
    width 100%
    ul
      display flex
      justify-content space-around
      padding 10px 10px
      box-sizing border-box
      background #eee
      height 100%
      li
        list-style circle
        line-height 55px
  .backImg
    height 1176px
    position relative
    .Carempty
      width 250px
      height 250px
      position absolute
      left 50%
      top 50%
      transform translate(-50%,-120%)
      img
        width 100%
        height 100%
        display inline-block
    span
      display inline-block
      height 50px
      position absolute
      left 50%
      top 50% 
      transform translate(-50%,-130%)
      color #9A9A9A

 
</style>
