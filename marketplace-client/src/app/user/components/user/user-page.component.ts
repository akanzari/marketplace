import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from './../../../core/store/reducers/root.reducer';
import { Observable } from 'rxjs/Observable';
import { getUser } from '../../../auth/store/reducers/selectors';
import { User } from '../../../core/models/user';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  @Input() user: User | null;

  constructor() { }

  ngOnInit() { }

}
