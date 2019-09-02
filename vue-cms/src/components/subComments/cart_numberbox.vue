<template>
    <div class="mui-numbox" data-numbox-min='1' style="height: 25px">
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
        },
        methods:{
            countChanged:function(){
                //this.$emit("getCount",parseInt(this.$refs.numBox.value))
            }

        }
    }
</script>

<style scoped>

</style>