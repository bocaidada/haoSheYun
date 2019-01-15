<template>
  <section>
    <div class="banner">
      <img src="../../static/img/news.jpg" alt="">
    </div>
    <div class="news_top">
      <h1>新闻动态</h1>
    </div>
    <ul class="newBox">
      <router-link tag="li" to="/" class="reveal-left">
        <div class="imgBox">
          <img src="../../static/img/new_list.jpg" alt="">
        </div>
        <div class="cont"></div>
        <div class="up_time"></div>
      </router-link>
      <li class="reveal-right"></li>
      <li class="reveal-left"></li>
      <li class="reveal-right"></li>
      <li class="reveal-left"></li>
      <li class="reveal-right"></li>
    </ul>
  </section>
</template>

<script>
    export default {
        name: "News",
        data() {
            return {}
        },
        mounted() {
          this.$reveal('.reveal-left',false,'left');
          this.$reveal('.reveal-right',false,'right')
        },
        methods: {}
    }
</script>

<style lang="less" scoped>
  section{
    width: 100%;
    .banner{
      width: 100%;
      margin-bottom: 50px;
      img{
        width: 100%;
        display: block;
      }
    }
    .news_top{
      padding: 10px 0 30px;
      position: relative;
      border-bottom: 1px solid #efefef;
      margin-bottom: 20px;
      &::after{
        display: block;
        content: 'NEWS';
        background: #ff2b05;
        color: #fff;
        width: 60px;
        text-align: center;
        padding: 2px 0;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -10px;
      }
      h1{
        font-size: 48px;
        line-height: 60px;
      }
    }
    .newBox{
      width: 1200px;
      margin: 0 auto;
      padding: 50px 0;
      li{
        width: 100%;
        height: 170px;
        margin-bottom: 40px;
        background: #efefef;
        border-radius: 5px;
        overflow: hidden;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        .imgBox{
          width: 22%;
          border-radius: 5px;
          overflow: hidden;
          img{
            width: 100%;
            transition: all .8s;
          }
        }
        &:hover img{
          transform: scale(1.2);
        }
        .cont{
          width: 55%;
          height: 100%;
          background: gold;
        }
        .up_time{
          width: 18%;
          height: 100%;
          background: red;
        }
      }
    }
  }
</style>
