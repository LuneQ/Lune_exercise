<template>
    <div>
        <mt-swipe :auto="4000">
            <!--<mt-swipe-item>1</mt-swipe-item>-->
            <!--<mt-swipe-item>2</mt-swipe-item>-->
            <!--<mt-swipe-item>3</mt-swipe-item>-->

            <mt-swipe-item v-for="item in lunboList" :key="item.url" :class="{height100P:heightClass,width100P:widthClass}"><img :src="item.url"></mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    export default{
        props:["lunboList","heightClass","widthClass"]
    }
</script>

<style scoped>
    .mint-swipe-items-wrap > div{
        text-align: center;
        background: #E3E3E3;
    }
    .height100P img{
        height: 100%;
    }
    .width100P img{
        width:100%;
        height:100%;
    }
</style>