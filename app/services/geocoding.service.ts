/**
 * Created by КРИВИЧАНИН on 09.06.2016.
 */
import {Http, Response} from '@angular/http';
import {LocationModel} from '../models/location.Model';
import {Injectable} from '@angular/core';
import {LatLngBounds} from 'leaflet';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import {Map} from 'leaflet';


@Injectable()
export class GeocodingService {
    http:Http;

    constructor(http:Http) {
        this.http = http;
    }

    geocode(address:string) {
        return this.http
            .get('http://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURIComponent(address))
            .map(res => res.json())
            .map(result => {
                if (result.status != 'OK') {
                    throw new Error('unable to geocode address');
                }

                var location = new LocationModel();
                location.address = result.results[0].formatted_address;
                location.latitude = result.results[0].geometry.location.lat;
                location.longitude = result.results[0].geometry.location.lng;

                var viewPort = result.results[0].geometry.viewport;
                location.viewBounds = new LatLngBounds(
                    {
                        lat: viewPort.southwest.lat,
                        lng: viewPort.southwest.lng
                    },
                    {
                        lat: viewPort.northeast.lat,
                        lng: viewPort.northeast.lng
                    });

                return location;
            });
    }

    getCurrentLocation() {
        return this.http
            .get('http://ipv4.myexternalip.com/json')
            .map(res => res.json().ip)
            .flatMap(ip => this.http.get('http://freegeoip.net/json/' + ip))
            .map((res:Response) => res.json())
            .map(result => {
                var location = new LocationModel();

                location.address = result.city + ', ' + result.region_code + ' ' + result.zip_code + ', ' + result.country_code;
                location.latitude = result.latitude;
                location.longitude = result.longitude;

                return location;
            });
    }

    getPersonLocation(map:Map) {

        let personLocation = new LocationModel();

        map.locate({setView: true, maxZoom: 15});

        function onLocationFound(e) {

            personLocation.latitude = e.latlng.lat;
            personLocation.longitude = e.latlng.lng;

            let radius = e.accuracy / 4;

            L.circleMarker(e.latlng, {
                radius: radius,
                fillColor: "green",
                color: "red",
                weight: 1,
                opacity: 1,
                fillOpacity: 0.8
            })
                .bindPopup('You are within ' + radius + ' meters from this point', {})
                .addTo(map)
                .openPopup();
        }


        map.on('locationfound', onLocationFound);

        function onLocationError(e) {
            alert(e.message);
        }

        map.on('locationerror', onLocationError);

        return Promise.resolve(personLocation);
    }
}
