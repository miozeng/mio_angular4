import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-agent-edit',
    templateUrl: './agent-edit.component.html',
    styleUrls: ['./agent-edit.component.scss'],
    animations: [routerTransition()]
})
export class AgentEditComponent implements OnInit {
    constructor() { }
    ngOnInit() {}
}
