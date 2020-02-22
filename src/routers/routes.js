import Home from '../pages/Home/Home.vue'
import Class from '../pages/Class/Class.vue'
import Personal from '../pages/Personal/Personal.vue'
import Tobuy from '../pages/Tobuy/Tobuy.vue'
import ShopCar from '../pages/ShopCar/ShopCar.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'
export default [
  {
    path:'/home',
    component:Home,
    meta:{
      isShow:true
    }
  },
  {
    path:'/class',
    component:Class,
    meta:{
      isShow:true
    }
  },
  {
    path:'/personal',
    component:Personal,
    meta:{
      isShow:true
    }
  },
  {
    path:'/tobuy',
    component:Tobuy,
    meta:{
      isShow:true
    }
  },
  {
    path:'/shopCar',
    component:ShopCar,
    meta:{
      isShow:true
    }
  },
  {
    path:'/search',
    component:Search,
    meta:{
      isShow:false
    }
  },
  {
    path:'/login',
    component:Login,
    meta:{
      isShow:false
    }
  },
  {
    path:'',
    redirect: '/home'
  },
 
 
]