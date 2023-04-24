import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: [
  ]
})
export class RegistrationComponent {

  reset(name : any , age : any, email: any){
    name.value = "";
    age.value = "";
    email.value = "";
  }
}
