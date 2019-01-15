<template>
  <section class="content">
    <!--banner-->
    <div class="banner">
      <swiper :options="swiperOption" style="height: 100%">
        <swiper-slide v-for="(item,index) in bannerData" :key="index" :style="{background: 'url('+imgUrl+item.img+') no-repeat center/cover'}">
          <a style="display: block;width: 100%;height: 100%" v-if="item.url" :href="item.url" target="_blank"></a>
        </swiper-slide>
        <!--<div class="swiper-pagination" slot="pagination"></div>-->
        <!--<div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>-->
        <!--<div class="swiper-button-next swiper-button-white" slot="button-next"></div>-->
      </swiper>
    </div>
    <!--we can-->
    <div class="server">
      <div class="server_top">
        <h1>我们能做什么?</h1>
        <h5>What can we do for you？</h5>
      </div>
      <div class="server_bot">
        <div class="main">
          <div class="server_bot_top">
            <div class="server_bot_top_left reveal-left">
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
              <img :src="imgUrl+'/i_r5_c8.jpg'" alt="">
            </div>
            <div class="server_bot_top_right reveal-right">
              <img :src="imgUrl+'/i_r5_c17.jpg'" alt="">
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
            </div>
          </div>
          <div class="server_bot_bot">
            <div class="server_bot_top_left reveal-left">
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
              <img :src="imgUrl+'/i_r7_c9.jpg'" alt="">
            </div>
            <div class="server_bot_top_right reveal-right">
              <img :src="imgUrl+'/i_r7_c17.jpg'" alt="">
              <div>
                <h1>响应式HTML5网站</h1>
                <p>
                  <span>小程序</span>
                </p>
                <p>
                  <span>手机wap站</span>
                </p>
                <!--<p>-->
                  <!--<span>P2P金融平台开发</span>-->
                  <!--<span>各行业门户平台开发</span>-->
                <!--</p>-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="case">
      <h1>案例展示</h1>
      <h5>Our Cases List</h5>
      <div class="case_box">
        <div class="case_lst">
          <img src="http://cdn.xuanfengge.com/wp-content/themes/lee3.0/dist/img/feature/06.50599bb3.jpg" class="fo" alt="">
          <div class="to"></div>
        </div>
        <div class="case_lst">
          <img src="http://cdn.xuanfengge.com/wp-content/themes/lee3.0/dist/img/feature/04.106fc8c0.jpg" class="fo" alt="">
          <div class="to"></div>
        </div>
        <div class="case_lst">
          <img src="http://cdn.xuanfengge.com/wp-content/themes/lee3.0/dist/img/feature/07.2f43931e.jpg" class="fo" alt="">
          <div class="to"></div>
        </div>
        <div class="case_lst">
          <img src="http://cdn.xuanfengge.com/wp-content/themes/lee3.0/dist/img/feature/01.503c5483.jpg" class="fo" alt="">
          <div class="to"></div>
        </div>
      </div>
    </div>
    <div class="news">
      <div class="news_top">
        <h1>新闻动态</h1>
      </div>
      <div class="news_bot">
        <router-link tag="div" to="">
          <div>
            <img src="http://cdn.jinkaidoor.com/media/news/2018/12/5c1b41a429813.jpg" alt="">
          </div>
          <h2>家居保养有窍门</h2>
          <p>十年来我们始终以更高的目标来要求自己，在不断完善自身管理</p>
        </router-link>
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="about">
      <div class="about_top">
        <h1>我们是谁?</h1>
        <h5>Who are we?</h5>
      </div>
      <div class="about_bot">
        <router-link tag="div" to="/about" class="titleImg">
          <div class="h12">
            <h1>ABOUT</h1>
            <h2>豪舍云</h2>
          </div>
        </router-link>
        <div class="textInfo">
          <p>
            浙江豪舍云科技有限公司是一家专注于家装物联网新零售技术平台开发和运营的创新型科技公司，公司总部位于杭州。平台以家居为切入点，为千家万户提供智能家居、家装服务、智能养老、家庭健康服务和新零售等服务。企业以互联网为依托，通过运用大数据、人工智能等先进技术手段，对商品的生产、流通与销售过程进行升级改造，进而重塑业态结构与生态圈，并对线上服务、线下体验以及现代物流进行深度融合的零售新模式，是中国当代新经济虚和实相结合新的商业模式。集合各个城市的装饰公司联合开通全国城市分站。为居民提供房产信息、设计师、装修资讯、绿色装修建材、绿色环保家居用品、楼盘户型、装修图片、装修招标、装修解答、免费量房以及个性化设计等内容及服务，全心全意为广大业主提供整体装修一站式服务。
          </p>
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
              imgUrl:'../../static/img',
              // scrollReveal: scrollReveal(),
              swiperOption: {
                spaceBetween: 30,   //图片之间的间距
                loop: true,         //循环播放
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
                {img:'/ban1.jpg',url:'http://www.baidu.com'}
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
    background: #df8711 !important;
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
          background: #ff450c;
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
          .server_bot_top{
            border-bottom: @border-bottom;
          }
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
          .fo{
            width: 100%;
            height: 100%;
            background: yellowgreen;
            transform: translateZ(150px);
          }
          .to{
            width: 100%;
            height: 100%;
            background: red;
            transform: rotateX(90deg) translateZ(155px);
          }
          &:hover{
            transform: rotateX(90deg);
          }
        }
      }
    }
    .news{
      width: 100%;
      margin-bottom: 80px;
      .news_top{
        padding: 50px 0 30px;
        position: relative;
        border-bottom: @border-bottom;
        margin-bottom: 80px;
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
          box-shadow: 3px 3px 46px 3px hsla(22,7%,48%,.15);
          transition: all .5s;
          div{
            width: 100%;
            height: 300px;
            background: yellowgreen;
            img{
              width: 100%;
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
            line-height: 35px;
            border-left: 5px solid #ff4c17;
            padding-left: 10px;
            box-sizing: border-box;
            margin-bottom: 10px;
          }
          p{
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
      background: #f5f5f5;
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
          background: url("https://www.xuanfengge.com/wp-content/uploads/2017/04/1c4fd43.jpg") no-repeat center/cover;
          overflow: hidden;
          .h12{
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

