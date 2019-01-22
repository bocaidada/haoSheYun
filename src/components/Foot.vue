<template>
  <section>
    <div class="cont">
      <dic class="cont_left">
        <p>地址：杭州市西湖区三墩镇灯彩街539号君尚国际广场A座1808室</p>
        <p>电话：0571-56205653 <span style="padding-left: 20px">邮编：310030</span></p>
        <p>copyright 2018-2048 浙江豪舍云科技有限公司</p>
        <p>统一社会信用代码：91330106MA2B09NH0B</p>
      </dic>
      <dic class="cont_right">
        <img src="../../static/img/wei.jpg" alt="">
        <p>豪舍云官微</p>
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
