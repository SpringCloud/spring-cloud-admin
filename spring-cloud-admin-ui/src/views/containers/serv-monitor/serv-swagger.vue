<template>
  <div class="container mb20">
    <header class="clear mb15">
      <div>
        <h1 class="n">文档</h1>
        <p class="grey">我是描述我是描述我是描述我是描述我是描述</p>
      </div>
    </header>
    <Swagger :data="data"/>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import axios from 'axios';
import { Component } from 'vue-property-decorator';
import Swagger from '../../components/serv-monitor/swagger/swagger.vue';
@Component({ components: { Swagger } })
export default class ServLogback extends Vue {
  model = true;
  data = {};
  created() {
    axios.get('https://petstore.swagger.io/v2/swagger.json').then((res) => {
      this.data = res.data;
    });
  }
}
</script>
<style lang="scss">
</style>
