<template>
  <div>
    <header>
      <div class="head_left">
        <img src="../../static/img/huilian_06.png" alt="" class="logo" ondragstart="return false">
        <img src="../../static/img/index_02.png" alt="" class="info" ondragstart="return false">
      </div>
      <ul class="head_right">
        <li v-for="(item,index) in headData" :key="index" @click="changes(index)"  :class="{hit_color:headNum == index}">
          <router-link :to="item.path">{{item.name}}</router-link>
        </li>
      </ul>
    </header>
    <div style="height: 72px"></div>
  </div>
</template>

<script>
    export default {
        name: "Head",
        data() {
            return {
              headData:[
                {name:'首页',path:'/'},
                {name:'公司业务',path:'/service'},
                {name:'技术支持',path:'/technology'},
                {name:'新闻资讯',path:'/news'},
                {name:'经典案例',path:'/case'},
                {name:'关于我们',path:'/about'},
                {name:'联系我们',path:'/contact'},
              ],
              headNum: this.$store.state.headColorNum,
            }
        },
        watch:{
          "$store.state.headColorNum" (val,old) {
            if(val) {
              this.headNum = val
            }
          }
        },
        methods: {
          changes(index) {
            this.headNum = index
          }
        }
    }
</script>

<style lang="less" scoped>
  header{
    &{
      position: fixed;
      left: 0;
      top: 0;
      z-index: 100000;
      width: 100%;
      height: 72px;
      box-sizing: border-box;
      padding: 0 60px;
      line-height: 72px;
      border-bottom: 1px solid #efefef;
      background: #fff;
    }
    .head_left{
      width: 35%;
      float: left;
      height: 100%;
      position: relative;
      text-align: left;
      .logo{
        width: auto;
        /*height: 72px;*/
        position: absolute;
        left: 0;
        top: 0;
        z-index: 100;
      }
      .info{
        width: auto;
        position: absolute;
        left: 150px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    .head_right{
      // width: 65%;
      float: right;
      height: 100%;
      li{
        width: 100px;
        text-align: center;
        height: 100%;
        line-height: 71px;
        font-size: 16px;
        letter-spacing: 1px;
        float: left;
        box-sizing: border-box;
        border-right: 1px solid #efefef;
        a{
          display: block;
        }
      }
      .hit_color{
        border-top: 2px solid #408CD2;
        background: #efefef;
        /*color: #df8711;*/
      }
    }
  }
  @media screen and (max-width: 1350px) {
    header>.head_right>li{
      width: 80px !important;
      font-size: 14px
    }

  }
</style>
