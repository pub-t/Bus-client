/**
 * Created by КРИВИЧАНИН on 10.06.2016.
 */
import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';

import {MapService} from './services/map.service';
import {GeocodingService} from './services/geocoding.service';
import {MapComponent} from "./components/map.component/map.component";

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives:[
        ROUTER_DIRECTIVES
    ],
    providers: [
        ROUTER_PROVIDERS,
        MapService,
        GeocodingService
    ]
})

@RouteConfig([
    {
        path: "/map",
        name: "Map",
        component: MapComponent,
        useAsDefault: true
    }
])

export class AppComponent {

}
