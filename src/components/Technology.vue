<template>
   <section>
      <div class="banner">
        <img :src="baseImg+'/terrace_ban.png'" alt="">
      </div>
      <div class="content">
        <!--<h2>服务内容SERVICE</h2>-->
        <img ondragstart="return false" v-for="(item,index) in dataInit" :key="index" :src="baseImg+item.path" alt="">
      </div>
   </section>
</template>

<script>
    export default {
        name: "Technology",
        data() {
            return {
              baseImg: this.$store.state.qiNiuServer,
              dataInit:[
                {path:'/technology_03.png'},
                {path:'/technology_05.png'},
                {path:'/technology_07.png'},
                {path:'/technology_08.png'},
                {path:'/technology_09.png'},
                {path:'/technology_12.png'},
                {path:'/technology_13.png'}
              ]
            }
        },
        methods: {

        }
    }
</script>

<style lang="less" scoped>
  section{
    .banner{
      img{
        width: 100%;
      }
    }
    .content{
      width: 1200px;
      margin: 0 auto 80px;
      box-sizing: border-box;
      position: relative;
      img{
        width: 100%;
        display: block;
      }
    }
  }
</style>
