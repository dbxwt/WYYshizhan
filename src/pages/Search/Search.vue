<template>
  <div id="container"> 
    <span class="iconfont icon-sousuo"></span>
    <div class="headers" v-if="list.defaultKeyword">
      <input type="text" class="input" :placeholder="list.defaultKeyword.keyword" @focus="showList" ref="input" @keyup="autoSearch" v-model="searchText">
      <span @click="back">取消</span>
    </div>
    <div class="hotSearch" v-show="!isShow">
      <div class="hot">热门搜索</div>
      <div class="module">
        <ul v-if="list.hotKeywordVOList">
          <li v-for="(item,index) in list.hotKeywordVOList" :key="index">
            {{item.keyword}}
          </li>
        </ul>
      </div>
    </div>
    <div class="list" v-show="isShow">
      <ul>
        <li v-for="(item,index) in SearchContent" :key="index">
          {{item}}
        </li>
        
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        list:{},
        init:'免费试用',
        isShow:false,
        searchText:'',
        SearchContent:[],
      }
    },
    async mounted(){
      let result = await this.$API.getSearch()
      this.list = result.data.data.data
      console.log(this.list)
    },
    methods:{
      showList(){
        this.isShow = true
      },
      back(){
        if(this.isShow) {
          this.isShow = false
          this.searchText=''
          return 
        }else{
          this.$router.push('/home')
      }},
      async autoSearch(){
        let data = this.searchText
        let result = await this.$API.getSearchTip(data)
        this.SearchContent = result.data.data
        console.log(this.SearchContent)
      }
    }
  }
</script>

<style scoped lang="stylus">
  #container
    width 100%
    height 550px
    background #fff
    padding 20px 20px 0 20px
    box-sizing border-box
    position relative
    >span
      position absolute
      left 50px
      top 20px
      font-size 50px
    .headers
       height 90px
       width 100%
       display felx
       justify-content space-evenly
       padding 0 20px
       .input
         width 604px
         height 56px
         padding 0 80px
         box-sizing border-box
         margin-right 30px
         border-radius 10px
         background #F4F4F4
         font-size 25px
         outline none
    .hotSearch
      width 100%
      height 410px
      .hot
        height 50px
        font-size 30px
      .module
        ul
          display flex
          flex-wrap wrap
          padding 20px
          li 
            height 50px
            margin-right 30px
            margin-bottom 30px
            text-align center
            line-height 30px
            padding 10px
            border 1px solid black
            box-sizing border-box
    .list
      width 100%
      background pink
      position absolute
      left 0
      top 75px
      padding 10px 40px
      box-sizing border-box
      background #fff
      li
        height 104px
        width 100%
        line-height 104px
        font-size 30px
        border-bottom 1px solid #eee

</style>
