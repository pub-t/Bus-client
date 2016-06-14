/**
 * Created by КРИВИЧАНИН on 10.06.2016.
 */
import {Component, Output} from '@angular/core';

import {MapService} from "../../services/map.service";
import {LocationModel} from "../../models/location.Model";


import {Map} from 'leaflet';


@Component({
    selector: 'map-component',
    templateUrl: 'app/components/map.component/map.component.html',
    styleUrls: ['app/components/map.component/map.component.css'],
    providers: [
        MapService
    ]
})

export class MapComponent {

    private personLocation:LocationModel;
    private map:Map;

    @Output() updateFlag;

    constructor(private mapService:MapService) {
    }


    ngOnInit() {
        this.initMap();
    }

    emitFlag(value:boolean) {
        this.updateFlag.emit(value);
    }

    initMap() {
        this.map = new L.Map('map', {
            zoomControl: false,
            center: new L.LatLng(53.68583, 23.83812),
            zoom: 13,
            minZoom: 4,
            maxZoom: 19,
            layers: [new L.TileLayer('http://{s}.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png', {
                attribution: "Map data © <a href=http://openstreetmap.org>OpenStreetMap</a> contributors",
                subdomains: ['otile1', 'otile2', 'otile3', 'otile4']
            })]
        });

        L.control.zoom({position: 'topleft'}).addTo(this.map);
        L.control.scale().addTo(this.map);


        // this.map.on('locationfound', this.onLocationFound);
        // this.map.on('locationerror', this.onLocationError);

        // this.mapService.map = this.map;
    }

    

}