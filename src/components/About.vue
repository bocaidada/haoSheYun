<template>
    <section>
        <!--banner-->
        <div class="banner">
          <div class="imgBox">
            <img src="../../static/img/tit1.fw.png" alt="">
          </div>
        </div>
        <!--content-->
        <div class="content">
            <div class="con-1">
                <div class="con-1-text">
                    <span>PURPOSE</span>
                    <h1>创优秀互联网企业</h1>
                    <h3>树 <span>豪舍云网络品牌</span> 专业的技术</h3>
                    <h3>专业的服务 /  专业的应用  /  专业的团队!</h3>
                    <p>我们置身温馨惬意的环境氛围，我们注重现代思维品质的修炼孕育，我们鼓励火热激情的高昂持续，我们珍惜个性价值的尽情发挥，我们膜拜知识就是力量的虔诚洗礼，我们擅长群体智慧的生态整合，我们希冀年轻团队的永远年轻......</p>
                </div>
                <div class="video">
                    <video src="../../static/img/test.mp4" width="540px" height="300px" loop></video>
                </div>
            </div>
            <div class="con-2">
                <div class="con-2-text">
                    <img src="../../static/img/tit2.fw.png" alt="">
                    <p style="text-align: left;text-indent: 2em">
                        快乐工作是豪舍人的人生哲学，我们致力于为员工提供一个充满快乐和活力的工作环境，让所有员工享受工作带来的愉悦和自豪。我们倡导民主平等的上下级关系,自由公开的沟通方式,工作和生活之间的平衡和融合。每个故乡人都追求自己的个性,发挥和强化自己的潜力,使每个人的才能得到充分发挥。同时，我们也给予员工持续的培训和挑战自己的机会，使每个员工可以在工作中不断学习成长。
                    </p>
                </div>
                <img src="../../static/img/about_02.png" alt="">
            </div>
            <div class="con-3">
                <img src="../../static/img/about_03.png" alt="">
                <div class="con-3-text">
                    <h1>Activity</h1>
                    <p>我们也给予员工持续的培训和挑战自己的机会，使每个员工可以在工作中不断学习成长。</p>
                </div>
            </div>
        </div>
        <!--toTop-->
        <div class="toTop">
            <div class="top-box" @click="backTop">
                <div>
                    <span class="first">回到顶部</span>
                    <span>Top</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "About",
        data() {
            return {}
        },
        methods: {
            backTop () {
                document.body.scrollTop = 0
                document.documentElement.scrollTop = 0
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
            height: 461px;
            background: url("../../static/img/about_01.png") no-repeat center/cover;
            .imgBox{
                padding-top:90px;
                img{
                    display: block;
                    margin: 0 auto;
                    transition: all .33s ease-out;
                    &:hover{
                        transform: translateY(-15px);

                    }
                }

            }

        }
        .content{
            width: 1130px;
            margin:-90px auto 0;
            background: #fff;
            padding: 30px;

            .con-1{
                width: 100%;
                overflow: hidden;
                text-align: left;
                .con-1-text{
                    width: 540px;
                    float: left;
                    span{
                        font-size: 20px;
                        color: #666;
                        border-bottom: 2px solid #666;
                        margin-bottom: 30px;
                    }
                    h1{
                        font-size: 50px;
                        font-weight: normal;
                        margin-top: 35px;
                        margin-bottom: 15px;
                        color: #666;
                        line-height: 50px;
                    }
                    h3{
                        font-size: 30px;
                        font-weight: normal;
                        margin-bottom: 10px;
                        line-height: 30px;
                        span{
                            color: #408CD2;
                            font-size: 35px;
                            border:none;
                        }
                    }
                    p{
                        margin-top: 30px;
                        line-height: 23px;
                        border-left: 2px solid #aaa;
                        padding-left: 10px;
                        font-size: 14px;
                        color: #888;
                    }
                }
                .video{
                    float: right;
                }
            }
            .con-2{
                width: 100%;
                overflow: hidden;
                padding-top: 50px;
                img{
                  float: right;
                }
                .con-2-text{
                    float: left;
                    padding-top: 30px;
                    width: 330px;
                    p{
                        margin-left: 90px;
                        width: 255px;
                        line-height: 25px;
                        padding-top: 10px;
                        font-size: 14px;
                    }

                }
            }
            .con-3{
                width: 100%;
                position: relative;
                padding-top: 80px;
                img{
                    width:100%;
                    display: block;
                }
                .con-3-text{
                    position: absolute;
                    top:90px;
                    right: 100px;
                    h1{
                        font-size: 80px;
                        color: #000;
                        margin-bottom:20px;
                    }
                    p{
                        width: 260px;
                        font-size: 12px;
                        line-height: 20px;
                        text-align: left;
                    }
                }
            }
        }
        .toTop{
            width: 100%;
            height:170px;
            background: url("../../static/img/pic3.jpg") no-repeat center/cover;
            padding-top: 90px;
            margin-top: 50px;
            .top-box{
                display: block;
                height: 50px;
                width: 160px;
                text-align: center;
                line-height: 50px;
                color: #fff;
                border: 1px solid #fff;
                margin: 0 auto;
                font-size: 24px;
                position: relative;
                overflow: hidden;
                cursor: pointer;
                div{
                    width: 100%;
                    position: absolute;
                    bottom: 0;
                    left:0;
                    -webkit-transition: all .33s ease-out;
                    span{
                        display: block;
                        width: 100%;
                        height: 50px;
                    }
                    .first{
                        margin-bottom: 150px;
                    }
                }
                &:hover div{
                    transform: translateY(200px);

                }

            }
        }
    }
</style>
