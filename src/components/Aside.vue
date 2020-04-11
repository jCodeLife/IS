<template>
  <div id="aside">
    <el-input placeholder="输入关键字进行过滤" v-model="filterText" size="mini" class="search"></el-input>
    <el-tree
      class="type-tree"
      :data="data"
      :props="defaultProps"
      default-expand-all
      :filter-node-method="filterNode"
      ref="tree"
    ></el-tree>
  </div>
</template>

<script>
export default {
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    }
  },

  methods: {
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    }
  },

  data() {
    return {
      filterText: "",
      data: [
        {
          id: 1,
          label: "HTML",
          children: [
            {
              id: 4,
              label: "常用标签",
            }
          ]
        },
        {
          id: 2,
          label: "CSS",
          children: [
            {
              id: 5,
              label: "选择器"
            },
            {
              id: 6,
              label: "布局"
            }
          ]
        },
        {
          id: 3,
          label: "JavaScript",
          children: [
            {
              id: 7,
              label: "ECMAScript"
            },
            {
              id: 8,
              label: "BOM"
            }
          ]
        },
        {
          id: 1,
          label: "HTML",
          children: [
            {
              id: 4,
              label: "常用标签",
            }
          ]
        },
        {
          id: 2,
          label: "CSS",
          children: [
            {
              id: 5,
              label: "选择器"
            },
            {
              id: 6,
              label: "布局"
            }
          ]
        },
        {
          id: 3,
          label: "JavaScript",
          children: [
            {
              id: 7,
              label: "ECMAScript"
            },
            {
              id: 8,
              label: "BOM"
            }
          ]
        },
        {
          id: 1,
          label: "HTML",
          children: [
            {
              id: 4,
              label: "常用标签",
            }
          ]
        },
        {
          id: 2,
          label: "CSS",
          children: [
            {
              id: 5,
              label: "选择器"
            },
            {
              id: 6,
              label: "布局"
            }
          ]
        },
        {
          id: 3,
          label: "JavaScript",
          children: [
            {
              id: 7,
              label: "ECMAScript"
            },
            {
              id: 8,
              label: "BOM"
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  }
};
</script>

<style scoped>
.search {
  padding:4px 0;
}
.type-tree{
  margin: 0 4px;
}
</style>
