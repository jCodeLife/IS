<template>
  <div>
    <!-- 布局:外围容器container -->
    <el-container class="wrap">
      <el-header>
        <Headers />
      </el-header>
      <el-container>
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
}
.aside{
  padding: 0;
}
.el-main{
  padding: 0;
}
</style>
