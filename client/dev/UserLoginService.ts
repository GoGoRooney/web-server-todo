import {Injectable} from "angular2/core";
import {Http, Headers, URLSearchParams } from "angular2/http";
import 'rxjs/Rx';

@Injectable()
export class UserLoginService {

	constructor (private _http: Http) {}

	postData(dataInput: any) {

			const body = JSON.stringify(dataInput);
			const headers = new Headers();

			headers.append('Content-Type','application/json');

			return this._http.post('http://localhost:3000/customer', body, { headers: headers})
				.map(response => response.json());
	}

	login(loginName: string) 	 {
		console.log('here >>>>' + loginName);

		const body = JSON.stringify(loginName);

		let params = new URLSearchParams();
		params.set('loginName', loginName);


		return this._http.get('http://localhost:3000/customer/'+loginName, {search: params})
				.map(response => response.json());
	} 
}