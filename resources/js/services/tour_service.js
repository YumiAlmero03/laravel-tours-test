import {http, httpFile} from './http_service';

export function createTour(data) {
	console.log(data['name']);
	return httpFile().post('/tours', data);
}

export function loadTours(){
	return httpFile().get('/tours');
}

export function loadTour(id){
	return httpFile().get('/tours/'+id);
}

export function updateTour(data,id) {
	return httpFile().post('/tours/'+id, data);
}