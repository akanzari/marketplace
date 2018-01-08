import { Component, Input } from '@angular/core';
import { Category } from '../../../../core/models/category';

@Component({
    selector: 'app-middle-bar',
    templateUrl: './middle-bar.component.html',
    styleUrls: ['./middle-bar.component.scss']
})
export class MiddleBarComponent {

    @Input() categories: Category[];

    constructor() { }

}