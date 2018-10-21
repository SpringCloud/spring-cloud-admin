<template>
<div class="serv-list-i">
  <p class="sm grey mb5">10.224.18.11:8070<a @click="$router.push('/services/123')" class="r">详情</a></p>
  <header class="serv-list-i-header mb10">
    <img src="http://spring.io/img/homepage/icon-spring-framework.svg" class="img mr10">
    <div>
      <h4>SPRING-BOOT-ADMIN</h4>
      <p class="sm grey">xubin02 - Arch</p>
    </div>
  </header>
  <div class="mb10 clear">
    <div class="serv-list-i-num l">
      <h1 class="num">
        <span>313</span>
        <Icon type="md-arrow-dropup" size="14" color="#19be6b"/>
      </h1>
      <div class="sm grey">Up</div>
    </div>
    <div class="serv-list-i-num r">
      <h1 class="num">
        <span>25</span>
        <Icon type="md-remove" size="14" color="#808695"/>
      </h1>
      <div class="sm grey">Offline</div>
    </div>
    <div class="tc">
      <div class="serv-list-i-num">
        <h1 class="num">
          <span>12</span>
          <Icon type="md-arrow-dropdown" size="14" color="#ed4014"/>
        </h1>
        <div class="sm grey">Down</div>
      </div>
    </div>
  </div>
  <ServChartState/>
  <ServChartThread v-if="show"/>
  <ServChartHeap v-if="show"/>
  <div class="tc">
    <Icon class="cp" style="padding:2px 5px;" :type="show?'ios-arrow-up':'ios-arrow-down'" @click="show = !show"/>
  </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import ServChartState from './serv-chart-state.vue';
import ServChartThread from './serv-chart-thread.vue';
import ServChartHeap from './serv-chart-heap.vue';

@Component({ components: { ServChartState, ServChartHeap, ServChartThread } })
export default class ServItem extends Vue {
  show = false;
}
</script>

<style lang="scss">
.serv-list-i{
  width: 100%;
  padding: 20px 20px 5px;
  background: #fff;
  box-shadow: 0 2px 9px 0 rgba(0,0,0,0.02);
  border-radius: 4px;
  margin-bottom: 15px;
  transition: box-shadow .3s;
  &:hover{
    box-shadow: 0 3px 10px 0 rgba(0,0,0,0.2);
  }
}
.serv-list-i-header{
  display: flex;
  .img{
    width: 32px;
    height: 32px;
  }
}
.serv-list-i-num{
  padding-left: 5px;
  .num{
    font-weight: 300;
    font-size: 1.7em;
    line-height: 1;
  }
}
</style>
