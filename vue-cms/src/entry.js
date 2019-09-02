/**
 * Created by Administrator on 2019/7/20.
 */
//1.1 导入Vue
import Vue from 'vue';
//1.2 导入路由的包
import VueRouter from 'vue-router';
//1.3 安装路由
Vue.use(VueRouter)

//2.1 导入vue-resource
import VueResource from 'vue-resource'
//2.2 安装vue-resource
Vue.use(VueResource)

//import 'mint-ui/lib/style.min.css'
//import { Header,Swipe, SwipeItem,Button,Lazyload } from 'mint-ui';
//Vue.component(Header.name, Header);
//Vue.component(Swipe.name, Swipe);
//Vue.component(SwipeItem.name, SwipeItem);
//Vue.component(Button.name, Button);
//Vue.use(Lazyload);

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import App from './App.vue';
Vue.use(MintUI)

import VuePreview from 'vue-preview'
// defalut install
Vue.use(VuePreview)

//导入MUI的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//导入全局样式
import './css/index.css'

//import mui from './lib/mui/js/mui.js'
import Vuex from 'vuex';
Vue.use(Vuex)

var car = JSON.parse(localStorage.getItem('cart'))||[]
var store = new Vuex.Store({
    state:{
        //购物车：商品id,图片,价格，数量，是否被选中
        cart:car
    },
    mutations:{
        //点击加入购物车，把商品信息，保存到store中
        addToCart:function(state,goodsInfo){
            // 如果购物车中已经有对应的商品，只需要更新数量
            // 如果没有，就直接把goodsInfo  push 到cart中
            var flag = false //假设购物车中没有找到对应的商品
            state.cart.some(item=>{
                if(item.pid == goodsInfo.pid){
                    item.count += parseInt(goodsInfo.count);
                    flag = true
                    return true
                }
            })
            if(flag==false){
                state.cart.push(goodsInfo)
            }

            //当更新cart之后，把cart数组存储到本地的 localStorge 中
            localStorage.setItem('cart',JSON.stringify(state.cart))
        }
    },
    getters:{
        getAllCount:function(state){
            var sum = 0;
            state.cart.forEach(item=>{
                sum += parseInt(item.count)
            })
            return sum
        }
    }
})
// 1.4 导入自己的路由模块
import router from './router.js'
var vm = new Vue({
    el:'#app',
    render:c=> c(App),
    router,//1.4 挂载自己的路由对象到Vue实例上
    store
})