<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in sliders">
        <img :src="item.picUrl"/>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      sliders: []
    }
  },

  created () {
    this.$axios.get('/api/getDiscList').then(
      res => {
        var sliders = res.data.data.slider;
        this.sliders = sliders;
      }
    ).catch(
      error => console.log(error)
    )
  }
}
</script>

<style>

</style>
