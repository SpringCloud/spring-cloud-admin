<template>
  <admin-panel title="内存">
    <AdminEcharts height="55px" :option="throughputConfig"/>
  </admin-panel>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({})
export default class Heap extends Vue {
  data = [
    85101043,
    82476658,
    87943738,
    79646336,
    89191037,
    76779031,
    91097971,
    76920171,
    87965214,
    81168444,
    84724992,
    85375112,
    81673087,
    88234171,
    78645460,
    88145588,
  ];
  data2 = [
    122925616,
    122925616,
    122925616,
    122925616,
    122925616,
    122925616,
    122925616,
    122925616,
    122925616,
    122925616,
    122925616,
    122925616,
    122925616,
    122925616,
    122925616,
    122925616,
  ];
  get throughputConfig() {
    return {
      color: ['#75a8ff', '#f7b32b'],
      tooltip: {
        trigger: 'axis',
      },
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
          name: 'Non-heap',
          data: this.data,
          type: 'line',
          symbol: 'none',
          // smooth: 'true',
          // areaStyle: {
          //   color: {
          //     x: 0,
          //     y: 0,
          //     x2: 0,
          //     y2: 1,
          //     colorStops: [{
          //       offset: 0, color: '#75a8ffbb',
          //     }, {
          //       offset: 0.8, color: '#fff',
          //     }],
          //   },
          // },
        },
        {
          name: 'Heap',
          data: this.data2,
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
                offset: 0, color: '#f7b32bbb',
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
