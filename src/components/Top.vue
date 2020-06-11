<template>
  <div class="container">
    <div class="row ">
      <nav class="navbar navbar-default navbar-static-top" style="margin-bottom: 0px  ">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                  data-target="#TaoistsNavBar" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>

        <div class="collapse navbar-collapse col-xs-offset-2" id="TaoistsNavBar">
          <ul class="nav navbar-nav">
            <li><img alt="20X16" width="60px" height="50px" src="~@/assets/logo.jpg"/></li>
            <li class="active hover" style="padding-right: 20px"><a href="/">长沙指南</a></li>
            <li><a href="#/user" target="_blank">登录</a></li>
            <li><a href="#/user" target="_blank">注册</a></li>
            <li><a @click="aaa">详细介绍</a></li>
            <li><a @click="aaa">联系我们</a></li>

            <!-- 一个下拉列表 -->
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">长沙市辖区<span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="http://www.yuelu.gov.cn/" target="_blank">岳麓区</a></li>
                <li class="divider"></li>
                <li><a href="http://www.yuhua.gov.cn/" target="_blank">雨花区</a></li>
                <li class="divider"></li>
                <li><a href="http://www.tianxin.gov.cn/" target="_blank">天心区</a></li>
                <li class="divider"></li>
                <li><a href="http://www.kaifu.gov.cn/" target="_blank">开福区</a></li>
                <li class="divider"></li>
                <li><a href="http://www.furong.gov.cn/" target="_blank">芙蓉区</a></li>
                <li class="divider"></li>
                <li><a href="http://www.wangcheng.gov.cn/" target="_blank">望城区</a></li>
                <li class="divider"></li>
                <li><a href="http://www.csx.gov.cn/" target="_blank">长沙县</a></li>
              </ul>
            </li>
            <li style="padding-top: 15px;padding-left: 30px"><span>当前用户：{{name}}</span></li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Top",
    props:{
      name:'游客'
    },
    methods: {
      aaa() {
        alert("请加QQ:1517624161");
      }
    }
  }
</script>

<style>
  a a:hover {
    background-color: gray;
  }
</style>
