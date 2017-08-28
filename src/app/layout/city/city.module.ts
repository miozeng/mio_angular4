import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { LayoutService } from '../layout.service';
import { CityComponent } from './city.component';
import { CityRoutingModule } from './city-routing.module';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [
        CommonModule,
        CityRoutingModule,
        PageHeaderModule,
        HttpClientModule
    ],
    providers: [LayoutService],
    declarations: [CityComponent]
})
export class CityModule { }
