import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FactureService } from '../services/facture.service';

@Component({
  selector: 'app-add-facture',
  templateUrl: './add-facture.page.html',
 styleUrls: ['./add-facture.page.scss'],
})
export class  AddFacturePage implements OnInit {
    id!:number;
    type!:string;
    montant!:number;
  constructor(private injected : FactureService,
    private router : Router) { }

  ngOnInit() {
  }
  public createFacture() {
    let data = {
       id : this.id,
       type : this.type,
       montant : this.montant
    }

    this.injected.createFacture(data).subscribe((res:any) => {
      console.log("SUCCESS===",res);
      this.type = '';
      this.montant = 0;
    },(error:any)=>{
      alert("error");
      console.log("error===",error);
    })
    this.router.navigate(['/facture']);
}

}