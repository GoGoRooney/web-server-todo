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
    var SearchResultComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (SearchCriteria_service_1_1) {
                SearchCriteria_service_1 = SearchCriteria_service_1_1;
            }],
        execute: function() {
            SearchResultComponent = (function () {
                function SearchResultComponent(_dataService) {
                    this._dataService = _dataService;
                }
                SearchResultComponent.prototype.onGet = function (id) {
                    var _this = this;
                    this._dataService.getData(id)
                        .subscribe(function (data) {
                        _this.response = JSON.stringify(data);
                        console.log(data);
                    }, function (error) { return console.log(error); });
                };
                SearchResultComponent = __decorate([
                    core_1.Component({
                        selector: 'search-result',
                        templateUrl: './html/searchresult.html',
                        providers: [SearchCriteria_service_1.SearchCriteriaService]
                    }), 
                    __metadata('design:paramtypes', [SearchCriteria_service_1.SearchCriteriaService])
                ], SearchResultComponent);
                return SearchResultComponent;
            }());
            exports_1("SearchResultComponent", SearchResultComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1yZXN1bHQtY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVUE7Z0JBRUMsK0JBQW9CLFlBQW1DO29CQUFuQyxpQkFBWSxHQUFaLFlBQVksQ0FBdUI7Z0JBQ3ZELENBQUM7Z0JBSUQscUNBQUssR0FBTCxVQUFNLEVBQVU7b0JBQWhCLGlCQVFDO29CQVBELElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQzt5QkFDMUIsU0FBUyxDQUNULFVBQUEsSUFBSTt3QkFDSCxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQUMsQ0FBQyxFQUNyQixVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLENBQzNCLENBQUM7Z0JBQ0osQ0FBQztnQkFyQkY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsZUFBZTt3QkFDekIsV0FBVyxFQUFFLDBCQUEwQjt3QkFDdkMsU0FBUyxFQUFFLENBQUMsOENBQXFCLENBQUM7cUJBQ3JDLENBQUM7O3lDQUFBO2dCQW1CRiw0QkFBQztZQUFELENBakJBLEFBaUJDLElBQUE7WUFqQkQseURBaUJDLENBQUEiLCJmaWxlIjoic2VhcmNoLXJlc3VsdC1jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1NlYXJjaENyaXRlcmlhU2VydmljZX0gZnJvbSAnLi9TZWFyY2hDcml0ZXJpYS1zZXJ2aWNlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3NlYXJjaC1yZXN1bHQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9odG1sL3NlYXJjaHJlc3VsdC5odG1sJyxcbiAgICBwcm92aWRlcnM6IFtTZWFyY2hDcml0ZXJpYVNlcnZpY2VdXG59KVxuXG5leHBvcnQgY2xhc3MgU2VhcmNoUmVzdWx0Q29tcG9uZW50IHtcblx0cmVzcG9uc2U6IHN0cmluZztcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfZGF0YVNlcnZpY2U6IFNlYXJjaENyaXRlcmlhU2VydmljZSkge1xuXHR9XG5cdFxuXG5cblx0b25HZXQoaWQ6IHN0cmluZykge1xuXHR0aGlzLl9kYXRhU2VydmljZS5nZXREYXRhKGlkKVxuXHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0ZGF0YSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5yZXNwb25zZSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGRhdGEpOyB9XHQsXG5cdFx0XHRcdGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxuXHRcdFx0KTtcblx0fVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
