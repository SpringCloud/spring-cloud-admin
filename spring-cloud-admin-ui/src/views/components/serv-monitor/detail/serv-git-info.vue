<template>
 <admin-panel title="Git 信息" width="300px">
  <div class="mb10"><span class="two-fifth">Branch</span><span class="three-fifth">{{branch}}</span></div>
  <!-- <div class="mb10"><span class="two-fifth">Commit</span><span class="three-fifth"></span></div> -->
  <div class="mb10"><span class="two-fifth">Commit Id</span><span class="three-fifth">{{commitId}}</span></div>
  <div class="mb10"><span class="two-fifth">Time</span><span class="three-fifth">{{commitTime}}</span></div>
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

  get branch() {
    return this.data.branch ? this.data.branch : NO_DATA;
  }
  get commitId() {
    return this.data.commit ? this.data.commit.id : NO_DATA;
  }
  get commitTime() {
    return this.data.commit ? new Date(this.data.commit.time) : NO_DATA;
  }
}
</script>

<style lang="scss">
</style>
