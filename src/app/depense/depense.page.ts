import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDepense } from '../models/depense';
import { DepenseService } from '../services/depense.service';

@Component({
  selector: 'app-depense',
  templateUrl: './depense.page.html',
  styleUrls: ['./depense.page.scss'],
})
export class DepensePage implements OnInit {
  public depenses : IDepense[] = [];
  public errorMessage!:string;
  constructor(private injected :  DepenseService,
              private router : Router) { }

  ngOnInit() {
    this.injected.getDepense().subscribe({
      next : depenses => this.depenses = depenses,
      error : err  => this.errorMessage = err
    });
     
  }

  public AjoutDepense() {
    this.router.navigate(['/add-depense']);
  }
  public deleteDepense(id:any) {
    this.injected.deleteDepense(id).subscribe((res:any) =>{
     console.log('SUCCESS',res);
     this.injected.getDepense().subscribe({
       next : depenses => this.depenses = depenses,
       error : err => this.errorMessage = err
     });
    },(err:any)=>{
     console.log("ERROR",err);
    })
   }
}
