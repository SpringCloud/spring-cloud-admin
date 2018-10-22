<template>
 <admin-panel title="Build 信息" width="300px">
  <!-- <div class="title mb10 grey">Build 信息</div> -->
    <div class="mb10"><span class="two-fifth">Group ID</span><span class="three-fifth">com.ppcredit.cloud</span></div>
    <div class="mb10"><span class="two-fifth">Artifact ID</span><span class="three-fifth">ppc-cloud-admin-server</span></div>
    <div class="mb10"><span class="two-fifth">Version</span><span class="three-fifth">1.0.0</span></div>
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
