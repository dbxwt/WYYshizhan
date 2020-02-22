<template>
  <div id="container">
      <div class="come">
            <div class="on" :class="{comeOn:navIndex >= 4}">
                <div class="logo" v-if=" navList.length > 0 || navListTwo.length > 0 && navIndex < 4 ">
                  <img :src="navIndex >= 4?newList[navIndex - 4].img:navList[navIndex].img" alt="">
                </div>
            <div class="list">
                <ul v-if="list != null && navIndex < 4" class="oneUl">
                  <li v-for="(item,index) in list.categoryList" :key="index">
                    <img :src="item.bannerUrl" alt="">
                    <span>{{item.name}}</span>
                  </li>
                </ul>
                <ul v-else class="twoUl">
                  <li>
                    <span>秋冬好物</span>
                    <ul>
                      <li v-for="(item,index) in listTwo.subCateList" :key="index">
                        <img :src="item.wapBannerUrl" alt="">
                        <span>{{item.name}}</span>
                      </li>
                  </ul>
                </li>
              </ul>
                  </div>
            </div>
        </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import {mapState} from 'vuex'
  export default {
    data(){
      return {
        list:{},//根据下标筛选前四个出来的对象
        listTwo:{},//根据下标筛选后8个出来的对象
        navList:[],//前四个完整列表
        navListTwo:[],//后8个完整列表
        NewIndex:0 //计算的下标
      }
    },
    props:{
      navIndex:{
        type:Number,
        required:true
      }
    },
    mounted(){
      this.$store.dispatch('getCateAction')
      if(this.cateList){
        this.initList()
      }
      
    },
    methods:{
       initList(){
          if(this.cateList){
            let result = this.cateList.filter((item)=>{
                return item.categoryList
            })
            this.navList = result
            let newList = result.find((item,index) =>{
                return this.navIndex === index
            })
            this.list = newList
            let newResult = this.cateList.slice(4,12)
            this.newList = newResult
            let index = this.navIndex
            if(index >= 4){
                this.NewIndex = index - 4
                this.listTwo = this.newList[this.NewIndex]
            }
      }     
       }
       
    },
    computed: {
      ...mapState({
        cateList: state => state.cateList
      })
    },
    watch:{
      navIndex(){
        this.$nextTick(()=>{
          this.initList()
          new BScroll('.come',{
            scrollY:true,
            click:true
          })
        })
      },
      cateList(){
        this.$nextTick(()=>{
          this.initList()
        })
      }
    }
  }
</script>

<style scoped lang="stylus">
#container
  width 100%
  padding 20px 20px
  box-sizing border-box
  background #fff
  .come
    overflow hidden
    height 100%
    .on
      &.comeOn
        height 3000px
      .logo
        height 210px
        margin-bottom 30px
        img
          display inline-block
          width 100%
          height 100%
      .list
        height 562px
        width 100%
        .oneUl
          display flex
          flex-wrap wrap
          li
            height 216px
            width 144px
            margin-right 40px
            text-align center
            margin-bottom 20px
            img
              display inline-block
              width 100%
              height 70%
        .twoUl
          width 100%
          >li
            width 100%
            >span
              display block
              height 50px
              line-height 50px
              font-size 27px
            ul
              width 100%
              display flex
              flex-wrap wrap
              justify-content space-between
              li
                width 144px
                height 200px
                margin-right 20px
                margin-bottom 20px
                text-align center
                line-height 40px
                img
                  display inline-block
                  width 144px
                  height 144px

</style>
