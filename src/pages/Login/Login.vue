<template>
  <div id="container">
    <div class="headers">
      <span class="iconfont icon-shouye" @click="$router.push('/home')"></span>
      <a href="#"></a>
      <div>
        <span class="iconfont icon-sousuo" @click="$router.push('/search')"></span>
        <span class="iconfont icon-gouwuche" @click="$router.push('/shopCar')"></span>
      </div>
    </div>
    <iphoneLogin v-show="isIphoneLogin" :isIphone="isIphone" :isPassword="isPassword"/>
    <EmileLogin v-show="isEmileLogin" :isEmile="isEmile"/>
    <PasswordLogin v-show="isPasswordLogin" :isPassword="isPassword"/>
    <div v-show="!isIphoneLogin || !isEmileLogin">
      <div class="center">
        <img src="//yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt="">
      </div>
      <div class="login">
        <div class="iphone" @click="isIphoneLogin=true">
          <span class="iconfont icon-weibiaoti1"></span>
          <span>手机号快捷登录</span>
        </div>
        <div class="emile" @click="isEmileLogin=true">
          <span class="iconfont icon-youxiang"></span>
          <span>邮箱账号登录</span>
        </div>
      </div>
      <div class="footer" v-show="!isIphoneLogin && !isEmileLogin && !isPasswordLogin ">
      <ul>
        <li>
          <span class="iconfont icon-weixin"></span>
          <span>微信</span>
        </li>
        <li>|</li>
        <li>
          <span class="iconfont icon-qq"></span>
          <span>QQ</span>
        </li>
        <li>|</li>
        <li>
          <span class="iconfont icon-weibo"></span>
          <span>微博</span>
        </li>
      </ul>
    </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import iphoneLogin from '../../components/iphoneLogin/iphoneLogin'
import EmileLogin from '../../components/EmileLogin/EmileLogin'
import PasswordLogin from '../../components/PasswordLogin/PasswordLogin'
  export default {
    components:{
      iphoneLogin,
      EmileLogin,
      PasswordLogin
    },
    data(){
      return {
        isIphoneLogin:false,
        isEmileLogin:false,
        isPasswordLogin:false
      }
    },
    methods:{
      isIphone(){
        this.isIphoneLogin= false
    },
      isEmile(){
        this.isEmileLogin = false
    },
      isPassword(){
        this.isEmileLogin = false
        this.isIphoneLogin= false
        this.isPasswordLogin = !this.isPasswordLogin
      }
  }
  }
</script>

<style scoped lang="stylus">
  #container
    background #F2F5F4
    height 100%
    position relative
    .headers
      width 100%
      height 80px
      display flex
      justify-content space-between
      align-items center
      padding 0 10px 0 10px
      box-sizing border-box
      background #FAFAFA
      span
        font-size 70px
      a
        display inline-block
        width 195px
        height 54px
        background url(http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png)
        background-position center
        background-size cover
        transform translateX(30px)
    .center
      width 100%
      height 480px
      text-align center
      line-height 480px
      img
        display inline-block
        width 270px
        height 90px
    .login
      height 400px
      width 100%
      text-align center
      font-size 30px
      background #F2F5F4
      .iphone
        width 700px
        height 98px
        background #DD1A21
        line-height 98px
        margin-left 25px
        margin-bottom 30px
        font-size 30px
        color #fff
        .iconfont
          font-size 40px
          margin-right 10px
      .emile
        width 700px
        height 98px
        background #F2F5F4
        margin-left 25px
        line-height 98px
        font-size 30px
        border 2px solid #DD1A21
        color #DD1A21
        .iconfont
          font-size 40px
          margin-right 10px
    .footer
      height 100px
      width 100%
      position absolute
      bottom 30px
      left 0
      ul
        display flex
        padding 0 125px
        li
          height 50px
          margin-right 30px
          font-size 30px
          span
            margin-right 10px
      
 
</style>
