import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAdmin } from '../models/admin';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  public admins : IAdmin[] = [];
  public admin !: IAdmin;
  public errorMessage!:string;
  constructor(private injected :  AdminService,
              private router : Router) { }

  ngOnInit() {
    this.injected.getAdmin().subscribe({
      next : admins => this.admins = admins,
      error : err  => this.errorMessage = err
    });
     
  }

  public AjoutAdmin() {
    this.router.navigate(['/add-admin']);
  }
    public deleteAdmin(id:any) {
      this.injected.deleteAdmin(id).subscribe((res:any) =>{
       console.log('SUCCESS',res);
       this.injected.getAdmin().subscribe({
         next : admins => this.admins = admins,
         error : err => this.errorMessage = err
       });
      },(err:any)=>{
       console.log("ERROR",err);
      })
     }
  }
