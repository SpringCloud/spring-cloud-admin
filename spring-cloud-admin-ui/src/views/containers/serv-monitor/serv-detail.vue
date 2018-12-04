<template>
  <div class="container">
    <header class="clear mb15">
      <div>
        <h1 class="n">
          <Button @click="$router.push('/')" shape="circle" class="mr10" icon="ios-arrow-back" style="vertical-align: text-bottom;"></Button>
          {{application.name}}
        </h1>
        <p class="grey">{{group}} - {{version}}- {{serviceUrl}}</p>
      </div>
    </header>
    <div class="mb10 clear">
      <div class="r" style="padding-left:20px;">
        <ServBuild :data="build"/>
        <ServGit :data="git" />
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
import { getApplication } from '@/api/servMgmt/servList.ts';
import { Component } from 'vue-property-decorator';
import ServItem from '../../components/serv-list/serv-item.vue';
import ServBuild from '../../components/serv-monitor/detail/serv-build-info.vue';
import ServGit from '../../components/serv-monitor/detail/serv-git-info.vue';
import ServEvent from '../../components/serv-monitor/detail/serv-event-table.vue';
@Component({ components: { ServItem, ServEvent, ServBuild, ServGit } })
export default class ServList extends Vue {
  application:any = {}

  beforeMount() {
    const id = this.$route.params.id;
    getApplication(id).then((data) => {
      this.application = data.data;
    });
  }

  get group() {
    return this.application.metadata ? this.application.metadata.GROUP : '';
  }
  get version() {
    return this.application.metadata ? this.application.metadata.VERSION : '';
  }
  get serviceUrl() {
    return this.application.serviceUrl ? this.application.serviceUrl : '';
  }
  get build() {
    return this.application.info ? this.application.info.build : {};
  }
  get git() {
    return this.application.info ? this.application.info.git : {};
  }
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
