import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentComponent } from './agent.component';
import { AgentRoutingModule } from './agent-routing.module';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [
        CommonModule,
        AgentRoutingModule,
        PageHeaderModule
    ],
    declarations: [AgentComponent]
})
export class AgentModule { }
