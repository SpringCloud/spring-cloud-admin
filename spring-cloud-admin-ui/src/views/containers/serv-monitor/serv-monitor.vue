<template>
<div>
  <AdminNav class="mb20"/>
  <router-view></router-view>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({})
export default class ServMonitor extends Vue {
}
</script>

<style lang="scss">
</style>
