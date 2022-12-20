import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Personne } from './form';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
  public personne : Personne = new Personne();
  constructor() { }

  ngOnInit() {
  }
 saveData(registerForm : NgForm) {
  console.log(registerForm.form)
  console.log('registerForm :',registerForm.value)
 }
}
