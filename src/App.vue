<template>
  <div id="app">
    <router-view></router-view>
    <FooterNav v-show="$route.meta.isShow"/>
  </div>
</template>

<script>
import FooterNav from './components/FooterNav/FooterNav'
export default {
  components:{
    FooterNav
  }

}
</script>

<style lang="stylus">
  #app{
    height 100%
  }
</style>
