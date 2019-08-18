<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
                <router-link :to="'/home/newsInfo/'+item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.url">
                    <div class="mui-media-body">
                        <h1>{{item.title}}</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间：{{item.time}}</span>
                            <span>点赞次数：{{item.zan}}</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default{
        data:function(){
            return {
                newsList:null
            }
        },
        created:function(){
            this.getNews();
        },
        methods:{
            getNews:function(){
                this.$http.get('src/data/newsList.json').then(function(result){
                    console.log(result.body)
                    this.newsList = result.body.newsList
                })
            }
        }
    }
</script>

<style scoped>
    .mui-table-view h1{
        font-size: 15px;
    }
    .mui-ellipsis{
        display: flex;
        color: #0062cc;
        font-size: 12px;
        justify-content: space-between;
    }
</style>