import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { City } from '../city/city';
import { LayoutService } from '../layout.service';

@Component({
    selector: 'app-city-edit',
    templateUrl: './city-edit.component.html',
    styleUrls: ['./city-edit.component.scss'],
    animations: [routerTransition()]
})
export class CityEditComponent implements OnInit {

   cityid: number;
   city= new City();
   constructor(private layoutService: LayoutService, private route: ActivatedRoute) {}
  
  ngOnInit() {
  
    this.route.params.subscribe((params) => this.cityid = params.cityid);
   
   if(this.cityid != 0){
       this.layoutService.get_city_byid(this.cityid).subscribe((res : City)=>{
             this.city = res;
		  });
   }

  }
  
   onSubmit() { 
    
     this.layoutService.post_city(this.city).subscribe(
            (val) => {
                console.log("POST call successful value returned in body",  val);
            },
            response => {
                alert("save city in error");
            },
            () => {
                console.log("The POST observable is now completed.");
            });
     
     }
}
