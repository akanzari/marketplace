import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Authenticate } from '../../models/user';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

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

  ngOnInit() {}

  submit() {
    if (this.signInForm.valid) {
      this.submitted.emit(this.signInForm.value);
    }
  }

}
