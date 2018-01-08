import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Authenticate } from '../../../core/models/user';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent {

  @Input()
  set pending(isPending: boolean) {
    this._pending = isPending;
    if (isPending) {
      this.signInForm.disable();
    } else {
      this.signInForm.enable();
    }
  }
  
  title = environment.AppName;

  _pending: boolean;

  @Input() errorMessage: string | null;

  @Output() submitted = new EventEmitter<Authenticate>();

  signInForm: FormGroup = this.fb.group({
    username: ['admin1@test.com', Validators.required],
    password: ['12345678', Validators.required]
  });

  constructor(public fb: FormBuilder) { }

  submit() {
    if (this.signInForm.valid) {
      this.submitted.emit(this.signInForm.value);
    }
  }

}
