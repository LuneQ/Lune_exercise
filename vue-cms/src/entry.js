/**
 * Created by Administrator on 2019/7/20.
 */
//1.1 ����Vue
import Vue from 'vue';
//1.2 ����·�ɵİ�
import VueRouter from 'vue-router';
//1.3 ��װ·��
Vue.use(VueRouter)

//2.1 ����vue-resource
import VueResource from 'vue-resource'
//2.2 ��װvue-resource
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

//����MUI����ʽ
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//����ȫ����ʽ
import './css/index.css'

//import mui from './lib/mui/js/mui.js'
import Vuex from 'vuex';
Vue.use(Vuex)

var car = JSON.parse(localStorage.getItem('cart'))||[]
var store = new Vuex.Store({
    state:{
        //���ﳵ����Ʒid,ͼƬ,�۸��������Ƿ�ѡ��
        cart:car
    },
    mutations:{
        //������빺�ﳵ������Ʒ��Ϣ�����浽store��
        addToCart:function(state,goodsInfo){
            // ������ﳵ���Ѿ��ж�Ӧ����Ʒ��ֻ��Ҫ��������
            // ���û�У���ֱ�Ӱ�goodsInfo  push ��cart��
            var flag = false //���蹺�ﳵ��û���ҵ���Ӧ����Ʒ
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

            //������cart֮�󣬰�cart����洢�����ص� localStorge ��
            localStorage.setItem('cart',JSON.stringify(state.cart))
        },
        updateGoodsInfo:function(state,goodsInfo){
            state.cart.some(item=>{
                if(item.pid == goodsInfo.pid){
                    item.count = parseInt(goodsInfo.count)
                    return true
                }
            })
            //������cart֮�󣬰����µ�cart����洢�����ص� localStorge ��
            localStorage.setItem('cart',JSON.stringify(state.cart))
        },
        removeFromCart:function(state,pid){
            state.cart.some((item,i)=>{
                if(item.pid == pid){
                    state.cart.splice(i,1)
                    return true
                }
            })
            //������cart֮�󣬰����µ�cart����洢�����ص� localStorge ��
            localStorage.setItem('cart',JSON.stringify(state.cart))
        },
        updateSelectedStatus:function(state,info){
            state.cart.some((item,i)=>{
                if (item.pid == info.pid){
                    item.selected = info.selected
                    return true;
                }
            })
            //������cart֮�󣬰����µ�cart����洢�����ص� localStorge ��
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
        },
        getGoodsCount:function(state){
            var o = {};
            state.cart.forEach(item=>{
                o[item.pid] = item.count
            })
            return o;
        },
        getGoodsSelectedStatus:function(state){
            var o = {}
            state.cart.forEach(item=>{
                o[item.pid] = item.selected;
            })
            return o;
        },
        getSelectedCountandMoney:function(state){
            var o = {
                count:0,
                total:0
            }
            state.cart.forEach(item=>{
                if(item.selected){
                    o.count += parseInt(item.count);
                    o.total += parseInt(item.count)*parseInt(item.price)
                }
            })
            return o;
        }
    }
})
// 1.4 �����Լ���·��ģ��
import router from './router.js'
var vm = new Vue({
    el:'#app',
    render:c=> c(App),
    router,//1.4 �����Լ���·�ɶ���Vueʵ����
    store
})