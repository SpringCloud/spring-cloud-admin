<template>
  <nav class="admin-nav">
    <router-link class="admin-nav-i" :to="`/services/${this.$route.params.id}`" exact>详情</router-link>
    <router-link class="admin-nav-i" :to="`/services/${this.$route.params.id}/log`">日志</router-link>
    <router-link class="admin-nav-i" :to="`/services/${this.$route.params.id}/point`">监控指数</router-link>
    <router-link class="admin-nav-i" :to="`/services/${this.$route.params.id}/env`">环境配置</router-link>
    <router-link class="admin-nav-i" :to="`/services/${this.$route.params.id}/logback`">日志级别</router-link>
    <router-link class="admin-nav-i" :to="`/services/${this.$route.params.id}/jmx`">JMX</router-link>
    <router-link class="admin-nav-i" :to="`/services/${this.$route.params.id}/jvm`">JVM</router-link>
    <router-link class="admin-nav-i" :to="`/services/${this.$route.params.id}/swagger`">文档</router-link>
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
    color: #19be6b;
    &:after{
      background-color: #19be6b;
      // background-color: #3880ff;
    }
  }
}
</style>
