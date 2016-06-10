/**
 * Created by КРИВИЧАНИН on 10.06.2016.
 */
import {Component} from '@angular/core';

import {MapService} from './services/map.service';
import {GeocodingService} from './services/geocoding.service';
import {LocationModel} from './models/location.Model.ts';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    providers: [
        MapService,
        GeocodingService
    ]
})
export class AppComponent {

    private mapService:MapService;
    private geoCodService:GeocodingService;

    constructor(mapservice:MapService, geoCodService:GeocodingService) {
        this.mapService = mapservice;
        this.geoCodService = geoCodService;
    }

    ngOnInit() {
        var map = new L.Map('map', {
            zoomControl: false,
            center: new L.LatLng(53.68583, 23.83812),
            zoom: 13,
            minZoom: 4,
            maxZoom: 19,
            layers: [this.mapService.baseMaps.OpenStreetMap]
        });

        L.control.zoom({ position: 'topright' }).addTo(map);
        L.control.scale().addTo(map);

        this.mapService.map = map;

        // this.geoCodService.getCurrentLocation()
        //     .subscribe(
        //         location => map.panTo([location.latitude, location.longitude]),
        //         err => console.error(err)
        //     );
    }
}
