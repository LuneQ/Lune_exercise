<template>
    <div>
        <h1>这是{{id}}的详情页</h1>

        <h2>---名称---</h2>
        <hr/>
        <img src="../../images/2-1.png" alt=""/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet asperiores deleniti, dignissimos dolorum ex exercitationem in laborum quia similique totam vel voluptates voluptatibus! Magni officia placeat ratione sapiente suscipit.
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur commodi consequuntur dicta earum esse, incidunt iste magni, molestiae necessitatibus nostrum placeat quaerat recusandae. Commodi explicabo optio quae quaerat quia.</span><span>Ab accusamus adipisci magni numquam odio quisquam quod soluta vitae. Deserunt iusto omnis provident reiciendis repellat velit! Aspernatur dolores eligendi error ipsum obcaecati officiis repellendus. Deleniti eos nesciunt omnis quod.</span><span>Asperiores beatae maxime pariatur placeat qui. Aliquid aperiam esse facilis illo iste, magni, modi molestiae officiis perspiciatis quae sed ullam. Assumenda atque aut consequatur eaque enim explicabo, ratione similique tempora?</span></p>
        <comment-box></comment-box>
    </div>
</template>

<script>
    import comments from '../subComments/comments.vue'
    export default{
        data:function(){
            return {
                id:this.$route.params.id
            }
        },
        components:{
            "comment-box":comments
        }
    }
</script>

<style scoped>
    p{
        padding: 5px;
    }
</style>