<template>
	<section>
		<div class="alert alert-success" v-if="success === 200" role="alert">
			Success
		</div>
		<h1 class="mb-5">
			Invoice: <span>{{this.bookData.id}}</span>
		</h1>
		<table class="table">
			<tr>
				<th><h5>Tour:</h5></th>
				<td><p>{{this.tourData.name}}</p></td>
			</tr>
			<tr>
				<th><h5>Itinerany:</h5></th>
				<td><p>{{this.tourData.itinerary}}</p></td>
			</tr>
			<tr>
				<th><h5>Passengers:</h5></th>
				<td><p>{{this.bookData.book_passenger.length}}</p></td>
			</tr>

		</table>
		
			<form v-on:submit.prevent="createInvoice">
			  
			  <div class="form-group">
			    <label for="amount">Amount</label>
			    <input type="number" step="any" v-model="invoiceData.amount" class="form-control" id="amount">
			    <div class="alert alert-danger" v-if="errors.amount" role="alert">
				  {{errors.amount[0]}}
				</div>
			  </div>
			  <div class="form-group">
			    <label for="status">Status</label>
			    <select v-model="invoiceData.status" class="form-control" id="status">
			    	<option value="0">Unpaid</option>
			    	<option value="1">Paid</option>
			    	<option value="2">Cancelled</option>
			    </select>
			    <div class="alert alert-danger" v-if="errors.status" role="alert">
				  {{errors.status[0]}}
				</div>
			  </div>
			  

			  <button type="submit" class="btn btn-success" v-if="$route.params.id">Edit</button>
			  <button type="submit" class="btn btn-success" v-else>Save</button>
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
		name: 'tour',
		data() {
			return {
				dates: [{
					date:""
				}],
				tourData: {
				},
				bookData: {
				},
				invoiceData: {
					amount: 0,
					status: 0
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
					
						const responseBook = await bookService.loadBook(this.$route.params.id);
						this.bookData = responseBook.data;
						if (responseBook.data.invoice) {
						this.invoiceData = responseBook.data.invoice;

						}
						console.log(this.bookData);
						const responseTour = await tourService.loadTour(this.bookData.tour_id);
						this.tourData = responseTour.data;


					
				} catch (error){
					alert('Error');
					console.log(error);
				}
			},
			createInvoice: async function(){
				let formData = new FormData();
				formData.append('booking', this.bookData.id);
				formData.append('amount', this.invoiceData.amount);
				formData.append('status', this.invoiceData.status);
				this.errors = [];
				this.success = 0;
				try{
					const response = await bookService.updateCreateTour(formData);
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