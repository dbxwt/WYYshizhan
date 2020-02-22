<template>
  <div id="container">
    <div class="search">
      <input type="text" placeholder="搜索商品，共22003款好物" @click="$router.replace('/search')">
      <span class="iconfont icon-sousuo"></span>
    </div>
    <div class="list">
      <div class="left">
          <ul v-if="classList.length>0">
            <li v-for="(item,index) in classList" :key="index" @click="navIndex = index" :class="{active:navIndex === index}">
              {{item.name}}
            </li>
          </ul>
      </div>
      <div class="right">
        <CateList :navIndex="navIndex"/>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import CateList from '../../components/CateList/CateList'
import BScroll from 'better-scroll'
import {mapState} from 'vuex'
  export default {
    data(){
      return {
          navIndex:0
      }
    },
    components:{
      CateList
    },
    mounted(){
      this.$store.dispatch('getClassListAction')
      
    },
    methods:{
      
    },
    computed:{
      ...mapState({
        classList: state => state.classList
      })
    },
    watch:{
      classList(){
        this.$nextTick(()=>{
          new BScroll('.left',{
             scrollY:true,
             click:true
          })
        })
      }
    }
  }
</script>

<style scoped lang="stylus">
#container
  width 100%
  height 100%
  .search
    height 90px
    width 100%
    padding 18px 20px
    box-sizing border-box
    position relative
    background #fff
    input
      width 95%
      height 56px
      margin-left 2%
      border-radius 10px
      padding 0 100px 0 200px
      box-sizing border-box
      background #EDEDED
    span
      font-size 50px
      color #ccc
      position absolute
      left 180px
      top 20px
  .list
    height 1148px
    width 100%
    display flex
    border-top 2px solid #ccc
    .left
      width 21%
      background #fff
      padding-top 40px
      box-sizing border-box
      border-right 2px solid #ccc
      overflow hidden
      ul
        height 1400px
        padding 20px 0
        li
          width 100%
          height 50px
          text-align center
          line-height 50px
          margin-bottom 40px
          font-size 27px
          box-sizing border-box
          &.active
            color #AB2B2B
            border-left 3px solid #AB2B2B
            
    .right
      width 79%
      height 100%
      background grey
    
 
</style>
