import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';


interface IUserLogin {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {

  loginForm: UntypedFormGroup = {} as UntypedFormGroup;
    showPassword = false;
    loading = false;
    currentYear: any;

    constructor(
        private fb: UntypedFormBuilder,
    ) {
        this.loginForm = this.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
        });
    }
    

  get formControls() {
      return this.loginForm.controls;
  }

  togglePassword(): void {
      this.showPassword = !this.showPassword;
  }

  login({ value }: { value: IUserLogin }): void {
      console.log('VALUE', value);
  }
  
}

