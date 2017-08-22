import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'report', loadChildren: './report/report.module#ReportModule' },
            { path: 'city', loadChildren: './city/city.module#CityModule' },
            { path: 'cityedit', loadChildren: './city-edit/city-edit.module#CityEditModule' },
            { path: 'agent', loadChildren: './agent/agent.module#AgentModule' },
            { path: 'agentedit', loadChildren: './agent-edit/agent-edit.module#AgentEditModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
