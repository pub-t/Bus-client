/**
 * Created by КРИВИЧАНИН on 12.06.2016.
 */
import {Component} from '@angular/core';

import {SearchPointService} from '../../services/search-point.service';
import {MapService} from "../../services/map.service";


@Component({
    selector: 'input-point',
    templateUrl: 'app/components/input-point.component/input-point.component.html',
    styleUrls: ['app/components/input-point.component/input-point.component.css'],
    providers: [
        SearchPointService
    ]
})

export class InputPointComponent {
    private searchText;
    private searchResult:any;

    constructor(private searchPointService:SearchPointService,
                private mapService:MapService) {
    }

    searchPoint() {
        this.searchPointService.searchPoint(this.searchText)
            .then(
                data => {this.searchResult = data,
                this.mapService.addMarker(this.mapService.map, this.searchResult)}
            )
            .catch(this.handleError);

    }

    private handleError(error:any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}