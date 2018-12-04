<template>
  <Nav class="admin-menu" :style="`width:${show? '150':'50'}px`">
    <Icon type="md-menu" class="admin-menu-btn" :class="{'active':show}" @click="handleClick"/>
    <h4 class="title ell" v-show="show">{{menu[this.$route.meta.menu].title}}</h4>
    <router-link class="admin-menu-i" :to="i.to" v-for="(i, index) in menu[this.$route.meta.menu].sub" :key="index"><Icon :type="i.icon" class="mr20" :size="18"/><span class="vm">{{i.title}}</span></router-link>
    <!-- <Icon type="md-cube" class="admin-menu-i"/> -->
  </Nav>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

const trigger = (elem, event) => {
  if (document.all) {
    elem.event();
  } else {
    const evt = document.createEvent('Events');
    evt.initEvent(event, true, true);
    elem.dispatchEvent(evt);
  }
};

@Component({})
export default class AdminMenu extends Vue {
  show = false;
  menu = {
    services: {
      title: '服务治理',
      sub: [
        { title: '应用管理', icon: 'md-cube', to: '/services' },
      ],
    },
    trace: {
      title: '全链路监控',
      sub: [
        { title: '仪表盘', icon: 'md-card', to: '/trace/dashboard' },
        { title: '拓扑图', icon: 'md-albums', to: '/trace/topo' },
        { title: '追踪', icon: 'md-analytics', to: '/trace/link' },
        { title: '告警', icon: 'md-notifications', to: '/trace/alarm' },
      ],
    },
  };
  handleClick() {
    this.show = !this.show;
    setTimeout(() => { trigger(window, 'resize'); trigger(window, 'resize'); }, 300);
  }
}
</script>

<style lang="scss" scoped>
.admin-menu {
  flex-shrink: 0;
  z-index: 11;
  padding-top: 5px;
  border-right: 1px solid #e4e7ed;
  background-color: #fff;
  position: relative;
  transition: all .3s;
  .title{
    font-weight: 400;
    padding: 10px 11px;
  }
}
.admin-menu-i{
  white-space:nowrap;
  display: block;
  overflow: hidden;
  width: calc(100% + 1px);
  padding: 10px 16px;
  margin-bottom: 2px;
  cursor: pointer;
  &:hover{
    background-color: #f6f7fb;
  }
  &.active{
    // color: #3880ff;
    color: #18b566;
    background-color: #f6f7fb;
    // border-right: 2px solid #3880ff;
    border-right: 2px solid #18b566;
  }
}
.admin-menu-btn{
  position: absolute;
  cursor: pointer;
  top: -31px;
  left: 15px;
  font-size: 20px;
  color: #aaa;
  transition: all .3s;
  &.active{
    transform: rotate(90deg);
  }
}
</style>
