<template>
    <div class="goods-container">
        <!--<router-link class="goods-item" v-for="item in productList"　:to="'/home/goodsInfo/'+item.pid" tag="div">-->
            <!--<img :src="item.url" alt=""/>-->
            <!--<div class="title">{{item.name}}</div>-->
            <!--<div class="info">-->
                <!--<p class="price">￥{{item.price}}</p>-->
                <!--<p class="sell">-->
                    <!--<span>热卖中</span>-->
                    <!--<span>剩50件</span>-->
                <!--</p>-->
            <!--</div>-->
        <!--</router-link>-->

        <div class="goods-item" v-for="item in productList" :key="item.pid" @click="goDetail(item.pid)">
            <img :src="item.url" alt=""/>
            <div class="title">{{item.name}}</div>
            <div class="info">
                <p class="price">￥{{item.price}}</p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩50件</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data:function(){
            return {
                productList:''
            }
        },
        created:function(){
            this.getProducts();
        },
        methods:{
            getProducts:function(){
                this.$http.get('src/data/product.json').then(result=>{
                    //console.log(result.body.products)
                    this.productList = result.body.products
                })
            },
            goDetail:function(n){
//                this.$router.push('/home/goodsInfo/'+n);
//                this.$router.push({path:'/home/goodsInfo/'+n})
                //
                this.$router.push({name:'ProductInfo',params:{pid:n}})
            }
        }
    }
</script>

<style scoped>
    .goods-container{
        display: flex;
        flex-wrap: wrap;
        padding: 8px;
        justify-content: space-between;
    }
    .goods-container .goods-item{
        width: 49%;
        border: 1px solid #333;
        box-shadow: 0 0 6px #333;
        margin-bottom:8px;
    }
    .goods-item img{
        width: 100%;
    }
    p{
        padding: 5px;
        margin:0;
    }
    .title{
        font-size: 14px;
        padding: 0 5px;
        font-weight: bold;
    }
    .info{
        background: #eee;
        color: #333;
    }
    p.sell{
        display: flex;
        justify-content: space-between;
    }
    .price{
        font-weight: bold;
        color: #e4393c;
    }
</style>