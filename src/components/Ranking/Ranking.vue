<template>
  <div>
    我的收藏
  </div>
</template>

<script>
import { Indicator } from 'mint-ui';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    Indicator.open('加载中...');
    this.$axios.get('/api/getTopList').then(
      res => {
        debugger;
      }
    ).catch(
      error => console.log(error)
    ).finally(
      () => Indicator.close()
    )
  }
}
</script>

<style>

</style>
