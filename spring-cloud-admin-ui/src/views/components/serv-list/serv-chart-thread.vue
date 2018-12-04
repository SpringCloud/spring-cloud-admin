<template>
  <admin-panel title="线程">
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
      color: ['#f7b32b'],
      tooltip: {
        trigger: 'axis',
      },
      grid: {
        top: 5,
        left: -10,
        right: -10,
        bottom: 0,
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
                offset: 0, color: '#f7b32b',
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
