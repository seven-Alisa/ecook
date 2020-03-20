<template>
	<div>
		<myheader bol=flase >
			<img class="img3" slot="img3" src="../assets/images/drawable-hdpi-v4/service_pic.png"/>		
			<img class="img2" slot="img2" src="../assets/images/drawable-xxhdpi-v4/home_talk_private_message.png"/>				
		</myheader>
		
	</div>
</template>

<script>
	import Myheader from "../components/myheader"
	export default{
		name:"eating",
		components:{
				Myheader
			},
	}
</script>

<style>
</style>