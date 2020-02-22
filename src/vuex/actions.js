import {
  getindexCateModule,
  getindexDatas,
  getClass,
  getCateList,
  getBuyList,
  getWaterFall,
  getWaterNext
} from '../api/index'
import {
  GETINDEXCATEMODULE,
  GETINDEXDATAS,
  GETCLASSLIST,
  GETCATELIST,
  GETBUYLIST,
  GETWATERFALLLIST,
  GETNEXTWATER
} from './mutation-type'
export default{
  async getIndexListAction({commit}){
    let result = await getindexCateModule()
    if(result.data.code === 0){
      commit(GETINDEXCATEMODULE,result.data.data)
    }
  },
  async gethotListAction({commit}){
    let result = await getindexDatas()
    if(result.data.code === 0){
      commit(GETINDEXDATAS,result.data.data)
    }  
  },
  async getClassListAction({commit}){
    let result = await getClass()
    commit(GETCLASSLIST,result.data.data.categoryL1List)
  },
  async getCateAction({commit}){
    let result = await getCateList()
    if(result.data.code === 0){
      commit(GETCATELIST,result.data.data)
    }
  },
  async getbuyListAction({commit}){
    let result = await getBuyList()
    commit(GETBUYLIST,result.data.data.navList)
  },
  async getWateFallAction({commit}){
    let result = await getWaterFall()
    commit(GETWATERFALLLIST,result.data.data[0].topics)
  },
  async getNextListAction({commit}){
    let result = await getWaterNext(1,1)
    console.log(result.data.data.result[0].topics)
    commit(GETNEXTWATER,result.data.data.result[0].topics)
  }
}