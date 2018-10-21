<template>
  <div id="app">
    <AdminMenu/>
    <div style="display: flex;flex-direction: column;flex-grow:1;">
      <AdminHeader/>
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
</style>
