import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-agent',
    templateUrl: './agent.component.html',
    styleUrls: ['./agent.component.scss'],
    animations: [routerTransition()]
})
export class AgentComponent implements OnInit {
    constructor() { }
    ngOnInit() { }
 
}
