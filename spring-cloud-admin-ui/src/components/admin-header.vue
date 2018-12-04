<template>
  <header class="admin-header">
    <div class="admin-header-start">
      <img src="https://springcloud.cc/images/favicon.png" class="logo mr10">
      <span class="logo-title">Spring Cloud Admin</span>
    </div>
     <nav>
      <router-link class="admin-nav-link" to="/" exact>仪表盘</router-link>
      <router-link class="admin-nav-link" to="/services">服务治理</router-link>
      <router-link class="admin-nav-link" to="/trace">全链路监控</router-link>
      <router-link class="admin-nav-link" to="/alarm">中台管理</router-link>
      <router-link class="admin-nav-link" to="/alarm">系统配置</router-link>
    </nav>
    <div class="admin-header-end">
      <span class="mr15">当前环境: test</span>
      <Icon type="md-information-circle" size="16" class="mr15"/>
      <Dropdown trigger="click">
        <div class="flex-c cp">
          <div class="face" :style="`background-image:url('https://avatars3.githubusercontent.com/u/19775780?s=460&v=4')`"></div>
          <span class="mr5">tinyallen</span>
          <Icon type="md-arrow-dropdown"></Icon>
        </div>
        <DropdownMenu slot="list">
            <DropdownItem>登出</DropdownItem>
        </DropdownMenu>
    </Dropdown>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({})
export default class AdminHeader extends Vue {
}
</script>

<style lang="scss" scoped>
.admin-header {
  flex-shrink: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: #252a2f;
  color: #e8e8e8;
  padding: 5px 30px 5px 15px;
  width: 100%;
  box-shadow: 0 1px 1px rgba(0,0,0,.08);
  .logo{
    width: 28px;
  }
  .logo-title{
    font-family: Avenir,Helvetica,Arial,sans-serif;
    font-size: 16px;
  }
}
.admin-header-start,.admin-header-end{
  display: flex;
  align-items: center;
}
.admin-header-end{
  .face{
    width: 28px;
    height: 28px;
    border-radius: 14px;
    margin-right: 8px;
    background-position: center;
    background-size: cover;
  }
}
.admin-nav-link{
  margin-right: 20px;
  padding: 5px 10px;
  border-radius: 6px;
  color: #e8e8e8;
  opacity: .7;
  will-change: opacity, background-color;
  transition: opacity .3s, background-color .3s;
  &:hover,&.active{
    opacity: 1;
    background-color: rgba(255,255,255,.07);
    box-shadow: 0 3px 6px 0 rgba(0,0,0,.1), 0 1px 3px 0 rgba(0,0,0,.08);
  }
}
</style>
