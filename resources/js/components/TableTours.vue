<template>
	<table class="table table-striped table-hover">
		<thead>
			<tr class="bg-info">
				<th>Tour id</th>
				<th>Tour Name</th>
				<th>Status</th>
				<th>Action</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(data, index) in datas" :key="index">
				<td>{{index +1}}</td>
				<td>{{data.name}}</td>
				<td>
					<span v-if="data.status === 0">Draft</span>
					<span v-else>Public</span>
				</td>
				<td>
					<button v-on:click="editTour(data.id)" class="btn btn-info">Edit</button>
					<button v-on:click="bookTour(data.id)" v-if="data.status != 0" class="btn btn-success">Book</button>
				</td>
			</tr>
		</tbody>
	</table>
</template>

<script>
	import * as tourService from '../services/tour_service';

	export default {
		name: 'tour',
		data() {
			return {
				datas: [],
				editTourData: {},
			}
		},
		mounted() {
			this.loadTours();
		},
		methods: {
			loadTours: async function(){
				try{
					const response = await tourService.loadTours();
					this.datas = response.data.data;
				} catch (error){
					alert('Error');
					console.log(error);
				}
			},
			editTour(tour){
				this.$router.push({ name: 'tour-edit', params: { id: tour } });
			},
			bookTour(tour){
				this.$router.push({ name: 'booking', params: { id: tour } });
			}
		},
	}
</script>