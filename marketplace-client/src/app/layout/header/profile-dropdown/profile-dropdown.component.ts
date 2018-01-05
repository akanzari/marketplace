import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile-dropdown',
  templateUrl: './profile-dropdown.component.html',
  styleUrls: ['./profile-dropdown.component.scss']
})
export class ProfileDropdownComponent {

  @Input() isLoggedIn: false;
  @Output() logoutClick = new EventEmitter<boolean>();

  
  constructor() { }

  logout() { this.logoutClick.emit(); }
}