/**
 * Created by КРИВИЧАНИН on 09.06.2016.
 */
import {LatLngBounds} from 'leaflet';

export class LocationModel {
    latitude: number;
    longitude: number;
    address: string;
    viewBounds: LatLngBounds;
}
