<template>
	<div>
		<div class="homeTop">
			<myheader >
				<img class="img2" slot="img1" src="../assets/images/drawable-xhdpi-v4/home_shop_top.png"/>		
				<img class="img3" slot="img2" src="../assets/images/drawable-xhdpi-v4/home_upload_top.png"/>		
		
			</myheader>
			<h2>网上厨房</h2>
			<div class="homeInput">
				<img src="../assets/images/drawable-hdpi-v4/ic_search.png"/>
				<input type="text" />
				<span>在此输入菜名/食材 搜索菜谱</span>
			</div>

		</div>
		
		
	</div>
</template>

<script>
	import Myheader from "../components/myheader"
	export default{
		name:"home",
		components:{
				Myheader
			}
		
	}
</script>

<style>
	.homeTop{
		width: 100%;
		height: 300px;
		background: #f7f7f7;
	}
	.homeInput{
		width: 90%;
		height: 40px;
		margin: 0 auto;
		background: #f7f7f7;
		position: relative;
	}
	.homeInput img{
		/*width: 80%;*/
		position: absolute;
		left: 50px;
		top: 10px;
		width:20px;
		
	}
	.homeInput span{
		/*width: 80%;*/
		position: absolute;
		left: 80px;
		top: 10px;
		font-size: 12px;
	}
	.homeInput input{
		width: 100%;
		height: 40px;
		border-radius: 20px;
		border: 1px solid #726b57;
	}
</style>