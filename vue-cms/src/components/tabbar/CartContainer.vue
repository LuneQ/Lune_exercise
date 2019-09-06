<template>
    <div class="cartContainer">
        <div class="good-list">
            <!-- 商品列表区域-->
            <div class="mui-card" v-for="(good,i) in goodsList" :key="good.src">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <mt-switch v-model="$store.getters.getGoodsSelectedStatus[good.pid]" @change="updateSelectedStatus(good.pid,$store.getters.getGoodsSelectedStatus[good.pid])"></mt-switch>
                        <img :src="good.src" alt=""/>
                        <div class="info">
                            <h4>{{good.name}}</h4>
                            <p>
                                <span class="price">￥{{good.price}}</span>
                                <numberBox :initCount="$store.getters.getGoodsCount[good.pid]" :goodsId="good.pid"></numberBox>
                                <a href="#" @click.prevent="remove(good.pid,i)">删除</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <p>{{$store.getters.getGoodsSelectedStatus}}</p>
        <!-- 商品结算区域-->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner jiesuan">
                    <div class="left">
                        <p>总计（不含运费）</p>
                        <p>已勾选商品<span>{{$store.getters.getSelectedCountandMoney.count}}</span>件，总价：<span>￥{{$store.getters.getSelectedCountandMoney.total}}</span></p>
                    </div>
                    <mt-button type="danger">去结算</mt-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import numberBox from '../subComments/cart_numberbox.vue'
    export default{
        data:function(){
            return {
                goodsList:[]
            }
        },
        components:{
            numberBox:numberBox
        },
        created:function(){
            this.getGoodsList();
        },
        methods:{
            getGoodsList:function(){
                this.goodsList = this.$store.state.cart;
                //console.log(this.goodsList)
            },
            remove:function(id,index){
                //点击删除，把商品从store中根据id删除，同时，根据Index，来删除对应的组件
                this.goodsList.splice(index,1);
                //this.$store.commit('removeFromCart',id)
            },
            updateSelectedStatus:function(pid,val){
                console.log(pid + '-----' + val)
                this.$store.commit("updateSelectedStatus",{pid:pid,selected:val})
            }
        }
    }
</script>

<style scoped>
    .cartContainer{
        background: #f2f2f2;
        overflow: hidden;
    }
    .cartContainer .good-list .mui-card-content-inner{
        display: flex;
        align-items: center;
    }
    .cartContainer .good-list img{
        width: 60px;
        background: #f2f2f2;
        margin: 0 5px;
    }
    .cartContainer .good-list .info{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .cartContainer .good-list .info .price{
        color: red;
        font-weight: bold;
    }
    .left p span{
        color:red;
        font-weight: bold;
        font-size: 16px;
    }
    .jiesuan{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>