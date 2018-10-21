<template>
  <Nav class="admin-menu">
    <Icon type="md-menu" class="admin-menu-btn"/>
  </Nav>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
@Component({})
export default class AdminMenu extends Vue {
}
</script>

<style lang="scss" scoped>
.admin-menu {
  flex-shrink: 0;
  display: flex;
  z-index: 11;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  background-color: #252a2f;
  color: #eaeaea;
  width: 60px;
  position: relative;
}
.admin-menu-btn{
  position: absolute;
  top: 14px;
  right: -30px;
  font-size: 20px;
  color: #515a6e;
}
</style>
