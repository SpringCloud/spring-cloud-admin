<template>
  <div class="admin-router">
    <div class="scroll" style="text-overflow: ellipsis;padding-top: 12px;
    white-space: nowrap;max-width: calc(100% - 280px);overflow-x:scroll;">
        <div v-for="(i,index) in stateGlobal.routerStack" @click="$router.push(i.url)" :key="i.url" class="admin-router-tag cp" :class="{'active':$route.fullPath === i.url}">
          <span class="mr5">{{i.title}}</span>
          <Icon type="md-close" class="close" v-if="stateGlobal.routerStack.length !== 1" @click="deleteRouter($event,index)"/>
        </div>
    </div>
    <div v-clickout="() => this.show = false">
        <div class="flex-c cp" @click="show = !show;">
          <span class="mr5 sm">{{stateGlobal.duration.start | dateformat}} ~ {{stateGlobal.duration.end | dateformat}}</span>
          <Icon :type="show?'md-arrow-dropup':'md-arrow-dropdown'"/>
        </div>
        <RkToolTime :show.sync="show" :propsTime="stateGlobal.duration"/>
      </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import RkToolTime from './rk-tool-time.vue';
@Component({ components: { RkToolTime } })
export default class AdminRouter extends Vue {
  @State('global') stateGlobal;
  @Action('DELETE_ROUTER') DELETE_ROUTER;
  show = false;
  deleteRouter(e, index) {
    e.stopPropagation();
    if (this.stateGlobal.routerStack.length === 1) return;
    this.DELETE_ROUTER(index);
    this.$router.push(this.stateGlobal.routerStack[index - 1].url);
  }
}
</script>

<style lang="scss" scoped>
.admin-router {
  flex-shrink: 0;
  z-index: 9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 42px;
  color: #fafafa;
  background-color: #2f333c;
  color: #eaeaea;
  padding: 5px 30px 5px 60px;
  width: 100%;
  box-shadow: 0 1px 1px rgba(0,0,0,.08);
  .scroll::-webkit-scrollbar { width: 0px !important ;position: absolute;top: -100px};
  .scroll{
    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;
  }
}
.admin-router-tag{
  display: inline-block;
  position: relative;
  border-radius: 10px;
  padding: 2px 10px 2px 17px;
  margin-right: 8px;
  font-size: 11px;
  background-color: rgba(255, 255, 255, 0.07);
  box-shadow: 0 3px 6px 0 rgba(0,0,0,.1), 0 1px 3px 0 rgba(0,0,0,.08);
  .close{
    color: rgba(255, 255, 255, 0.2);
    transition: color .3s;
    &:hover{
        color: #eaeaea;
    }
  }
  &.active:before{
    content: '';
    position: absolute;
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 3px;
    // background-color: #3880ff;
    background-color: #18b566;
    top: 8px;
    left: 8px;
  }
}
</style>
