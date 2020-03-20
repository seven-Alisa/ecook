<template>
	<div class="itemWrap" @click="fn()">
		<span v-if="!bol"><slot name="normalImg"></slot></span>
		<span v-if="bol"><slot name="activeImg"></slot></span>
		<p :class="{'active':bol}">{{title}}</p>
		
	</div>
</template>

<script>
	export default{
		name:"item",
		computed:{
			bol(){
			if(this.mark==this.active){
				return true
			}else{
				return false
			}
			}
		},
		
		props:["title","mark","active"],
		methods:{
			fn(){
				this.$emit("myevent",this.mark)
				this.$router.push("/"+this.mark)
			}
			
		}
	}
</script>

<style>
	
	.itemWrap{
				width: 20%;
				float: left;
				text-align: center;
				margin: 0px;

			}
	.itemWrap img{width: 30px;}
	.itemWrap p.active{ color:rgb(66,189,86)}
</style>