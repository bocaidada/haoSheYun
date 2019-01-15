<template>
  <div id="app">
    <heads/>
    <router-view/>
  </div>
</template>

<script>
  import heads from './components/Head'
  export default {
    name: 'App',
    components:{heads}
  }
</script>

<style lang="less">
  @color:#333;
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /*margin-top: 60px;*/
  }
  body,html,p,img,h1,h2,h3,h4,h5,dl,dt,dd,a,ul,li{
    margin: 0;
    padding: 0;
  }
  body::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: #eee;
  }
  body::-webkit-scrollbar-track {/*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    border-radius: 10px;
    background: #ffffff;
  }
  body::-webkit-scrollbar {/*滚动条整体样式*/
    width: 10px;     /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
  }
  li{
    list-style-type: none;
  }
  a{
    text-decoration: none;
    color: @color;
  }
</style>
