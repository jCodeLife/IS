<template>
  <div> 
    <!-- 布局:外围容器container -->
    <el-container class="wrap">
      <!-- 头部 -->
      <el-header>
        <Headers />
      </el-header>
      <el-container>
        <!-- 侧栏 -->
        <el-aside width="150px">
          <Aside />
        </el-aside>
        <!-- 主体部分 -->
        <el-main>
          <Main/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Headers from "./Header";
import Aside from "./Aside";
import Main from "./Main";
export default {
  name: "Index",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      searchKey: ""
    };
  },
  components: {
    Headers,
    Aside,
    Main
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>

.wrap {
  width: 1140px;
  margin: 0 auto;
  height:100vh;

}
.el-aside{
  margin: 10px 10px 0 0;
  height:90vh;
  /* overflow: scroll; */
  box-shadow: 0 0 5px rgba(0, 0, 0, .3);
}
.el-main{
  height:90vh;
  margin: 10px 0;
  box-shadow: 0 0 5px rgba(0, 0, 0, .3);
}
</style>
