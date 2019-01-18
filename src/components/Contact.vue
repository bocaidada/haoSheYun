<template>
  <section>
    <div id="lp_map"></div>
    <div class="card">
      <h1>联系我们</h1>
      <div>
        <p>公司：<span>浙江豪舍云科技有限公司</span></p>
        <p>电话：<span>0571-56205653</span></p>
        <p>地址：<span>杭州市西湖区三墩镇灯彩街539号君尚国际广场A座1808室 </span></p>
        <img src="../../static/img/kefu.jpg" alt="">
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "Contact",
        data() {
            return {

            }
        },
        mounted() {
          let map = new BMap.Map("lp_map");
          map.enableScrollWheelZoom(true); //启用滚轮放大缩小，默认禁用
          map.enableContinuousZoom(true); //启用地图惯性拖拽，默认禁用
          let point = new BMap.Point(120.0779604696,30.3288810170);
          map.centerAndZoom(point,18);
          var mk = new BMap.Marker(point);
          map.addOverlay(mk);
          map.panTo(point);
        },
        methods: {}
    }
</script>

<style lang="less" scoped>
  section{
    width: 100%;
    position: relative;
    #lp_map{
      height: 92vh;
    }
    .card{
      width: 576px;
      height: 455px;
      background: #fff;
      position: absolute;
      top: 15%;
      right: 10%;
      box-shadow: 3px 3px 46px 3px hsla(22,7%,48%,.15);
      h1{
        width: 100%;
        text-align: center;
        height: 80px;
        line-height: 80px;
        font-size: 32px;
        color: #fff;
        background: #333;
        letter-spacing: 1px;
        margin-bottom: 10px;
      }
      div{
        width: 100%;
        height: 340px;
        padding: 15px 30px;
        box-sizing: border-box;
        overflow: hidden;
        p{
          line-height: 35px;
          font-size: 18px;
          color: #999;
          text-align: left;
          span{
            color: #333;
          }
        }
        img{
          width: 100%;
          margin-top: 15px;
        }
      }
    }
  }
</style>
