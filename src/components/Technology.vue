<template>
   <section>
      <div class="banner">
        <img src="../../static/img/terrace_ban.png" alt="">
      </div>
      <div class="content">
        <!--<h2>服务内容SERVICE</h2>-->
        <img src="../../static/img/technology_03.png" alt="">
        <img src="../../static/img/technology_05.png" alt="">
        <img src="../../static/img/technology_07.png" alt="">
        <img src="../../static/img/technology_08.png" alt="">
        <img src="../../static/img/technology_09.png" alt="">
        <img src="../../static/img/technology_12.png" alt="">
        <img src="../../static/img/technology_13.png" alt="">
      </div>
   </section>
</template>

<script>
    export default {
        name: "Technology",
        data() {
            return {}
        },
        methods: {}
    }
</script>

<style lang="less" scoped>
  section{
    /*background: rgb(250,250,250);*/
    .banner{
      img{
        width: 100%;
      }
    }
    .content{
      width: 1200px;
      margin: 0 auto 80px;
      /*padding: 20px 0 50px;*/
      box-sizing: border-box;
      /*border-top: 4px solid #efefef;*/
      position: relative;
      /*&:before{*/
        /*display: block;*/
        /*content: '';*/
        /*height: 4px;*/
        /*width: 200px;*/
        /*background: #408CD2;*/
        /*position: absolute;*/
        /*left: 0;*/
        /*top: -4px;*/
      /*}*/
      /*h2{*/
        /*text-align: left;*/
        /*!*color: #408CD2;*!*/
      /*}*/
      img{
        width: 100%;
        display: block;
        /*margin: 40px 0;*/
      }
    }
  }
</style>
