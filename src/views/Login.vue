<template>
  <el-row type="flex" class="row-bg" justify="space-around"  align="middle">
    <el-col :xs="14" :sm="12" :md="10" :lg="8" :xl="6">
      <el-form ref="formRules" :model="form" class="login-form"  label-width="80px" :rules="formRules" label-position="top">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('formRules')">登陆</el-button>
          <el-button @click="resetForm('formRules')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      form: {
        username: "admin",
        password: "123456"
      },
      formRules:{
          usrename:[
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 5, max: 12, message: '长度在 5 到 12个字符', trigger: 'blur' }
          ],
          password:[
            { required: true, message: '请输入用密码', trigger: 'blur' },
            { min: 6, max: 15, message: '长度在 6到 15个字符', trigger: 'blur' }
          ]
      }
    };
  },
  methods: {
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
        axios({
            url:"http://localhost:8888/api/private/v1/login",
            method:'post',
            data:this.form
        }).then( ({data :{data,meta}}) => {
            console.log(data)
            if(meta.status== 200){
                // console.log(1)
                localStorage.setItem('token',data.token)
             this.$router.push('/home')   
            } else {
              return false
            }
        })
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  
};
</script>

<style>
  /* .el-row {
    margin-bottom: 20px;
   
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  } */
 .row-bg{
    height: 100%;
    background-color: #2D434C;
  }
 .login-form{
     background-color: #fff;
     border-radius: 10px;
     padding: 30px 20px;
     min-width: 400px;
 }
</style>