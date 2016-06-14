/**
 * Created by КРИВИЧАНИН on 10.06.2016.
 */
import {Injectable} from '@angular/core';
import {Map} from 'leaflet';

@Injectable()
export class MapService {

    // getPersonLocation() {
    //     return this.personLocation;
    // }


    addMarker(map:Map, latlng:any) {
        let newMarker = L.marker(latlng, {
            icon: L.icon({
                iconUrl: '../../node_modules/leaflet/dist/images/marker-icon.png',
                shadowUrl: '../../node_modules/leaflet/dist/images/marker-shadow.png'
            })
        })
            .bindPopup('marker')
            .addTo(map)
            .openPopup();

        return newMarker;
    }
}

