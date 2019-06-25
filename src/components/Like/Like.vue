<template>
  <div>
    <mt-swipe :auto="4000" :for="img in imgs">
      <mt-swipe-item>{{img}}</mt-swipe-item>
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
        var sliders = res.data.data.slider;
        var imgs = sliders.map(val => val.picUrl);
        this.imgs = imgs;
      }
    ).catch(
      error => console.log(error)
    )
  }
}
</script>

<style>

</style>
