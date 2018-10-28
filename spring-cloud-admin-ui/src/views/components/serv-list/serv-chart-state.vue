<template>
  <admin-panel title="状态变更">
    <AdminEcharts height="55px" :option="throughputConfig"/>
  </admin-panel>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({})
export default class Heap extends Vue {
  data = [14, 19, 15, 19, 13, 20, 18, 21, 16, 16, 19, 10, 19, 15, 18, 23];
  get throughputConfig() {
    return {
      color: ['#75a8ff'],
      tooltip: {
        trigger: 'axis',
      },
      animation: false,
      grid: {
        top: 5,
        left: -10,
        right: -10,
        bottom: 5,
        // containLabel: true,
      },
      xAxis: {
        data: this.data,
        type: 'category',
        show: false,
      },
      yAxis: {
        type: 'value',
        show: false,
      },
      series: [
        {
          data: this.data,
          type: 'line',
          symbol: 'none',
          // smooth: 'true',
          areaStyle: {
            color: {
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0, color: '#75a8ff',
              }, {
                offset: 0.8, color: '#fff',
              }],
            },
          },
        },
      ],
    };
  }
}
</script>
