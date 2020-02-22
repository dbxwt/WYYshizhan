<template>
  <div id="iphoneLogin">
      <div class="logo">
        <img src="//yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt="">
      </div>
      <div class="login">
        <input type="text" class="username" placeholder="请输入手机号" v-model="username">
        <span class="Usertip" v-show="usernameTip">请输入正确的手机号</span>
        <div class="login-pwd">
          <input type="text" class="password" placeholder="请输入短信验证码" v-model="code" maxlength="6">
          <span class="Pwdtip" v-show="codeTip">请输入正确的验证码</span>
          <span class="getCode" @click="getCode">{{codeTime?`${codeTime}s重新发送`:'获取验证码'}}</span>
        </div>
        <div class="request">
          <span>遇到问题？</span>
          <span @click="isPassword()">使用密码验证登录</span>
        </div>
        <div class="btn" @click="login">登录</div>
        <div class="success">
          <input type="checkbox" class="success-one" value="0" @click="boxCheck = !boxCheck">
          <span>我同意<a href="#">《服务条款》</a>和<a href="#">《网易隐私政策》</a></span>
        </div>
        <div class="other" @click="isIphone()">其他方式登录></div>
        
        <span class="iconfont icon-quxiao clear" v-show="username" @click='username=""'></span>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {GETUSERINFO} from '../../vuex/mutation-type'
// import {Toast} from 'vant'
  export default {
    props:{
      isIphone:{
        type:Function,
        required:true
      },
      isPassword:{
        type:Function,
        required:true
      }
    },
    data(){
      return {
        username:'',
        code:'',
        usernameTip:false,
        codeTip:false,
        codeTime:0,
        boxCheck:false
      }
    },
    methods:{
      getCode(){
       if(this.resultUser){
         this.usernameTip = false
          this.codeTime = 10
          this.timer = setInterval(()=>{
            this.codeTime--
            if(this.codeTime === 0){
            clearInterval(this.timer)
          }
          },1000)
        }else{
          this.usernameTip = true
        }
       },
       login(){
         if(this.resultUser && this.resultCode && this.boxCheck){
           localStorage.setItem('user',this.username)
           this.$store.commit(GETUSERINFO,this.username)
           this.$router.push('/personal')
           this.$toast('登录成功')
         }else{
           if(!this.resultUser && !this.resultCode && !this.boxCheck){
             this.usernameTip = true
             this.codeTip = true
             this.$toast('请输入正确的手机号，密码')
           }else if(!this.resultCode){
             this.codeTip = true
             this.$toast('请输入正确的验证码')
           }else if(!this.resultUser){
             this.$toast('请输入正确的手机号')
           }else{
             this.$toast('请勾选我同意')
           }
         }
       }
    },
    watch:{
      username(){
          let reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
          this.resultUser = reg.test(this.username)
          if(this.resultUser){
            this.usernameTip = false
          }else{
            this.usernameTip = true
          }
      },
      code(){
          let reg = /^\d{4,6}$/
          this.resultCode = reg.test(this.code)
          if(this.resultCode){
            this.codeTip= false
          }else{
            this.codeTip = true
          }
      }
    }
  }
</script>

<style scoped lang="stylus">
#iphoneLogin
  height 100%
  width 100%
  background #fff
  .logo
    width 100%
    height 90px
    text-align center
    padding  60px 0
    img
      width 280px
      height 90px
      display inline-block
  .login
    width 100%
    height 550px
    padding 20px 20px
    box-sizing border-box
    position relative
    input
      height 90px
      width 100%
      padding 10px 30px
      outline none
      border-bottom 2px solid #eee
      box-sizing border-box
      font-size 27px
      margin-bottom 20px
    .login-pwd
      position relative
    .password
      margin-bottom 60px
    .request
      height 70px
      background gery
      display flex
      justify-content space-between
      padding 0 10px
      box-sizing border-box
      span
        &:first-child
          font-size 30px
          color #7F7F7F
        &:last-child
          font-size 31px
    .btn
      width 100%
      height 90px
      background #DD1A21
      text-align center
      line-height 90px
      border-radius 5px
      color #fff
      font-size 30px
      margin-bottom 30px
    .success
      position relative
      padding 0 50px
      margin-bottom 40px
      .success-one
        width 35px
        height 35px
        position absolute
        left 4px
        top -3px
    .other
      height 80px
      width 100%
      text-align center
      line-height 80px
      font-size 25px
    .getCode
      display block
      height 53px
      width 164px
      background #fff
      border 1px solid #ccc
      text-align center
      line-height 53px
      position absolute
      right 30px
      top 10px
    .clear
      display block
      height 60px
      width 60px
      font-size 25px
      position absolute
      right 50px
      top 40px
      text-align center
      line-height 60px
    .Usertip
      color red
      display inline-block
      width 100%
      padding 0 30px
    .Pwdtip
      color red
      display inline-block
      width 100%
      padding 0 30px
      position absolute
      left 0
      top 105px

</style>
