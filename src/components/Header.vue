<template>
  <div id="header">
    <!-- 导航菜单 -->

    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#000"
      text-color="#fff"
      active-text-color="#f40"
    >
      <!-- 导航左边 -->
      <el-menu-item index="1">
        <router-link to="/">首页</router-link>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">分类</template>
        <el-menu-item index="2-1">HTML</el-menu-item>
        <el-menu-item index="2-2">CSS</el-menu-item>
        <el-submenu index="2-3">
          <template slot="title">JavaScript</template>
          <el-menu-item index="2-3-1">ECMAScript</el-menu-item>
          <el-menu-item index="2-3-2">DOM</el-menu-item>
          <el-menu-item index="2-3-3">BOM</el-menu-item>
        </el-submenu>
        <el-menu-item index="2-4">CSS3</el-menu-item>
        <el-menu-item index="2-5">HTML5</el-menu-item>
        <el-menu-item index="2-6">ES6</el-menu-item>
        <el-menu-item index="2-7">jQuery</el-menu-item>
        <el-submenu index="2-8">
          <template slot="title">Vue全家桶</template>
          <el-menu-item index="2-8-1">vue</el-menu-item>
          <el-menu-item index="2-8-2">vue-router</el-menu-item>
          <el-menu-item index="2-8-3">vuex</el-menu-item>
          <el-menu-item index="2-8-4">vue-cli</el-menu-item>
        </el-submenu>
        <el-menu-item index="2-9">Bootstrap</el-menu-item>
        <el-menu-item index="2-10">ElementUI</el-menu-item>
        <el-menu-item index="2-11">nodejs</el-menu-item>
        <el-menu-item index="2-12">Git</el-menu-item>
        <el-menu-item index="2-13">NPM</el-menu-item>
        <el-menu-item index="2-14">webpack</el-menu-item>
        <el-menu-item index="2-15">ElementUI</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">个人中心</el-menu-item>
      <el-menu-item index="4">
        <el-input
          placeholder="搜索你想搜索的内容"
          prefix-icon="el-icon-search"
          v-model="searchKey"
          size="small"
        ></el-input>
        <el-button type="primary" size="small">搜索</el-button>        
      </el-menu-item>
      <!-- 导航右侧 -->
     <nav>
        <el-menu-item index="6" class="nav-right one regist" style="border-bottom-color: transparent">
        <!-- <router-link to='./sign_up'>        -->
          <el-button type="danger" size="small">注册</el-button> 
        <!-- </router-link> -->
      </el-menu-item>
      <el-menu-item index="5" class="nav-right two login" style="border-bottom-color: transparent">
        <!-- <router-link to='./sign_in'> -->        
          <el-button type="warning" size="small">登录</el-button>    
        <!-- </router-link>    -->  
      </el-menu-item>
      <el-menu-item index="7" class="nav-right" style="border-bottom-color: transparent">
        <router-link to='./write'>       
          <el-button type="primary" size="small">写文章</el-button> 
        </router-link>
      </el-menu-item>
     </nav>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      searchKey: ""
    };
  },
  components: {
    Headers
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
.el-header {
  background-color: #eee;
  color: #38f;
  text-align: center;
  line-height: 80px;
  font-size: 32px;
}

.el-container {
  width: 1140px;
  margin: 0 auto;
}
body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
/* 设置导航样式 */
.el-menu-demo {
  width: 1140px;
  height: 100%;
  position: relative;
  left: -20px;
  overflow: hidden;
}

.tac {
  text-align: left;
}

/* 导航右边 */
.nav-right {
  float: right;
  padding-right: 0.8em; /* 设置右边登录和注册按钮的内边距 */
  padding-left: 0.8em;
}
.nav-right.two {
  padding-right: 0em;
}
</style>