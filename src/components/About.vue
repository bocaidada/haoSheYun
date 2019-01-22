<template>
   <section>
      <div class="banner">
        <div>
          <img src="../../static/img/tit1.fw.png" alt="">
        </div>
      </div>
      <div class="content">
        <div class="content_left">
          <h4>关于豪舍云</h4>
          <div :class="{hit:tapNum == 0}" @click="change(0)">企业简介</div>
          <div :class="{hit:tapNum == 1}" @click="change(1)">企业文化</div>
          <div :class="{hit:tapNum == 2}" @click="change(2)">企业团队</div>
        </div>
        <div class="content_right">
          <div v-if="tapNum == 0" class="info">
            <h2>企业简介</h2>
            <div class="con">
              <img src="../../static/img/qiantai.png" alt="">
              浙江豪舍云科技有限公司是一家专注于家装物联网新零售技术平台开发和运营的创新型科技公司，公司总部位于杭州。平台以家居为切入点，为千家万户提供智能家居、家装服务、智能养老、家庭健康服务和新零售等服务。企业以互联网为依托，通过运用大数据、人工智能等先进技术手段，对商品的生产、流通与销售过程进行升级改造，进而重塑业态结构与生态圈，并对线上服务、线下体验以及现代物流进行深度融合的零售新模式，是中国当代新经济虚和实相结合新的商业模式。集合各个城市的装饰公司联合开通全国城市分站。为居民提供房产信息、设计师、装修资讯、绿色装修建材、绿色环保家居用品、楼盘户型、装修图片、装修招标、装修解答、免费量房以及个性化设计等内容及服务，全心全意为广大业主提供整体装修一站式服务。
              <br>公司现已在广州市白云区汇创意产业园和江山市工业园分别设立广州运营中心和智能家居生产研发基地。
              <br>公司也为客户提供大数据、可视化、智能化以及互联网平台技术服务，并提供区块链系统开发、公众号、APP、小程序等开发服务。
              <br>我们坚信，只有坚持不断的改革创新，勇于开拓，敢于突破，才能不断的在家装领域创造出更高的品质服务，才能使企业不断的飞跃踏上新的发展平台。
            </div>
          </div>
          <div v-if="tapNum == 1" class="info">
            <h2>企业文化</h2>
            <div class="con">
              <div class="label">
                <h5>豪舍云精神</h5>
                <p>因为坚持，所以卓越；因为真诚，所以腾飞！</p>
              </div>
              <div class="label">
                <h5>豪舍云理念</h5>
                <p>正直、爱心、创造、勤奋、奉献</p>
              </div>
              <div class="label">
                <h5>豪舍云核心价值观</h5>
                <p>我们以推动企业现代化进步为己任，用真诚的服务为客户带来无限商机</p>
                <p>我们用热情为员工创造一个快乐和谐、发展自我的广阔空间</p>
              </div>
              <div class="label">
                <h5>豪舍云愿景</h5>
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
