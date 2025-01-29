import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
      password: new FormControl('')
    }
    )
  }
  onSubmit(){
    console.log("Name is:", this.myForm.value.name);
    console.log("Email is:", this.myForm.value.email);
  }
}
