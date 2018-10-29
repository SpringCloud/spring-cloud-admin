<template>
<div>
  <AdminNav class="mb20" :data="link"/>
  <router-view></router-view>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({})
export default class ServMonitor extends Vue {
  link = [];
  beforeMount() {
    this.link = [{
      to: `/services/${this.$route.params.id}`,
      title: '详情',
      exect: true,
    }, {
      to: `/services/${this.$route.params.id}/log`,
      title: '日志',
    }, {
      to: `/services/${this.$route.params.id}/point`,
      title: '监控指数',
    }, {
      to: `/services/${this.$route.params.id}/env`,
      title: '环境配置',
    }, {
      to: `/services/${this.$route.params.id}/logback`,
      title: '日志级别',
    }, {
      to: `/services/${this.$route.params.id}/jmx`,
      title: 'JMX',
    }, {
      to: `/services/${this.$route.params.id}/jvm`,
      title: 'JVM',
    }, {
      to: `/services/${this.$route.params.id}/swagger`,
      title: '文档',
    }];
  }
}
</script>

<style lang="scss">
</style>
