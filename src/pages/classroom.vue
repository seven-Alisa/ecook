<template>
	<div>
		<myheader bol=flase>
			<div class="searchBox" slot="search">
				<img class="searchImg1" src="../assets/images/drawable-hdpi-v4/ic_search.png"/>
				<input type="text" value="搜索 课程"/>
			</div>
				<img class="img2" slot="img2" src="../assets/images/drawable-xhdpi-v4/course_top_myvideo.png"/>


		</myheader>
	</div>
</template>

<script>
	import Myheader from "../components/myheader"
	export default{
		name:"classroom",
		components:{
				Myheader
			}
		
	}
</script>

<style>
</style>