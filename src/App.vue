<template>
  <div id="app">
		<tabbar></tabbar>
    <router-view/>
  </div>
</template>

<script>
import  Tabbar from "./components/tabbar"
export default {
  name: 'App',
  components:{
  	Tabbar
  },
  beforeCreate(){
  	this.$router.push("/home")
  }
}
</script>

<style>
	*{
		padding: 0;
		margin: 0;
	}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
