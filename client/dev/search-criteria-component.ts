import {Component} from 'angular2/core';
import {SearchCriteriaService} from './SearchCriteria-service';

@Component({
    selector: 'search-criteria',
    templateUrl: './html/searchcriteria.html',
    providers: [SearchCriteriaService]
})


export class SearchCriteriaComponent {
	response: string;

	constructor(private _dataService: SearchCriteriaService) {
	}
	
	onPost(description: string, completed: string) {

	const data = {
			description: description,
			completed: completed
		};


		this._dataService.postData(data)
			.subscribe(
				data => this.response = JSON.stringify(data),
				error => console.log(error)
			);
	}
}