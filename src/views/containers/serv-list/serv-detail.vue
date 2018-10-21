<template>
<div>
  <AdminNav/>
  <div class="container pt20">
    <header class="clear mb20">
      <div>
        <h1 class="n">SPRING-BOOT-ADMIN</h1>
        <p class="grey">xujin - ARCH - 10.224.18.11:8070 </p>
      </div>
    </header>
    <div class="mb15">
      <AdminTopo :deviation="300" :height="500">
        <div class="topology-board">
          <div class="topology-board-item">
            <div class="mb10 grey">Build 信息</div>
            <div class="mb10"><span class="two-fifth">Group ID</span><span class="three-fifth yellow">cn.springcloud.cloud</span></div>
            <div class="mb10"><span class="two-fifth">Artifact ID</span><span class="three-fifth yellow">ppc-cloud-admin-server</span></div>
            <div class="mb10"><span class="two-fifth">Version</span><span class="three-fifth yellow">1.0.0</span></div>
            <div class="mb10"><span class="two-fifth">Time</span><span class="three-fifth yellow">2018-08-03 17:42:37</span></div>
          </div>
          <div class="topology-board-item">
            <div class="mb10 grey">Git 信息</div>
            <div class="mb10"><span class="two-fifth">Branch</span><span class="three-fifth yellow">master</span></div>
            <div class="mb10"><span class="two-fifth">Commit</span><span class="three-fifth yellow"></span></div>
            <div class="mb10"><span class="two-fifth">Id</span><span class="three-fifth yellow">4149df1</span></div>
            <div class="mb10"><span class="two-fifth">Time</span><span class="three-fifth yellow">2018-08-03 17:42:37</span></div>
          </div>
        </div>
      </AdminTopo>
    </div>
    <ServEvent/>
  </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import ServItem from '../../components/serv-list/serv-item.vue';
import ServEvent from '../../components/serv-monitor/serv-event-table.vue';
@Component({ components: { ServItem, ServEvent } })
export default class ServList extends Vue {
}
</script>

<style lang="scss">
.serv-list-btn-group{
  margin-top: 20px;
  background-color: #dcdee2;
  padding: 3px;
  border-radius: 4px;
}
</style>
