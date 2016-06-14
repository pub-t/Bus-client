/**
 * Created by КРИВИЧАНИН on 12.06.2016.
 */
import {Component, EventEmitter} from '@angular/core';
import {Router, ROUTER_PROVIDERS} from '@angular/router-deprecated';

import {SearchPointService} from '../../services/search-point.service';
import {MapService} from '../../services/map.service';
import {LocationModel} from "../../models/location.Model";

@Component({
    selector: 'input-point',
    templateUrl: 'app/components/input-point.component/input-point.component.html',
    styleUrls: ['app/components/input-point.component/input-point.component.css'],
    providers: [
        ROUTER_PROVIDERS,
        SearchPointService
    ]
})

export class InputPointComponent {
    private fromText:string;
    private toText:string;

    private fromFlag:boolean = true;

    private navigator;
    private locations:LocationModel[] = [];

    constructor(private searchPointService:SearchPointService,
                private mapService:MapService,
                private router:Router) {
        this.navigator = window.navigator;
    }


    searchPoint() {
        this.getMyLocation();
        this.searchPointService.searchPoint(this.toText)
            .then(location => this.locations = [...this.locations, location])
            .catch(this.handleError);

        // this.mapService.addMarker(this.searchResult);

        // this.router.navigate(['Home']);
    }

    getMyLocation() {

        if (!this.navigator.geolocation) {
            console.log('Geolocation is not supported by your browser');
            return;
        }

        function success(position) {
            this.personLocation = new LocationModel();
            this.personLocation.latitude = position.coords.latitude;
            this.personLocation.longitude = position.coords.longitude;

            console.log('Person location:\n ' +
                'Latitude is ' + this.personLocation.latitude +
                '\nLongitude is ' + this.personLocation.longitude);

        };

        function error() {
            this.fromFlag = false;
            console.log(this.fromFlag);
            console.log("Unable to retrieve your location");

        };

        this.navigator.geolocation.getCurrentPosition(success, error)
    }

    private handleError(error:any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
