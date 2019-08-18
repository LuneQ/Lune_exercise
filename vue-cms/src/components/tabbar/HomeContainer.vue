<template>
    <div>
        <!--<mt-swipe :auto="4000">-->
            <!--&lt;!&ndash;<mt-swipe-item>1</mt-swipe-item>&ndash;&gt;-->
            <!--&lt;!&ndash;<mt-swipe-item>2</mt-swipe-item>&ndash;&gt;-->
            <!--&lt;!&ndash;<mt-swipe-item>3</mt-swipe-item>&ndash;&gt;-->
            <!--<mt-swipe-item v-for="item in imgPath.links" :key="item.url"><img :src="item.url"></mt-swipe-item>-->
        <!--</mt-swipe>-->
        <swiper :lunboList="imgPath.links" :heightClass="height100P" :widthClass="width100P"></swiper>
        <!--<h1>{{imgPath}}</h1>-->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/home/newsList">
                <img src="../../images/menu1.png" alt=""/>
                <div class="mui-media-body">新品资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/home/photoList">
                <img src="../../images/menu2.png" alt=""/>
                <div class="mui-media-body">图片分享</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/home/goodsList">
                <img src="../../images/menu3.png" alt=""/>
                <div class="mui-media-body">商品购买</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                <img src="../../images/menu4.png" alt=""/>
                <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                <img src="../../images/menu5.png" alt=""/>
                <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                <img src="../../images/menu6.png" alt=""/>
                <div class="mui-media-body">联系我们</div></a></li>
        </ul>
    </div>
</template>

<script>
    import swiper from '../subComments/swiper.vue'

    export default{
        data:function(){
            return {
                imgPath:'ok',
                height100P:false,
                width100P:true
            }
        },
        components:{
            swiper:swiper
        },
        created:function(){
            this.getLunbo();
        },
        methods:{
            getLunbo:function(){
                this.$http.get('src/data/lunbo.json').then(function(result){
                    //console.log(result.body);
                    this.imgPath = result.body;
                })
            }
        }
    }
</script>

<style>
    .mint-swipe{
        height:200px;
        background: hotpink;
    }
    .mui-grid-view.mui-grid-9{
        background-color: #ffffff;
        border: none;
    }
    .mui-grid-view.mui-grid-9 img{
        width: 60px;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border: none;
    }
</style>