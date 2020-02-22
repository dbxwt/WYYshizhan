<template>
  <div id="container">
    <div class="homeHeaders">
      <a href="#" class="logo"></a>
      <i class="search iconfont icon-sousuo"></i>
      <input type="text" class="input" placeholder="搜索商品，共2016款好物" @click="goSearch">
      <div class="btn" @click="goLogin">{{user?'我的':'登录'}}</div>
    </div>
    <div class="homeNav">
      <ul class="content">
        <li @click="isClick = !isClick" :class="{active:isClick}">
          推荐
        </li>
        <li :class="{active: navIndex===index && isClick == false}" v-for="(item,index) in navList" :key="index" @click="navIndex = index">
          {{item.name}}
        </li>
      </ul>
        <div class="down"  @click="hadleSelect">
          <span class="iconfont icon-xiangxia1" :class="{active:isShow}" ></span>
        </div>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in navList" :key="index">
          <img :src="item.imgUrl" alt="">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div class="guarantee">
      <div>
        <span class="iconfont icon-airudiantubiaohuizhi-zhuanqu_yiwutong"></span>
        <span>网易自营品牌</span>
      </div>
      <div>
        <span class="iconfont icon-tuihuo"></span>
        <span>30天无忧退货</span>
      </div>
      <div>
        <span class="iconfont icon-tuikuan"></span>
        <span>48小时快速退款</span>
      </div>
    </div>
    <div class="homeList">
      <ul v-if="hotList.kingKongModule">
        <li v-for="(item,index) in hotList.kingKongModule.kingKongList" :key="index">
          <img :src="item.picUrl" alt="">
          <span>{{item.text}}</span>
        </li>  
      </ul>
    </div>
    <Reservation/>
    <div class="newPerson">
      <span>—— 新人专享礼 ——</span>
      <div class="left">
        <span>新人专享礼包</span>
        <img src="http://yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="">
      </div>
      <div class="right">
        <div class="top">
          <span>福利社</span><br/>
          <span>今日特价</span>
          <div class="pirce">
            <img src="https://yanxuan-item.nosdn.127.net/858cc027d5dae682799a633cd331a29a.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
          </div>
        </div>
        <span></span>
        <div class="bottom">
          <span>新人拼团</span>
          <div class="one">1元起包邮</div>
        </div>
      </div>
    </div>
    <ClassHot/>
    <SlotNav>
      <template v-slot:top>
        <div class="header-top">
          <div class="left">
            <span>限时购</span>
            <span>00:00:00</span>
          </div>
          <div class="right">
            <span>更多></span>
          </div>
        </div>
      </template>
      <template v-slot:bottom>
        <div class="header-bottom">
          <div>
            <img src="https://yanxuan-item.nosdn.127.net/a7f2138c87f117ec0941ae770dab899e.png?quality=75&type=webp&imageView&thumbnail=216x216" alt="">
            <span>￥201</span>
            <s>￥269</s>
          </div>
          <div>
            <img src="https://yanxuan-item.nosdn.127.net/7bb60cd94cb436726b8db296fda698fc.png?quality=75&type=webp&imageView&thumbnail=216x216" alt="">
            <span>￥159</span>
            <s>￥199</s>
          </div>
          <div>
            <img src="https://yanxuan-item.nosdn.127.net/ae1a092506129459711b2c978f2d4efa.png?quality=75&type=webp&imageView&thumbnail=216x216" alt="">
            <span>￥2939</span>
            <s>￥3499</s>
          </div>
          <div>
            <img src="https://yanxuan-item.nosdn.127.net/d6a3ff3894437578b137ccbd6be32132.png?quality=75&type=webp&imageView&thumbnail=216x216" alt="">
            <span>￥1899</span>
            <s>￥1999</s>
          </div>
          <div>
            <img src="https://yanxuan-item.nosdn.127.net/81b2b58106f17dfeee60aba8aabd8a85.png?quality=75&type=webp&imageView&thumbnail=216x216" alt="">
            <span>￥99.9</span>
            <s>￥129</s>
          </div>
          <div>
             <img src="https://yanxuan-item.nosdn.127.net/8ff83d4079c2dbf64db5ef984fbbaa2b.png?quality=75&type=webp&imageView&thumbnail=216x216" alt="">
            <span>￥168</span>
            <s>￥188</s>
          </div>
        </div>
      </template>
    </SlotNav>
    <SlotNav>
      <template v-slot:top>
        <div class="header-top">
          <div class="left">
            <span>新品首发</span>
          </div>
          <div class="right">
            <span>更多></span>
          </div>
        </div>
      </template>
      <template v-slot:bottom>
        <div class="header-bottom">
          <div>
            <img src="https://yanxuan-item.nosdn.127.net/0fd9f9e40f287ecfe3b54aaafda914f6.png?type=webp&imageView&quality=65&thumbnail=330x330" alt="">
            <p>赏味正当时，春见耙耙柑 5斤</p>
            <span>￥201</span>
            <div class="bottom-div">特价</div>
          </div>
          <div>
            <img src="https://yanxuan-item.nosdn.127.net/f346d2ec9b751e79e36461fa497f0802.png?type=webp&imageView&quality=65&thumbnail=330x330" alt="">
            <p>富含免疫球蛋白，纯牛初乳粉 1克*30袋*2罐</p>
            <span>￥159</span>
            <div class="bottom-div">特价</div>
          </div>
          <div>
            <img src="https://yanxuan-item.nosdn.127.net/b924f1025d1aa8bc437b97e23201f81a.jpg?type=webp&imageView&quality=65&thumbnail=330x330" alt="">
            <p>【UV紫外线杀菌】水质净化加湿器 5L大容量</p>
            <span>￥2939</span>
          </div>
          <div>
            <img src="https://yanxuan-item.nosdn.127.net/13a579e97ec87e111de2c0e65faa9b0c.png?type=webp&imageView&quality=65&thumbnail=330x330" alt="">
            <p>敷出水润仙女肌 西班牙玻尿酸深层补水面膜</p>
            <span>￥1899</span>
            <div class="bottom-div">
               满88顺丰包邮
             </div>
          </div>
          <div>
            <img src="https://yanxuan-item.nosdn.127.net/fe544cee59cc95a9159a722b6be01faa.png?type=webp&imageView&quality=65&thumbnail=330x330" alt="">
            <p>安心出行高效防护- 防飞沫多功能护目镜</p>
            <span>￥99.9</span>
          </div>
          <div>
             <img src="https://yanxuan-item.nosdn.127.net/8ff83d4079c2dbf64db5ef984fbbaa2b.png?quality=75&type=webp&imageView&thumbnail=216x216" alt="">
             <p>释放你的瑜伽热情，健身瑜伽垫升级款</p>
             <span>￥168</span>
             <div class="bottom-div">
               满88顺丰包邮
             </div>
          </div>
        </div>
      </template>
    </SlotNav>
    <FooterList/>
    <Footer/>
     <div class="cover" v-show="isShow" @click.stop="isShow=!isShow">
       <div class="select">
          <span>全部频道</span>
          <ul class="select-ul">
            <li @click.stop="isClick = !isClick" :class="{active:isClick}">推荐</li> 
            <li :class="{active: navIndex===index && isClick == false}" v-for="(item,index) in navList" 
            @click.stop="navIndex = index"
            :key="index">
              {{item.name}}
            </li>
            
          </ul>
    </div>
     </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import {mapState} from 'vuex'
import Reservation from '../../components/Reservation/Reservation'
import ClassHot from '../../components/ClassHot/ClassHot'
import SlotNav from '../../components/slotNav/SlotNav'
import FooterList from '../../components/FootList/FootList'
import Footer from '../../components/Footer/Footer'
  export default {
    data(){
      return {
        navIndex:0,
        isClick:false,
        active:false,
        isShow:false,
        user:''
      }
    },
    components:{
      Reservation,
      ClassHot,
      SlotNav,
      FooterList,
      Footer
    },
    mounted(){
        this.$store.dispatch('getIndexListAction')
        this.$store.dispatch('gethotListAction')
        console.log(this.hotList)
        if(this.hotList && this.navList){
          this._initShow()
        }
        this.user = localStorage.getItem('user')
    },
    computed: {
      ...mapState({
        navList:state => state.navList,
        hotList:state => state.hotList,
      })
    },
    methods:{
      _initShow(){
        let wrapper = document.querySelector('.homeNav')
        new BScroll(wrapper,{
          scrollX:true,
          click:true
        })
      },
      handleDown(){
        this.active = !this.active
        console.log(this.active)
      },
      goSearch(){
        this.$router.replace('/search')
      },
      hadleSelect(){
        this.isShow = !this.isShow
      },
      goLogin(){
        if(this.user){
          this.$router.replace('/personal')
        }else{
          this.$router.replace('/login')
        }
      }
    },
    watch:{
      navIndex(){
          this.isClick = false
      }, 
      navList(){
        this.$nextTick(()=>{
            new Swiper('.swiper-container',{
            autoplay:true,
            pagination:{
              el:'.swiper-pagination'
            }
        })
          })
      }
    }
  }
</script>

<style scoped lang="stylus">
#container
  position relative
  .homeHeaders
    width 100%
    height 90px
    display flex
    align-items center
    justify-content space-around
    position relative
    margin-bottom 5px
    background #fff
    .logo
      width 138px
      height 40px
      display inline-block
      background url(http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png)
      background-position center
      background-size cover
      margin-left 20px
    .search
      display block
      height 20px
      width 20px
      color grey
      font-size 45px
      position absolute
      left 200px
      bottom 45px
    .input
      width 442px
      height 56px
      display inline-block
      border-radius 10px
      background #ccc
      padding 0 62px
      box-sizing border-box
      border none
      outline none
    .btn
      background #fff
      font-size 20px
      width 80px
      height 35px
      border-radius 10px
      line-height 35px
      color red
      border 2px solid red
      margin-right 10px
      text-align center
  .homeNav
    height 60px
    overflow hidden
    margin-bottom 10px
    background #fff
    position relative
    .content
      display flex
      white-space nowrap
      height 100%
      padding-left 46px
      box-sizing border-box
      width 1500px
      li
        width 140px
        height 100%
        text-align center
        line-height 60px
        font-size 26px
        margin-right 44px
        position relative
        &.active
          color red
          &:after
            content ''
            height 4px
            display block
            background red
            width 100%
            position absolute
            bottom 0px
            left 0
        &:first-child
          width 80px  
    .down
      width 100px
      height 60px
      position absolute
      right 0
      bottom 0
      z-index 3
      text-align center
      line-height 60px
      background #fff
      span
        display block
        font-size 40px
        transition all 0.5s
      .active
        transform-origin center 
        transform rotateZ(180deg)
  .swiper-container
    width 100%
    height 370px
    .swiper-wrapper
      height 370px
      .swiper-slide
        width 100%
        height 100%
        background pink
        img
          width 100%
          height 100%
/deep/.swiper-pagination
        .swiper-pagination-bullet
          width 50px
          height 5px
          border-radius 0
        >span.swiper-pagination-bullet-active
            background #fff
  .guarantee
    width 100%
    height 72px
    display flex
    margin-bottom 10px
    background #fff
    div
      flex 1
      text-align center
      line-height 72px
      .iconfont
        font-size 40px
        margin-right 5px
        vertical-align middle
        color red
  .homeList
    width 100%
    height 340px
    background #fff
    ul
      width 750px
      display flex
      height 100%
      flex-wrap wrap
      justify-content space-between
      padding 10px 35px
      box-sizing border-box
      li
        margin-right 4px
        height 150px
        width 110px
        text-align center
        padding-bottom 5px
        img 
          display inline-block
          width 100%
          height 70%
          border-radius 30%
          margin-top 5px
          margin-bottom 5px
  .newPerson
    width 100%
    height 560px
    padding 20px
    box-sizing border-box
    margin-bottom 10px
    background #fff
    >span 
      text-align center
      display block
      height 40px
      font-size 40px
      color red
      margin-bottom 30px
    .left
      width 350px
      height 434px
      float left
      margin-right 10px
      position relative
      background #F9E9CF
      span
        font-size 35px
        position absolute
        left 20px
        top 30px 
      img
        width 70%
        height 60%
        position absolute
        left 60px
        bottom 50px
    .right
      width 350px
      height 434px
      float right
      display flex
      flex-direction column
      .top
        height 49%
        width 100%
        padding 20px
        box-sizing border-box
        position relative
        background #FBE2D3
        .pirce
          width 60%
          height 100%
          position absolute
          right 0
          top 0
          img
            width 100%
            height 100%
      >span
        border 4px solid #fff
      .bottom
        height 49%
        width 100%
        box-sizing border-box  
        padding 20px   
        background #FFECC2
        position relative
        .one
          width 130px
          height 30px
          text-align center
          line-height 30px
          background #CBB693
          position absolute
          left 20px
          top 50px
          
  .cover
    width 750px
    height 1245px
    background #737B7E
    position absolute
    left 0
    top 89px
    z-index 2
    background-color:rgba(25, 25, 25,0.7)
    box-sizing border-box
    .select
      height 380px
      width 100%
      background #fff
      padding-top 5px
      span
        display block
        font-size 30px
        margin-bottom 20px
        padding-left 20px
      .select-ul
        width 100%
        height 100%
        display flex
        justify-content space-between
        flex-wrap wrap
        padding 20px
        box-sizing border-box
        li
          height 56px
          width 150px
          background #FAFAFA
          text-align center
          line-height 56px
          font-size 25px
          border 2px solid #eee
          &.active
            color red
            border-color red


    
     
      


      



 
























































</style>
