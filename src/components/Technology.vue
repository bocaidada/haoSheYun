<template>
   <section>
      <div class="banner">
        <img src="../../static/img/server_01.jpg" alt="">
      </div>
      <div class="content">
        <!--<h2>服务内容SERVICE</h2>-->
        <img src="../../static/img/server_02.png" alt="">
        <img src="../../static/img/server_03.png" alt="">
        <img src="../../static/img/server_04.png" alt="">
        <img src="../../static/img/server_05.png" alt="">
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
    .banner{
      img{
        width: 100%;
      }
    }
    .content{
      width: 1200px;
      margin: 50px auto 80px;
      padding: 20px 0 50px;
      box-sizing: border-box;
      border-top: 4px solid #efefef;
      position: relative;
      &:before{
        display: block;
        content: '';
        height: 4px;
        width: 200px;
        background: #408CD2;
        position: absolute;
        left: 0;
        top: -4px;
      }
      h2{
        text-align: left;
        /*color: #408CD2;*/
      }
      img{
        width: 100%;
        display: block;
        /*margin: 40px 0;*/
      }
    }
  }
</style>
