<template>
  <div id="app">
    <AdminHeader/>
    <AdminRouter/>
    <div style="display: flex;flex-grow:1;height: 100%;">
      <AdminMenu/>
      <router-view class="wrapper"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({})
export default class App extends Vue {
}
</script>

<style lang='scss'>
@import './assets/lib.scss';
@import './assets/style.scss';
#app{
  flex-direction: column;
}
</style>
