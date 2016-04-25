import {Component} from 'angular2/core';
import {RouteConfig} from "angular2/router";
import {UserLoginComponent} from "./user-login-component";
import {UserPreferenceComponent} from "./user-preference-component";
import {BusinessLoginComponent} from "./business-login-component";
import {BusinessPreferenceComponent} from "./business-preference-component";
import {BusinessAppointmentComponent} from "./business-appointment-component";
import {SearchCriteriaComponent} from "./search-criteria-component";
import {SearchResultComponent} from "./search-result-component";
import {ViewAppointmentComponent} from "./view-appointment-component";
import {BookApointmentComponent} from "./book-appointment-component";

import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'main-app',
    templateUrl: './html/appmain.html',
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([ 
	{path: '/ft/user/login', name: 'UserLogin', component: UserLoginComponent, useAsDefault: true},
	{path: '/ft/user/preferences', name: 'UserPreference', component: UserPreferenceComponent},
	{path: '/ft/business/login', name: 'BusinessLogin', component: BusinessLoginComponent},
	{path: '/ft/business/preferences', name: 'BusinessPreference', component: BusinessPreferenceComponent},
	{path: '/ft/business/appointments', name: 'BusinessAppointment', component: BusinessAppointmentComponent},
	{path: '/ft/search/criteria', name: 'SearchCriteria', component: SearchCriteriaComponent},
	{path: '/ft/search/results', name: 'SearchResult', component: SearchResultComponent},
	{path: '/ft/appointment/view', name: 'ViewAppointment', component: ViewAppointmentComponent},
	{path: '/ft/appointment/book', name: 'BookAppointment', component: BookApointmentComponent}
])

export class MainApp {

}