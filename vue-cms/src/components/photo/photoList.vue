<template>
    <div>
        <!--顶部滑动条区域-->
        <div class="mui-content">
            <div id="slider" class="mui-slider">
                <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                    <div class="mui-scroll">
                        <a :class="['mui-control-item',item.id=='001' ? 'mui-active':'']" @click="getType(item.id)" v-for="item in photoList" :key="item.id">
                            {{item.type}}
                        </a>
                    </div>
                </div>

            </div>
        </div>
        <!--图片列表区域-->
        <ul class="image_list">
            <li v-for="item in exactList" :key="item.url">
                <router-link :to="'/home/photoInfo/'+item.pid">
                    <img v-lazy="item.url">
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import '../../lib/mui/js/mui.js'
    import '../../lib/mui/js/webviewGroup.js'
    export default{
        data:function(){
            return {
                //所有图片的分类数组
                photoList:'',
                //具体分类下的图片
                exactList:''
            }
        },
        created:function(){
            this.getImages();
            this.getType('001');
        },
        methods:{
            getImages:function(){
                this.$http.get('src/data/imageType.json').then(function(result){
                    //console.log(result.body.imageList)
                    this.photoList = result.body.imageList
                })
            },
            getType:function(type){
                if(type == '001'){
                    this.$http.get('src/data/imageTypeList_01.json').then(function(result){
                        console.log(result.body.imageList);
                        this.exactList = result.body.imageList;
                    })
                }else if(type == '002'){
                    this.$http.get('src/data/imageTypeList_02.json').then(function(result){
                        console.log(result.body.imageList)
                        this.exactList = result.body.imageList;
                    })
                }else if(type == '003'){
                    this.$http.get('src/data/imageTypeList_03.json').then(function(result){
                        console.log(result.body.imageList)
                        this.exactList = result.body.imageList;
                    })
                }else{
                    this.$http.get('src/data/imageTypeList_04.json').then(function(result){
                        console.log(result.body.imageList)
                        this.exactList = result.body.imageList;
                    })
                }

            }
        }
    }
</script>

<style scoped>
    * {
        touch-action: pan-y;
    }
    img[lazy=loading] {
        width: 250px;
        height: 250px;
        margin: auto;
    }
    .image_list{
        padding: 0;
        margin:0;
        list-style: none;
        padding: 10px;
        padding-bottom: 0;

    }
    .image_list li{
        margin-bottom: 10px;
        background:#b5d592;
        text-align: center;
        box-shadow: 0 0 6px #eee;
    }
    .image_list img{
        width: 90%;
    }
</style>