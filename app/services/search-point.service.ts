/**
 * Created by КРИВИЧАНИН on 12.06.2016.
 */
import {Injectable} from '@angular/core'
import {LocationModel} from "../models/location.Model";

@Injectable()
export class SearchPointService {

    searchPoint(searchQuery:string) {
        let locationModel = new LocationModel();
        locationModel.latitude = 53.6634808;
        locationModel.longitude =23.7847857;
        return Promise.resolve(locationModel);
    }
}