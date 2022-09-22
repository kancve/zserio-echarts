<template>
  <el-scrollbar class="sidebar-container">
    <el-menu
      default-active=""
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      class="menus-container"
    >
      <el-menu-item :index="menu" v-for="menu in menus" :key="menu">
        <span slot="title">{{ menu }}</span>
      </el-menu-item>
    </el-menu>
  </el-scrollbar>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      menus: [],
    }
  },
  created() {
    this.getMenus()
  },
  methods: {
    handleSelect(key) {
      this.$emit('select', key)
    },
    getMenus() {
      this.$axios.get('/data/Menus.json').then((result) => {
        this.menus = result.data
      })
    },
  },
}
</script>

<style>
.sidebar-container {
  height: 100%;
  min-width: 240px;
}

.menus-container {
  min-height: 100vh;
}

.el-scrollbar__wrap {
  overflow-x: hidden !important;
}

.is-horizontal {
  display: none;
}
</style>