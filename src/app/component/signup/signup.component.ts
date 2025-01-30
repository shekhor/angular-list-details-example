import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: false,
  
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  myForm: FormGroup;
  constructor(){
    this.myForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl(''),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)])
    },
    {validators: this.confirmPasswordValidator}
    );
  }

  confirmPasswordValidator(group: AbstractControl) {
    let password1 = group.get('password')?.value;
    let password2 = group.get('confirmPassword')?.value;

    if(password1 && password2 && password1 !== password2){
      return {passwordMismatch: true};
    }
    return null;
  }
  onSubmit(){
    console.log("Name is:", this.myForm.value.name);
    console.log("Email is:", this.myForm.value.email);
  }
}
