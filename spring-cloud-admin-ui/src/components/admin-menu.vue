<template>
  <Nav class="admin-menu" :style="`width:${show? '150':'50'}px`">
    <Icon type="md-menu" class="admin-menu-btn" :class="{'active':show}" @click="handleClick"/>
    <a class="admin-menu-i active"><Icon type="md-cube" class="mr20" :size="18"/><span class="vm">应用管理</span></a>
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
  padding-top: 15px;
  border-right: 1px solid #e4e7ed;
  background-color: #fff;
  color: #eaeaea;
  position: relative;
  transition: all .3s;
}
.admin-menu-i{
  white-space:nowrap;
  display: block;
  overflow: hidden;
  width: calc(100% + 1px);
  padding: 10px 16px;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover{
    background-color: #f6f7fb;
  }
  &.active{
    // color: #3880ff;
    color: #19be6b;
    background-color: #f6f7fb;
    // border-right: 2px solid #3880ff;
    border-right: 2px solid #19be6b;
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
