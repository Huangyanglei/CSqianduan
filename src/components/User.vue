<template>
  <div class="container">
    <div class="row">
      <Top></Top>
      <form class="form-horizontal col-xs-offset-5">
        <div class="control-group" style="padding-top: 100px">
          <label class="control-label">账号</label>
          <div class="controls">
            <input id="inputEmail" v-model="root" type="text"/>
          </div>
        </div>
        <div class="control-group">
          <label class="control-label">密码</label>
          <div class="controls">
            <input id="inputPassword" v-model="pwd" type="password"/>
          </div>
        </div>
        <div class="control-group" style="padding-bottom: 100px">
          <div class="controls">
            <br>
            <button class="btn" @click="oo">登陆</button>
            <p style="font-size: 10px;color: gray;margin-top: 20px">*如果没有账号此页面就是注册账号</p>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import Top from "./Top";

  export default {
    name: "User",
    data() {
      return {
        root: '',
        pwd: '',
      }
    },
    methods: {
      oo() {
        var _this = this;
        this.$http({
          url: 'http://localhost:8081/useradd?name=' + _this.root + '&pwd=' + _this.pwd,
        }).then((res) => {
          if (res.data) {
            alert("登录成功");
            // this.$router.push("/");
            this.$router.replace({
              path: '/',
              query: {
                name: this.root
              }
            })
          } else {
            alert("注册成功");
            // this.$router.push("/");
            this.$router.replace({
              path: '/',
              query: {
                name: this.root
              }
            })
          }
        })
      }
    },
    components: {Top}
  }
</script>

<style scoped>

</style>
