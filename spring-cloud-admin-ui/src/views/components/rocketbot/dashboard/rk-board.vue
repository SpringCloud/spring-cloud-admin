<template>
  <div class="rk-board container">
    <div v-clickout="() => this.show = false">
      <div class="flex-c cp" @click="show = true">
        <b class="mr5">{{stateOptions.currentApplication.label}}</b>
        <Icon type="md-link" class="mr10" :size="18"/>
      </div>
      <RkToolDashboard :stateOptions="stateOptions" :show.sync="show"/>
    </div>
    <Icon type="ios-arrow-forward" class="grey mr10"/>
    <select v-if='stateOptions.currentService' :value="stateOptions.currentService.key" @change="serviceChange($event)" class="mr15" style="background: 0; border: 0; outline: none;">
      <option v-for="i in stateOptions.services" :key="i.key" :value="i.key">{{i.label}}</option>
    </select>
    <span class="grey mr10">|</span>
    <select  v-if='stateOptions.currentServer' :value="stateOptions.currentServer.key" @change="serverChange($event)" class="grey mr15" style="background: 0; border: 0; outline: none;">
      <option v-for="i in stateOptions.servers" :key="i.key" :value="i.key">{{i.pid+'@'+i.ipv4[0]}}</option>
    </select>
    <button class="rk-board-inspector" @click="$emit('showServer')">inspector</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { State } from '@/store/modules/rocketbot/options.ts';
import { Component, Prop } from 'vue-property-decorator';
import RkToolDashboard from '@/components/rk-tool-dashboard.vue';
import { serviceChange, serverChange } from '@/store/dispatch/dashboard.ts';

@Component({
  components: { RkToolDashboard },
})
export default class RkBoard extends Vue {
  @Prop() stateOptions: State;
  show:Boolean = false;
  serviceChange(e) {
    serviceChange(this.stateOptions.services[e.target.selectedIndex]);
  }
  serverChange(e) {
    serverChange(this.stateOptions.servers[e.target.selectedIndex]);
  }
}
</script>
<style lang="scss">
.rk-board{
  display: flex;
  flex-shrink: 0;
  align-items: center;
  padding-top: 10px;
  padding-bottom:  10px;
  background-color: #f6f7fb;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}
.rk-board-service{
  font-weight: 600;
}
.rk-board-inspector{
  cursor: pointer;
  border-radius: 4px;
  background-color: #18b566;
  border: 0;
  color: #fff;
  outline: none;
  padding: 2px .7em;
  transition: background-color .3s;
  &:hover{
    background-color: #28c576;
  }
}
</style>
