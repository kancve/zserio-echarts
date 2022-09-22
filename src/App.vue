<template>
  <div id="app">
    <Sidebar @select="setName"></Sidebar>
    <Tree :name="name"></Tree>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import Tree from './components/Tree.vue'

export default {
  name: 'App',
  components: {
    Sidebar,
    Tree,
  },
  data() {
    return {
      name: '',
    }
  },
  methods: {
    setName(name) {
      this.name = name
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  height: 100vh;
}

body {
  margin: 0;
}
</style>
