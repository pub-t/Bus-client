/**
 * Created by КРИВИЧАНИН on 10.06.2016.
 */
import {Injectable} from '@angular/core';
import {LocationModel} from "../models/location.Model";

import {Map} from 'leaflet';

@Injectable()
export class MapService {
    map:Map;
    baseMap:any;
    personMarker:L.Marker;
    checkPosition:boolean;
    personLocation:LocationModel;

    constructor() {
        this.baseMap = {
            OpenStreetMap: new L.TileLayer('http://{s}.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png', {
                attribution: "Map data © <a href=http://openstreetmap.org>OpenStreetMap</a> contributors",
                subdomains: ['otile1', 'otile2', 'otile3', 'otile4']
            })
        };

    }

    getPersonLocation(map:Map) {

        map.locate({setView: true, maxZoom: 15});

        function onLocationFound(e) {
            let personLocation = new LocationModel();
            personLocation.latitude = e.latlng.lat;
            personLocation.longitude = e.latlng.lng;

            this.personLocation = personLocation;

            if (this.checkPosition == true) {
                return;
            } else {

                this.personMarker = L.marker(e.latlng, {
                    icon: L.icon({
                        iconUrl: '../../node_modules/leaflet/dist/images/marker-icon.png',
                        shadowUrl: '../../node_modules/leaflet/dist/images/marker-shadow.png'
                    })
                })
                    .bindPopup('You are in a radius of: ' + e.accuracy / 4)
                    .addTo(map)
                    .openPopup();

                // this.personMarker.on('popupclose', removeMarker);

                this.checkPosition = true;
            }
        }

        // function removeMarker() {
        //
        //     map.removeLayer(this)
        // }

        map.on('locationfound', onLocationFound);

        function onLocationError(e) {
            alert(e.message);
        }

        map.on('locationerror', onLocationError);
        return Promise.resolve(this.personLocation);
    }

    addMarker(map:Map, latlng:any) {

        L.marker(latlng, {
            icon: L.icon({
                iconUrl: '../../node_modules/leaflet/dist/images/marker-icon.png',
                shadowUrl: '../../node_modules/leaflet/dist/images/marker-shadow.png'
            })
        })
            .bindPopup('marker')
            .addTo(map)
            .openPopup();
    }
}

