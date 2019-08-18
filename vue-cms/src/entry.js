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

// 1.4 导入自己的路由模块
import router from './router.js'
var vm = new Vue({
    el:'#app',
    render:c=> c(App),
    router//1.4 挂载自己的路由对象到Vue实例上
})