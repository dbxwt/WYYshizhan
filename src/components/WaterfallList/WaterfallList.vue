<template>
  <div id="container">
    <ul v-if="this.waterFall.length > 0" ref="ulNodes">
      <li class="li-one">
        <img src="https://yanxuan.nosdn.127.net/87f3077c32a6946ae644f6a6a8205fc1.png?imageView&thumbnail=345y191.66666666666669&quality=95" alt="">
      </li>
       <li v-for="(item,index) in waterFall" :key="index">
        <img :src="item.picUrl" alt="">
        <span>{{item.title}}</span>
        <div>
          <img :src="item.avatar" alt="">
          <span>{{item.nickname}}</span>
          <span>
              <span class="iconfont icon-yanjing"></span>
              <span>{{item.readCount}}</span>
          </span>
        </div>
       </li>
       
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
import {throttle} from '../../utils/index'
  export default {
    data(){
      return {
        tops:[],
        isrequest:false
      }
    },
    mounted(){
      
      this.$store.dispatch('getWateFallAction')
      if(this.waterFall.length>0){
        this.getDistance()
      }
      //  window.addEventListener('scroll',()=>{
       
      //   this.getDistance()
      //   console.log(this.waterFall)
      // })
      window.onscroll = throttle(this.sendRequest,1000)
      
    },
    methods:{
      getDistance(){
          // eslint-disable-next-line no-unused-vars
          
          let scrollTop = document.documentElement.scrollTop
          console.log(scrollTop)
          let top = []
          if(this.$refs.ulNodes.children.length>0){
            console.log(this.$refs.ulNodes.children)
            let liNodes = Array.from(this.$refs.ulNodes.children)
            for(var i = 0; i < liNodes.length; i++){
                top.push(liNodes[i].getBoundingClientRect().top)
            }
            this.tops = top
          }
      },
      sendRequest(){
        let clientHeight = document.documentElement.clientHeight
        console.log(this.tops)
        console.log(this.lastTop)
        if(this.lastTop < clientHeight){
          this.$store.dispatch('getNextListAction')
        }
      }
    },
    computed:{
      ...mapState({
        waterFall: state => state.waterFall
      }),
      // eslint-disable-next-line vue/return-in-computed-property
      lastTop(){
        return this.tops[this.tops.length - 1]
      }
    },
    watch:{
      waterFall(){
        this.$nextTick(()=>{
          this.getDistance()
        })
      }
    }
  }
</script>

<style scoped lang="stylus">
  #container
    background pink
    padding 0 20px
    box-sizing border-box
    ul
      width 100%
      column-count 2
      column-width 50%
      column-gap 10px
      .li-one
        width 340px
        height 216px
        background red
        border-radius 20px
        img
          width 100%
          height 100%
          display inline-block
          border-radius 20px
      li
        width 340px
        height 360px
        background #fff
        border-radius 20px
        margin-bottom  20px
        break-inside avoid
        >img
          width 100%
          height 60%
          display inline-block
          border-radius 20px
          margin-bottom 20px
        div
          line-height 68px
          padding 20px 10px
          box-sizing border-box
          height 90px
          img
            width 48px
            height 48px
            display inline-block
            border-radius 20px
            margin-right 20px
            float left
          span
            line-height 68px
            float left
            &:last-child
              float right
            
</style>
