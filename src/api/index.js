import ajax from './ajax'
//请求首页导航列表信息
export const getindexCateModule = () => ajax({
  url:'/api/getindexCateModule'
})
export const getindexDatas = ()=> ajax({
  url:'/api/getIndexDatas'
})
export const getSearch = ()=>ajax({
  url:'/api/getSearch'
})
export const getSearchTip = (data)=>ajax({
  url:'/foo/xhr/search/searchAutoComplete.json',
  method:'POST',
  data:{
    keywordPrefix:data
  }
})
export const getClass = ()=> ajax({
  url:'/api/getClassList'
})
export const getCateList = ()=> ajax({
  url:'/api/getCateList'
})
//值得买接口
export const getBuyList = ()=> ajax({
  url:'/foo/topic/v1/know/navWap.json'
})
export const getWaterFall = () => ajax({
  url:'/foo/topic/v1/find/recManual.json'
})
export const getWaterNext = (page,size) => ajax({
  url:`/foo/topic/v1/find/recAuto.json?page=${page}&size=${size}`
})