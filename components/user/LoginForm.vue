<template>
  <el-form :model="form" ref="form" :rules="rules" class="form">
    <!-- 新增prop属性 -->
    <el-form-item class="form-item" prop="username">
      <!-- 添加双向绑定   v-model-->
      <el-input placeholder="用户名/手机" v-model="form.username"></el-input>
    </el-form-item>

    <el-form-item class="form-item" prop="password">
      <!-- 添加双向绑定   v-model-->
      <el-input placeholder="密码" type="password" v-model="form.password"></el-input>
    </el-form-item>

    <p class="form-text"></p>

    <el-button class="submit" type="primary" @click="handleLoginSubmit">登录</el-button>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      // 表单数据
      form: {
        
        username: "13800138000",
        password: "123456"
      },
      // 表单规则
      rules: {
        username: [
          {
            required: true, //
            message: "请输入用户名",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    // 提交登录
    handleLoginSubmit() {
      // console.log(this.form);
      // 验证表单
      this.$refs["form"].validate(valid => {
        // 为true表示没有错误
        // 判断
        if (valid) {
          this.$axios({
            url: "/accounts/login",
            method: "POST",
            data: this.form
          }).then(res => {
            // console.log(res.data);
            const { data } = res;
            // 保存到本地
            // localStorage.setItem("store", JSON.stringify(data));
            // 调用mutations方法,把data存到store
            this.$store.commit("user/setUserInfo", data);
          });
        }
      });
    }
  }
};
</script>

<style scoped lang="less">
.form {
  padding: 25px;
}

.form-item {
  margin-bottom: 20px;
}

.form-text {
  font-size: 12px;
  color: #409eff;
  text-align: right;
  line-height: 1;
}

.submit {
  width: 100%;
  margin-top: 10px;
}
</style>
