<template>
    <div class="goodsInfo">
        <!-- 小球-->
        <transition
                v-on:before-enter="beforeEnter"
                v-on:enter="enter"
                v-on:after-enter="afterEnter"
         >
            <div class="ball" v-show="ballFlag" ref="ball"></div>
        </transition>
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
                    <numberBox v-on:getCount="getSelectedCount"></numberBox>
                    <div class="btn">
                        <mt-button  size="small" class="soonBuy">立即购买</mt-button>
                        <mt-button  size="small" class="addCart" @click="addCart">加入购物车</mt-button>
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
            <!--<div class="mui-card-footer">页脚</div>-->
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
                height100P:true,
                ballFlag:false, //控制小球的隐藏和显示标识符
                selectedCount:1//用户选中的商品的数量
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
            },
            addCart:function(){
                this.ballFlag = !this.ballFlag
            },
            beforeEnter:function(el){
                el.style.transform = "translate(0,0)"
            },
            enter:function(el,done){
                el.offsetWidth;
                //获取小球在页面中的位置
                const ballPosition = this.$refs.ball.getBoundingClientRect();
                //获取购物车徽标的位置
                const badgePosition = document.getElementById('badge').getBoundingClientRect();
                //获得小球位移的位置
                const xDistance = badgePosition.left - ballPosition.left;
                const yDistance = badgePosition.top - ballPosition.top;
                //el.style.transform = "translate(100px,300px)";
                //el.style.transform = "translate("+xDistance+","+yDistance+")";
                el.style.transform = `translate(${xDistance}px,${yDistance}px)`;
                el.style.transition = "all 1s ease"
                done();//意味着要执行afterEnter函数
            },
            afterEnter:function(el){
                this.ballFlag = !this.ballFlag;
            },
            getSelectedCount:function(count){
                this.selectedCount = count;
                console.log(count)
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
    .ball{
        width:20px;
        height: 20px;
        background: red;
        border-radius: 50%;
        position: absolute;
        z-index: 99;
        top: 386px;
        left: 158px;
    }
</style>