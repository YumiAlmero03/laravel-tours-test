<template>
	<section>
		<div class="alert alert-success" v-if="success === 200" role="alert">
			Success
		</div>
		<h1 class="mb-5">
			Book <span>{{this.tourData.name}}</span>
		</h1>
		<p>Itinerany:</p>
		<p>{{this.tourData.itinerary}}</p>

			<form v-on:submit.prevent="createUpdateBook">
			  <select v-model="bookData.date" class="form-control" id="status">
			  	<option v-for="(input, index) in dates" :key="`dates-${index}`" v-if="input.status != 0">
			  		{{input.date}}
			  	</option>
			  </select>
			  <div class="alert alert-danger" v-if="errors.status" role="alert">
				  {{errors.date[0]}}
				</div>
			  <select v-if="$route.params.bookid" v-model="bookData.status" class="form-control mt-3" id="status">
			  	<option value="0">Submitted</option>
			    <option value="1">Confirmed</option>
			    <option value="2">Cancelled</option>
			  </select>
			  <div class="my-4">
				  	<div class="form-group">
					    <label for="tour-date"><h3>Passengers:</h3></label>
					    <button v-on:click.prevent='addPassenger' class="btn btn-info float-right">Add Passenger</button>					    
					    <button v-on:click.prevent='toInvoice' class="btn btn-success float-right mr-4">Invoice</button>					    
					</div>
				  	<div class="form-group" v-for="(input, index) in passenger" :key="`dates-${index}`">
				  		<div class="card text-bg-light mb-3" >
						  <div class="card-header">
							    <h5>
				    			  <span v-if="input.id">
									<input type="checkbox" v-model="input.passenger.status" v-bind:id="input.passenger.id" true-value="1" false-value="0"> 
				    			  </span>
				    			  <span v-else>
				    			  	<button v-on:click.prevent='removePassenger' class="btn btn-danger float-right">Remove</button>
				    			  </span>
				    			  <span>
				    			  	Passenger {{index+1}} 
				    			  </span>
							  	</h5>
			  					
							</div>
						  <div class="card-body">
						    <div class="row">
							    <div class="col">
							      <div class="form-group">
								    <label for="name">Given Name</label>
								    <input type="text" v-model="input.passenger.given_name" class="form-control" id="name">								    
								  </div>
							    </div>
							    <div class="col">
							      <label for="surname">Surname</label>
								    <input type="text" v-model="input.passenger.surname" class="form-control" id="surname">		
							    </div>
							</div>
							<div class="row">
							    <div class="col">
							      <div class="form-group">
								    <label for="email">Email</label>
								    <input type="text" v-model="input.passenger.email" class="form-control" id="email">								    
								  </div>
							    </div>
							    <div class="col">
							      <label for="mobile">Mobile</label>
								    <input type="text" v-model="input.passenger.mobile" class="form-control" id="mobile">		
							    </div>
							</div>
							<div class="row">
							    <div class="col">
							      <div class="form-group">
								    <label for="passport">Passport</label>
								    <input type="text" v-model="input.passenger.passport" class="form-control" id="passport">								    
								  </div>
							    </div>
							    <div class="col">
							      <label for="bday">Date of Birth</label>
								    <input type="date" v-model="input.passenger.birth_date" class="form-control" id="bday">		
							    </div>
							</div>
							<div class="row">
							    <div class="col">
							      <div class="form-group">
								    <label for="passport">Special Request</label>
								    <textarea v-model="input.special_request" class="form-control" id="passport"></textarea>						    
								  </div>
							    </div>
							</div>
						  </div>
						</div>
				  	</div>
			  </div>
			  
			  <button  type="submit" class=" btn btn-success" v-if="$route.params.bookid">Update</button>
			  <button type="submit" class=" btn btn-success" v-else>Book</button>
			  <router-link to="/bookings" >
			  	<button class="btn btn-secondary float-right">Back</button>
			  </router-link>
			</form>
	</section>
</template>


<script>
	import * as tourService from '../services/tour_service';
	import * as bookService from '../services/book_service';

	export default {
		name: 'book',
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
				bookData: {
					date: '',
					tourID: ''
				},
				passenger: [{
					passenger: {
						birth_date: '',
						email: '',
						given_name: '',
						id: '',
						mobile: '',
						passport: '',
						status: '',
						surname: '',
					},
					special_request:''
				}],
				errors: {

				},
				success: 0
			}
		},
		mounted() {
			this.loadBook();
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
			addPassenger(){
				this.passenger.push({
			        passenger: {
						birth_date: '',
						email: '',
						given_name: '',
						id: '',
						mobile: '',
						passport: '',
						status: '',
						surname: '',
					},
					special_request:''
			      })
			},
			removePassenger(index){
				this.passenger.splice(index,1)
			},

			loadBook: async function(){
				try{
					if (this.$route.params.bookid) {
						const response = await bookService.loadBook(this.$route.params.bookid);
						this.bookData.date = response.data.tour_date;
						this.bookData.status = response.data.status;
						this.passenger = JSON.parse(response.data.passengers);

						const responseTour = await tourService.loadTour(response.data.tour_id);
						this.tourData = responseTour.data;
						this.dates = JSON.parse(responseTour.data.tourdates);
					} else {
						this.bookData = [{
													name: '',
													status: 0,
													itinerary: ''
												}];
						this.passenger = [{
							passenger: {
								birth_date: '',
								email: '',
								given_name: '',
								id: '',
								mobile: '',
								passport: '',
								status: '',
								surname: '',
							},
							special_request:''
						}];
						const response = await tourService.loadTour(this.$route.params.id);
						this.tourData = response.data;
						this.dates = JSON.parse(response.data.tourdates);
					}
				} catch (error){
					alert('Error');
					console.log(error);
				}
				// console.log(response.data.passengers);
			},
			createUpdateBook: async function(){
				let formData = new FormData();
				formData.append('date', this.bookData.date);
				formData.append('tour_id', this.tourData.id);
				formData.append('passengers', JSON.stringify(this.passenger));
				this.errors = [];
				this.success = 0;
				try{
					if (this.$route.params.bookid) {
						formData.append('_method', 'put');
						formData.append('status', this.bookData.status);
						const response = await bookService.updateBook(formData,this.$route.params.bookid);
					} else {
						const response = await bookService.createBook(formData);
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
			},
			toInvoice(){
				this.$router.push({ name: 'invoice', params: { id: this.$route.params.bookid } });
			}
		}

	}
</script>