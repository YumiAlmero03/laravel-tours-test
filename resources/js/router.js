import Vue from 'vue';
import VueRouter from 'vue-router';
import Tours from './view/Tours.vue';


Vue.use(VueRouter);

const routes = [
	{
		path: '/tours',
		name: 'tours',
		component: Tours
	},
	{
		redirect: '/tours', 
		path: '/',
		name: 'tour',
		component: Tours
	},
	{
		path: '/tour/create',
		name: 'tour-create',
		component: () => import('./view/AddTours.vue')
	},
	{
		path: '/tour/edit/:id',
		name: 'tour-edit',
		component: () => import('./view/AddTours.vue')
	},
	{
		path: '/bookings',
		name: 'bookings',
		component: () => import('./view/Booking.vue')
	},
	{
		path: '/tour-booking/:id/create',
		name: 'booking',
		component: () => import('./view/AddBook.vue')
	},
	{
		path: '/tour-booking/edit/:bookid',
		name: 'booking-edit',
		component: () => import('./view/AddBook.vue')
	},
	{
		path: '/invoice/:id',
		name: 'invoice',
		component: () => import('./view/AddInvoice.vue')
	}
];

const router = new VueRouter({
	routes: routes,
	linkActiveClass: 'active'
});

export default router;
