<template>
    <div class="cartContainer">
        <div class="good-list">
            <!-- 商品列表区域-->
            <div class="mui-card" v-for="good in goodsList" :key="good.src">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <mt-switch></mt-switch>
                        <img :src="good.src" alt=""/>
                        <div class="info">
                            <h4>{{good.name}}</h4>
                            <p>
                                <span class="price">￥{{good.price}}</span>
                                <numberBox></numberBox>
                                <a href="#">删除</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 商品结算区域-->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>aaa</p>
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
                console.log(this.goodsList)
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

</style>