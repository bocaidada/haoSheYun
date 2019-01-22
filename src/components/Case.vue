<template>
  <section>
    <!--banner-->
    <div class="banner">
      <div class="imgBox">
        <!--<img src="../../static/img/tit4.fw.png" alt="">-->
      </div>
    </div>
    <!--案例展示-->
    <div class="content">
      <div class="title">
        <h1>案例展示</h1>
        <h6>Our Cases List</h6>
      </div>
      <ul class="categary">
        <!--<li v-for="item in categaryData">{{item}}</li>-->
      </ul>
      <ul class="recommend">
        <li class="reveal-rotate" v-for="item in recmData" :style="{'background': 'url('+item.imgUrl+') no-repeat  center/cover'}">
          <div class="blur"></div>
          <div class="mask">
            <div class="rec-title">
              <h1>{{item.brand}}</h1>
              <h4>{{item.title}}</h4>
            </div>
            <div class="cont">
              <p>{{item.info}}</p>
            </div>
            <div class="line line1"></div>
            <div class="line line2"></div>
            <div class="line line3"></div>
            <div class="line line4"></div>
          </div>
        </li>
      </ul>
      <!--<el-pagination-->
        <!--background-->
        <!--layout="prev, pager, next"-->
        <!--:total="total"-->
        <!--:pagesize="pagesize"-->
        <!--:currentPage="currentPage"-->
      <!--&gt;-->
      <!--</el-pagination>-->
    </div>

  </section>
</template>

<script>
  export default {
    name: "Case",
    data() {
      return {
        total:10,//默认数据总数
        pagesize:3,//每页的数据条数
        currentPage:1,//默认开始页面
        categaryData:[
          "全部","最新案例","企业网站","App","H5手机站","跨境购电子商务","投资金融类","外贸网站","装饰/设计","服装服饰","艺术/艺术家","政府教育","行业网站","商城门户","集团网站"
        ],
        recmData:[
          {
            brand:'Blanche',
            title:'布兰奇前卫系列',
            info:'传承门业经典,缔造辉煌传奇',
            imgUrl:"../../static/img/case1.jpg"
          },
          {
            brand:'JinKai',
            title:'金凯门业系列',
            info:'传承门业经典,缔造辉煌传奇',
            imgUrl:"../../static/img/case2.jpg"
          },{
            brand:'Blanche',
            title:'布兰奇前卫系列',
            info:'传承门业经典,缔造辉煌传奇',
            imgUrl:"../../static/img/case1.jpg"
          },
          {
            brand:'JinKai',
            title:'金凯门业系列',
            info:'传承门业经典,缔造辉煌传奇',
            imgUrl:"../../static/img/case2.jpg"
          },{
            brand:'Blanche',
            title:'布兰奇前卫系列',
            info:'传承门业经典,缔造辉煌传奇',
            imgUrl:"../../static/img/case1.jpg"
          },
          {
            brand:'JinKai',
            title:'金凯门业系列',
            info:'传承门业经典,缔造辉煌传奇',
            imgUrl:"../../static/img/case2.jpg"
          }
        ]
      }
    },
    mounted() {
      this.$scrollReveal.reveal('.reveal-rotate', {
        rotate: {x: 65},
        duration: 1000,
      });
    },
    methods: {
      current_change:function(currentPage){
        this.currentPage = currentPage;
      }
    }
  }
</script>

<style lang="less" scoped>
  section{
    width: 100%;
    /*font-family: "Helvetica Neue",\5FAE\8F6F\96C5\9ED1,Tohoma;*/
    .banner{
      width: 100%;
      height: 500px;
      background: url("../../static/img/banner6.jpg") no-repeat center/cover;
      .imgBox{
        padding-top:110px;
        img{
          display: block;
          margin: 0 auto;
          transition: all .33s ease-out;
          &:hover{
            transform: scale(1.2);
          }
        }
      }
    }
    .content{
      width: 1280px;
      margin: 0 auto;
      padding-top:60px;
      position: relative;
      .title{
        width: 200px;
        height:50px;
        background: white;
        position: absolute;
        top:30px;
        left:0;
        right:0;
        margin-left:auto;
        margin-right:auto;
        h1{
          font-size: 35px;
          font-weight: normal;
          line-height: 35px;
          margin-bottom: 8px;
        }
        h6{
          font-size: 14px;
          line-height: 14px;
          font-weight: normal;
          color: #888;
          margin:0;
        }
      }
      .categary{
        width: 100%;
        margin:0 auto;
        height:auto;
        overflow: hidden;
        border-top:1px solid #ccc;
        padding:60px 75px;
        box-sizing: border-box;
        li{
          float: left;
          border: 1px solid #ddd;
          height: 28px;
          padding: 0 8px;
          margin-right: 4px;
          line-height: 28px;
          font-size: 18px;
          color: #222;
          font-weight: normal;
          cursor: pointer;
          margin-bottom: 5px;
          border-radius: 10px;
          &:hover{
            border:1px solid #408CD2;
          }
        }
      }
      .recommend{
        width: 100%;
        height: auto;
        overflow: hidden;
        padding:0px 45px 30px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        li{
          width: 48%;
          /*float: left;*/
          height: 300px;
          padding:30px;
          box-sizing: border-box;
          position: relative;
          margin-bottom: 50px;
          &:first-child{
            margin-right:3%;
          }
          .blur{
            width:100%;
            height:100%;
            position: absolute;
            left:0;
            top:0;
            background: inherit;
            filter: blur(2px);
            z-index: 2;
            display: none;
          }
          &:hover .blur{
            display: block;
          }
          .mask{
            width: 80%;
            height:80%;
            left:0;
            right: 0;
            top:0;
            bottom: 0;
            margin:auto;
            position: absolute;
            z-index: 4;
            overflow: hidden;
            .cont{
              width: 360px;
              height: 100px;
              position: absolute;
              left: 50%;
              transform: translateX(-50%);
              box-sizing: border-box;
              padding-top: 20px;
              top: 44%;
              /*background: red;*/
              color: #fff;
              text-align: center;
              display: none;
              transition: all .5s;
              p{
                font-size: 22px;
                font-weight: 600;
                line-height: 35px;
              }
            }
            .rec-title{
              position: absolute;
              background: none;
              top:0px;
              left: 0px;
              color: #fff;
              text-align: left;
              h1{
                font-size: 50px;
                font-weight: bold;
              }
            }
            .line{
              background: #fff;
              position: absolute;
              transition: all 0.33s ease;
            }
            .line1{
              width: 8px;
              height: 50%;
              left:0;
              bottom:-50%;
            }
            .line2{
              width: 100%;
              height:8px;
              right:-100%;
              bottom:0;
            }
            .line3{
              width: 8px;
              height:100%;
              right:0;
              bottom:-100%;
            }
            .line4{
              width: 40%;
              height:8px;
              right:-40%;
              top:0;
            }
          }
          &:hover .cont{
            display: block;
          }
          &:hover .line1{
            transform: translateY(-100%);
          }
          &:hover .line2{
            transform: translateX(-100%);
          }
          &:hover .line3{
            transform: translateY(-100%);
          }
          &:hover .line4{
            transform: translateX(-100%);
          }
        }
      }
      .fy{
        text-align:center;
        margin-top:30px;
      }
    }
  }
</style>
