<template>
<div class="container pt20">
  <header class="clear mb15">
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
    <div class="r mr10">
      <input class="serv-list-search-input" @change="currentPage = 1" v-model="search" type="text" placeholder="服务搜索">
    </div>
  </header>
  <div class="clear">
    <div v-for="(i, index) in pageData" :key="index" class="serv—list-group l mr15">
      <ServItem v-for="(sub, _index) in i" :key="_index" :data="sub"/>
    </div>
  </div>
  <AdminPage class="mb10 r" name="Services" :currentSize="8" :total="filterData.length" @changePage="changePage"  :currentPage="currentPage"/>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { getServList } from '@/api/servMgmt/servList.ts';
import ServItem from '../../components/serv-list/serv-item.vue';
@Component({ components: { ServItem } })
export default class ServList extends Vue {
  services = [];
  currentPage = 1;
  search = '';
  get filterData() {
    return this.services.filter(i => i.name.toLocaleUpperCase().indexOf(this.search.toLocaleUpperCase()) !== -1);
  }
  get pageData() {
    const start = 8 * this.currentPage;
    let end = 8;
    end = start < this.filterData.length ? start : this.filterData.length;
    const temp = this.filterData.slice(start - 8, end);
    const result = [[], [], [], []];
    for (let i = 0; i < temp.length; i += 1) {
      const element = temp[i];
      if (i <= 3) {
        result[i].push(element);
      } else {
        result[i % 4].push(element);
      }
    }
    return result;
  }
  beforeMount() {
    this.getServList();
  }
  changePage(page) {
    this.currentPage = page;
  }
  getServList() {
    getServList().then((res) => {
      this.services = res.data;
    });
  }
}
</script>

<style lang="scss">
.serv-list-btn-group{
  margin-top: 20px;
  background-color: #dcdee2;
  padding: 2px;
  border-radius: 4px;
}
.serv—list-group{
  width:calc(25% - 11.25px);
  &:last-child{
    margin-right: 0;
  }
}
.serv-list-search-input{
  margin-top: 20px;
  border-radius: 4px;
  padding: 3px 1.2em 4px;
  background: #fafafa;
  border: 1px solid #dcdee2;
  outline: none;
}
</style>
