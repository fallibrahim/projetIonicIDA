import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IFacture } from '../models/facture';
import { FactureService } from '../services/facture.service';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.page.html',
  styleUrls: ['./facture.page.scss'],
})
export class FacturePage implements OnInit {
  public factures : IFacture[] = [];
  public errorMessage!:string;
  constructor(private injected :  FactureService,
              private router : Router) { }

  ngOnInit() {
    this.injected.getFacture().subscribe({
      next :  factures => this.factures = factures,
      error : err  => this.errorMessage = err
    });
     
  }

  public AjoutFacture() {
    this.router.navigate(['/add-facture']);
  }
  public deleteFacture(id:any) {
    this.injected.deleteFacture(id).subscribe((res:any) =>{
     console.log('SUCCESS',res);
     this.injected.getFacture().subscribe({
       next :factures => this.factures = factures,
       error : err => this.errorMessage = err
     });
    },(err:any)=>{
     console.log("ERROR",err);
    })
   }
}
