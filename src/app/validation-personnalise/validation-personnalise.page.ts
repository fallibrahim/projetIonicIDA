import { Component, OnInit } from '@angular/core';
import { AbstractControl, 
  FormBuilder,
  FormGroup,
  ValidatorFn, 
  Validators,
  FormArray } from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
function rangeValidators(min:number, max:number) : ValidatorFn {

  return (c:AbstractControl): { [key:string] : boolean } | null => {
    
    if (c.value != null && (isNaN(c.value)) || c.value  < min || c.value > max) {
       return {'rangeError' : true}
    }
    return null;
  }
}

function emailMatcher(c:AbstractControl) : {[key:string] : boolean} | null {
  const emailControl = c.get('email');
  const confirmEmailControl = c.get('confirmEmail');

  if (emailControl?.pristine || confirmEmailControl?.pristine) {
    return null
  }

  if (emailControl!.value === confirmEmailControl!.value) {
    return null
  }
  return {'match' : true}

}
@Component({
  selector: 'app-validation-personnalise',
  templateUrl: './validation-personnalise.page.html',
  styleUrls: ['./validation-personnalise.page.scss'],
})
export class ValidationPersonnalisePage implements OnInit {
  public registerForm !: FormGroup;
  public errorMsg !: string;
  
  private validationErrorsMessage:any = {
    required : 'Entrez votre email.',
    email : ' l\'E-mail est invalid.'
  };
  constructor(
    private fb : FormBuilder,
        
    ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      nom : ['', [Validators.required, Validators.minLength(4)]],
      prenom : ['', [Validators.required, Validators.maxLength(20)]],
      emailGroup : this.fb.group({
      email : ['', [Validators.required, Validators.email]],
      confirmEmail :  ['', [Validators.required]],
      }, { validators : emailMatcher }) ,
      phone : '',
      rating : [null, rangeValidators(1, 5)],
      notification : 'email',
      sendCatalog : true,
      addresses : this.fb.array([this.createAddressGroup()])
    })
    const controlEmail = this.registerForm.get('emailGroup.email');
    controlEmail?.valueChanges.pipe(
      debounceTime(2000)
    ).subscribe(val => {
      console.log(val)
      this.setMessage(controlEmail)
    })

  this.registerForm.get('notification')?.valueChanges.subscribe((value) => {
    this.setNotificationSetting(value)
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
      sendCatalog : true,
      
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
  public createAddressGroup() : FormGroup {
    return this.fb.group({
      addressType : [''],
      street1 : [''],
      street2 : [''],
      city : [''],
      state : [''],
      zip : ['']
    })
  }
  public get addressList() : FormArray {
    return  <FormArray>this.registerForm.get('addresses');
  }
  public addAdress(): void {
    this.addressList.push(this.createAddressGroup())
  }
  private setMessage(val : AbstractControl) : void {
    this.errorMsg = '';
    if ((val.touched || val.dirty) && val.errors) {
        this.errorMsg = Object.keys(val.errors).map(
          key  => this.validationErrorsMessage[key]
          ).join(' ');
    }
    console.log(this.errorMsg)
  }
}
