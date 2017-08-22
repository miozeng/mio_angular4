import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Observable } from 'rxjs';

import { CityService } from './city.service';
import { City } from './city';

@Component({
    selector: 'app-city',
    templateUrl: './city.component.html',
    styleUrls: ['./city.component.scss'],
    animations: [routerTransition()]
})
export class CityComponent implements OnInit {
     cities = [{
	    cityId: '1',
	    cityName: 'zh',
	    status: '1'
	  },{
	    cityId: '2',
	    cityName: 'sz',
	    status: '1'
	  }];
    


     private productsObservable : Observable<City[]> ; 
    
    constructor(private cityService: CityService) {
          this.productsObservable =  this.cityService.get_cities();
          console.log("bb"+this.productsObservable);
          this.cityService.get_cities().subscribe((res : City[])=>{
          alert(res);
		     console.log( "aa"+res);
		  });
    }

    ngOnInit() {
    }
}
