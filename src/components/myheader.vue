<template>
	<div :class="{'searchWrap':true,'white':bol}">
		<div class="headerCotent">
			<span>{{title1}}</span>
			<span>{{title2}}</span>			
		</div>
		<slot name="search"></slot>
		<slot name="img1"></slot>
		<slot name="img2"></slot>
		<slot name="img3"></slot>
		
		
	</div>
</template>

<script>
	export default{
		name:"myheader",
		props:["title1","title2","bol"]
	}
</script>

<style >
	.searchWrap{
				width: 100%;
				height: 50px;
				/*border-bottom: 1px solid gray;*/
				text-align: center;
				line-height: 50px;
				position: relative;
				/*background: #EEEEEE;*/
			}
			.searchWrap .headerCotent{
				width: 100px;
				height: 50px;
				margin: 0 auto;
			}
			.searchWrap .img2{
				width: 25px;
				position: absolute;
				right: 20px;
				top:10px;
			}
			.searchWrap .img1{
				width: 25px;
				position: absolute;
				right: 100px;
				top:10px;
			}
			.searchWrap .img3{
				width: 25px;
				position: absolute;
				left: 20px;
				top:10px;
			}
			/*search slot 样式*/
			.searchWrap .searchBox{
				width: 80%;
				height: 35px;
				background: white;
				border-radius: 5px;
				position: absolute;
				top:10px;
				left: 10px;
			}
			.searchWrap .searchBox input{
				position: absolute;
				width: 80%;
				height: 35px;
				top:0px;
				left: 30px;
				border: none;
				border-radius: 4px;
				background: #707173;
				text-align: center;
				color: white;
			}
			
			.searchWrap .searchBox .searchImg1{
				position: absolute;
				left:50px;
				width: 22px;
				top:6px;
				z-index: 99;
			}
			.searchWrap .searchBox .searchImg2{
				position: absolute;
				right: 0;
				width: 22px;
				top:6px;
				
				
			}
			.white{
				background:white;
			}
</style>