import {http, httpFile} from './http_service';

export function createBook(data) {
	console.log(data['name']);
	return httpFile().post('/book', data);
}

export function loadBooks(){
	return httpFile().get('/book');
}

export function loadBook(id){
	return httpFile().get('/book/'+id);
}

export function updateBook(data,id) {
	return httpFile().post('/book/'+id, data);
}

export function updateCreateTour(data) {
	return httpFile().post('/invoice', data);
}