<template>
  <div>
    <mt-header fixed title="QQ音乐">
      <router-link to="/recommond" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <router-view class="content"></router-view>
    <mt-tabbar v-model="selected">
    <mt-tab-item id="recommond">
      <img slot="icon" src="./assets/thumbs-up.png">
      推荐
    </mt-tab-item>
    <mt-tab-item id="ranking">
      <img slot="icon" src="./assets/stats.png">
      排行榜
    </mt-tab-item>
    <mt-tab-item id="search">
      <img slot="icon" src="./assets/search.png">
      搜索
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
