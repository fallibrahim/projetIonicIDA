import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAdmin } from '../models/admin';
import { AdminService } from '../services/admin.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.page.html',
  styleUrls: ['./add-admin.page.scss'],
})
export class AddAdminPage implements OnInit {
  public admin : IAdmin | undefined;
  public adminForm !: FormGroup;
  public errorMessage!: string;
  constructor(
    private injected : AdminService,
    private router : Router,
    ) { }

  ngOnInit() {
    this.adminForm = new FormGroup({
      nom : new FormControl('', [Validators.required, Validators.minLength(4)]),
      prenom: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      mdp: new FormControl('', [Validators.required])
    })
  }
  public saveAdmin() : void {
    if (this.adminForm.valid) {
      if (this.adminForm.dirty) {
        const admin : IAdmin = {
          ...this.admin,
          ...this.adminForm.value
        };
          
        this.injected.createAdmin(admin).subscribe({
          next : () => this.saveCompleted(),
          error : (err) => this.errorMessage = err 
        });
      }
    }
  }
  public saveCompleted() : void {
    this.adminForm.reset();
    this.router.navigate(['/admin']);
   }
  public backToAdmin() : void {
    this.router.navigate(['/admin'])
  }
}