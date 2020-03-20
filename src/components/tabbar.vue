<template>
	<div class="tabbarWrap">
		<item title="首页" mark="home" :active="sel" @myevent="getVal">
			<img slot="normalImg" src="../assets/images/drawable-xhdpi-v4/icon_main_home_normal.png" alt="" />
			<img slot="activeImg" src="../assets/images/drawable-xhdpi-v4/icon_main_home_sel.png" alt="" />	
		</item>
		<item title="课堂" mark="classroom" :active="sel" @myevent="getVal">
			<img slot="normalImg" src="../assets/images/drawable-xhdpi-v4/icon_main_course_normal.png" alt="" />
			<img slot="activeImg" src="../assets/images/drawable-xhdpi-v4/icon_main_course_sel.png" alt="" />	
		</item>
		<item title="食话" mark="eating" :active="sel" @myevent="getVal">
			<img slot="normalImg" src="../assets/images/drawable-xhdpi-v4/icon_main_talk_normal.png" alt="" />
			<img slot="activeImg" src="../assets/images/drawable-xhdpi-v4/icon_main_talk_sel.png" alt="" />	
		</item>
		<item title="收藏" mark="collect" :active="sel" @myevent="getVal">
			<img slot="normalImg" src="../assets/images/drawable-xhdpi-v4/icon_main_collection.png" alt="" />
			<img slot="activeImg" src="../assets/images/drawable-xhdpi-v4/icon_main_collection_sel.png" alt="" />	
		</item>
		<item title="我的" mark="mine" :active="sel" @myevent="getVal">
			<img slot="normalImg" src="../assets/images/drawable-xhdpi-v4/icon_main_mine_normal.png" alt="" />
			<img slot="activeImg" src="../assets/images/drawable-xhdpi-v4/icon_main_mine_sel.png" alt="" />	
		</item>
	</div>
</template>

<script>
	import Item from './item'
	export default{
		name:"tabbar",
		components:{
			Item
		},
		props:['istabbar'],
		data(){
			return{
				sel:"home"
			}
		},
		methods:{
			getVal(value){
				this.sel = value
			}
		}
		
	}
	
</script>

<style>
	.tabbarWrap{
		width: 100%;
		height: 60px;
		background: white;
		position: fixed;
		bottom: 0px;
	}
</style>