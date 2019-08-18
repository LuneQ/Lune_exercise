<template>
    <div class="photoInfoContainer">
        <h3>{{pInfo.name}}</h3>
        <p>预览次数:{{pInfo.click}}</p>
        <hr/>
        <!--<img :src="pInfo.url" alt=""/>-->
        <!--@close="handleClose"-->
        <vue-preview :slides="slide1" class="imgPrev" ></vue-preview>
        <br/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci at consequatur, delectus dolore dolorem expedita incidunt, ipsum iusto magni nobis non nostrum odit quidem quo rem saepe tempora tempore unde?</p>
        <hr/>
        {{$route.params.pid}}
    </div>

</template>

<script>
    export default{
        data:function(){
            return {
                pid:this.$route.params.pid,
                pInfo:'',
                slide1: [
//                    {
//                        src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
//                        msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
//                        alt: 'picture1',
//                        title: 'Image Caption 1',
//                        w: 600,
//                        h: 400
//                    },
//                    {
//                        src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
//                        msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
//                        alt: 'picture2',
//                        title: 'Image Caption 2',
//                        w: 1200,
//                        h: 900
//                    }
                ]
            }
        },
        created:function(){
            this.getImageInfo(this.pid);
            this.getThumbImage();
        },
        methods:{
            getImageInfo:function(n){
                this.$http.get('src/data/product.json').then(function(result){
                    //console.log(result.body.products[parseInt(this.pid)+1])
                    this.pInfo = result.body.products[parseInt(this.pid)-1];

                })
            },
            getThumbImage:function(){
                this.$http.get('src/data/product.json').then(function(result){
                    //获得图片的链接
                    result.body.thunbnail.forEach(item=>{
                        item.w = 300;
                        item.h = 300;
                        item.msrc = item.src;
                        //console.log(item)
                    });
                    //console.log(this.pInfo.url)
                    this.slide1 = result.body.thunbnail;
                    console.log(this.slide1)

                })
            }
        }
    }
</script>

<style scoped>
    .photoInfoContainer{
        text-align: center;
    }
    h3{
        color: #e4393c;
        padding: 5px;
        text-align:left;
    }

    p{
        font-size: 19px;
        text-align: left;
        padding: 5px;
    }

</style>