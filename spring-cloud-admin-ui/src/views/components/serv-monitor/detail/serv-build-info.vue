<template>
 <admin-panel title="Build 信息" width="300px">
  <!-- <div class="title mb10 grey">Build 信息</div> -->
    <div class="mb10"><span class="two-fifth">Group ID</span><span class="three-fifth">{{group}}</span></div>
    <div class="mb10"><span class="two-fifth">Artifact ID</span><span class="three-fifth">{{artifact}}</span></div>
    <div class="mb10"><span class="two-fifth">Version</span><span class="three-fifth">{{version}}</span></div>
    <div class="mb10"><span class="two-fifth">Time</span><span class="three-fifth">{{time}}</span></div>
</admin-panel>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

const NO_DATA = 'NO DATA';
@Component({ components: { } })
export default class ServItem extends Vue {
  show = false;
  @Prop()
  data: any;

  get artifact() {
    return this.data ? this.data.artifact : NO_DATA;
  }
  get version() {
    return this.data ? this.data.version : NO_DATA;
  }
  get group() {
    return this.data ? this.data.group : NO_DATA;
  }
  get time() {
    return this.data ? this.data.time : NO_DATA;
  }
}
</script>

<style lang="scss">
</style>
