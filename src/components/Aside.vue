<template>
  <div id="aside">
    <el-row class="tac">
      <el-col :span="24">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#fff"
          text-color="#000"
          active-text-color="#f40"
        >
        <!-- 根据data里的type值，遍历 -->
          <el-menu-item  v-for="(v,k) in type" :key="type[k]" :index="type[k]">
            <span slot="title">{{v}}</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Aside",
  data() {
    return {
      // type：分类
      type: [
        "HTML",
        "CSS",
        "JavaScript",
        "CSS3",
        "HTML5",
        "jQuery",
        "Bootstrap",
        "ES6",
        "Vue",
        "NPM",
        "GIT",
        "nodejs",
        "webpack"
      ]
    };
  }
};
</script>

<style scoped>
.el-menu-item{
  height: 3em;
  line-height: 3em;
}
</style>
