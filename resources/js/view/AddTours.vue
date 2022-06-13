<template>
	<section>
		<div class="alert alert-success" v-if="success === 200" role="alert">
			Success
		</div>
		<h1 class="mb-5">
			<span v-if="$route.params.id">Edit Tours</span>
			<span v-else>Create Tours</span>
		</h1>

			<form v-on:submit.prevent="createUpdateBook">
			  <div class="form-group">
			    <label for="tour-name">Tour Name</label>
			    <input type="text" v-model="tourData.name" class="form-control" id="tour-name">
			    <div class="alert alert-danger" v-if="errors.name" role="alert">
				  {{errors.name[0]}}
				</div>
			  </div>
			  <div class="form-group">
			    <label for="itinerary">Itinerary</label>
			    <input type="text" v-model="tourData.itinerary" class="form-control" id="itinerary">
			    <div class="alert alert-danger" v-if="errors.itinerary" role="alert">
				  {{errors.itinerary[0]}}
				</div>
			  </div>
			  <div class="form-group">
			    <label for="status">Status</label>
			    <select v-model="tourData.status" class="form-control" id="status">
			    	<option value="0">Draft</option>
			    	<option value="1">Public</option>
			    </select>
			    <div class="alert alert-danger" v-if="errors.status" role="alert">
				  {{errors.status[0]}}
				</div>
			  </div>
			  <div class="form-group">
			    <label for="tour-date"><h3>Tour available dates:</h3></label>
			    <button v-on:click.prevent='addDateRow' class="btn btn-info float-right">Add Date</button>
			    <table class="table my-4">
			    	<thead>
				    	<tr>
				    		<th>Date</th>
				    		<th>Action</th>
				    	</tr>
			    	</thead>
			    	<tbody>
			    		<tr v-for="(input, index) in dates" :key="`dates-${index}`">
			    			<td>
			    				<input type="date" v-model="input.date" class="form-control">
			    			</td>
			    			<td>
			    				<span v-if="input.id">
									    <input type="checkbox" v-model="input.status" v-bind:id="input.id" true-value="1" false-value="0"> Activate
									    
			    				</span>
			    				<span v-else>
			    					<button v-on:click.prevent='removeDateRow(index)' class="btn btn-danger ">Remove</button>
			    				</span>
			    				
			    				
			    			</td>
			    		</tr>
			    	</tbody>
			    </table>
			  </div>

			  <button type="submit" class="btn btn-success" v-if="$route.params.id">Edit</button>
			  <button type="submit" class="btn btn-success" v-else>Create</button>
			  <router-link to="/tours" >
			  	<button class="btn btn-secondary float-right">Back</button>
			  </router-link>
			</form>
	</section>
</template>


<script>
	import * as tourService from '../services/tour_service';

	export default {
		name: 'tour',
		data() {
			return {
				dates: [{
					date:""
				}],
				tourData: {
					name: '',
					status: 0,
					itinerary: ''
				},
				errors: {

				},
				success: 0
			}
		},
		mounted() {
			this.loadTours();
		},
		methods: {
			forceRerender() {
		        // Remove my-component from the DOM
		        this.renderComponent = false;

		        this.$nextTick(() => {
		          // Add the component back in
		          this.renderComponent = true;
		        });
		      },
			addDateRow(){
				this.dates.push({
			        date: ''
			      })
			},
			removeDateRow(index){
				this.dates.splice(index,1)
			},
			loadTours: async function(){
				try{
					if (this.$route.params.id) {
						const response = await tourService.loadTour(this.$route.params.id);
						this.tourData = response.data;
						this.dates = JSON.parse(response.data.tourdates);
					} else {
						this.tourData = [{
													name: '',
													status: 0,
													itinerary: ''
												}];
						this.dates = [{
							date:""
						}];
					}
				} catch (error){
					alert('Error');
					console.log(error);
				}
			},
			createUpdateBook: async function(){
				let formData = new FormData();
				formData.append('name', this.tourData.name);
				formData.append('itinerary', this.tourData.itinerary);
				formData.append('status', this.tourData.status);
				formData.append('date', JSON.stringify(this.dates));
				// console.log(JSON.stringify(this.dates));
				this.errors = [];
				try{
					if (this.$route.params.id) {
						formData.append('_method', 'put');
						const response = await tourService.updateTour(formData,this.$route.params.id);
					} else {
						const response = await tourService.createTour(formData);
					}
					this.success = 200;
				} catch (error){
					switch(error.response.status){
						case 422:
							this.errors = error.response.data.errors;
							break;
						default:
							alert('Error');
							console.log(error);
							break;
					}
				}
			}
		}

	}
</script>