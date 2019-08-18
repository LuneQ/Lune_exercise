<template>
    <div class="goodsInfo">
        <!--商品轮播图区域-->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swiper :lunboList="detailImg"　:heightClass="height100P"></swiper>
                </div>
            </div>
        </div>
        <!--商品购买区域-->
        <div class="mui-card">
            <div class="mui-card-header"><b>{{msg.name}}</b></div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">价格：{{msg.price}}</p>
                    <span class="buyCount">购买数量：</span>
                    <numberBox></numberBox>
                    <div class="btn">
                        <mt-button  size="small" class="soonBuy">立即购买</mt-button>
                        <mt-button  size="small" class="addCart">加入购物车</mt-button>
                    </div>
                </div>
            </div>
            <!--<div class="mui-card-footer">页脚</div>-->
        </div>
        <!--商品参数区域-->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号：ROSE5467291</p>
                    <p>库存情况：{{msg.stock}}件</p>
                    <p>上架时间：2019-08-13</p>
                </div>
            </div>
            <div class="mui-card-footer">页脚</div>
        </div>
    </div>
</template>

<script>
    import swiper from '../subComments/swiper.vue'
    import numberBox from '../subComments/goodsInfo_numberbox.vue'
    export default{
        data:function(){
            return {
                pid:parseInt(this.$route.params.pid)-1,
                msg:'',
                detailImg:[],
                height100P:true
            }
        },
        created:function(){
            this.getInfo();
        },
        methods:{
            getInfo:function(){
                this.$http.get('src/data/product.json').then(function(result){
                    //console.log(result.body.products[this.pid])
                    this.msg = result.body.products[this.pid]
                    //console.log(this.detailImg);
                    result.body.products[this.pid].detailImage.forEach(item=>{
                        //console.log(item);
                        this.detailImg.push({"url":item})
                    })
                    console.log(this.detailImg)
                })
            }
        },
        components:{
            swiper:swiper,
            numberBox:numberBox
        }
    }
</script>

<style scoped>
    .goodsInfo{
        background: #eee;
        overflow: hidden;
    }
    .price{
        font-size:16px;
        font-weight:bold;
        color: #414141;
    }
    .buyCount{
        font-size: 16px;
    }
    .soonBuy,.addCart{
        margin-top:15px;
        border-radius:0;
    }
    .mint-button--default{
        box-shadow: 0 0 1px #414141;
    }
    .soonBuy{
        background: #414141 ;
        color: #ffffff;
        margin-right:10px;
    }
    .addCart{
        color: #414141;
        background: #ffffff ;
    }
</style>