import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CityEditRoutingModule } from './city-edit-routing.module';
import { CityEditComponent } from './city-edit.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [
        CommonModule,
        CityEditRoutingModule,
        PageHeaderModule
    ],
    declarations: [CityEditComponent]
})
export class CityEditModule { }
