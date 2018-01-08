import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from './../../core/store/reducers/root.reducer';
import { Observable } from 'rxjs/Observable';
import { getUser } from '../../auth/store/reducers/selectors';

@Component({
  selector: 'app-user',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <app-user-page
    [user]="user$ | async">
  </app-user-page>
`,
  styles: []
})
export class UserComponent implements OnInit {

  user$: Observable<any>;

  constructor(private store: Store<fromRoot.AppState>) {
    this.user$ = this.store.select(getUser);
  }

  ngOnInit() { }

}
