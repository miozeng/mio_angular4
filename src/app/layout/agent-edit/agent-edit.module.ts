import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentEditRoutingModule } from './agent-edit-routing.module';
import { AgentEditComponent } from './agent-edit.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [
        CommonModule,
        AgentEditRoutingModule,
        PageHeaderModule
    ],
    declarations: [AgentEditComponent]
})
export class AgentEditModule { }
