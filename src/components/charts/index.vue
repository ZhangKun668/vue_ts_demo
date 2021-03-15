<template>
  <div ref="chart" :id="id" :class="className" :style="{height:height,width:width}" />
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import echarts from "echarts";
import resize from "./mixins/resize";

@Component({
  components: {},
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: "chart"
    },
    id: {
      type: String,
      default: "chart"
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "200px"
    },
    option: {
      type: Object,
      default: null
    },
    autoHeight: {
      type: Object,
      default: null
    }
  },
  watch: {
    option() {
      this.initChart();
    },
    width() {
      this.__resizeHandler();
    }
  },
})

export default class Charts extends Vue {
  chart = null;
  
  mounted() {
    this.initChart();
  }

  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  }

  initChart() {
    // this.chart = echarts.init(document.getElementById(this.id))
    if (this.option) {
      this.chart = echarts.init(this.$refs.chart);
      this.chart.setOption(this.option);
    }

    if(this.autoHeight) {
      const totalHeight = this.autoHeight.barWidth * this.autoHeight.length + this.autoHeight.xHeight; // length为柱状图的条数，即数据长度, barWidth为每个柱状图的高度+间隔，xHeight为柱状图x轴的高度。
      this.chart.getDom().style.height = totalHeight + "px";
      this.chart.resize();
    }
  }

  // 隐藏tootips
  hideTootips() {
    this.chart.dispatchAction({
       type: 'hideTip',
    })
  }
};
</script>
