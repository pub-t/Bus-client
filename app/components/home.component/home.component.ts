/**
 * Created by КРИВИЧАНИН on 13.06.2016.
 */
import {Component} from '@angular/core';

import {MapComponent} from '../map.component/map.component';

@Component({
    selector: 'home',
    templateUrl: 'app/components/home.component/home.component.html',
    styleUrls: ['app/components/home.component/home.component.css'],
    directives: [
        MapComponent
    ]
})

export class HomeComponent {

}