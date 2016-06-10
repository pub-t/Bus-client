/**
 * Created by КРИВИЧАНИН on 10.06.2016.
 */
import {Injectable} from '@angular/core';
import {Map, TileLayer} from 'leaflet';

@Injectable()
export class MapService {

    map:Map;
    baseMaps:any;

    constructor() {
        this.baseMaps = {
            OpenStreetMap: new L.TileLayer('http://{s}.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png', {
                attribution: "Map data © <a href=http://openstreetmap.org>OpenStreetMap</a> contributors",
                subdomains: ['otile1', 'otile2', 'otile3', 'otile4']
            })
        };

    }
}

