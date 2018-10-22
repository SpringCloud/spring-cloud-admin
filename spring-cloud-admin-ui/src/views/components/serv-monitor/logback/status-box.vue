<template>
  <div class="logack-status-box">
    <span
    class="i first" :class="{'green':this.type == 0}">TRACE</span><span
    class="i" :class="{'yellow':this.type == 1}">DEBUG</span><span
    class="i" :class="{'blue':this.type == 2}">INFO</span><span
    class="i" :class="{'orange':this.type == 3}">WARN</span><span
    class="i last" :class="{'red':this.type == 4}">ERROR</span>
  </div>
</template>
<script>
export default {
  props: ['type'],
};
</script>
<style lang="scss">
.logack-status-box{
  width:360px;
  color: #9ba3af;
  background-color: #f5f7fa;
  .green{
    color:#fff;
    background:#279a5b;
  }
  .yellow{
    color:#fff;
    background:#e7a217;
  }
  .blue{
    color:#fff;
    background:#217ef2;
  }
  .orange{
    color:#fff;
    background:#de5e18;
  }
  .red{
    color:#fff;
    background:#e1342b;
  }
  .i{
    box-sizing: border-box;
    display: inline-block;
    font-size: 12px;
    width:72px;
    height: 26px;
    text-align: center;
    line-height: 24px;
    border:1px solid rgba(0, 0, 0, 0.08);
    border-right:0;
    &.first{
      border-radius: 2px 0 0 2px;
    }
    &.last{
      border-right:1px solid rgba(0, 0, 0, 0.08);
      border-radius: 0 2px 2px 0;
    }
  }
}
</style>
