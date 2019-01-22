<template>
  <section>
    <div class="banner">
      <img src="../../static/img/banner6.png" alt="">
    </div>
    <div class="content">
      <div class="content_top">
        <img src="../../static/img/terrace_top1.png" alt="">
      </div>
      <div class="content_box">
        <h3>公司三大品牌：门装宝新零售平台、三维家居商城、家装港咨询平台</h3>
        <div class="con_list reveal-right">
          <div class="con_list_left">
            <img src="../../static/img/terrace_01.png" alt="">
          </div>
          <div class="con_list_right">
            平台是一个以木门销售为主，以入户门、全屋定制、智能家居等建材家居销售为辅，为经销商、安装技师等注册会员提供包括厂家直销、线上下单、跟踪定制、物流跟单、技师抢单等一站式扁平化服务的智慧新零售平台。
          </div>
        </div>
        <div class="con_list reveal-left">
          <div class="con_list_left">
            <img src="../../static/img/terrace_02.png" alt="">
          </div>
          <div class="con_list_right">
            覆盖施工管理、家装设计到家居建材全品类销售的电商平台，将木门定制、三维可视化、互联网+虚拟现实、大数据、智能制造等概念创新的融合在一起。
          </div>
        </div>
        <div class="con_list reveal-right">
          <div class="con_list_left">
            <img src="../../static/img/terrace_03.png" alt="">
          </div>
          <div class="con_list_right">
            为装修业主准备了可供装修参考的装修设计、家装知识、材料知识、家具选购及保养知识、装修风水、装修资讯及装修促销活动等服务；为装修企业提供各种排名服务，为装修企业提供客户流量和资源等服务；定期举行全国性家装设计大赛、各种行业报告、会议和学术研讨等。
          </div>
        </div>
      </div>
      <div class="content_top">
        <img src="../../static/img/terrace_top2.png" alt="">
      </div>
      <img class="reveal-left" src="../../static/img/server_02.png" alt="">
      <img class="reveal-right" src="../../static/img/server_03.png" alt="">
      <img class="reveal-left" src="../../static/img/server_04.png" alt="">
      <img class="reveal-right" src="../../static/img/server_05.png" alt="">
    </div>
  </section>
</template>

<script>
    export default {
        name: "Service",
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
    padding-bottom: 50px;
    .banner{
      img{
        width: 100%;
      }
    }
    .content{
      width: 1200px;
      margin: 30px auto;
      .content_top{
        padding: 50px 0 20px;
        img{
          width: auto;
          margin: 0 auto;
        }
      }
      .content_box{
        width: 100%;
        h3{
          font-size: 24px;
          margin-bottom: 60px;
        }
        .con_list{
          width: 100%;
          height: 210px;
          overflow: hidden;
          margin-bottom: 40px;
          &:hover .con_list_left>img{
            transform: scale(1.2);
          }
          .con_list_left{
            width: 385px;
            height: 100%;
            float: left;
            overflow: hidden;
            img{
              width: 100%;
              transition: all 1s;
            }
          }
          .con_list_right{
            width: 785px;
            height: 100%;
            float: right;
            background: #efefef;
            box-sizing: border-box;
            padding: 15px 20px;
            line-height: 30px;
            text-align: left;
            font-size: 18px;
            letter-spacing: 1px;
          }
          img{
            width: 100%;
            display: block;
          }
        }
      }
    }
  }
</style>
