System.register(['angular2/core', './customerClass', './UserLoginService'], function(exports_1, context_1) {
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
    var core_1, customerClass_1, UserLoginService_1;
    var UserLoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (customerClass_1_1) {
                customerClass_1 = customerClass_1_1;
            },
            function (UserLoginService_1_1) {
                UserLoginService_1 = UserLoginService_1_1;
            }],
        execute: function() {
            UserLoginComponent = (function () {
                function UserLoginComponent(_loginService) {
                    this._loginService = _loginService;
                    this.Customer = new customerClass_1.Customer('', '');
                }
                UserLoginComponent.prototype.onLogin = function () {
                    var _this = this;
                    this._loginService.login(this.Customer.loginName).
                        subscribe(function (data) { return _this.response = JSON.stringify(data); }, function (error) { return console.log(error); });
                };
                UserLoginComponent.prototype.onSubmit = function () {
                    var _this = this;
                    var data = this.Customer;
                    this._loginService.postData(data).
                        subscribe(function (data) { return _this.response = JSON.stringify(data); }, function (error) { return console.log(error); });
                };
                UserLoginComponent.prototype.newCustomer = function () {
                    this.Customer = new customerClass_1.Customer('', '');
                };
                UserLoginComponent = __decorate([
                    core_1.Component({
                        selector: 'user-login-app',
                        templateUrl: './html/userlogin.html',
                        providers: [UserLoginService_1.UserLoginService]
                    }), 
                    __metadata('design:paramtypes', [UserLoginService_1.UserLoginService])
                ], UserLoginComponent);
                return UserLoginComponent;
            }());
            exports_1("UserLoginComponent", UserLoginComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItbG9naW4tY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBWUE7Z0JBT0MsNEJBQW9CLGFBQStCO29CQUEvQixrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7b0JBTm5ELGFBQVEsR0FBRyxJQUFJLHdCQUFRLENBQUMsRUFBRSxFQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQU11QixDQUFDO2dCQUV2RCxvQ0FBTyxHQUFQO29CQUFBLGlCQUtDO29CQUpBLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO3dCQUNoRCxTQUFTLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQXBDLENBQW9DLEVBQ3JELFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsQ0FDM0IsQ0FBQztnQkFDSixDQUFDO2dCQUVELHFDQUFRLEdBQVI7b0JBQUEsaUJBT0M7b0JBTkEsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztvQkFFM0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO3dCQUNoQyxTQUFTLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQXBDLENBQW9DLEVBQ3JELFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsQ0FDM0IsQ0FBQztnQkFDSixDQUFDO2dCQUVELHdDQUFXLEdBQVg7b0JBQ0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLHdCQUFRLENBQUMsRUFBRSxFQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNyQyxDQUFDO2dCQWpDRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxnQkFBZ0I7d0JBQzFCLFdBQVcsRUFBRSx1QkFBdUI7d0JBQ3BDLFNBQVMsRUFBRSxDQUFDLG1DQUFnQixDQUFDO3FCQUNoQyxDQUFDOztzQ0FBQTtnQkE4QkYseUJBQUM7WUFBRCxDQTVCQSxBQTRCQyxJQUFBO1lBNUJELG1EQTRCQyxDQUFBIiwiZmlsZSI6InVzZXItbG9naW4tY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtOZ0Zvcm19IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XG5pbXBvcnQge0N1c3RvbWVyfSBmcm9tICcuL2N1c3RvbWVyQ2xhc3MnO1xuaW1wb3J0IHtVc2VyTG9naW5TZXJ2aWNlfSBmcm9tICcuL1VzZXJMb2dpblNlcnZpY2UnO1xuaW1wb3J0IHtIdHRwLCBSZXNwb25zZSwgUmVxdWVzdE9wdGlvbnMsIEhlYWRlcnMsIFJlcXVlc3QsIFJlcXVlc3RNZXRob2R9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3VzZXItbG9naW4tYXBwJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vaHRtbC91c2VybG9naW4uaHRtbCcsXG4gICAgcHJvdmlkZXJzOiBbVXNlckxvZ2luU2VydmljZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBVc2VyTG9naW5Db21wb25lbnQge1xuXHRDdXN0b21lciA9IG5ldyBDdXN0b21lcignJywnJyk7XG5cdGhlYWRlcnM6IEhlYWRlcnM7XG5cdHJlcXVlc3RvcHRpb25zOiBSZXF1ZXN0T3B0aW9ucztcblx0aHR0cDogSHR0cDtcblx0cmVzcG9uc2U6IHN0cmluZztcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9sb2dpblNlcnZpY2U6IFVzZXJMb2dpblNlcnZpY2UpIHt9XG5cblx0b25Mb2dpbigpIHtcblx0XHR0aGlzLl9sb2dpblNlcnZpY2UubG9naW4odGhpcy5DdXN0b21lci5sb2dpbk5hbWUpLlxuXHRcdFx0c3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5yZXNwb25zZSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuXHRcdFx0XHRlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcblx0XHRcdCk7XG5cdH1cblxuXHRvblN1Ym1pdCgpIHtcblx0XHRjb25zdCBkYXRhID0gdGhpcy5DdXN0b21lcjtcblxuXHRcdHRoaXMuX2xvZ2luU2VydmljZS5wb3N0RGF0YShkYXRhKS5cblx0XHRcdHN1YnNjcmliZShkYXRhID0+IHRoaXMucmVzcG9uc2UgPSBKU09OLnN0cmluZ2lmeShkYXRhKSxcblx0XHRcdFx0ZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXG5cdFx0XHQpO1xuXHR9XG5cblx0bmV3Q3VzdG9tZXIoKSB7XG5cdFx0dGhpcy5DdXN0b21lciA9IG5ldyBDdXN0b21lcignJywnJyk7IFxuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
