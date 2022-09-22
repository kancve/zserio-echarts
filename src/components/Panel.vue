<template>
  <el-form :inline="true">
    <el-form-item label="FontSize">
      <el-slider
        v-model="form.fontSize"
        :min="8"
        :max="28"
        style="width: 240px"
      ></el-slider>
    </el-form-item>
    <el-form-item label="TreeDepth">
      <el-slider
        v-model="form.treeDepth"
        :min="3"
        :max="10"
        style="width: 240px"
      ></el-slider>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'Panel',
  data() {
    return {
      form: {
        fontSize: 14,
        treeDepth: 3,
      },
    }
  },
  watch: {
    form: {
      deep: true,
      handler(val) {
        this.$emit('change', val)
      },
    },
  },
}
</script>