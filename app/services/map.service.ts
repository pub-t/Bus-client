/**
 * Created by КРИВИЧАНИН on 10.06.2016.
 */
import {Injectable} from '@angular/core';

@Injectable()
export class MapService {
    
    baseMap:any;

    constructor() {
        this.baseMap = {
            OpenStreetMap: new L.TileLayer('http://{s}.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png', {
                attribution: "Map data © <a href=http://openstreetmap.org>OpenStreetMap</a> contributors",
                subdomains: ['otile1', 'otile2', 'otile3', 'otile4']
            })
        };

    }
}

