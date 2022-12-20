import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITypeLinge } from '../models/typeLinge';
import { LingeService } from '../services/linge.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
   public typeLinges : ITypeLinge[] = [];
   public errorMessage! : string;
  constructor(private injected : LingeService,
    private router : Router) {}
  ngOnInit(){
    this.injected.getLinge().subscribe({
      next : typeLinges => this.typeLinges = typeLinges,
      error : err  => this.errorMessage = err
    });
     
     
  }
  public AjoutLinge() {
    this.router.navigate(['/ajout-linge']);
  }

  public deleteLinge(id:any) {
    this.injected.deleteLinge(id).subscribe((res:any) =>{
     console.log('SUCCESS',res);
     this.injected.getLinge().subscribe({
       next : typeLinges => this.typeLinges = typeLinges,
       error : err => this.errorMessage = err
     });
    },(err:any)=>{
     console.log("ERROR",err);
    })
   }
}
