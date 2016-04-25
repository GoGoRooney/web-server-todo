import {Component} from 'angular2/core';
import {SearchCriteriaService} from './SearchCriteria-service';


@Component({
    selector: 'search-result',
    templateUrl: './html/searchresult.html',
    providers: [SearchCriteriaService]
})

export class SearchResultComponent {
	response: string;
	constructor(private _dataService: SearchCriteriaService) {
	}
	


	onGet(id: string) {
	this._dataService.getData(id)
			.subscribe(
				data => {
					this.response = JSON.stringify(data);
					console.log(data); }	,
				error => console.log(error)
			);
	}

}