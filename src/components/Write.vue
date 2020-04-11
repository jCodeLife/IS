<template>
  <div>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="80px"
      class="formArtcle"
      size="small"
    >
      <el-form-item label="文章分类" prop="artcleType">
        <el-select v-model="ruleForm.artcleType" placeholder="请选择文章分类">
          <el-option v-for="(v,k) in ruleForm.type"  :key="k" :label="v" :value="v"></el-option>
        </el-select>
        <el-button type="text" @click="open">新建分类</el-button>
      </el-form-item>

      <el-form-item label="文章标题" prop="artcleTit">
        <el-input v-model="ruleForm.artcleTit" placeholder="请输入文章标题"></el-input>
      </el-form-item>
      <!-- 添加解决方案 -->
      <div>
        <el-form-item label="解决方案" prop="plan">
          <el-input type="textarea" v-model="ruleForm.plan"></el-input>
        </el-form-item>
        <el-form-item label="相关代码" prop="code">
          <el-input type="textarea" v-model="ruleForm.code" rows="10"></el-input>
        </el-form-item>
      </div>
      <el-form-item>
        <el-button @click="addPlan">添加方案</el-button>
        <span>*未实现</span>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">发布文章</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        artcleType: "",
        type:["HTML","CSS","JavaScript"],
        artcleTit: "",
        plan: "",
        code: ""
        // plans: []
      },
      rules: {
        artcleTit: [
          {
            required: true,
            message: "请输入文章标题",
            trigger: "blur"
          },
          {
            min: 3,
            max: 50,
            message: "长度在3到50个字符",
            trigger: "blur"
          }
        ],
        artcleType: [
          {
            required: true,
            message: "请选择文章类型",
            trigger: "change"
          }
        ],
        plan: [
          {
            required: true,
            message: "请填写解决方案",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("文章发布成功!");
        } else {
          console.log("文章发布失败!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    open() {
      this.$prompt("请输入分类名称", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        // inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        inputErrorMessage: "分类格式不正确"
      })
        .then(({ value }) => {          
          this.$message({
            type: "success",
            message: "你的创建的分类是: " + value
          });
          this.ruleForm.type.push(value);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消创建"
          });
        });
    },
    addPlan() {
      // 使用Map，解决json只能是字符串的问题。
      // let temp = new Map();
      // temp.set('plan'+(this.ruleForm.plans.length+1),'');
      // temp.set('code'+(this.ruleForm.plans.length+1),'');
      // this.ruleForm.plans.push(temp);
    }
  }
};
</script>

<style scoped>
.formArtcle {
  margin-top: 10px;
}
</style>
