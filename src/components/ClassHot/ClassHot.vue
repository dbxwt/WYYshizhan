<template>
  <div id="container">
    <div class="title">类目热销榜</div>
    <div class="centent">
      <div class="left">
        <span>热销榜</span>
        <div class="img">
          <img src="https://yanxuan-item.nosdn.127.net/93a20b799b978c1b3e800ce3f0e16842.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
        </div>
      </div>
      <div class="right">
        <span>好评榜</span>
        <div class="img">
          <img src="https://yanxuan-item.nosdn.127.net/ddacf50dfd87b6b2e1119b446391d46e.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
        </div>
      </div>
    </div>
    <div class="bottom">
      <div>
        <span>美食酒水榜</span>
        <img src="https://yanxuan-item.nosdn.127.net/a4c5c5c63d8e3595f15a95819b2cf758.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
      </div>
      <div>
        <span>居家生活榜</span>
        <img src="https://yanxuan-item.nosdn.127.net/644a27b8e168b8fe8e43ccaad934b24e.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
      </div>
      <div>
        <span>个护清洁榜</span>
        <img src="https://yanxuan-item.nosdn.127.net/487de4b51822cf85b859bb94cd65e9a6.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
      </div>
      <div>
        <span>数码家电榜</span>
        <img src="https://yanxuan-item.nosdn.127.net/0434f5cb29b2c6c6ade2f1c0487ae97c.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
      </div>
      <div>
        <span>服饰鞋包榜</span>
        <img src="https://yanxuan-item.nosdn.127.net/073f16bf0c7ad8634c3abb7636e063c2.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
      </div>
      <div>
        <span>全球特色榜</span>
        <img src="https://yanxuan-item.nosdn.127.net/d7393e6b604cd89022361c65b1b03183.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
      </div>
      <div>
        <span>母婴亲子榜</span>
        <img src="https://yanxuan-item.nosdn.127.net/74662d24f6d217b520178c5a6d031457.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
      </div>
      <div>
        <span>运动旅行榜</span>
        <img src="https://yanxuan-item.nosdn.127.net/a9d6de39ab17ab82d5424205dafc4136.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style scoped lang="stylus">
  #container
    width 100%
    height 710px
    padding 30px 20px
    box-sizing border-box
    background #fff
    margin-bottom 10px
    .title
      height 70px
      font-size 35px
    .centent
      width 100%
      height 200px
      margin-bottom 10px
      .left
        width 49%
        height 100%
        float left
        line-height 70px
        padding 20px
        box-sizing border-box
        background #F9F3E4
        span 
          float left
          display inline-block
          height 50px
          width 30%
          border-bottom 3px solid black
          margin-top 20px
          padding 10px
        .img
          width 55%
          height 100%
          float right
          img
            width 100%
            height 100%
      .right
        width 49%
        height 100%
        float right
        line-height 70px
        padding 20px
        box-sizing border-box
        background #EAEEF5
        span 
          float left
          display inline-block
          height 50px
          width 30%
          border-bottom 3px solid black
          margin-top 20px
          padding 10px
        .img
          width 55%
          height 100%
          float right
          img
            width 100%
            height 100%
    .bottom
      width 100%
      height 400px
      display flex
      flex-wrap wrap
      justify-content space-between
      div
        width 165px
        height 180px
        text-align center
        padding 5px 10px 10px 10px
        box-sizing border-box
        background #F5F5F5
        img
          display block
          height 120px
          width 120px
          margin-left 10%
          margin-top 10%
 
</style>
