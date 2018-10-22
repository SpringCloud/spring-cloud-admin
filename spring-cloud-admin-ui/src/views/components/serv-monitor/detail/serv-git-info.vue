<template>
 <admin-panel title="Git 信息" width="300px">
  <div class="mb10"><span class="two-fifth">Branch</span><span class="three-fifth">master</span></div>
  <div class="mb10"><span class="two-fifth">Commit</span><span class="three-fifth"></span></div>
  <div class="mb10"><span class="two-fifth">Id</span><span class="three-fifth">4149df1</span></div>
  <div class="mb10"><span class="two-fifth">Time</span><span class="three-fifth">2018-08-03 17:42:37</span></div>
</admin-panel>
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
</style>
