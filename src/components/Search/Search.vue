<template>
  <div>
    <div class="mod_search_bar">
      <div class="search_bar_cont">
        <form method="get" action="#">
          <input class="search_input" type="search" autocomplete="off" autocorrect="off" placeholder="搜索歌曲、歌单、专辑" style="-webkit-appearance: textfield;">
          <span class="icon icon_search">搜索</span>
          <span class="icon icon_delete" style="display: none;">删除</span>
        </form>
      </div>
      <div class="search_bar_tip_text" style="display: none;">取消</div>
    </div>
    <div id="js_hot_keys" class="mod_search_result" style="">
      <h3 class="result_tit" style="">热门搜索</h3>
      <div class="result_tags">
        <a href="https://y.qq.com/m/act/supervocal2/index.html?openinqqmusic=1&amp;ADTAG=myqq" class="tag_s tag_hot">声入人心</a>
        <a v-for="(item, index) in hotKeys" :key="index" href="javascript:;" class="tag_s">{{ item.k }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import { Indicator } from 'mint-ui';

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      hotKeys: []
    }
  },

  created() {
    Indicator.open('加载中...');
    this.$axios.get('/api/getHotKeys').then(
      res => {
        this.hotKeys = res.data.data.hotkey;
        debugger;
      }
    ).catch(
      error => {
        console.log(error);
      }
    ).finally(
      () => Indicator.close()
    )
  },
}
</script>

<style scoped>
a {
  text-decoration: none;
  cursor: pointer;
}
.mod_search_bar {
    background: #f4f4f4;
    padding: 10px;
    display: -webkit-box;
    -webkit-box-orient: horizontal;
    -webkit-box-align: center
}

.mod_search_bar .search_bar_cont {
    position: relative;
    border-radius: 3px;
    background: #fff;
    height: 20px;
    padding: 8px 12px 8px 35px;
    -webkit-box-flex: 1
}

.mod_search_bar .search_input {
    height: 20px;
    line-height: 20px;
    width: 100%;
    color: rgba(0,0,0,.3);
    border: none;
    -webkit-appearance: none;
    font-size: 14px
}

.mod_search_bar .search_input::-webkit-input-placeholder {
    color: rgba(0,0,0,.3)
}

.mod_search_bar .search_input::-webkit-inner-spin-button,.mod_search_bar .search_input::-webkit-outer-spin-button {
    -webkit-appearance: none
}

.mod_search_bar .icon_search {
    position: absolute;
    top: 9px;
    left: 10px;
    width: 18px;
    height: 18px;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiZjUzNjE3YS0yODYxLTkwNDUtYTU3MS0wZjY3N2I4ZjcxY2MiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTdDRjRGMjY3MzE4MTFFNThFMDE4OEE4MDY3MERGOEMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTdDRjRGMjU3MzE4MTFFNThFMDE4OEE4MDY3MERGOEMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmNlNzM5N2M4LWRiMGItODQ0Zi1iOWYxLTFlNWJjNTAxMWY2NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpiZjUzNjE3YS0yODYxLTkwNDUtYTU3MS0wZjY3N2I4ZjcxY2MiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6uN3S5AAACj0lEQVR42syYTUgUYRjH10jKTSEswaiwQrQOm57Uyo3yVBEi4kHPKpgn01N+XJTVg26GCKVF1zqkIBJ421Sk8iSphwUREQQh7aSWXrb/Q/+BYcid950Pdwd+PLOzM+/8eOaZmeedjFgsFkin5VQgzZbTmvuXgjpQCYpAHrf/BHGwAD6BJb+FHoAIuHvM/5eI7NdFsW7wxetLFgTvQIwyO2AUPAWF4Bwp5Db5bxfc4zHjIEtHKCNJUV8An0E5OAD94BXYtxlTBNuYKZH5RtldNxkKmmTWGSMKMgHuI/uWgQ1QwbGCboRGKLHG9K84qM8VFv8axxp2KvQQNILfoAZsu7iLt0Atx2oG950IRRj7wKoHj5ZlMCD1yqglJM+ZO7ybRjx83g2zqOVOLdERqmX8qFjAqssexzSfQ0kozDjjw1thxnIOJaFixh8+CMUZb+kIXWTc9kHIGDM3Xd72R4wJHaEdxnwfhPIt51ASMq5ziQ9Cty3nUBKaZ3zkg9BjyzmUhCYZ60G2hzIyVgPXJ3SElthcSevx3EMhGes8mOOrROsu6+Kd8AKEPJCReuzkmN1OXq6z4C2bqylwxYXMVTANzoIxu/pJ9hySFH8H1zlIyGFm5iklTV67mwZNWtYn4Cu4BhaZbpVCzwE9bF0LuO0GeOa2yf8FqpjqM+yPNsFrUA1u8uQ5XK/mf7JPL495A1pZP1GVLNlNg/6AFvCBQmH+brE5bo4ZNWrmkLOXKH+/dDsvm2X7GWI/E2axXwaZfB3EKTLxnx78PaOtlO7MddnuOZJkUZI66bm9SDWZaqrDbYa8kjIyNcT1aCqFkkql8nOM+fINcsaTsgxZMxU0PuGkWsgs9e/rRyKRSKsvaH8FGAAtc45viyHBdwAAAABJRU5ErkJggg==);
    background-repeat: no-repeat;
    background-size: cover;
    text-indent: -999px
}

.mod_search_bar .icon_delete {
    position: absolute;
    top: 9px;
    right: 12px;
    width: 18px;
    height: 18px;
    background: #b1b1b1;
    text-indent: -9999px;
    border-radius: 99px
}

.mod_search_bar .icon_delete:after,.mod_search_bar .icon_delete:before {
    content: "";
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 8px;
    background: #fff;
    -webkit-transform: rotate(45deg)
}

.mod_search_bar .icon_delete:before {
    width: 10px;
    height: 2px;
    margin-left: -5px;
    margin-top: -1px
}

.mod_search_bar .icon_delete:after {
    width: 2px;
    height: 10px;
    margin-left: -1px;
    margin-top: -5px
}

.mod_search_bar .search_bar_tip_text {
    padding-right: 10px;
    padding-left: 10px;
    font-size: 14px;
    height: 36px;
    line-height: 36px
}

.mod_search_bar .icon_delete,.mod_search_bar .search_bar_tip_text {
    display: none
}

.mod_search_bar--focus .icon_delete,.mod_search_bar--focus .search_bar_tip_text {
    display: block
}

.mod_search_result {
    background: #fff;
    padding: 15px 15px 10px 15px
}

.mod_search_result .result_tit {
    color: rgba(0,0,0,.6);
    margin-bottom: 8px
}

.mod_search_result .result_tags {
    font-size: 0
}

.mod_search_result .tag_s {
    display: inline-block;
    font-size: 14px;
    padding: 0 10px;
    height: 30px;
    line-height: 30px;
    color: #000;
    border: 1px solid rgba(0,0,0,.6);
    border-radius: 99px;
    word-break: keep-all;
    margin-bottom: 10px;
    margin-right: 14px
}

.mod_search_result .tag_hot {
    color: #fc4524;
    border-color: #fc4524
}

.mod_search_content li {
    position: relative;
    height: 55px;
    padding-left: 56px;
    overflow: hidden
}

.mod_search_content li::after {
    content: "";
    position: absolute;
    height: 1px;
    top: 0;
    left: 0;
    right: 0;
    background: #e5e5e5
}

.mod_search_content .icon,.mod_search_content .icon.no_copyright::after {
    background-image: url(../../assets/search_icon.png);
    background-repeat: no-repeat;
    background-size: 22px 30px
}

.mod_search_content .icon {
    position: absolute;
    top: 18px;
    left: 18px;
    width: 22px;
    height: 20px;
    background-position: 0 0
}

.mod_search_content .icon.no_copyright::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    bottom: 0;
    right: -1px;
    background-color: #fff;
    background-position: 0 -20px
}

.mod_search_content .media {
    position: absolute;
    top: 8px;
    left: 8px;
    width: 40px;
    height: 40px
}

.mod_search_content .media img {
    display: block;
    width: 100%
}

.mod_search_content .avatar,.mod_search_content .avatar img {
    border-radius: 999px
}

.mod_search_content .main_tit,.mod_search_content .sub_tit {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
}

.mod_search_content .main_tit {
    margin: 10px 0 2px;
    line-height: 18px;
    font-size: 16px;
    font-weight: 400;
    color: #000
}

.mod_search_content .sub_tit {
    color: grey
}

.mod_search_content .sub_tit span {
    margin-right: 10px
}

.mod_search_record {
    background: #fff
}

.mod_search_record li {
    border-top: 1px solid #ededed;
    padding: 0 15px
}

.record_main {
    position: relative;
    display: block;
    height: 44px;
    line-height: 44px
}

.mod_search_record li:last-child {
    border-bottom: 1px solid #ededed
}

.record_con {
    position: absolute;
    left: 40px;
    right: 50px;
    display: block;
    height: 44px;
    line-height: 44px;
    color: #000;
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis
}

.iocn_clock {
    position: absolute;
    left: 0;
    top: 12px;
    width: 20px;
    height: 20px;
    background-repeat: no-repeat;
    background-size: cover;
    text-indent: -999px
}

.icon_close {
    position: absolute;
    right: 0;
    top: 12px;
    width: 20px;
    height: 20px
}

.icon_close:after,.icon_close:before {
    position: absolute;
    left: 0;
    top: 0;
    content: "";
    background: rgba(0,0,0,.6);
    -webkit-transform: rotate(45deg)
}

.icon_close:before {
    width: 17px;
    height: 1px;
    top: 8px
}

.icon_close:after {
    width: 1px;
    height: 17px;
    left: 8px
}

.record_handle {
    text-align: center;
    height: 44px;
    line-height: 44px
}

.record_handle a {
    display: inline-block;
    line-height: 44px;
    color: #47c88a
}

.mod_null {
    position: relative;
    padding: 210px 0 0;
    text-align: center;
    color: grey
}

.mod_null:before {
    content: "";
    position: absolute;
    left: 50%;
    top: 80px;
    -webkit-background-size: cover
}

.mod_null h6 {
    font-size: 18px;
    line-height: 36px;
    font-weight: 400
}

.mod_null.search:before {
    width: 106px;
    height: 105px;
    margin-left: -53px;
}

.mod_loading {
    position: relative;
    height: 55px;
    line-height: 55px;
    text-align: center
}

.loading__text {
    margin-left: 5px;
    font-size: 12px;
    color: grey
}

.loading__icon {
    vertical-align: middle;
    position: relative;
    top: -2px;
    display: inline-block;
    width: 20px;
    height: 20px;
    background-size: 20px 20px;
    -webkit-animation: ani_loading 1s infinite
}
</style>
