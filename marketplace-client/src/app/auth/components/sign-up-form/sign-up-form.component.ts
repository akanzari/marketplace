import { SignInFormComponent } from './../sign-in-form/sign-in-form.component';
import { Component, OnInit, HostBinding } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-sign-up-form',
    templateUrl: './sign-up-form.component.html',
    styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent extends SignInFormComponent {

    signUpForm: FormGroup = this.fb.group({
        username: ['', Validators.compose([Validators.required, Validators.email])],
        password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
        password_confirmation: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
        mobile: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern('[0-9]{8}')])],
        roles: this.fb.array([
            this.fb.group({
                role: ['', Validators.required]
            })
        ])
    }, { validator: this.matchingPasswords('password', 'password_confirmation') }
    );

    matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
        return (group: FormGroup): { [key: string]: any } => {
            let password = group.controls[passwordKey];
            let confirmPassword = group.controls[confirmPasswordKey];

            if (password.value !== confirmPassword.value) {
                return {
                    mismatchedPasswords: true
                };
            }
        }
    }

}
