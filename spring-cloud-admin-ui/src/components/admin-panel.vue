<template>
  <div class="admin-box" :style="width?`width: ${width};`:''">
    <div class="admin-box-title">{{title}}</div>
    <div :style="`padding:${padding}`"><slot></slot></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component({})
export default class AdminPanel extends Vue {
  @Prop() title: String;
  @Prop({
    type: String,
    default: '5px 12px 10px',
  }) padding: String;
  @Prop({
    type: String,
    default: '',
  }) width: String;
}
</script>
<style lang="scss" scoped>
.admin-box{
  width: 100%;
}
.admin-box-title{
  padding: 4px 12px;
  border-radius: 4px;
  background-color: #f6f7fb;
  color: rgba(10, 10, 10, .6);
}
</style>
