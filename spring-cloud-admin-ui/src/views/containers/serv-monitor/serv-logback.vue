<template>
  <div class="container mb20">
    <header class="clear mb15">
      <div>
        <h1 class="n">日志级别</h1>
        <p class="grey">我是描述我是描述我是描述我是描述我是描述</p>
      </div>
    </header>
    <div class="serv-mnt-logback">
      <div class="clear mb10"><span class="root-i">com.labs.springbootactuatorsample.SpringbootActuatorSampleApplication</span><statusBox class="r" :type="0"/></div>
      <div class="clear mb10"><span class="root-i">com.labs.springbootactuatorsample.SpringbootActuatorSampleApplication</span><statusBox class="r" :type="1"/></div>
      <div class="clear mb10"><span class="root-i">com.labs.springbootactuatorsample.SpringbootActuatorSampleApplication</span><statusBox class="r" :type="1"/></div>
      <div class="clear mb10"><span class="root-i">com.labs.springbootactuatorsample.SpringbootActuatorSampleApplication</span><statusBox class="r" :type="3"/></div>
      <div class="clear mb10"><span class="root-i">com.labs.springbootactuatorsample.SpringbootActuatorSampleApplication</span><statusBox class="r" :type="1"/></div>
      <div class="clear mb10"><span class="root-i">com.labs.springbootactuatorsample.SpringbootActuatorSampleApplication</span><statusBox class="r" :type="1"/></div>
      <div class="clear mb10"><span class="root-i">com.labs.springbootactuatorsample.SpringbootActuatorSampleApplication</span><statusBox class="r" :type="5"/></div>
      <div class="clear mb10"><span class="root-i">com.labs.springbootactuatorsample.SpringbootActuatorSampleApplication</span><statusBox class="r" :type="2"/></div>
      <div class="clear mb15"><span class="root-i">com.labs.springbootactuatorsample.SpringbootActuatorSampleApplication</span><statusBox class="r" :type="4"/></div>
      <a class="link mr5">加载更多</a><span class="grey mr5">|</span><a class="link">加载全部</a>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import StatusBox from '../../components/serv-monitor/logback/status-box.vue';
@Component({ components: { StatusBox } })
export default class ServLogback extends Vue {
  model = true;
}
</script>
<style lang="scss">
</style>
