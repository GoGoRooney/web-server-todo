System.register(["angular2/core", "angular2/http", 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var UserLoginService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            UserLoginService = (function () {
                function UserLoginService(_http) {
                    this._http = _http;
                }
                UserLoginService.prototype.postData = function (dataInput) {
                    var body = JSON.stringify(dataInput);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this._http.post('http://localhost:3000/customer', body, { headers: headers })
                        .map(function (response) { return response.json(); });
                };
                UserLoginService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], UserLoginService);
                return UserLoginService;
            }());
            exports_1("UserLoginService", UserLoginService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxvZ2luU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTtnQkFFQywwQkFBcUIsS0FBVztvQkFBWCxVQUFLLEdBQUwsS0FBSyxDQUFNO2dCQUFHLENBQUM7Z0JBRXBDLG1DQUFRLEdBQVIsVUFBUyxTQUFjO29CQUVyQixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUN2QyxJQUFNLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO29CQUM5QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBQyxrQkFBa0IsQ0FBQyxDQUFDO29CQUVsRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsZ0NBQWdDLEVBQUUsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDO3lCQUNqRixHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUM7Z0JBQ3JDLENBQUM7Z0JBYkY7b0JBQUMsaUJBQVUsRUFBRTs7b0NBQUE7Z0JBY2IsdUJBQUM7WUFBRCxDQWJBLEFBYUMsSUFBQTtZQWJELCtDQWFDLENBQUEiLCJmaWxlIjoiTG9naW5TZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtIdHRwLCBIZWFkZXJzfSBmcm9tIFwiYW5ndWxhcjIvaHR0cFwiO1xuaW1wb3J0ICdyeGpzL1J4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJMb2dpblNlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yIChwcml2YXRlIF9odHRwOiBIdHRwKSB7fVxuXG5cdHBvc3REYXRhKGRhdGFJbnB1dDogYW55KSB7XG5cblx0XHRcdGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShkYXRhSW5wdXQpO1xuXHRcdFx0Y29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG5cdFx0XHRoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywnYXBwbGljYXRpb24vanNvbicpO1xuXG5cdFx0XHRyZXR1cm4gdGhpcy5faHR0cC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvY3VzdG9tZXInLCBib2R5LCB7IGhlYWRlcnM6IGhlYWRlcnN9KVxuXHRcdFx0XHQubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
