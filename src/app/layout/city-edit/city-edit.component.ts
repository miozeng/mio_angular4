import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-city-edit',
    templateUrl: './city-edit.component.html',
    styleUrls: ['./city-edit.component.scss'],
    animations: [routerTransition()]
})
export class CityEditComponent implements OnInit {
    updateCity() {
       alert("aa");
    }
    constructor() { }
    ngOnInit() {}
}
