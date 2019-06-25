<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      imgs: []
    }
  },

  created () {
    this.$axios.get('/api/getDiscList/fcgi-bin/fcg_yqqhomepagerecommend.fcg?_=1561458800007&g_tk=5381&uin=0&format=json').then(
      res => {
        debugger
        this.imgs = res.data.messages
      }
    ).catch(
      error => console.log(error)
    )
  }
}
</script>

<style>

</style>
