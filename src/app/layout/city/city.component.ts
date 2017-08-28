import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';


import { LayoutService } from '../layout.service';
import { City } from './city';

@Component({
    selector: 'app-city',
    templateUrl: './city.component.html',
    styleUrls: ['./city.component.scss'],
    animations: [routerTransition()]
})
export class CityComponent implements OnInit {
    
     private cities : City[] = [];
     private productsObservable : Observable<City[]> ; 
     private browserLang = 'en';
    constructor(private layoutService: LayoutService, private translate: TranslateService) {
        
    }

    ngOnInit() {
     this.browserLang = this.translate.getBrowserLang();
      this.layoutService.get_cities().subscribe((res : City[])=>{
             this.cities = res;
		     console.log( "cities"+res);
		  });
    
    }
}
