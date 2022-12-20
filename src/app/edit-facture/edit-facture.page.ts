import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FactureService } from '../services/facture.service';



@Component({
  selector: 'app-edit-facture',
  templateUrl: './edit-facture.page.html',
  styleUrls: ['./edit-facture.page.scss'],
})
export class EditFacturePage  implements OnInit {
    id!:number;
    type!:string;
    montant!:number;
  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private injected : FactureService
  ) {
    this.route.params.subscribe((param:any)=>{
      this.id = param.id;
      console.log(this.id);
      this.getFacture(this.id)
    });
   }

  ngOnInit() {   }

  public getFacture(id:number) {
    this.injected.getOneFactureById(id).subscribe((res:any) =>{
      console.log("SUCCESS",res);
      this.id = res.id;
      this.type = res.type;
      this.montant = res.montant;
    },(err:any)=> {
      console.log("Error",err);
    })
  }

  updateFacture(){
    let data = {
      type : this.type,
      montant : this.montant,
     }
      this.injected.updateFacture(this.id, data).subscribe((res:any)=>{
      console.log("SUCCESS",res);
      this.router.navigateByUrl('/facture');

     },(err:any)=> {
      console.log("Error",err);
  })
    }
}


