<template>
<div class="serv-event-table">
  <div class="title grey">Event 信息</div>
  <table class="admin-table">
    <!-- <thead>
      <tr><th></th><th></th><th></th></tr>
    </thead> -->
    <tbody>
      <tr v-for="i in 6" :key="i">
        <td>10.224.18.11:8070</td>
        <td>SKQUNDGEK</td>
        <td>
          <span class="blue mr5">UP</span>
          <Icon class="mr5" type="ios-arrow-forward" />
          <span>OFFLINE</span>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({ components: { } })
export default class ServItem extends Vue {
  show = false;
}
</script>

<style lang="scss">
.serv-event-table{
  .title{
    padding: 4px 10px;
  }
}
</style>
