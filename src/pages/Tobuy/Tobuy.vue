<template>
  <div>
     <div class="headers">
      <span class="iconfont icon-shouye" @click="$router.push('/home')"></span>
      <a href="#">值得买</a>
      <div>
        <span class="iconfont icon-sousuo" @click="$router.push('/search')"></span>
        <span class="iconfont icon-gouwuche" @click="$router.push('/shopCar')"></span>
      </div>
    </div>
    <div class="content">
      <div class="bg-img">
        <img src="https://m.you.163.com/topic/index/img/topic_title_bg.2373a140.png" alt="" class="img-one">
        <img src="https://m.you.163.com/topic/index/img/topic_logo.c2284970.png" alt="" class="img-two">
        <div class="text">严选好物 用心生活</div>
      </div>
      <div class="content-nav">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in NewbuyList" :key="index">
              <ul>
                <li v-for="(item,index) in item" :key="index">
                  <img :src="item.picUrl" alt="">
                  <span>{{item.mainTitle}}</span>
                  <span>{{item.viceTitle}}</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="swiper-pagination"></div> 
        </div>
      </div>
   </div>
   <WaterfallList/>
  </div>
</template>

<script type="text/ecmascript-6">
import WaterfallList from '../../components/WaterfallList/WaterfallList'
import {mapState} from 'vuex'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import _ from 'lodash'
  export default {
    data(){
      return {
      }
    },
    components:{
      WaterfallList
    },
    mounted(){
      this.$store.dispatch('getbuyListAction')
      // this._initList()
      if(this.NewbuyList.length > 0){
        this. _initView()
      }
     
    },
    methods:{
      // _initList(){
      //    let result = _.chunk(this.buyList,8)
      //    // NewbuyList应该是一个计算属性而不应该是直接赋值
      //    this.NewbuyList = result
      // },
      _initView(){
          new Swiper('.swiper-container',{
            autoplay:true,
            pagination:{
              el:'.swiper-pagination'
            }
          })
      },
    },
    computed:{
      ...mapState({
        buyList: state => state.buyList
      }),
      NewbuyList(){
        return _.chunk(this.buyList,8)
      }
    },
    watch:{
      buyList(){
        this.$nextTick(()=>{
            // this._initList()
            this._initView()
        })
      }
    }
  }
</script>

<style scoped lang="stylus">
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
        font-size 50px
      a
        display inline-block
        width 195px
        height 54px
        font-size 50px
        transform translateX(30px)
        color black
    .content
      height 685px
      .bg-img
        width 100%
        height 518px
        position relative
        .img-one
          display inline-block
          width 100%
          height 100%
        .img-two
          display inline-block
          width 130px
          height 70px
          position absolute
          left 15px
          top 65px
        .text
          position absolute
          left 160px
          top 90px
          font-size 30px
          font-weight bold
          color #fff 
      .content-nav
        height 540px
        width 710px
        position absolute
        left 20px
        top 225px
        border-radius 20px
        .swiper-container
          width 100%
          position relative
          padding 20px 0
          box-sizing border-box
          background #fff
          border-radius 20px
          .swiper-wrapper
            height 470px
            .swiper-slide
              width 100%
              height 100%
              background #fff
              border-radius 20px
              ul
                width 100%
                height 100%
                display flex
                justify-content space-between
                flex-wrap wrap
                padding 30px 0
                box-sizing border-box
                border-radius 20px
                li
                  width 168px
                  height 200px
                  box-sizing border-box
                  text-align center
                  img
                    width 120px
                    height 120px
                    display inline-block
                  span
                    display block
                    &:nth-of-type(1)
                        font-weight bold
                        font-size 30px
                        margin-bottom 10px
      /deep/.swiper-pagination
            width 100%
            height 30px
            position absolute
            left 0
            bottom 20px
            .swiper-pagination-bullet
              width 40px
              height 5px
              border-radius 0
            >span.swiper-pagination-bullet-active
                  background red
              
      
      
 
</style>
