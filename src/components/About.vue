<template>
   <section>
      <div class="banner">
        <div>
          <img src="../../static/img/tit1.fw.png" alt="">
        </div>
      </div>
      <div class="content">
        <div class="content_left">
          <h4>关于汇链</h4>
          <div :class="{hit:tapNum == 0}" @click="change(0)">企业简介</div>
          <div :class="{hit:tapNum == 1}" @click="change(1)">企业文化</div>
          <div :class="{hit:tapNum == 2}" @click="change(2)">企业团队</div>
        </div>
        <div class="content_right">
          <div v-if="tapNum == 0" class="info">
            <h2>企业简介</h2>
            <div class="con">
              <img src="../../static/img/qiantai.png" alt="">
              浙江汇链科技有限公司，提供从木门产品设计、原材料集中采购、智能制造、新零售、物流安装到供应链金融服务的全产业链服务。用管理、技术、交易、金融形成产业数字竞争力，打通木门产业链的上下游，打造木门产业生态运营能力，致力于为全国木业企业提供上游原材料集中采购服务，木制产品智能设计服务，经销商销售、一门多业及售后支持服务。
              <br>公司成立了中国木门产业互联网设计研究院，开发了异地协同设计系统，建设网上设计成果交易市场体系，打通木门智能制造ERP、MES系统，对接工业互联网大数据平台，基于iAD（数字化建筑设计）开发木门产品云设计系统，设计应用平台、标准件库等灵活部署在云桌面，为全国木门企业提供随时随地接入的、安全可靠的云设计方案。
            </div>
          </div>
          <div v-if="tapNum == 1" class="info">
            <h2>企业文化</h2>
            <div class="con">
              <div class="label">
                <h5>汇链精神</h5>
                <p>因为坚持，所以卓越；因为真诚，所以腾飞！</p>
              </div>
              <div class="label">
                <h5>汇链理念</h5>
                <p>正直、爱心、创造、勤奋、奉献</p>
              </div>
              <div class="label">
                <h5>汇链核心价值观</h5>
                <p>我们以推动企业现代化进步为己任，用真诚的服务为客户带来无限商机</p>
                <p>我们用热情为员工创造一个快乐和谐、发展自我的广阔空间</p>
              </div>
              <div class="label">
                <h5>汇链愿景</h5>
                <p>将豪舍云打造成世界木业服务行业领军企业之一</p>
              </div>
            </div>
          </div>
          <div v-if="tapNum == 2" class="info">
            <h2>专业团队</h2>
            <div class="con">
              <div class="team">
                <img src="../../static/img/tuandui_01.png" alt="">
                <p>公司技术团队由年轻充满朝气的网站设计、JAVA、前端软件开发工程师，UI、APP软件开发工程师组成，80%以上为本科以上学历，拥有多年的网站策划、网站建设、APP开发、系统维护经验，包括网页设计、专业美工、网页制作、编程、专业翻译、方案策划、网络咨询等。主要项目负责人，经过专业的项目管理培训，有着极其丰富的项目管理经验和工程开发经验。为企业量身定制了各类大中小型网站开发方案，顶尖的设计开发团队是我们为客户提供一流服务品质的充分保证。</p>
                <img style="width: 100%;margin-top: 30px" src="../../static/img/tuandui_02.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
   </section>
</template>

<script>
    export default {
        name: "About",
        data() {
            return {
              tapNum: 0,
            }
        },
        methods: {
          change(index) {
            this.tapNum = index
          }
        }
    }
</script>

<style lang="less" scoped>
  section{
    width: 100%;
    .banner{
      height: 500px;
      background: url("../../static/img/about_01.png") no-repeat center/cover;
      div{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.1);
        position: relative;
        img{
          width: auto;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: 30%;
        }
      }
    }
    .content{
      width: 1200px;
      margin: 80px auto;
      overflow: hidden;
      letter-spacing: 1px;
      .content_left{
        width: 200px;
        text-align: center;
        height: 300px;
        float: left;
        h4{
          width: 100%;
          height: 60px;
          line-height: 60px;
          background: #408CD2;
          color: #fff;
          letter-spacing: 1px;
        }
        div{
          height: 60px;
          line-height: 60px;
          /*background: #efefef;*/
          color: #333;
          border-bottom: 2px solid #408CD2;
          cursor: pointer;
          &:hover{
            background: #efefef;
            color: #408CD2;
          }
        }
        .hit{
          background: #efefef;
          color: #408CD2;
        }
      }
      .content_right{
        width: 77%;
        float: right;
        text-align: left;
        .info{
          width: 100%;
          h2{
            line-height: 60px;
            font-size: 24px;
            color: #408CD2;
            margin-bottom: 10px;
          }
          .con{
            width: 100%;
            line-height: 32px;
            img{
              width: auto;
              display: inline;
              vertical-align: top;
              margin: 0 30px 10px 0;
              float: left;
            }
            .label{
              margin-bottom: 40px;
              h5{
                font-size: 18px;
              }
            }
            .team{
              width: 100%;
              p{
                line-height: 38px;
              }
            }
          }
        }
      }
    }
  }
</style>
