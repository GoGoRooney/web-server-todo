System.register(['angular2/core', "angular2/router", "./user-login-component", "./user-preference-component", "./business-login-component", "./business-preference-component", "./business-appointment-component", "./search-criteria-component", "./search-result-component", "./view-appointment-component", "./book-appointment-component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, user_login_component_1, user_preference_component_1, business_login_component_1, business_preference_component_1, business_appointment_component_1, search_criteria_component_1, search_result_component_1, view_appointment_component_1, book_appointment_component_1, router_2;
    var MainApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (user_login_component_1_1) {
                user_login_component_1 = user_login_component_1_1;
            },
            function (user_preference_component_1_1) {
                user_preference_component_1 = user_preference_component_1_1;
            },
            function (business_login_component_1_1) {
                business_login_component_1 = business_login_component_1_1;
            },
            function (business_preference_component_1_1) {
                business_preference_component_1 = business_preference_component_1_1;
            },
            function (business_appointment_component_1_1) {
                business_appointment_component_1 = business_appointment_component_1_1;
            },
            function (search_criteria_component_1_1) {
                search_criteria_component_1 = search_criteria_component_1_1;
            },
            function (search_result_component_1_1) {
                search_result_component_1 = search_result_component_1_1;
            },
            function (view_appointment_component_1_1) {
                view_appointment_component_1 = view_appointment_component_1_1;
            },
            function (book_appointment_component_1_1) {
                book_appointment_component_1 = book_appointment_component_1_1;
            }],
        execute: function() {
            MainApp = (function () {
                function MainApp() {
                }
                MainApp = __decorate([
                    core_1.Component({
                        selector: 'main-app',
                        templateUrl: './html/appmain.html',
                        directives: [router_2.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/ft/user/login', name: 'UserLogin', component: user_login_component_1.UserLoginComponent, useAsDefault: true },
                        { path: '/ft/user/preferences', name: 'UserPreference', component: user_preference_component_1.UserPreferenceComponent },
                        { path: '/ft/business/login', name: 'BusinessLogin', component: business_login_component_1.BusinessLoginComponent },
                        { path: '/ft/business/preferences', name: 'BusinessPreference', component: business_preference_component_1.BusinessPreferenceComponent },
                        { path: '/ft/business/appointments', name: 'BusinessAppointment', component: business_appointment_component_1.BusinessAppointmentComponent },
                        { path: '/ft/search/criteria', name: 'SearchCriteria', component: search_criteria_component_1.SearchCriteriaComponent },
                        { path: '/ft/search/results', name: 'SearchResult', component: search_result_component_1.SearchResultComponent },
                        { path: '/ft/appointment/view', name: 'ViewAppointment', component: view_appointment_component_1.ViewAppointmentComponent },
                        { path: '/ft/appointment/book', name: 'BookAppointment', component: book_appointment_component_1.BookApointmentComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], MainApp);
                return MainApp;
            }());
            exports_1("MainApp", MainApp);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWdDQTtnQkFBQTtnQkFFQSxDQUFDO2dCQXBCRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxVQUFVO3dCQUNwQixXQUFXLEVBQUUscUJBQXFCO3dCQUNsQyxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztxQkFDbEMsQ0FBQztvQkFFRCxvQkFBVyxDQUFDO3dCQUNaLEVBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLHlDQUFrQixFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUM7d0JBQzlGLEVBQUMsSUFBSSxFQUFFLHNCQUFzQixFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsbURBQXVCLEVBQUM7d0JBQzFGLEVBQUMsSUFBSSxFQUFFLG9CQUFvQixFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLGlEQUFzQixFQUFDO3dCQUN0RixFQUFDLElBQUksRUFBRSwwQkFBMEIsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsU0FBUyxFQUFFLDJEQUEyQixFQUFDO3dCQUN0RyxFQUFDLElBQUksRUFBRSwyQkFBMkIsRUFBRSxJQUFJLEVBQUUscUJBQXFCLEVBQUUsU0FBUyxFQUFFLDZEQUE0QixFQUFDO3dCQUN6RyxFQUFDLElBQUksRUFBRSxxQkFBcUIsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLG1EQUF1QixFQUFDO3dCQUN6RixFQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSwrQ0FBcUIsRUFBQzt3QkFDcEYsRUFBQyxJQUFJLEVBQUUsc0JBQXNCLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxxREFBd0IsRUFBQzt3QkFDNUYsRUFBQyxJQUFJLEVBQUUsc0JBQXNCLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxvREFBdUIsRUFBQztxQkFDM0YsQ0FBQzs7MkJBQUE7Z0JBSUYsY0FBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsNkJBRUMsQ0FBQSIsImZpbGUiOiJtYWluLWNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Um91dGVDb25maWd9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcbmltcG9ydCB7VXNlckxvZ2luQ29tcG9uZW50fSBmcm9tIFwiLi91c2VyLWxvZ2luLWNvbXBvbmVudFwiO1xuaW1wb3J0IHtVc2VyUHJlZmVyZW5jZUNvbXBvbmVudH0gZnJvbSBcIi4vdXNlci1wcmVmZXJlbmNlLWNvbXBvbmVudFwiO1xuaW1wb3J0IHtCdXNpbmVzc0xvZ2luQ29tcG9uZW50fSBmcm9tIFwiLi9idXNpbmVzcy1sb2dpbi1jb21wb25lbnRcIjtcbmltcG9ydCB7QnVzaW5lc3NQcmVmZXJlbmNlQ29tcG9uZW50fSBmcm9tIFwiLi9idXNpbmVzcy1wcmVmZXJlbmNlLWNvbXBvbmVudFwiO1xuaW1wb3J0IHtCdXNpbmVzc0FwcG9pbnRtZW50Q29tcG9uZW50fSBmcm9tIFwiLi9idXNpbmVzcy1hcHBvaW50bWVudC1jb21wb25lbnRcIjtcbmltcG9ydCB7U2VhcmNoQ3JpdGVyaWFDb21wb25lbnR9IGZyb20gXCIuL3NlYXJjaC1jcml0ZXJpYS1jb21wb25lbnRcIjtcbmltcG9ydCB7U2VhcmNoUmVzdWx0Q29tcG9uZW50fSBmcm9tIFwiLi9zZWFyY2gtcmVzdWx0LWNvbXBvbmVudFwiO1xuaW1wb3J0IHtWaWV3QXBwb2ludG1lbnRDb21wb25lbnR9IGZyb20gXCIuL3ZpZXctYXBwb2ludG1lbnQtY29tcG9uZW50XCI7XG5pbXBvcnQge0Jvb2tBcG9pbnRtZW50Q29tcG9uZW50fSBmcm9tIFwiLi9ib29rLWFwcG9pbnRtZW50LWNvbXBvbmVudFwiO1xuXG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ21haW4tYXBwJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vaHRtbC9hcHBtYWluLmh0bWwnLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU11cbn0pXG5cbkBSb3V0ZUNvbmZpZyhbIFxuXHR7cGF0aDogJy9mdC91c2VyL2xvZ2luJywgbmFtZTogJ1VzZXJMb2dpbicsIGNvbXBvbmVudDogVXNlckxvZ2luQ29tcG9uZW50LCB1c2VBc0RlZmF1bHQ6IHRydWV9LFxuXHR7cGF0aDogJy9mdC91c2VyL3ByZWZlcmVuY2VzJywgbmFtZTogJ1VzZXJQcmVmZXJlbmNlJywgY29tcG9uZW50OiBVc2VyUHJlZmVyZW5jZUNvbXBvbmVudH0sXG5cdHtwYXRoOiAnL2Z0L2J1c2luZXNzL2xvZ2luJywgbmFtZTogJ0J1c2luZXNzTG9naW4nLCBjb21wb25lbnQ6IEJ1c2luZXNzTG9naW5Db21wb25lbnR9LFxuXHR7cGF0aDogJy9mdC9idXNpbmVzcy9wcmVmZXJlbmNlcycsIG5hbWU6ICdCdXNpbmVzc1ByZWZlcmVuY2UnLCBjb21wb25lbnQ6IEJ1c2luZXNzUHJlZmVyZW5jZUNvbXBvbmVudH0sXG5cdHtwYXRoOiAnL2Z0L2J1c2luZXNzL2FwcG9pbnRtZW50cycsIG5hbWU6ICdCdXNpbmVzc0FwcG9pbnRtZW50JywgY29tcG9uZW50OiBCdXNpbmVzc0FwcG9pbnRtZW50Q29tcG9uZW50fSxcblx0e3BhdGg6ICcvZnQvc2VhcmNoL2NyaXRlcmlhJywgbmFtZTogJ1NlYXJjaENyaXRlcmlhJywgY29tcG9uZW50OiBTZWFyY2hDcml0ZXJpYUNvbXBvbmVudH0sXG5cdHtwYXRoOiAnL2Z0L3NlYXJjaC9yZXN1bHRzJywgbmFtZTogJ1NlYXJjaFJlc3VsdCcsIGNvbXBvbmVudDogU2VhcmNoUmVzdWx0Q29tcG9uZW50fSxcblx0e3BhdGg6ICcvZnQvYXBwb2ludG1lbnQvdmlldycsIG5hbWU6ICdWaWV3QXBwb2ludG1lbnQnLCBjb21wb25lbnQ6IFZpZXdBcHBvaW50bWVudENvbXBvbmVudH0sXG5cdHtwYXRoOiAnL2Z0L2FwcG9pbnRtZW50L2Jvb2snLCBuYW1lOiAnQm9va0FwcG9pbnRtZW50JywgY29tcG9uZW50OiBCb29rQXBvaW50bWVudENvbXBvbmVudH1cbl0pXG5cbmV4cG9ydCBjbGFzcyBNYWluQXBwIHtcblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
