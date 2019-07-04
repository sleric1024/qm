<template>
  <!-- ADList -->
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item, index) in sliders" :key="index">
        <img :src="item.picUrl"/>
      </mt-swipe-item>
    </mt-swipe>
    <!-- Radio List -->
    <p class="title">电台</p>
    <ul class="raidoList">
      <li v-for="(item, index) in radioList" :key="index">
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
    <!-- <div class="footer_logo"></div> -->

    <!-- Recommoned -->
    <p class="title">为你推荐</p>
    <my-ul class="recommondList">
      <my-li class="myli" v-for="(item, index) in recommondList" :key="index">
        <router-link :to="item.router">
          <div class="listInfo"><p :class="item.class">{{ item.name }}</p></div>
        </router-link>
      </my-li>
    </my-ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      sliders: [],
      radioList: [],
      recommondList: [{
        name: '内地',
        class: 'nd',
        router: {
          name: 'recommoned.neidi'
        }
      }, {
        name: '港台',
        class: 'gt',
        router: {
          name: 'recommoned.gangtai'
        }
      }, {
        name: '欧美',
        class: 'om',
        router: {
          name: 'recommoned.oumei'
        }
      }, {
        name: '韩国',
        class: 'hg',
        router: {
          name: 'recommoned.hanguo'
        }
      }, {
        name: '日本',
        class: 'rb',
        router: {
          name: 'recommoned.riben'
        }
      }]
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

<style scoped>
p.title {
    line-height: 0px;
    padding: 4px 5px;
 }
ul.raidoList {
  overflow: hidden;
  padding: 0;
}
.raidoList li {
  float: left;
  width: 48%;
  -webkit-box-sizing: border-box;
  margin-bottom: 10px;
  margin-left: 1%;
  margin-right: 1%;
  overflow: hidden;
}
.raidoList li a {
  display: block;
}
.raidoList li img {
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  z-index: 1;
}
.raidoList li div {
  text-align: center;
}
</style>
