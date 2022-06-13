<template>
	<section>
		<h1 class="mb-5">Tours</h1>
			<router-link to="/tour/create" class="nav-link" >
					<button class="btn btn-success">Create New Tour</button>
			</router-link>
			<Table/>

	</section>
</template>

<script>
	import Table from '../components/TableTours.vue';
	export default{
		components:{
			Table
		}
	}
</script>