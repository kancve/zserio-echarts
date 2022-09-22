<template>
  <div class="echart-container">
    <Panel @change="setForm"></Panel>
    <div ref="chart" style="height: 100%"></div>
  </div>
</template>

<script>
import Panel from './Panel.vue'
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
  },
  components: {
    Panel,
  },
  data() {
    return {
      chart: null,
      data: {},
      form: {
        treeDepth: 3,
        fontSize: 14,
      },
    }
  },
  watch: {
    name: {
      handler(val) {
        if (val !== '') {
          this.$axios.get('/data/' + val + '.json').then((result) => {
            this.data = result.data
            this.setOption()
          })
        }
      },
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = this.$echarts.init(this.$refs.chart)
      this.setOption()
    },
    formatter(params) {
      // console.log(params.data)
      return 'Type: ' + params.data.type + '</br>' + params.data.comment
    },
    setForm(form) {
      this.form = form
      this.setOption()
    },
    setOption() {
      var option = {
        tooltip: {
          trigger: 'item',
          triggerOn: 'mousemove',
          formatter: this.formatter,
        },
        series: [
          {
            type: 'tree',
            data: [this.data],
            top: '2%',
            left: '8%',
            bottom: '2%',
            right: '20%',
            symbolSize: 14,
            edgeShape: 'polyline',
            edgeForkPosition: '63%',
            initialTreeDepth: this.form.treeDepth,
            lineStyle: {
              width: 2,
            },
            label: {
              position: 'left',
              rotate: -20,
              verticalAlign: 'bottom',
              align: 'right',
              fontSize: this.form.fontSize,
              fontWeight: 'bold',
            },
            leaves: {
              label: {
                position: 'right',
                rotate: 0,
                verticalAlign: 'middle',
                align: 'left',
              },
            },
            expandAndCollapse: true,
            animationDuration: 550,
            animationDurationUpdate: 750,
          },
        ],
      }
      this.chart.setOption(option)
    },
    handleResize() {
      this.chart.resize()
    },
  },
}
</script>

<style>
.echart-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 1rem;
}
</style>