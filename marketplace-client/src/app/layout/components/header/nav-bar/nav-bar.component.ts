import { Component, Input } from '@angular/core';
import { Category } from '../../../../core/models/category';
import { Store } from '@ngrx/store';
import * as fromRoot from './../../../../core/store/reducers/root.reducer';
import * as catalogActions from '../../../../catalog/store/actions/catalog.actions';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

    @Input() categories: Category[];

    constructor(private store: Store<fromRoot.AppState>) { }

    selectCategory(slug) {
        this.store.dispatch(new catalogActions.FetchProducts(slug));
    }

}