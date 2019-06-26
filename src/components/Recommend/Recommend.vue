<template>
  <!-- ADList -->
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in sliders">
        <img :src="item.picUrl"/>
      </mt-swipe-item>
    </mt-swipe>
    <!-- Radio List -->
    <p class="title">电台</p>
    <ul class="raidoList">
      <li v-for="item in radioList">
        <a>
          <div class="listMedia">
            <img :src="item.picUrl">
          </div>
          <div class="listInfo">
            <span>{{ item.Ftitle}}</span>
          </div>
        </a>
      </li>
    </ul>
    <div class="footer_logo"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      sliders: [],
      radioList: []
    }
  },

  created () {
    this.$axios.get('/api/getDiscList').then(
      res => {
        var resData = res.data.data;
        this.sliders = resData.slider;
        this.radioList = resData.radioList;
      }
    ).catch(
      error => console.log(error)
    )
  }
}
</script>

<style scope>
 p.title {
    line-height: 0px;
    padding: 4px 5px;
 }
</style>
