<template>
    <div class="mui-numbox" data-numbox-min='1' style="height: 25px">
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" :value="initCount" @change="countChanged" ref="numBox"/>
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>

<script>
    import mui from '../../lib/mui/js/mui.js'
    export default {
        props:["initCount","goodsId"],
        mounted:function(){
            mui(".mui-numbox").numbox();
            //console.log(this.initCount)
            //console.log(this.goodsId)
        },
        methods:{
            countChanged:function(){
                this.$store.commit("updateGoodsInfo",{pid:this.goodsId,count:this.$refs.numBox.value})
            }

        }
    }
</script>

<style scoped>

</style>