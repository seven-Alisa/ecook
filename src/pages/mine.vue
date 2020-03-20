<template>
	<div>
		<myheader bol=flase>
				<img class="img1" slot="img1" src="../assets/images/drawable-xxhdpi-v4/home_talk_private_message.png"/>		
				<img class="img2" slot="img2" src="../assets/images/drawable-xhdpi-v4/lsq_icon_setting.png"/>		
		
		</myheader>
	</div>
</template>

<script>
	import Myheader from "../components/myheader"
	export default{
		name:"mine",
		components:{
				Myheader
			},
	}
</script>

<style>
</style>