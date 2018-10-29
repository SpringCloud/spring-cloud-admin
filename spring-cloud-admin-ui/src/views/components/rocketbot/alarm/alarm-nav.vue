<template>
  <nav class="rk-alarm-nav">
    <slot/>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({})
export default class Nav extends Vue {
}
</script>

<style lang="scss" scoped>
.rk-alarm-nav{
  border-bottom:1px solid rgba(0,0,0,.05);
  height: 45px;
  background-color: #f6f7fb;
  padding: 0 30px;
}
.rk-alarm-nav-i{
  display: inline-block;
  height: 45px;
  margin-right: 20px;
  padding-top: 9px;
  line-height: 28px;
  color: rgba(61, 68, 79, .6);
  will-change: color,color;
  transition: color .3s, color .3s;
  &:after{
      content: "";
      display: block;
      margin: 0 auto;
      width: 4px;
      height: 4px;
      border-radius: 2px;
      background-color: rgba(0, 0, 0, 0);
      transition: background-color .3s;
  }
  &:hover, &.active{
    // color: #3880ff;
    color: #18b566;
    &:after{
      background-color: #18b566;
      // background-color: #3880ff;
    }
  }
}
</style>
