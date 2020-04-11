<template>
  <div id="main">  
    <router-view></router-view>
    <!-- 遍历显示所以文章标题
    <div v-for="(v,k) in articles" :key="articles[k].number" :name="k">
      <el-link href="#" target="_blank">{{articles[k].question}}</el-link>
      <br />
    </div> -->
  </div>
</template>

<script>
//导入文章数据
import articles from "./article";
export default {
  name: "Main",
  data() {
    return {
      activeNames: ["1"],
      articles
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
#main {
  text-align: left;
  background-color: #fff;
  font-size: 16px;
  padding: 10px;
  border-radius: 4px;
}

</style>