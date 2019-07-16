<template>
  <div>
    <ul class="mod_topic">
      <li class="topic_item" v-for="(item, index) in topList" :key="index">
        <div class="topic_main">
          <a href="javascript:;" class="topic_media">
            <img :src="item.picUrl">
            <span class="listen_count"><i class="icon icon_listen"></i>{{ item.listenCount }}</span>
          </a>
          <div class="topic_info">
            <div class="topic_cont">
              <h3 class="topic_tit">{{ item.topTitle }}</h3>
              <p>1<span class="text_name">{{ item.songList[0].songname }}</span>- {{ item.songList[0].singername }}</p>
              <p>2<span class="text_name">{{ item.songList[1].songname }}</span>- {{ item.songList[1].singername }}</p>
              <p>3<span class="text_name">{{ item.songList[2].songname }}</span>- {{ item.songList[2].singername }}</p>
            </div><i class="topic_arrow"></i>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { Indicator } from 'mint-ui';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      topList: []
    }
  },
  mounted () {
    Indicator.open('加载中...');
    this.$axios.get('/api/getTopList').then(
      res => {
        this.topList = res.data.data.topList;
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
.mod_topic {
    padding: 6px;
    background: #f4f4f4;
}
.mod_topic li {
    margin-bottom: 10px;
    overflow: hidden
}

.mod_topic li .topic_main {
    display: -webkit-box;
    background: #fff
}
.mod_topic li .topic_media {
    position: relative;
    width: 100px;
    height: 100px;
    display: block
}
.mod_topic li .topic_img {
    display: block;
    width: 100px;
    height: 100px
}

.mod_topic li .topic_media img {
    display: block;
    width: 100px;
    height: 100px
}
.mod_topic li .topic_media .icon_play,.mod_topic li .topic_media .listen_count {
    position: absolute;
    display: block
}
.mod_topic li .topic_media::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100px;
    z-index: 1;
    background-image: url(../../assets/list_sprite.png);
    background-size: 1px 117px;
    background-repeat: repeat-x
}

.mod_topic li .topic_media .icon_play,.mod_topic li .topic_media .listen_count {
    position: absolute;
    display: block
}
.mod_topic li .topic_media .icon_listen,.mod_topic li .topic_media .icon_play {
    background-image: url(../../assets/list_sprite.png);
    background-repeat: no-repeat;
    background-size: 24px 60px;
    z-index: 10
}
.mod_topic li .topic_media .icon_play {
    height: 24px;
    bottom: 5px;
    right: 5px;
    width: 24px;
    background-position: 0 0;
    opacity: .6
}
.mod_topic li .topic_media .icon_play.pause {
    background-position: 0 -25px
}
.mod_topic li .topic_media .listen_count {
    left: 5px;
    bottom: 7px;
    line-height: 12px;
    color: #fff;
    opacity: .6;
    font-size: 9px;
    z-index: 10
}
.mod_topic li .topic_media .icon_listen {
    display: block;
    float: left;
    width: 10px;
    height: 10px;
    background-position: 0 -50px;
    margin-right: 3px
}
.mod_topic li .topic_info {
    position: relative;
    -webkit-box-flex: 1;
    display: -webkit-box;
    -webkit-box-align: center;
    -webkit-box-pack: center
}
.mod_topic li .topic_cont {
    -webkit-box-flex: 1;
    margin: 0 10px 0 15px
}
.mod_topic li .topic_cont p,.mod_topic li .topic_tit {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
}
.mod_topic li .topic_tit {
    font-size: 16px;
    color: #000;
    font-weight: 400;
    margin-bottom: 5px;
    margin-top: 2px;
}

.mod_topic li .topic_cont p {
    font-size: 14px;
    color: rgba(0,0,0,.5);
    margin: 0;
}
.mod_topic li .topic_cont .text_name {
    color: #000;
    margin-left: 8px;
    margin-right: 5px
}
.mod_topic li .topic_arrow {
    position: absolute;
    right: 10px;
    top: 50%;
    margin-top: -4px;
    width: 6px;
    height: 6px;
    border-right: 1px solid #b2b2b2;
    border-bottom: 1px solid #b2b2b2;
    -webkit-transform: rotate(-45deg)
}
.mod_topic .topic_more {
    height: 40px;
    line-height: 40px;
    text-align: center
}
.mod_topic .topic_more a {
    display: inline-block;
    padding: 0 10px;
    font-size: 14px;
    color: rgba(0,0,0,.6)
}
</style>
