/**
 * Created by КРИВИЧАНИН on 12.06.2016.
 */
import {Injectable} from '@angular/core'

@Injectable()
export class SearchPointService {

    searchPoint(searchQuery:string) {
        let point = [53.6634808, 23.7847857];
        return Promise.resolve(point);
    }
}