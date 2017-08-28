import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CityEditRoutingModule } from './city-edit-routing.module';
import { CityEditComponent } from './city-edit.component';
import { PageHeaderModule } from './../../shared';
import { LayoutService } from '../layout.service';

@NgModule({
    imports: [
        CommonModule,
        CityEditRoutingModule,
        PageHeaderModule,
        ReactiveFormsModule,
        FormsModule ,
        HttpClientModule
    ],
      providers: [LayoutService],
    declarations: [CityEditComponent]
})
export class CityEditModule  { 
  
}
