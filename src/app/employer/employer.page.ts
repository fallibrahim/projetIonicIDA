import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEmployer } from '../models/employer';
import { EmployerService } from '../services/employer.service';
@Component({
  selector: 'app-employer',
  templateUrl: './employer.page.html',
  styleUrls: ['./employer.page.scss'],
})
export class EmployerPage implements OnInit {
  public employers : IEmployer[] = [];
  public errorMessage!:string;
  constructor(
    private injected :  EmployerService,
    private router : Router
    ) { }

  ngOnInit() {
    this.injected.getEmployer().subscribe({
      next : employers => this.employers = employers,
      error : err  => this.errorMessage = err
    });
     
  }

  public AjoutEmployer() {
    this.router.navigate(['/add-employer']);
  }
  public deleteEmployer(id:any) {
    this.injected.deleteEmployer(id).subscribe((res:any) =>{
     console.log('SUCCESS',res);
     this.injected.getEmployer().subscribe({
       next : employers => this.employers = employers,
       error : err => this.errorMessage = err
     });
    },(err:any)=>{
     console.log("ERROR",err);
    })
   }
   retour() {
    this.router.navigate(['/home']);
   }
}
