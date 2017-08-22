import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CityEditComponent } from './city-edit.component';

const routes: Routes = [
    { path: '', component: CityEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CityEditRoutingModule { }
