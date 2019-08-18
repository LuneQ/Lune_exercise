<template>
        <div>
            <h3>发表评论</h3>
            <hr/>
            <textarea placeholder="请输入要评论的内容(最多120个字符)" maxlength="120" v-model="myComment"></textarea>
            <mt-button type="primary" size="large" @click="sendComment()">提交评论</mt-button>
            <h4>用户评论:</h4>
            <ul class="mui-table-view">
                <li class="mui-table-view-cell mui-media" v-for="item in userComments" :key="item.id">
                    <div class="title">
                        第{{item.id}}楼&nbsp;&nbsp;{{item.userName}}&nbsp;&nbsp;{{item.time}}
                    </div>
                    <div class="commentDetail">
                        {{item.comment}}
                    </div>
                </li>
            </ul>
        </div>
</template>

<script>
    export default{
        data:function(){
            return {
                userComments:null,
                myComment:''
            }
        },
        created:function(){
            this.getComments();
        },
        methods:{
            getComments:function(){
                this.$http.get('src/data/comments.json').then(function(result){
                    //console.log(result.body)
                    this.userComments = result.body.comments;
                })
            },
            sendComment:function(){
                this.userComments.unshift({
                    "id":9,
                    "userName":"zyz",
                    "comment":this.myComment,
                    "time":Date.now()
                })
            }
        }
    }
</script>

<style scoped>
    div.title{
        font-size: 12px;
        color: #0062cc;
    }
    div.commentDetail{
        font-size: 13px;
        color: #2e2e2e;
        padding-top: 5px;
    }
</style>