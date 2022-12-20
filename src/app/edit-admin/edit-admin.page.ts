import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IAdmin } from '../models/admin';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.page.html',
  styleUrls: ['./edit-admin.page.scss'],
})
export class EditAdminPage implements OnInit {
  public admin !: IAdmin;
  public registerForm !: FormGroup;
  public errorMessage!: String;
  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private injected : AdminService,
    private fb : FormBuilder
    ) { }
    
    ngOnInit() { 
      this.registerForm = this.fb.group({
        nom : ['', [Validators.required]],
        prenom: ['', [Validators.required]],
        email: ['', [Validators.required]],
        mdp: ['', [Validators.required]]
      })
      this.route.paramMap.subscribe(params => {
        const id = Number(params.get('id'));
        this.getSelectedAdmin(id)
      })
      this.updateAdmin()
    }

    public getSelectedAdmin(id:number) : void {
      this.injected.getOneAdminById(id).subscribe((admin) => {
         this.displayAdmin(admin);
      })
    }
    public displayAdmin(admin:IAdmin) : void {
      this.admin = admin;
      this.registerForm.patchValue({
        nom : this.admin.nom,
        prenom : this.admin.prenom,
        email : this.admin.email,
        mdp : this.admin.mdp
      });
    }

    public updateAdmin(): void {
     if (this.registerForm.valid) {
      if (this.registerForm.dirty) {
        const admin : IAdmin = {
          ...this.admin,
          ...this.registerForm.value
        };

        this.injected.updateAdmin(admin).subscribe({
          next : () => {
            this.registerForm.reset();
            this.router.navigate(['/admin']);
          },
          error : (err)  => this.errorMessage = err
        })
      }
     }
    }

    public backToAdmin() : void {
      this.router.navigate(['/admin']);
    }
   }


