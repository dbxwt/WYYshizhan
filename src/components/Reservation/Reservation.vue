<template>
  <div id="container">
      <div class="headers">
        <a href="#"></a>
      </div>
      <div class="c-headers"></div>
      <div class="content">
        <div class="c-headers-one"></div>
        <div class="c-headers-two"></div>
        <div class="c-headers-three"></div>
        <div class="c-headers-four"></div>
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
  .headers
    width 750px
    height 240px
    background red
    a
      display block
      height 100%
      width 100%
      background url(https://yanxuan.nosdn.127.net/5db28c137605ea7576c986e9c285e1c6.png?quality=75&type=webp&imageView&thumbnail=750x0)
      background-size cover
  .c-headers
    width 750px
    height 160px
    background #1674E3
    background url(https://yanxuan.nosdn.127.net/a4187bffa2a0431ec5d6e2dd1070d6c5.gif?imageView&quality=75)
    background-size cover
    border 10px solid #1674E3
    box-sizing border-box
  .content
    width 100%
    height 400px
    display flex
    justify-content space-around
    flex-wrap wrap
    background #1674E3
    div
      width 351px
      height 186px
      background pink
    .c-headers-one
      background url(https://yanxuan.nosdn.127.net/28244c6ae7ef78424ea5317a0d72dd6a.png?quality=75&type=webp&imageView&thumbnail=375x0)
      background-size cover
    .c-headers-two
      background url(https://yanxuan.nosdn.127.net/15b56691109bba3adf6156fd44f14073.png?quality=75&type=webp&imageView&thumbnail=375x0)
      background-size cover
    .c-headers-three
      background url(https://yanxuan.nosdn.127.net/83b35324b02e31aa202a12971fa7f8c3.png?quality=75&type=webp&imageView&thumbnail=375x0)
      background-size cover
    .c-headers-four
      background url(https://yanxuan.nosdn.127.net/2c98b2002572ec4cd0824bc810d7d31f.png?quality=75&type=webp&imageView&thumbnail=375x0)
      background-size cover

</style>
