<template>
  <div id='container'>
    <div @click="handleClass('/home')" :class="{active:$route.path === '/home'}">
      <span class="iconfont icon-shouye"></span>
      <span>首页</span>
    </div>
    <div @click="handleClass('/class')" :class="{active:$route.path === '/class'}">
      <span class="iconfont icon-fenlei"></span>
      <span>分类</span>
    </div>
    <div @click="handleClass('/tobuy')" :class="{active:$route.path === '/tobuy'}">
      <span class="iconfont icon-mairu"></span>
      <span>值得买</span>
    </div>
    <div @click="handleClass('/shopCar')" :class="{active:$route.path === '/shopCar'}">
      <span class="iconfont icon-goumai"></span>
      <span>购物车</span>
    </div>
    <div @click="handle" :class="{active:$route.path === '/personal'}">
      <span class="iconfont icon-geren"></span>
      <span>个人</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        user:''
      }
    },
    methods:{
      handleClass(url){
       this.$route.path!= url && this.$router.push(url)
      },
      handle(){
        this.user = localStorage.getItem('user')
        if(this.user){
         this.$route.path!='/personal' && this.$router.push('/personal')
        }else{
          this.$router.push('/login')
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
  #container
    background #fff
    width 100%
    height 98px
    display flex
    position fixed
    bottom 0
    left 0
    div 
      flex 1
      display flex
      text-align center
      flex-direction column
      padding-top 10px
      .iconfont 
        display inline-block
        font-size 45px
        margin-bottom 5px
      &.active
        color red
</style>
