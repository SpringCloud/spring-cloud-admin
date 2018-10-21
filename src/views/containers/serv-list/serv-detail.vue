<template>
<div>
  <AdminNav/>
  <div class="container pt20">
    <header class="clear mb20">
      <div>
        <h1 class="n">SPRING-BOOT-ADMIN</h1>
        <p class="grey">xubin02 - ARCH - 10.224.18.11:8070 </p>
      </div>
    </header>
    <div>
      <AdminTopo/>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import ServItem from '../../components/serv-list/serv-item.vue';
@Component({ components: { ServItem } })
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
