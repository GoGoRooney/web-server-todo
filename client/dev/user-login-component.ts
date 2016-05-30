import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {Customer} from './customerClass';
import {InputText} from 'primeng/primeng';

import {UserLoginService} from './UserLoginService';
import {Http, Response, RequestOptions, Headers, Request, RequestMethod} from 'angular2/http';

@Component({
    selector: 'user-login-app',
    templateUrl: './html/userlogin.html',
    directives: [InputText],
    providers: [UserLoginService]
})

export class UserLoginComponent {
	Customer = new Customer('','');
	headers: Headers;
	requestoptions: RequestOptions;
	http: Http;
	response: string;

	constructor(private _loginService: UserLoginService) {}

	onLogin() {
		this._loginService.login(this.Customer.loginName).
			subscribe(data => this.response = JSON.stringify(data),
				error => console.log(error)
			);
	}

	onSubmit() {
		const data = this.Customer;

		this._loginService.postData(data).
			subscribe(data => this.response = JSON.stringify(data),
				error => console.log(error)
			);
	}

	newCustomer() {
		this.Customer = new Customer('',''); 
	}
}