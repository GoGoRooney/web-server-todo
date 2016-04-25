import {Injectable} from "angular2/core";
import {Http, Headers} from "angular2/http";
import 'rxjs/Rx';

@Injectable() 
export class SearchCriteriaService {
	constructor (private _http: Http) {}


	postData(data: any) {
		const body = JSON.stringify(data);
		const headers = new Headers();
		headers.append('Content-type','application/json');

		return this._http.post('/todos', body, {headers: headers}).
			map(response => response.json());
	}

	getData(id: string) {
		return this._http.get('/todos/'+id).
			map(response => response.json());
	}
}