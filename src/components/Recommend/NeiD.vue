<template>
	<ul>
		<li v-for="(item, index) in recomData" :key="index" class="playlist__item slide__item " onmouseover="this.className=(this.className+' playlist__item--hover')" onmouseout="this.className=this.className.replace(/ playlist__item--hover/, '')" data-albummid="001VFoZM3iVrPo" data-albumid="4054658">
			<div class="playlist__item_box">
				<div class="playlist__cover mod_cover" style="visibility: visible;">
					<a class="js_album">
						<img :src=" `//y.gtimg.cn/music/photo_new/T002R150x150M000` + item.album.mid + `.jpg?max_age=2592000`" class="playlist__pic" style="display: block; visibility: visible;">
						<i class="mod_cover__mask"></i>
						<i class="mod_cover__icon_play js_play" data-stat="y_new.index.album.play_btn"></i>
					</a>
				</div>
				<h4 class="playlist__title">
					<span :title="item.title" class="playlist__title_txt">
						<a>{{item.title}}</a>
					</span>
				</h4>
				<div class="playlist__author" :title="item.singer[0].name">
					<a class="js_singer" :title="item.singer[0].name">{{item.singer[0].name}}</a>
				</div>
			</div>
		</li>
	</ul>
</template>

<script>
export default {
	name: 'nei-di',
	data() {
		return {
			recomData: []
		}
	},

	mounted() {
		// {lan: "内地", name: "neidi", tjreport: "10_0_0_2_10001_1", type: 1}
		this.$axios.get('/api2/getRecomListNeidi').then(
			res => {
				var recomData = res.data.new_song.data.songlist;
				this.recomData = recomData.slice(0, 15);
			}).catch(
				error => console.log(error)
		)}
	}
</script>

<style scoped>
body {
	padding: 0;
}
ul {
	padding: 0;
	margin: 0 auto;
	margin-top: 32px;
}
img.playlist__pic {
	width: 100%;
}
li {
	display: inline-block;
	width: 32.6%;
}
h4 {
	display: block;
	-webkit-margin-before: 4px;
	margin-block-start: 4px;
	-webkit-margin-after: 4px;
	margin-block-end: 4px;
	-webkit-margin-start: 0px;
	margin-inline-start: 0px;
	-webkit-margin-end: 0px;
	margin-inline-end: 0px;
	height: 20px;
	font-weight: bold;
	padding-left: 12px;
	white-space: nowrap;
}
h4 span {
	float: left;
	max-width: 100%;
	font-weight: 400;
	overflow: hidden;
	text-overflow: ellipsis;
	line-height: 22px;
	max-height: 44px;
	font-size: 14px;
}
.playlist__author {
	color: #999;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	height: 22px;
	font-size: 14px;
	padding-left: 12px;
}
</style>
