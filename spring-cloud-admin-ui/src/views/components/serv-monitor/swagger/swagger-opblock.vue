<template>
<div>
  <div class="opblock" :class="{
    'opblock-post': method === 'post',
    'opblock-get': method === 'get',
    'opblock-delete': method === 'delete',
    'opblock-put': method === 'put',
  }">
    <div class="opblock-post-summary cp" @click="open = !open">
      <span class="opblock-method">{{method.toUpperCase()}}</span>
      <span class="opblock-path">{{name}}</span>
      <span>{{data.summary}}</span>
      <Icon type="md-unlock" class="opblock-authorization" size="18"/>
    </div>
    <div class="opblock-container" v-if="open">
      <div class="parameters-description" v-if="data.description">{{data.description}}</div>
      <header class="opblock-section-header">
        <span>Parameters</span>
        <span class="opblock-section-header-btn" @click="execute = !execute" :class="{'cancel': execute}">{{this.execute?'Cancel':'Try it out'}}</span>
      </header>
      <div class="parameters-container" style="background:#fff;">
        <div v-if="!data.parameters.length">No parameters</div>
        <table v-else class="table">
          <thead>
            <tr>
              <th class="sm">Name</th>
              <th class="sm">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(i, index) in data.parameters" :key="index">
              <td>
                <div class="b keynote" :class="{'required':i.required}">{{i.name}}</div>
                <div class="text"><div class="xb">{{i.type}}{{i.format?`($${i.format})`: ''}}</div><i style="color:#808695">({{i.in}})</i></div>
              </td>
              <td>
                <div class="keynote">{{i.description}}</div>
                <div v-if="i.schema">
                  <pre class="code">{{root.definitions[i.schema.$ref.replace('#/','').split('/')[1]].properties}}</pre>
                </div>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <div v-show="execute" class="execute-btn cp">Execute</div>
      </div>
      <header class="opblock-section-header">
        <span>Responses</span>
        <span class="opblock-section-header-select">
          <span class="notice">Response content type</span>
          <select class="content-type">
            <option value="i" v-for="i in data.consumes" :key="i">{{i}}</option>
          </select>
        </span>
      </header>
      <div class="parameters-container">
        <table class="table">
          <thead>
            <tr>
              <th class="sm">Code</th>
              <th class="sm">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(value, key) in data.responses" :key="key">
              <td>{{key}}</td>
              <td><pre class="code">{{value.description}}</pre></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
</template>
<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
@Component({ components: {} })
export default class ServLogback extends Vue {
  @Prop() data;
  @Prop() method;
  @Prop() name;
  @Prop() root;
  open = false;
  execute = false;
}
</script>
<style lang="scss" scoped>
.serv-mnt-swagger{
  .cp{cursor: pointer;}
  .b{font-weight: 500;}
  .xb{font-weight: 600;}
  .sm{font-size: 12px;}
  .text{
    font-family: monospace;
  }
  .code{
    overflow: auto;
    max-height: 400px;
    padding: 10px;
    font-size: 12px;
    min-height: 2em;
    background-color: #2f333c;
    border-radius: 4px;
    margin-top: 0;
    margin-bottom: 0;
    color: #eee;
  }
  .execute-btn{
    padding: 6px;
    text-align: center;
    border-radius: 4px;
    color: #fff;
    background-color: #4990e2;
    transition: background-color .3s;
    &:hover{
      background-color:#539cf0;
    }
  }
  .keynote{margin-bottom: 10px;}
  .required:after{
    content: 'required';
    display: inline-block;
    color: #fff;
    background-color: #f93e3ecc;
    border-radius: 5px;
    padding: 0px 4px;
    font-size: 11px;
    transform: scale(.8);
  }
  .opblock{
    max-width: 1400px;
    border: 1px solid #000;
    border-radius: 4px;
    margin-bottom: 10px;
  }
  .opblock-post-summary{
    padding: 5px;
  }
  .opblock-container .table{
    width: 100%;
    text-align: left;
    border-collapse: collapse;
    th{
      padding-bottom: 10px;
      border-bottom: 1px solid rgba(59,65,81,.1);
    }
    td{
      padding: 10px 0;
      vertical-align: top;
      &:first-of-type{
          max-width: 20%;
          min-width: 6em;
      }
    }
  }
  .opblock-post{
    background: #49cc9011;
    border-color: #49cc90;
    .opblock-method{
      background: #49cc90;
    }
    .opblock-container{
      border-top: 1px solid #49cc90;
    }
  }
  .opblock-put{
    background: #fca13011;
    border-color: #fca130;
    .opblock-method{
      background: #fca130;
    }
    .opblock-section-header{
      border-top: 1px solid #fca130;
    }
  }
  .opblock-get{
    background: #61affe11;
    border-color: #61affe;
    .opblock-method{
      background: #61affe;
    }
    .opblock-section-header{
      border-top: 1px solid #61affe;
    }
  }
  .opblock-delete{
    background: #f93e3e11;
    border-color: #f93e3e;
    .opblock-method{
      background: #f93e3e;
    }
    .opblock-section-header{
      border-top: 1px solid #f93e3e;
    }
  }
  .opblock-method{
    display: inline-block;
    font-weight: 700;
    color: #fff;
    min-width: 80px;
    padding: 6px 15px;
    text-align: center;
    border-radius: 4px;
    margin-right: 10px;
  }
  .opblock-path{
    font-family: monospace;
    font-weight: 600;
    margin-right: 10px;
  }
  .opblock-authorization{
    float: right;
    padding: 6px;
    border-radius: 4px;
    cursor: pointer;
    opacity: .8;
    transition: background-color .3s,opacity .3s;
    &:hover{
      opacity: 1;
      background-color: rgba(0, 0, 0, .07);
    }
  }
  .opblock-section-header,.opblock-section-header{
    height: 45px;
    background: #fff;
    padding: 9px 20px;
    border-bottom: 1px solid #eee;
    border-top: 1px solid #eee;
    font-weight: 500;
    line-height: 23px;
  }
  .opblock-section-header-btn{
    float: right;
    padding: 0 6px;
    border: 1px solid #dcdee2;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color .3s,color .3s,border-color .3s;
    &:hover{
      background-color: #f8f8f8;
    }
    &.cancel{
      color: #f93e3e;
      border-color: #f93e3e;
    }
  }
  .opblock-section-header-select{
    float: right;
    padding: 0 6px;
    .notice{
      margin-right: 10px;
    }
    .content-type{
      border: 1px solid #dcdee2;
      height: 25px;
      &:focus{
        outline: none;
      }
    }
  }
  .parameters-container{
    padding: 20px;
  }
  .parameters-description{
    padding: 15px 20px;
  }
}
</style>
