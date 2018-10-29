<template>
  <div>
    <div class="swagger-tag-group" @click="open = !open"><span class="swagger-tag-name">{{tag.name}}</span> <span class="swagger-tag-description">{{tag.description}}</span><Icon class="r" style="margin-top:6px;font-size:1.5em;" :type="open?'ios-arrow-down':'ios-arrow-up'" /></div>
    <div v-show="open" v-for="(value, key) in data.paths" :key="key" v-if="value[Object.keys(value)[0]].tags[0] === tag.name">
      <opblock v-for="(_value, _key, index) in value" :root="data" :data="_value" :method="_key" :name="key" :key="index" />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import opblock from './swagger-opblock.vue';
@Component({ components: { opblock } })
export default class ServLogback extends Vue {
  @Prop() data;
  @Prop() tag;
  open = true;
}
</script>
<style lang="scss">
.swagger-tag-group{
  padding: 5px 10px;
  font-weight: 400;
  margin-bottom: 10px;
  cursor: pointer;
  transition: background-color .3s;
  &:hover{
    background-color: #f6f7fb;
  }
}
.swagger-tag-name{
  font-size: 1.5em;
  margin-right: 15px;
}
.swagger-tag-description{
  font-size: 1em;
  color: #ADB5C7
}
</style>
