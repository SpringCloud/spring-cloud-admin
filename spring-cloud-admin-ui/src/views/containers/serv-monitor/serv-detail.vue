<template>
  <div class="container">
    <header class="clear mb15">
      <div>
        <h1 class="n"><Button @click="$router.push('/')" shape="circle" class="mr10" icon="ios-arrow-back" style="vertical-align: text-bottom;"></Button>SPRING-BOOT-ADMIN</h1>
        <p class="grey">xubin02 - ARCH - 10.224.18.11:8070 </p>
      </div>
    </header>
    <div class="mb10 clear">
      <div class="r" style="padding-left:20px;">
        <ServBuild/>
        <ServGit/>
      </div>
      <admin-panel :style="`width:calc(100% - 320px)`" title="Topology 信息" padding="10px 0;">
        <AdminTopo :height="400" :zoomRate="0.7"/>
      </admin-panel>
    </div>
    <ServEvent/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import ServItem from '../../components/serv-list/serv-item.vue';
import ServBuild from '../../components/serv-monitor/detail/serv-build-info.vue';
import ServGit from '../../components/serv-monitor/detail/serv-git-info.vue';
import ServEvent from '../../components/serv-monitor/detail/serv-event-table.vue';
@Component({ components: { ServItem, ServEvent, ServBuild, ServGit } })
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
