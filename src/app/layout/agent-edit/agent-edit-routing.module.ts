import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgentEditComponent } from './agent-edit.component';

const routes: Routes = [
    { path: '', component: AgentEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentEditRoutingModule { }
