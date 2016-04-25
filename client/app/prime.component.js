System.register(['angular2/core', 'primeng/primeng', "./search-params", "./app.component"], function(exports_1, context_1) {
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
    var core_1, primeng_1, search_params_1, app_component_1;
    var PrimeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (primeng_1_1) {
                primeng_1 = primeng_1_1;
            },
            function (search_params_1_1) {
                search_params_1 = search_params_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            PrimeComponent = (function () {
                function PrimeComponent() {
                    this.sp = { name: "test" };
                    this.name = "Max";
                    this.searchParameter = new search_params_1.SearchParameter(["Hairdressers", "Restaurants"], "b");
                }
                PrimeComponent = __decorate([
                    core_1.Component({
                        selector: 'my-prime',
                        template: "\n        <h1>My First PrimeNG App</h1>\n        <input type=\"text\" [value] = \"name\" pInputText/>\n        <input type=\"text\" pInputText [value]=\"sp.name\"/>\n        <input type=\"text\" pInputText [value]=\"searchParameter.businessTypes[0]\"/>\n        <h2>{{name}}</h2>\n        <br><br>\n        <h1>here</h1>\n        {{sp.name}}\n        <h1>done</h1>\n       <my-app>loading..</my-app>\n    ",
                        directives: [primeng_1.InputText, app_component_1.MyApp]
                    }), 
                    __metadata('design:paramtypes', [])
                ], PrimeComponent);
                return PrimeComponent;
            }());
            exports_1("PrimeComponent", PrimeComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW1lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXdCQTtnQkFBQTtvQkFDSSxPQUFFLEdBQUcsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7b0JBQ3ZCLFNBQUksR0FBRyxLQUFLLENBQUM7b0JBQ1Ysb0JBQWUsR0FBRyxJQUFJLCtCQUFlLENBQUMsQ0FBQyxjQUFjLEVBQUMsYUFBYSxDQUFDLEVBQUMsR0FBRyxDQUFDLENBQUM7Z0JBRTlFLENBQUM7Z0JBeEJEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1YsUUFBUSxFQUFFLFVBQVU7d0JBQ3BCLFFBQVEsRUFBRSx1WkFXTjt3QkFDRCxVQUFVLEVBQUUsQ0FBQyxtQkFBUyxFQUFFLHFCQUFLLENBQUM7cUJBQ2pDLENBQUM7O2tDQUFBO2dCQVNGLHFCQUFDO1lBQUQsQ0FMQSxBQUtDLElBQUE7WUFMRCwyQ0FLQyxDQUFBIiwiZmlsZSI6InByaW1lLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7SW5wdXRUZXh0fSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xuaW1wb3J0IHtTZWFyY2hQYXJhbWV0ZXJ9IGZyb20gXCIuL3NlYXJjaC1wYXJhbXNcIjtcbmltcG9ydCB7TXlBcHB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnbXktcHJpbWUnLFxuXHR0ZW1wbGF0ZTogYFxuICAgICAgICA8aDE+TXkgRmlyc3QgUHJpbWVORyBBcHA8L2gxPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbdmFsdWVdID0gXCJuYW1lXCIgcElucHV0VGV4dC8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBJbnB1dFRleHQgW3ZhbHVlXT1cInNwLm5hbWVcIi8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBJbnB1dFRleHQgW3ZhbHVlXT1cInNlYXJjaFBhcmFtZXRlci5idXNpbmVzc1R5cGVzWzBdXCIvPlxuICAgICAgICA8aDI+e3tuYW1lfX08L2gyPlxuICAgICAgICA8YnI+PGJyPlxuICAgICAgICA8aDE+aGVyZTwvaDE+XG4gICAgICAgIHt7c3AubmFtZX19XG4gICAgICAgIDxoMT5kb25lPC9oMT5cbiAgICAgICA8bXktYXBwPmxvYWRpbmcuLjwvbXktYXBwPlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW0lucHV0VGV4dCwgTXlBcHBdXG59KVxuXG5cblxuZXhwb3J0IGNsYXNzIFByaW1lQ29tcG9uZW50IHtcbiAgICBzcCA9IHtuYW1lOiBcInRlc3RcIn07XG5cdG5hbWUgPSBcIk1heFwiO1xuICAgIHNlYXJjaFBhcmFtZXRlciA9IG5ldyBTZWFyY2hQYXJhbWV0ZXIoW1wiSGFpcmRyZXNzZXJzXCIsXCJSZXN0YXVyYW50c1wiXSxcImJcIik7XG4gICAgY29uc29sZS5sb2coc2VhcmNoUGFyYW1ldGVyKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
