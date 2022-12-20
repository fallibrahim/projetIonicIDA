import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-form-reactif',
  templateUrl: './form-reactif.page.html',
  styleUrls: ['./form-reactif.page.scss'],
})
export class FormReactifPage implements OnInit {
  constructor(private fb : FormBuilder) { }
  public registerForm !: FormGroup;
  ngOnInit() {
    this.registerForm = this.fb.group({
      nom : ['', [Validators.required, Validators.minLength(4)]],
      prenom : ['', [Validators.required, Validators.maxLength(20)]], 
      email : ['', [Validators.required, Validators.email]],
      phone : '',
      notification : 'email',
      sendCatalog : ['']
    })
  }
  public saveData() {
    console.log(this.registerForm)
    console.log('valeurs : ', this.registerForm.value)
    console.log('hello')
  }
  public fillFormData(): void {
    this.registerForm.setValue({
      nom : 'fall',
      prenom : 'ibrahima',
      email : 'ibrafall@gmail.com',
      sendCatalog : true
    })
  }

  public setNotificationSetting(method:string): void {
    const phoneControl = this.registerForm.get('phone');

    if (method === 'text') {
      phoneControl?.setValidators(Validators.required)
    } else {
      phoneControl?.clearValidators();
    }
    phoneControl?.updateValueAndValidity()
  }
}
