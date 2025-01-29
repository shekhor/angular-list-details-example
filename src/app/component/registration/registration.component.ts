import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  standalone: false,
  
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  name:string = "Shekhor";
  onSubmit(form: any){
    console.log("Name is:", form.value.name);
    console.log("Email is:", form.value.email);
  }
}
