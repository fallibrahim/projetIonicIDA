import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDemandeD } from '../models/demandeDepense';
import { DemandeDepenseService } from '../services/demande-depense.service';

@Component({
  selector: 'app-demande-depense',
  templateUrl: './demande-depense.page.html',
  styleUrls: ['./demande-depense.page.scss'],
})
export class DemandeDepensePage implements OnInit {
  public demandeDepenses : IDemandeD[] = [];
  public errorMessage!:string;
  constructor(private injected :  DemandeDepenseService,
              private router : Router) { }

  ngOnInit() {
    this.injected.getDemandeDepense().subscribe({
      next : demandeDepenses => this.demandeDepenses = demandeDepenses,
      error : err  => this.errorMessage = err
    });
     
  }

  public AjoutDemandeDepense() {
    this.router.navigate(['/add-demande-depense']);
  }
  public deleteDemandeDepense(id:any) {
    this.injected.deleteDemandeDepense(id).subscribe((res:any) =>{
     console.log('SUCCESS',res);
     this.injected.getDemandeDepense().subscribe({
       next : demandeDepenses => this.demandeDepenses = demandeDepenses,
       error : err => this.errorMessage = err
     });
    },(err:any)=>{
     console.log("ERROR",err);
    })
   }
}
