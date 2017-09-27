import { Component } from '@angular/core';
//import {StudentService} from './student.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from "@angular/forms";
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/toPromise';
import {ProviderService} from '../services/ServiceProvider';

@Component({
  selector: 'provider-insert',
  template: `
  {{providerServiceData}}
  <form [formGroup]="myForm" (ngSubmit)="doLogin()">
  
  Email <input type="text" formControlName="email"><br>
  <p *ngIf="myForm.controls.email.errors">Required</p>
  Password <input type="password" formControlName="password"><br>
  
  <button type="submit" class="btn btn-primary" >Login</button>
</form>

  `
})
export class providerLoginComponent {
  myForm: FormGroup;
  providerServiceData;
  constructor(private formBuilder: FormBuilder,private providerService:ProviderService) {
    

    this.myForm = formBuilder.group({
        'email': ['', [
            Validators.required,
            Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
          ]],
    "password":["",Validators.required] 
    });

    
    this.getProviderServices();
    
  }


  doLogin(){
    console.log('submit button is called');
    console.log(this.myForm.value);
this.providerService.providerLogin(this.myForm.value).subscribe(res=>console.log(res.json()));
 //console.log(this.providerServiceData);  
}
data;
getProviderServices()
{
    this.providerService.getProviderServices().subscribe(x=>console.log("this is response"+x.json()));
    //console.log(this.providerServiceData);
    //console.log(this.data);
}


 
 
 
}