<template>
  <section class="content">
    <!--banner-->
    <div class="banner">
      <swiper :options="swiperOption" style="height: 100%">
        <swiper-slide v-for="(item,index) in bannerData" :key="index" :style="{background: 'url('+baseImg+item.img+') no-repeat center/cover'}">
          <!--<a style="display: block;width: 100%;height: 100%" v-if="item.url" :href="item.url" target="_blank"></a>-->
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <!--<div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>-->
        <!--<div class="swiper-button-next swiper-button-white" slot="button-next"></div>-->
      </swiper>
    </div>
    <div class="operation">
      <div class="operation_top">
        <h1>公司业务</h1>
      </div>
      <div class="operation_box">
        <router-link tag="div" to="/service" class="opera_list_left reveal-right">
          <div class="left">
            <h1>中国木门产品互联网设计研究院</h1>
            <h5>覆盖家装设计到家居建材全品类销售的电商平台</h5>
            <p>大数据、智能制造</p>
            <p>互联网+虚拟现实、VR参观浏览</p>
            <p>木门定制、三维可视化化技术融入生活</p>
            <p>覆盖施工管理、家装设计到家居建材全品类销售</p>
          </div>
          <div class="imgBox">
            <img :src="baseImg+'/sanWei.png'" alt="">
          </div>
        </router-link>
        <router-link tag="div" to="/service" class="opera_list_right reveal-left">
          <div class="imgBox">
            <img :src="baseImg+'/jiazhuang.png'" alt="">
          </div>
          <div class="right">
            <h1>木门产品设计和异地协同设计云服务平台</h1>
            <h5>为装修业主及装修企业提供家装资讯的服务平台</h5>
            <p>装修设计、家装知识</p>
            <p>材料选购，家具选购以及家具保养</p>
            <p>为装修企业提供各种排名服务以及客户流量和资源</p>
            <p>定期举行全国性家装设计大赛、各种行业报告、会议和学术研讨</p>
          </div>
        </router-link>
        <router-link tag="div" to="/service" class="opera_list_left reveal-right">
          <div class="left">
            <h1>木业机械设备市场</h1>
            <h5>专注销售门及关联产品的F2B新零售平台</h5>
            <p>个性化定制</p>
            <p>去中间商，厂家直销</p>
            <p>互联网+虚拟现实、VR真三维装修设计</p>
            <p>为经销商、安装技师等注册会员提供包括厂家直销、线上下单、跟踪定制、物流跟单、技师抢单等一站式扁平化服务</p>
          </div>
          <div class="imgBox">
            <img :src="baseImg+'/menZhuang.png'" alt="">
          </div>
        </router-link>
      </div>
    </div>
    <!--we can-->
    <div class="case">
      <h1>成功案例</h1>
      <h5>Our Cases List</h5>
      <div class="case_box">
        <router-link tag="div" to="/case" class="case_lst">
          <img src="http://cdn.xuanfengge.com/wp-content/themes/lee3.0/dist/img/feature/06.50599bb3.jpg" class="fo" alt="">
          <div class="to">
            <h1>时代峻峰is积分</h1>
          </div>
        </router-link>
        <router-link tag="div" to="/case" class="case_lst">
          <img src="http://cdn.xuanfengge.com/wp-content/themes/lee3.0/dist/img/feature/04.106fc8c0.jpg" class="fo" alt="">
          <div class="to"></div>
        </router-link>
        <router-link tag="div" to="/case" class="case_lst">
          <img src="http://cdn.xuanfengge.com/wp-content/themes/lee3.0/dist/img/feature/07.2f43931e.jpg" class="fo" alt="">
          <div class="to"></div>
        </router-link>
        <router-link tag="div" to="/case" class="case_lst">
          <img src="http://cdn.xuanfengge.com/wp-content/themes/lee3.0/dist/img/feature/01.503c5483.jpg" class="fo" alt="">
          <div class="to"></div>
        </router-link>
      </div>
    </div>
    <div class="server">
      <div class="server_top">
        <h1>我们能做到！</h1>
        <h5>What can do it!</h5>
      </div>
      <div class="server_bot">
        <div class="main">
          <div class="server_bot_top">
            <router-link tag="div" to="/business" class="server_bot_top_left reveal-left">
              <div>
                <h1>网站平台开发</h1>
                <p>
                  <span>企业官网设计</span>
                </p>
                <p>
                  <span>B2B、B2C商务平台开发</span>
                </p>
                <p>
                  <span>P2P金融平台开发</span>
                  <span>各行业门户平台开发</span>
                </p>
              </div>
              <img :src="baseImg+'/index_0401.png'" alt="">
            </router-link>
            <router-link tag="div" to="/business"  class="server_bot_top_right reveal-right">
              <img :src="baseImg+'/index_0402.png'" alt="">
              <div>
                <h1>APP开发</h1>
                <p>
                  <span>Android/IOS</span>
                </p>
                <p>
                  <span>功能型APP开发</span>
                </p>
                <p>
                  <span>商务型APP开发</span>
                  <span>社交型APP开发</span>
                </p>
              </div>
            </router-link>
          </div>
          <div class="server_bot_bot">
            <router-link tag="div" to="/business"  class="server_bot_top_left reveal-left">
              <div>
                <h1>后台管理系统开发</h1>
                <p>
                  <span>金融后台管理开发</span>
                </p>
                <p>
                  <span>企业后台管理系统开发</span>
                </p>
                <p>
                  <span>商务后台管理系统开发</span>
                </p>
              </div>
              <img :src="baseImg+'/index_0404.png'" alt="">
            </router-link>
            <router-link tag="div" to="/business"  class="server_bot_top_right reveal-right">
              <img :src="baseImg+'/index_0403.png'" alt="">
              <div>
                <h1>响应式HTML5网站</h1>
                <p>
                  <span>小程序</span>
                </p>
                <p>
                  <span>手机wap站</span>
                </p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="news">
      <div class="news_top">
        <h1>热门资讯</h1>
      </div>
      <div class="news_bot">
        <router-link v-for="(item,index) in newsListData" :key="index" tag="div" :to="{name:'News_detail',params:{id:index}}">
          <div>
            <img :src="baseImg+item.imgUrl" alt="">
          </div>
          <h2>{{item.title}}</h2>
          <p>{{item.info}}</p>
        </router-link>
      </div>
    </div>
    <div class="about">
      <div class="about_top">
        <h1>关于汇链</h1>
        <h5>Who are we?</h5>
      </div>
      <div class="about_bot">
        <router-link tag="div" to="/about" class="titleImg">
          <div class="h12">
            <h1>ABOUT</h1>
            <h2>浙江汇链科技有限公司</h2>
          </div>
        </router-link>
        <div class="textInfo">
          <p>
            浙江汇链科技有限公司，提供从木门产品设计、原材料集中采购、智能制造、新零售、物流安装到供应链金融服务的全产业链服务。用管理、技术、交易、金融形成产业数字竞争力，打通木门产业链的上下游，打造木门产业生态运营能力，致力于为全国木业企业提供上游原材料集中采购服务，木制产品智能设计服务，经销商销售、一门多业及售后支持服务。
          </p>
          <p>公司成立了中国木门产业互联网设计研究院，开发了异地协同设计系统，建设网上设计成果交易市场体系，打通木门智能制造ERP、MES系统，对接工业互联网大数据平台，基于iAD（数字化建筑设计）开发木门产品云设计系统，设计应用平台、标准件库等灵活部署在云桌面，为全国木门企业提供随时随地接入的、安全可靠的云设计方案。</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    // import scrollReveal from 'scrollreveal';
    export default {
        name: "Index",
        data() {
            return {
              baseImg: this.$store.state.qiNiuServer,
              // scrollReveal: scrollReveal(),
              swiperOption: {
                spaceBetween: 30,   //图片之间的间距
                loop: true,         //循环播放
                grabCursor: true,
                autoplay: {
                  delay: 5000,
                  disableOnInteraction: false
                },
                pagination: {   //轮播点
                  el: '.swiper-pagination',
                  dynamicBullets: true
                },
                navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev'
                }
              },
              bannerData:[
                {img:'/huilian_01.jpg',url:'http://www.baidu.com'},
                {img:'/huilian_02.jpg',url:'http://www.baidu.com'}
              ],
              newsListData:[
                {
                  imgUrl:'/news_02.jpg',
                  title:'入户门材质哪种好?',
                  info:'入户门在装修房屋的时候是很重要的，入户门的材质分为很多种'
                },{
                  imgUrl:'/news_03.jpg',
                  title:'防盗门防盗等级哪种好？好的防盗门怎么选？',
                  info:'人们生活水平不断的提高，财产安全的意识也在越来越强'
                },{
                  imgUrl:'/news_04.jpg',
                  title:'吊轨推拉门等各类推拉门优缺点',
                  info:'推拉门大大满足了现代人紧凑、集约的生活空间需求'
                }
              ]
            }
        },
        mounted() {
          this.$reveal('.reveal-left',true,'left');
          this.$reveal('.reveal-right',true,'right')
        },
        methods: {

        }
    }
</script>
<style>
  .swiper-pagination-bullet-active{
    background: #408CD2 !important;
  }
</style>
<style lang="less" scoped>
  @border-bottom: 1px solid #efefef;

  .content{
    width: 100%;
    padding-bottom: 50px;
    .banner{
      width: 100%;
      height: 600px;
    }
    .operation{
      width: 100%;
      padding: 50px 0;
      /*height: 300px;*/
      /*background: #F4F6FD;*/
      .operation_top{
        margin-bottom: 80px;
        border-bottom: 1px solid #dfdfdf;
        padding-bottom: 38px;
        position: relative;
        &::after{
          display: block;
          content: 'SERVICE';
          background: #408CD2;
          color: #fff;
          width: 86px;
          text-align: center;
          padding: 2px 0;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          bottom: -10px;
        }
        h1{
          font-size: 45px;
          letter-spacing: 2px;
        }
        h5{
          color: #666;
        }
      }
      .operation_box{
        width: 1200px;
        margin: 0 auto;
        .opera_list_left,.opera_list_right{
          width: 100%;
          height: 380px;
          margin-bottom: 60px;
          box-shadow: 3px 3px 46px 3px hsla(22,7%,48%,.15);
          cursor: pointer;
          .left,.right{
            width: 450px;
            height: 100%;
            float: left;
            box-sizing: border-box;
            padding: 15px 20px;
            text-align: left;
            h1{
              font-size: 32px;
              margin-bottom: 10px;
            }
            h5{
              font-size: 16px;
              margin-bottom: 20px;
            }
            p{
              line-height: 40px;
              color: #666;
            }
          }
          .imgBox{
            width: 650px;
            height: 100%;
            border-radius: 5px;
            overflow: hidden;
            float: right;
            img{
              width: 100%;
              transition: all .5s;
            }
          }
          &:hover img{
            transform: scale(1.1);
          }
        }
        .opera_list_right{
          .right{
            width: 420px;
            float: right;
          }
          .imgBox{
            width: 650px;
            float: left;
          }
        }
      }
    }
    .server,.about{
      width: 100%;
      .server_top,.about_top{
        padding: 55px 0 40px;
        border-bottom: @border-bottom;
        position: relative;
        margin-bottom: 30px;
        h1{
          font-size: 45px;
          letter-spacing: 2px;
        }
        h5{
          color: #666;
        }
        &::after{
          display: block;
          content: '';
          width: 100px;
          height: 2px;
          background: #408CD2;
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      .server_bot{
        width: 100%;
        .main{
          width: 1200px;
          margin: 0 auto;
          padding: 20px 0;
          .server_bot_top,.server_bot_bot{
            height: 300px;
            padding: 30px 0;
            div{
              width: 50%;
              height: 100%;
              float: left;
              box-sizing: border-box;
              position: relative;
            }
            .server_bot_top_left,.server_bot_top_right{
              padding-right: 30px;
              cursor: pointer;
              div{
                width: 60%;
                height: 100%;
                float: left;
                text-align: left;
                h1{
                  font-size: 24px;
                  letter-spacing: 2px;
                  margin-bottom: 20px;
                  line-height: 50px;
                }
                p{
                  line-height: 45px;
                  font-size: 16px;
                  color: #999;
                  span{
                    padding: 5px 15px;
                    border: @border-bottom;
                  }
                }
              }
              img{
                width: auto;
                float: right;
                display: block;
                transition: all .5s;
                &:hover{
                  transform: rotate(360deg);
                }
              }
            }
            .server_bot_top_right{
              padding-right: 0;
              padding-left: 30px;
              div{
                float: right;
              }
              img{
                float: left;
              }
            }
          }
        }
      }
    }
    .case{
      width: 100%;
      background: #2F313F;
      padding: 60px 0 30px;
      h1{
        font-size: 45px;
        letter-spacing: 2px;
        color: #fff;
      }
      h5{
        color: #dfdfdf;
        font-size: 18px;
        margin-bottom: 80px;
      }
      .case_box{
        width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .case_lst{
          width: 47%;
          height: 300px;
          /*background: tan;*/
          margin-bottom: 80px;
          transform-style: preserve-3d;
          transition: .5s;
          perspective: 60000px;
          cursor: pointer;
          .fo{
            width: 100%;
            height: 100%;
            transform: translateZ(150px);
          }
          .to{
            width: 100%;
            height: 100%;
            background: #408CD2;
            color: #fff;
            transform: rotateX(90deg) translateZ(450px);
            box-sizing: border-box;
            padding: 15px 20px;
            text-align: left;
            h1{

            }
          }
          &:hover{
            transform: rotateX(-90deg);
          }
        }
      }
    }
    .news{
      width: 100%;
      background: #2F313F;
      padding: 30px 0 120px;
      .news_top{
        padding: 50px 0 30px;
        position: relative;
        border-bottom: 1px solid #999;
        margin-bottom: 80px;
        &::after{
          display: block;
          content: 'NEWS';
          background: #408CD2;
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
          color: #fff;
        }
      }
      .news_bot{
        width: 1200px;
        margin: 0 auto;
        height: 420px;
        display: flex;
        justify-content: space-between;
        div{
          text-align: left;
          width: 30%;
          height: 100%;
          border-radius: 5px;
          overflow: hidden;
          margin-bottom: 10px;
          cursor: pointer;
          box-shadow: 3px 3px 46px 3px hsla(222,77%,48%,.15);
          transition: all .5s;
          background: #fff;
          div{
            width: 100%;
            height: 300px;
            img{
              height: 100%;
              transition: all .6s;
            }
            &:hover img{
              transform: scale(1.2);
            }
          }
          &:hover{
            transform: translateY(-10px);
          }
          h2{
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            line-height: 35px;
            /*border-left: 5px solid #408CD2;*/
            padding-left: 30px;
            box-sizing: border-box;
            margin-bottom: 10px;
            position: relative;
            &:after{
              display: block;
              content: '';
              width: 5px;
              height: 100%;
              background: #408CD2;
              position: absolute;
              left: 13px;
              top: 0;
            }
          }
          p{
            box-sizing: border-box;
            padding:0 15px;
            height: 58px;
            line-height: 29px;
            font-size: 16px;
            overflow: hidden;
            text-overflow: ellipsis;
            color: #999;
            letter-spacing: 1px;
          }
        }
      }
    }
    .about{
      width: 100%;
      padding: 30px 0 80px;
      .about_top{
        margin-bottom: 50px;
      }
      .about_bot{
        width: 1200px;
        margin: 0 auto;
        .titleImg{
          cursor: pointer;
          width: 100%;
          height: 200px;
          overflow: hidden;
          .h12{
            background: url("https://www.xuanfengge.com/wp-content/uploads/2017/04/1c4fd43.jpg") no-repeat center/cover;
            width: 100%;
            height: 400px;
            color: #fff;
            transition: all .6s;
            h1,h2{
              height: 50%;
              line-height: 200px;
              font-size: 72px;
            }
            h2{
              font-size: 64px;
            }
          }
          &:hover .h12{
            transform: translateY(-200px);
          }
        }
        .textInfo{
          padding: 30px 0;
          line-height: 35px;
          text-indent: 2em;
          text-align: left;
          letter-spacing: 1px;
        }
      }
    }
  }
</style>

