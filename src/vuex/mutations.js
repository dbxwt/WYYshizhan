import {
  GETINDEXCATEMODULE,
  GETINDEXDATAS,
  GETUSERINFO,
  DELETEUSER,
  GETCLASSLIST,
  GETCATELIST,
  GETBUYLIST,
  GETWATERFALLLIST,
  GETNEXTWATER
} from './mutation-type'
export default {
  [GETINDEXCATEMODULE](state,datas){
    state.navList = datas
  },
  [GETINDEXDATAS](state,datas){
    state.hotList = datas
  },
  [GETUSERINFO](state,username){
    state.username = username
    console.log(username)
  },
  [DELETEUSER](state){
    delete state.user
  },
  [GETCLASSLIST](state,data){
    state.classList = data
  },
  [GETCATELIST](state,data){
    state.cateList = data
  },
  [GETBUYLIST](state,data){
    state.buyList = data
  },
  [GETWATERFALLLIST](state,data){
    state.waterFall = data
  },
  [GETNEXTWATER](state,data){
    state.waterFall.push(...data)
  }
  
}