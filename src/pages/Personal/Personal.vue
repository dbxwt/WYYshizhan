<template>
  <div>
    <span></span>
    <van-button type="warning" style="width:100%;height:100px;font-size:20px" @click="goout">请点击退出登录显示登录页面</van-button>
  </div>
</template>

<script type="text/ecmascript-6">
import {DELETEUSER} from '../../vuex/mutation-type'
  export default {
    methods:{
      goout(){
        this.$store.commit(DELETEUSER)
        localStorage.removeItem('user')
        this.$toast('已退出登录了')
        this.$router.push('/login')
      }
    }
  }
</script>

<style scoped lang="stylus">
 
</style>
