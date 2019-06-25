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
    this.$axios.get('/api/getADList').then(
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
