<template>
  <nav class="admin-nav">
    <router-link class="admin-nav-i" to="/">详情</router-link>
    <router-link class="admin-nav-i" to="/service">日志</router-link>
    <router-link class="admin-nav-i" to="/service">监控指数</router-link>
    <router-link class="admin-nav-i" to="/service">环境配置</router-link>
    <router-link class="admin-nav-i" to="/service">日志级别</router-link>
    <router-link class="admin-nav-i" to="/service">JMX</router-link>
    <router-link class="admin-nav-i" to="/service">JVM</router-link>
    <router-link class="admin-nav-i" to="/service">文档</router-link>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Model } from 'vue-property-decorator';

@Component({})
export default class Nav extends Vue {
  @Prop()
  @Model('input', { type: String }) test: String;
  changed(ev) {
    this.$emit('input', ev.target.value);
  }

  @Prop({
    type: String,
    default: 'OK',
  }) name: String;

  message: String = 'Name';

  say(): String {
    return this.message;
  }
}
</script>

<style lang="scss" scoped>
.admin-nav{
  border-bottom:1px solid rgba(0,0,0,.05);
  box-shadow: 0 1px 1px rgba(0,0,0,.08);
  height: 45px;
  background-color: #fff;
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
    color: #3880ff;
    &:after{
      background-color: #3880ff;
    }
  }
}
</style>
