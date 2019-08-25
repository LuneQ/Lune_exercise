<template>
        <div class="mui-numbox" data-numbox-min='1'>
            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
            <input id="test" class="mui-input-numbox" type="number" value="1" @change="countChanged" ref="numBox"/>
            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
        </div>
</template>

<script>
    import mui from '../../lib/mui/js/mui.js'
    export default {
        mounted:function(){
            mui(".mui-numbox").numbox();
            console.log(this.maxNumber)
        },
        props:["maxNumber"],
        watch:{
            //属性监听
            "maxNumber":function(newVal,oldVal){
                mui(".mui-numbox").numbox().setOption('max',newVal);
            }
        },
        methods:{
            countChanged:function(){
                this.$emit("getCount",parseInt(this.$refs.numBox.value))
            }

        }
    }
</script>

<style scoped>

</style>