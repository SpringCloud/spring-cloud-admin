<template>
  <nav class="admin-nav">
    <router-link class="admin-nav-i" v-for="i in data" :key="i.title" :to="i.to" :exact="i.exact">{{i.title}}</router-link>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component({})
export default class Nav extends Vue {
  @Prop({ default: () => [] }) data;
}
</script>

<style lang="scss" scoped>
.admin-nav{
  border-bottom:1px solid rgba(0,0,0,.05);
  height: 45px;
  background-color: #f6f7fb;
  padding: 0 30px;
}
.admin-nav-i{
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
