import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {

    @Input() isLoggedIn: false;
    @Output() logoutClick = new EventEmitter<boolean>();

    constructor() { }

    logout() { this.logoutClick.emit(); }

}