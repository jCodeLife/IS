<template>
  <div id="main">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item v-for="(v,k) in article" :key="k" :title="article[k].no+article[k].question" :name="article[k]">
        <div class="answer">{{article[k].Answer}}</div>         
        <div>{{article[k].eg}}</div>   
      </el-collapse-item>
    </el-collapse>

  </div>

  
</template>

<script>
//导入文章数据
import article from './article'
export default {
  name: "Main",
  data() {
    return {
      activeNames: ["1"],
      article
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    }
  }
};
</script>

<style scoped>
.answer{
    text-align: left;
}
</style>