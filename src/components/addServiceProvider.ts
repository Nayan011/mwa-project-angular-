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

@Component({
  selector: 'provider-insert',
  template: `
  <form [formGroup]="myForm" (ngSubmit)="onsubmit()">
  Name <input type="text" formControlName="name"><br>
  <p *ngIf="myForm.controls.name.errors">Required</p>
  Email <input type="text" formControlName="email"><br>
  <p *ngIf="myForm.controls.email.errors">Required</p>
  Password <input type="password" formControlName="password"><br>
  <p *ngIf="myForm.controls.password.errors">Required</p>
  Licence No <input type="text" formControlName="licenceNo"><br>
  Account No <input type="Number" formControlName="accountNo"><br>
  Bank Name <input type="text" formControlName="bankName"><br>
  Mobile No <input type="Number" formControlName="mobileNo"><br>
  <button type="submit" class="btn btn-primary" >Submit</button>
</form>

  `
})
export class addProviderComponent {
  myForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    

    this.myForm = formBuilder.group({
        "name":["",Validators.required],
        'email': ['', [
            Validators.required,
            Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
          ]],
    "password":["",Validators.required],
    "licenceNo":"",
    "accountNo":0,
    "bankName":"",
    "mobileNo":0
      
    });

    this.myForm.statusChanges.subscribe(
      (data: any) => console.log(data)
    );
    //this.getData();
    
  }

  
  onsubmit() {
    console.log(this.myForm);
  }
 
 
 
}