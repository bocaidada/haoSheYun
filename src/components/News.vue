<template>
  <section>
    <div class="banner">
      <img src="../../static/img/news_01.jpg" alt="">
    </div>
    <router-view/>
    <div class="list"  v-if="newsFlag">
      <div class="news_top">
        <h1>新闻动态</h1>
      </div>
      <ul class="newBox">
        <router-link tag="li" :to="{name: 'News_detail',params: {id:index}}" v-for="(item,index) in newsList" :key="index" :class="[index%2 == 0 ? 'reveal-left' : 'reveal-right']">
          <div class="imgBox">
            <img :src="item.imgUrl" alt="">
          </div>
          <div class="cont">
            <h3 class="title">{{item.title}}</h3>
            <div>
              <span>日期：{{item.time}}-{{item.day}}</span>
              <span>来源：{{item.source}}</span>
            </div>
            <p>{{item.info}}</p>
          </div>
          <div class="up_time">
            <div>
              <span>{{item.day}}</span>
              <p>{{item.time}}</p>
            </div>
          </div>
        </router-link>
      </ul>
    </div>
  </section>
</template>

<script>
    export default {
        name: "News",
        data() {
            return {
              newsFlag: this.$store.state.newsFlag,
              newsList:[
                {
                  imgUrl:'../../static/img/news_02.jpg',
                  title:'入户门什么颜色最吉利 入户门材质哪种好',
                  time:'2019-01',
                  day:'06',
                  source:'农村小知识今日头条',
                  info:'入户门在装修房屋的时候是很重要的，入户门的材质分为很多种，小编今天就说说入户门选择什么材质好呢？而在一些风水学上来说，入户门的颜色也是有讲究的，入户门什么颜色最吉利?'
                },{
                  imgUrl:'../../static/img/news_03.jpg',
                  title:'防盗门防盗等级哪种好？好的防盗门怎么选？',
                  time:'2019-01',
                  day:'01',
                  source:'爱装网',
                  info:'今年来，人们生活水平不断的提高，财产安全的意识也在越来越强，在入户门的选择上，有很多家庭都会选择防盗门来安装。而市场上鱼目混杂，个别厂家在生产上并没有一个规范，而是根据自己的生产标准生产防盗门。'
                },{
                  imgUrl:'../../static/img/news_04.jpg',
                  title:'吊轨推拉门等各类推拉门优缺点 看看你家适合哪种',
                  time:'2018-12',
                  day:'26',
                  source:'3D溜溜官网微信',
                  info:'推拉门不仅可以最大化地节省空间，方便了居室的功能划分和利用，还在采光、隔音、遮挡视线、增强装饰性等方面具有较大优势，大大满足了现代人紧凑、集约的生活空间需求。'
                },{
                  imgUrl:'../../static/img/news_05.jpg',
                  title:'推拉门PK吊轨门 优势大比拼',
                  time:'2018-12',
                  day:'12',
                  source:'未知',
                  info:'不同的空间会使用到不同类型的房门，常见的是安装推拉门或者是吊轨门。但是很多消费者可能对于两种门并不是特别的了解，也不知道到底推拉门与吊轨门哪个好?'
                },{
                  imgUrl:'../../static/img/news_06.jpg',
                  title:'木门安装如何验收？学会这些技巧就不怕踩坑了！',
                  time:'2018-12',
                  day:'02',
                  source:'润成创展木门公众号',
                  info:'装修的后期，我们最常做的工作就是对施工项目的成果进行验收，其中木门安装的验收是必不可少的。然而，简单的木门，安装验收工作却不简单。今天，小编就同大家说说室内木门安装验收的那些事儿。'
                },{
                  imgUrl:'../../static/img/news_07.jpg',
                  title:'木门窗运输包装方法',
                  time:'2018-11',
                  day:'11',
                  source:'未知',
                  info:'木门窗在物流过程中容易因磕碰挤压发生破损，包装得好就可以减少破损几率，那我们需要怎么样来包装好木门窗呢?'
                },{
                  imgUrl:'../../static/img/news_08.jpg',
                  title:'实木门真假如何辨别？',
                  time:'2018-11',
                  day:'01',
                  source:'未知',
                  info:'越来越多的家庭在装修房门时，大都会选择实木门。而如今市面上木门厂家鱼龙混杂，木门质量参差不齐。消费者该如何选择实木门?实木门真假如何辨别呢?'
                },{
                  imgUrl:'../../static/img/news_09.jpg',
                  title:'原木门的优缺点有哪些',
                  time:'2018-10',
                  day:'29',
                  source:'未知',
                  info:'原木门由于从上到下都是一种木材，而且多少都是比较名贵的木材，因此价格比较贵，同时它的价格也因其木材用料、纹理等不同而有所差异，所以不是内行人士很难弄清楚哪些是比较好的，从而上当受骗。'
                },{
                  imgUrl:'../../static/img/news_10.jpg',
                  title:'干燥的冬季原木门如何保养',
                  time:'2018-10',
                  day:'09',
                  source:'未知',
                  info:'冬季居室比较干燥，做好保湿功课，让原木门能拥有最适宜的湿度和温度，可防止原木门开裂变形，保湿方法除了保持室内空气流通，还可以在室内安装空气增湿器或者养几盆盆栽植物，调节空气湿度。'
                }
              ]
            }
        },
        mounted() {
          this.$reveal('.reveal-left',false,'left');
          this.$reveal('.reveal-right',false,'right')
        },
        watch: {
          '$route' (to, from) {
            // 对路由变化作出响应...
            // console.log(to);
            if(from.path == '/news') {
              this.newsFlag = false
            }
            if(to.path == '/news') {
              this.newsFlag = true
            }
          }
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
    .list{
      width: 100%;
      .news_top{
        padding: 10px 0 30px;
        position: relative;
        border-bottom: 1px solid #efefef;
        margin-bottom: 20px;
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
        }
      }
      .newBox{
        width: 1200px;
        margin: 0 auto;
        padding: 50px 0;
        li{
          width: 100%;
          height: 160px;
          margin-bottom: 40px;
          background: #efefef;
          border-radius: 5px;
          overflow: hidden;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          .imgBox{
            width: 21%;
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
            width: 60%;
            height: 100%;
            /*background: gold;*/
            box-sizing: border-box;
            padding: 10px;
            text-align: left;
            h3{
              font-size: 24px;
              line-height: 45px;
            }
            div{
              line-height: 30px;
              font-size: 14px;
              color: #999;
              margin-bottom: 5px;
              span{
                padding-right: 15px;
              }
            }
            p{
              line-height: 32px;
              letter-spacing: 1px;
              color: #333;
            }
          }
          .up_time{
            width: 16%;
            height: 100%;
            /*background: red;*/
            position: relative;
            div{
              width: 112px;
              height: 112px;
              border-radius: 5px;
              background: #fff;
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              right: 14%;
              text-align: center;
              span{
                display: block;
                width: 100%;
                line-height: 84px;
                height: 76px;
                border-bottom: 2px solid #efefef;
                font-size: 48px;
                color: #333;
              }
              p{
                line-height: 30px;
                font-size: 14px;
              }
            }
          }
        }
      }
    }
  }
</style>
