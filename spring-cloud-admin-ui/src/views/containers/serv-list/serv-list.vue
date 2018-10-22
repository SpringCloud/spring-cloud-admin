<template>
<div class="container pt20">
  <header class="clear mb20">
    <div class="l">
      <h1 class="n"><span class="mr15">服务列表</span><Button type="dashed" shape="circle" size="small" icon="md-add">添加应用</Button></h1>
      <p class="grey">我是描述我是描述我是描述我是描述我是描述</p>
    </div>
    <div class="r">
      <div class="serv-list-btn-group ivu-btn-group ivu-btn-group-default">
        <Button size="small">收藏</Button>
        <Button size="small" type="text" ghost>全部</Button>
      </div>
    </div>
  </header>
  <div class="clear">
    <div class="l mr15" style="width:calc(25% - 11.25px);">
      <ServItem/><ServItem/>
    </div>
    <div class="l mr15" style="width:calc(25% - 11.25px);">
      <ServItem/><ServItem/>
    </div>
    <div class="l mr15" style="width:calc(25% - 11.25px);">
      <ServItem/><ServItem/>
    </div>
    <div class="l" style="width:calc(25% - 11.25px);">
      <ServItem/><ServItem/>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import ServItem from '../../components/serv-list/serv-item.vue';
@Component({ components: { ServItem } })
export default class ServList extends Vue {
}
</script>

<style lang="scss">
.serv-list-btn-group{
  margin-top: 20px;
  background-color: #dcdee2;
  padding: 2px;
  border-radius: 4px;
}
</style>
