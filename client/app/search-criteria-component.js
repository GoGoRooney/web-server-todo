System.register(['angular2/core', './SearchCriteria-service'], function(exports_1, context_1) {
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
    var core_1, SearchCriteria_service_1;
    var SearchCriteriaComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (SearchCriteria_service_1_1) {
                SearchCriteria_service_1 = SearchCriteria_service_1_1;
            }],
        execute: function() {
            SearchCriteriaComponent = (function () {
                function SearchCriteriaComponent(_dataService) {
                    this._dataService = _dataService;
                }
                SearchCriteriaComponent.prototype.onPost = function (description, completed) {
                    var _this = this;
                    var data = {
                        description: description,
                        completed: completed
                    };
                    this._dataService.postData(data)
                        .subscribe(function (data) { return _this.response = JSON.stringify(data); }, function (error) { return console.log(error); });
                };
                SearchCriteriaComponent = __decorate([
                    core_1.Component({
                        selector: 'search-criteria',
                        templateUrl: './html/searchcriteria.html',
                        providers: [SearchCriteria_service_1.SearchCriteriaService]
                    }), 
                    __metadata('design:paramtypes', [SearchCriteria_service_1.SearchCriteriaService])
                ], SearchCriteriaComponent);
                return SearchCriteriaComponent;
            }());
            exports_1("SearchCriteriaComponent", SearchCriteriaComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1jcml0ZXJpYS1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVQTtnQkFHQyxpQ0FBb0IsWUFBbUM7b0JBQW5DLGlCQUFZLEdBQVosWUFBWSxDQUF1QjtnQkFDdkQsQ0FBQztnQkFFRCx3Q0FBTSxHQUFOLFVBQU8sV0FBbUIsRUFBRSxTQUFpQjtvQkFBN0MsaUJBYUM7b0JBWEQsSUFBTSxJQUFJLEdBQUc7d0JBQ1gsV0FBVyxFQUFFLFdBQVc7d0JBQ3hCLFNBQVMsRUFBRSxTQUFTO3FCQUNwQixDQUFDO29CQUdGLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQzt5QkFDOUIsU0FBUyxDQUNULFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFwQyxDQUFvQyxFQUM1QyxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLENBQzNCLENBQUM7Z0JBQ0osQ0FBQztnQkExQkY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsaUJBQWlCO3dCQUMzQixXQUFXLEVBQUUsNEJBQTRCO3dCQUN6QyxTQUFTLEVBQUUsQ0FBQyw4Q0FBcUIsQ0FBQztxQkFDckMsQ0FBQzs7MkNBQUE7Z0JBdUJGLDhCQUFDO1lBQUQsQ0FwQkEsQUFvQkMsSUFBQTtZQXBCRCw2REFvQkMsQ0FBQSIsImZpbGUiOiJzZWFyY2gtY3JpdGVyaWEtY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtTZWFyY2hDcml0ZXJpYVNlcnZpY2V9IGZyb20gJy4vU2VhcmNoQ3JpdGVyaWEtc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2VhcmNoLWNyaXRlcmlhJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vaHRtbC9zZWFyY2hjcml0ZXJpYS5odG1sJyxcbiAgICBwcm92aWRlcnM6IFtTZWFyY2hDcml0ZXJpYVNlcnZpY2VdXG59KVxuXG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hDcml0ZXJpYUNvbXBvbmVudCB7XG5cdHJlc3BvbnNlOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfZGF0YVNlcnZpY2U6IFNlYXJjaENyaXRlcmlhU2VydmljZSkge1xuXHR9XG5cdFxuXHRvblBvc3QoZGVzY3JpcHRpb246IHN0cmluZywgY29tcGxldGVkOiBzdHJpbmcpIHtcblxuXHRjb25zdCBkYXRhID0ge1xuXHRcdFx0ZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuXHRcdFx0Y29tcGxldGVkOiBjb21wbGV0ZWRcblx0XHR9O1xuXG5cblx0XHR0aGlzLl9kYXRhU2VydmljZS5wb3N0RGF0YShkYXRhKVxuXHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0ZGF0YSA9PiB0aGlzLnJlc3BvbnNlID0gSlNPTi5zdHJpbmdpZnkoZGF0YSksXG5cdFx0XHRcdGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxuXHRcdFx0KTtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
