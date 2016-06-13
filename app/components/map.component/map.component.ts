/**
 * Created by КРИВИЧАНИН on 10.06.2016.
 */
import {Component} from '@angular/core';

import {GeocodingService} from "../../services/geocoding.service";
import {MapService} from "../../services/map.service";
import {LocationModel} from "../../models/location.Model";
import {InputPointComponent} from "../input-point.component/input-point.component";

import {Map} from 'leaflet';


@Component({
    selector: 'map-component',
    templateUrl: 'app/components/map.component/map.component.html',
    styleUrls: ['app/components/map.component/map.component.css'],
    providers: [
        MapService,
        GeocodingService
    ],
    directives: [
        InputPointComponent
    ]
})

export class MapComponent {

    private personLocation:LocationModel;
    private map:Map;

    constructor(private mapService:MapService,
                private geoCodService:GeocodingService) {
    }

    ngOnInit() {
        this.map = new L.Map('map', {
            zoomControl: false,
            center: new L.LatLng(53.68583, 23.83812),
            zoom: 13,
            minZoom: 4,
            maxZoom: 19,
            layers: [this.mapService.baseMap.OpenStreetMap]
        });

        L.control.zoom({position: 'topleft'}).addTo(this.map);
        L.control.scale().addTo(this.map);
        
        this.mapService.map = this.map;
    }

    getMyLocation() {

        this.mapService.getPersonLocation(this.map)
            .then(
                location => this.personLocation = location,
                error => console.log('Service error: ' + error)
            );

    }
}