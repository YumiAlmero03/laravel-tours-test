<template>
	<table class="table table-striped table-hover">
		<thead>
			<tr class="bg-info">
				<th>Book id</th>
				<th>Tour Name</th>
				<th>Tour Date</th>
				<th>Num of Passengers</th>
				<th>Status</th>
				<th>Invoice Status</th>
				<th>Action</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(data, index) in datas" :key="index">
				<td>{{index +1}}</td>
				<td>{{data.tour.name}}</td>
				<td>{{data.tour_date}}</td>
				<td>{{data.book_passenger.length }}</td>
				<td>
					<span v-if="data.status === 0">Submitted</span>
					<span v-else-if="data.status === 1">Confirmed</span>
					<span v-else>Cancelled</span>
				</td>
				<td>
					<span v-if="data.invoice">
						<span v-if="data.invoice.status === 0">Unpaid</span>
						<span v-else-if="data.invoice.status === 1">Paid</span>
						<span v-else>Cancelled</span>
					</span>
				</td>
				<td>
					<button v-on:click="editBook(data.id)" class="btn btn-info">Edit</button>
					<button v-on:click="toInvoice(data.id)" class="btn btn-info">Invoice</button>
				</td>
			</tr>
		</tbody>
	</table>
</template>

<script>
	import * as bookService from '../services/book_service';

	export default {
		name: 'book',
		data() {
			return {
				datas: [],
				editTourData: {},
			}
		},
		mounted() {
			this.loadBooks();
		},
		methods: {
			loadBooks: async function(){
				try{
					const response = await bookService.loadBooks();
					this.datas = response.data.data;
				} catch (error){
					alert('Error');
					console.log(error);
				}
			},
			editBook(book){
				this.$router.push({ name: 'booking-edit', params: { bookid: book } });
			},
			toInvoice(book){
				this.$router.push({ name: 'invoice', params: { id: book } });
			}
		},
	}
</script>