<template>
  <section>
    <div class="cont">
      <dic class="cont_left">
        <p>地址：浙江省衢州市江山市贺村镇贺丽路6号</p>
        <p>电话：0570-4989090 <span style="padding-left: 20px">邮编：324100</span></p>
        <p>copyright 长期有效 浙江汇链科技有限公司</p>
        <p>统一社会信用代码：91330881MA29UP06XM</p>
      </dic>
      <dic class="cont_right">
        <img src="../../static/img/wei.jpg" alt="">
        <p>汇链官微</p>
      </dic>
    </div>
  </section>
</template>

<script>
    export default {
        name: "Foot",
        data() {
            return {}
        },
        methods: {}
    }
</script>

<style lang="less" scoped>
  section{
    width: 100%;
    height: 160px;
    background: #2F313F;
    padding: 30px 0 0;
    font-size: 14px;
    color: #fff;
    .cont{
      width: 1200px;
      height: 100%;
      margin: 0 auto;
      .cont_left{
        width: 50%;
        height: 100%;
        float: left;
        text-align: left;
        line-height: 30px;
      }
      .cont_right{
        width: 90px;
        float: right;
        text-align: center;
        img{
          margin-top: 10px;
          display: block;
          width: 100%;
        }
        p{
          line-height: 30px;
        }
      }
    }
  }
</style>
