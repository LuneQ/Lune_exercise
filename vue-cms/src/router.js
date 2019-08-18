/**
 * Created by Administrator on 2019/7/20.
 */
import VueRouter from 'vue-router'

import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import CartContainer from './components/tabbar/CartContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'

import NesList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import PhotoList from './components/photo/photoList.vue'
import PhotoInfo from './components/photo/photoInfo.vue'
import GoodsList from './components/goodsList/goodsList.vue'
import GoodsInfo from './components/goodsList/goodsInfo.vue'

var router = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:HomeContainer},
        {path:'/member',component:MemberContainer},
        {path:'/cart',component:CartContainer},
        {path:'/search',component:SearchContainer},
        {path:'/home/newsList',component:NesList},
        {path:'/home/newsInfo/:id',component:NewsInfo},
        {path:'/home/photoList',component:PhotoList},
        {path:'/home/photoInfo/:pid',component:PhotoInfo},
        {path:'/home/goodsList',component:GoodsList},
        {path:'/home/goodsInfo/:pid',component:GoodsInfo,name:'ProductInfo'}
    ],
    linkActiveClass:'mui-active'
})

export default router;
