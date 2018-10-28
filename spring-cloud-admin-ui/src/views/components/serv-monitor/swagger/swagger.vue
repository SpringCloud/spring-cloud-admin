<template>
<div class="serv-mnt-swagger">
  <Tag v-for="(tag, index) in data.tags" :key="index" :data="data" :tag="tag"/>
</div>
</template>
<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import Tag from './swagger-tag.vue';
@Component({ components: { Tag } })
export default class ServLogback extends Vue {
  @Prop() data;
}
</script>
<style lang="scss">
.swagger-tag-group{
  padding: 0 10px;
}
</style>
