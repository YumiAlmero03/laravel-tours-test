<template>
	<main>
		<Header/>
		<div class="my-5 container">
			<router-view></router-view>
			
		</div>
		<Footer />

	</main>
</template>
 
<script>
	import Footer from './components/Footer.vue';
	import Header from './components/Header.vue';
	export default{
		components:{
			Footer, Header
		}
	}
</script>