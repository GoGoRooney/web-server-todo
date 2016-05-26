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
                UserLoginService.prototype.login = function (loginName) {
                    console.log('here >>>>' + loginName);
                    var body = JSON.stringify(loginName);
                    var params = new http_1.URLSearchParams();
                    params.set('loginName', loginName);
                    return this._http.get('http://localhost:3000/customer/' + loginName, { search: params })
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlVzZXJMb2dpblNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7Z0JBRUMsMEJBQXFCLEtBQVc7b0JBQVgsVUFBSyxHQUFMLEtBQUssQ0FBTTtnQkFBRyxDQUFDO2dCQUVwQyxtQ0FBUSxHQUFSLFVBQVMsU0FBYztvQkFFckIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDdkMsSUFBTSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztvQkFFOUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUMsa0JBQWtCLENBQUMsQ0FBQztvQkFFbEQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGdDQUFnQyxFQUFFLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQzt5QkFDakYsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUFDO2dCQUNyQyxDQUFDO2dCQUVELGdDQUFLLEdBQUwsVUFBTSxTQUFpQjtvQkFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDLENBQUM7b0JBRXJDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBRXZDLElBQUksTUFBTSxHQUFHLElBQUksc0JBQWUsRUFBRSxDQUFDO29CQUNuQyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQztvQkFHbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxHQUFDLFNBQVMsRUFBRSxFQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUMsQ0FBQzt5QkFDakYsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUFDO2dCQUNyQyxDQUFDO2dCQTNCRjtvQkFBQyxpQkFBVSxFQUFFOztvQ0FBQTtnQkE0QmIsdUJBQUM7WUFBRCxDQTNCQSxBQTJCQyxJQUFBO1lBM0JELCtDQTJCQyxDQUFBIiwiZmlsZSI6IlVzZXJMb2dpblNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge0h0dHAsIEhlYWRlcnMsIFVSTFNlYXJjaFBhcmFtcyB9IGZyb20gXCJhbmd1bGFyMi9odHRwXCI7XG5pbXBvcnQgJ3J4anMvUngnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlckxvZ2luU2VydmljZSB7XG5cblx0Y29uc3RydWN0b3IgKHByaXZhdGUgX2h0dHA6IEh0dHApIHt9XG5cblx0cG9zdERhdGEoZGF0YUlucHV0OiBhbnkpIHtcblxuXHRcdFx0Y29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KGRhdGFJbnB1dCk7XG5cdFx0XHRjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcblxuXHRcdFx0aGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsJ2FwcGxpY2F0aW9uL2pzb24nKTtcblxuXHRcdFx0cmV0dXJuIHRoaXMuX2h0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2N1c3RvbWVyJywgYm9keSwgeyBoZWFkZXJzOiBoZWFkZXJzfSlcblx0XHRcdFx0Lm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xuXHR9XG5cblx0bG9naW4obG9naW5OYW1lOiBzdHJpbmcpIFx0IHtcblx0XHRjb25zb2xlLmxvZygnaGVyZSA+Pj4+JyArIGxvZ2luTmFtZSk7XG5cblx0XHRjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkobG9naW5OYW1lKTtcblxuXHRcdGxldCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG5cdFx0cGFyYW1zLnNldCgnbG9naW5OYW1lJywgbG9naW5OYW1lKTtcblxuXG5cdFx0cmV0dXJuIHRoaXMuX2h0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvY3VzdG9tZXIvJytsb2dpbk5hbWUsIHtzZWFyY2g6IHBhcmFtc30pXG5cdFx0XHRcdC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcblx0fSBcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
