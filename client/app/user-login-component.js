System.register(['angular2/core', './customerClass', 'primeng/primeng', './UserLoginService'], function(exports_1, context_1) {
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
    var core_1, customerClass_1, primeng_1, UserLoginService_1;
    var UserLoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (customerClass_1_1) {
                customerClass_1 = customerClass_1_1;
            },
            function (primeng_1_1) {
                primeng_1 = primeng_1_1;
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
                        directives: [primeng_1.InputText],
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItbG9naW4tY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZUE7Z0JBT0MsNEJBQW9CLGFBQStCO29CQUEvQixrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7b0JBTm5ELGFBQVEsR0FBRyxJQUFJLHdCQUFRLENBQUMsRUFBRSxFQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQU11QixDQUFDO2dCQUV2RCxvQ0FBTyxHQUFQO29CQUFBLGlCQUtDO29CQUpBLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO3dCQUNoRCxTQUFTLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQXBDLENBQW9DLEVBQ3JELFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsQ0FDM0IsQ0FBQztnQkFDSixDQUFDO2dCQUVELHFDQUFRLEdBQVI7b0JBQUEsaUJBT0M7b0JBTkEsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztvQkFFM0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO3dCQUNoQyxTQUFTLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQXBDLENBQW9DLEVBQ3JELFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsQ0FDM0IsQ0FBQztnQkFDSixDQUFDO2dCQUVELHdDQUFXLEdBQVg7b0JBQ0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLHdCQUFRLENBQUMsRUFBRSxFQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNyQyxDQUFDO2dCQWxDRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxnQkFBZ0I7d0JBQzFCLFdBQVcsRUFBRSx1QkFBdUI7d0JBQ3BDLFVBQVUsRUFBRSxDQUFDLG1CQUFTLENBQUM7d0JBQ3ZCLFNBQVMsRUFBRSxDQUFDLG1DQUFnQixDQUFDO3FCQUNoQyxDQUFDOztzQ0FBQTtnQkE4QkYseUJBQUM7WUFBRCxDQTVCQSxBQTRCQyxJQUFBO1lBNUJELG1EQTRCQyxDQUFBIiwiZmlsZSI6InVzZXItbG9naW4tY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtOZ0Zvcm19IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XG5pbXBvcnQge0N1c3RvbWVyfSBmcm9tICcuL2N1c3RvbWVyQ2xhc3MnO1xuaW1wb3J0IHtJbnB1dFRleHR9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XG5cbmltcG9ydCB7VXNlckxvZ2luU2VydmljZX0gZnJvbSAnLi9Vc2VyTG9naW5TZXJ2aWNlJztcbmltcG9ydCB7SHR0cCwgUmVzcG9uc2UsIFJlcXVlc3RPcHRpb25zLCBIZWFkZXJzLCBSZXF1ZXN0LCBSZXF1ZXN0TWV0aG9kfSBmcm9tICdhbmd1bGFyMi9odHRwJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd1c2VyLWxvZ2luLWFwcCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2h0bWwvdXNlcmxvZ2luLmh0bWwnLFxuICAgIGRpcmVjdGl2ZXM6IFtJbnB1dFRleHRdLFxuICAgIHByb3ZpZGVyczogW1VzZXJMb2dpblNlcnZpY2VdXG59KVxuXG5leHBvcnQgY2xhc3MgVXNlckxvZ2luQ29tcG9uZW50IHtcblx0Q3VzdG9tZXIgPSBuZXcgQ3VzdG9tZXIoJycsJycpO1xuXHRoZWFkZXJzOiBIZWFkZXJzO1xuXHRyZXF1ZXN0b3B0aW9uczogUmVxdWVzdE9wdGlvbnM7XG5cdGh0dHA6IEh0dHA7XG5cdHJlc3BvbnNlOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfbG9naW5TZXJ2aWNlOiBVc2VyTG9naW5TZXJ2aWNlKSB7fVxuXG5cdG9uTG9naW4oKSB7XG5cdFx0dGhpcy5fbG9naW5TZXJ2aWNlLmxvZ2luKHRoaXMuQ3VzdG9tZXIubG9naW5OYW1lKS5cblx0XHRcdHN1YnNjcmliZShkYXRhID0+IHRoaXMucmVzcG9uc2UgPSBKU09OLnN0cmluZ2lmeShkYXRhKSxcblx0XHRcdFx0ZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXG5cdFx0XHQpO1xuXHR9XG5cblx0b25TdWJtaXQoKSB7XG5cdFx0Y29uc3QgZGF0YSA9IHRoaXMuQ3VzdG9tZXI7XG5cblx0XHR0aGlzLl9sb2dpblNlcnZpY2UucG9zdERhdGEoZGF0YSkuXG5cdFx0XHRzdWJzY3JpYmUoZGF0YSA9PiB0aGlzLnJlc3BvbnNlID0gSlNPTi5zdHJpbmdpZnkoZGF0YSksXG5cdFx0XHRcdGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxuXHRcdFx0KTtcblx0fVxuXG5cdG5ld0N1c3RvbWVyKCkge1xuXHRcdHRoaXMuQ3VzdG9tZXIgPSBuZXcgQ3VzdG9tZXIoJycsJycpOyBcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
