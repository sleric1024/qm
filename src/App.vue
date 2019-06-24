<template>
  <div>
    <mt-header fixed title="QQ音乐"></mt-header>
    <router-view></router-view>
    <mt-tabbar v-model="selected">
    <mt-tab-item id="like">
      <img slot="icon" src="./assets/like.png">
      喜欢
    </mt-tab-item>
    <mt-tab-item id="collect">
      <img slot="icon" src="./assets/collect.png">
      收藏
    </mt-tab-item>
    <mt-tab-item id="history">
      <img slot="icon" src="./assets/history.png">
      记录
    </mt-tab-item>
  </mt-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello World!',
      selected: ''
    }
  },
  watch: {
    selected (newval, oldval) {
      // console.log(newval + 'and' + oldval + '\n');
      this.$router.push({
        name: newval
      })
    }
  }
}
</script>

<style>

</style>
