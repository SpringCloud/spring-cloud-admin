<template>
  <div class="container mb20">
    <header class="clear mb15">
      <div>
        <h1 class="n">文档</h1>
        <p class="grey">我是描述我是描述我是描述我是描述我是描述</p>
      </div>
    </header>
    <div class="serv-mnt-swagger">
      <div class="opblock opblock-post">
        <div class="opblock-post-summary">
          <span class="opblock-method">POST</span>
          <span class="opblock-path">/pet/{petId}</span>
          <span>Add a new pet to the store</span>
          <Icon type="md-unlock" class="opblock-authorization" size="18"/>
        </div>
        <div class="opblock-container">
          <div class="parameters-container">This can only be done by the logged in user.</div>
          <header class="opblock-section-header">
            <span>Parameters</span>
            <span class="opblock-section-header-btn">Try it out</span>
          </header>
          <div class="parameters-container" style="background:#fff;">
            <table class="table">
              <thead>
                <tr>
                  <th class="sm">Name</th>
                  <th class="sm">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="b keynote required">username</div>
                    <div class="text"><span class="xb">string</span><i style="color:#808695"> (path)</i></div>
                  </td>
                  <td><div class="keynote">name that need to be updated</div></td>
                </tr>
                <tr>
                  <td>
                    <div class="b keynote required">body</div>
                    <div class="text"><span class="xb"></span><i style="color:#808695"> (path)</i></div>
                  </td>
                  <td>
                    <div class="keynote">Updated user object</div>
                    <div>
                      <pre class="code">
{
  "id": 0,
  "username": "string",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "password": "string",
  "phone": "string",
  "userStatus": 0
}</pre>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <header class="opblock-section-header">
            <span>Responses</span>
            <span class="opblock-section-header-select">
              <span class="notice">Response content type</span>
              <select class="content-type"><option value="application/xml">application/xml</option><option value="application/json">application/json</option></select>
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
                <tr>
                  <td>400</td>
                  <td><pre class="code">Invalid user supplied</pre></td>
                </tr>
                <tr>
                  <td>404</td>
                  <td><pre class="code">User not found</pre></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="opblock opblock-put">
        <div class="opblock-post-summary">
          <span class="opblock-method">PUT</span>
        </div>
      </div>
      <div class="opblock opblock-get">
        <div class="opblock-post-summary">
          <span class="opblock-method">GET</span>
        </div>
      </div>
       <div class="opblock opblock-delete">
        <div class="opblock-post-summary">
          <span class="opblock-method">DELETE</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
@Component({ components: {} })
export default class ServLogback extends Vue {
  model = true;
}
</script>
<style lang="scss">
.serv-mnt-swagger{
  .b{font-weight: 500;}
  .xb{font-weight: 600;}
  .sm{font-size: 12px;}
  .text{
    font-family: monospace;
  }
  .code{
    max-height: 400px;
    padding: 10px;
    font-size: 12px;
    min-height: 2em;
    background-color: #2f333c;
    border-radius: 4px;
    margin-top: 0;
    color: #eee;
  }
  .keynote{font-size: 1.1em;margin-bottom: 10px;}
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
    transition: background-color .3s;
    &:hover{
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
    transition: background-color .3s;
    &:hover{
      background-color: #f8f8f8;
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
}
</style>
