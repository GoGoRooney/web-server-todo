///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap} from 'angular2/platform/browser';
import {MainApp} from "./main-component";
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from "angular2/http";

bootstrap(MainApp, [ROUTER_PROVIDERS, HTTP_PROVIDERS]);
