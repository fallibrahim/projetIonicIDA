import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DemandeDepenseService } from '../services/demande-depense.service';



@Component({
  selector: 'app-edit-demande-depense',
  templateUrl: './edit-demande-depense.page.html',
  styleUrls: ['./edit-demande-depense.page.scss'],
})
export class EditDemandeDepensePage implements OnInit {
  id!:number;
  idEmployer!:string;
  date!:string;
  valider!:boolean;
  rejeter!:boolean;
  idAdmin!:number;
  descriptionDemandeDepense!:string;
  montant!:string;
  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private injected : DemandeDepenseService
  ) {
    this.route.params.subscribe((param:any)=>{
      this.id = param.id;
      console.log(this.id);
      this.getClient(this.id)
    });
   }

  ngOnInit() {   }

  public getClient(id:number) {
    this.injected.getOneDemandeDepenseById(id).subscribe((res:any) =>{
      console.log("SUCCESS",res);
      this.idEmployer = res.idEmployer;
      this.date = res.date;
      this.valider = res.valider;
      this.rejeter = res.rejeter;
      this.idAdmin = res.idAdmin
      this.descriptionDemandeDepense = res.descriptionDemandeDepense;
      this.montant = res.montant;
    },(err:any)=> {
      console.log("Error",err);
    })
  }

  updateDemandeDepense(){
    let data = {
      idEmployer : this.idEmployer,
      date : this.date,
      valider : this.valider,
      rejeter : this.rejeter,
      idAdmin:  this.idAdmin,
      descriptionDemandeDepense: this.descriptionDemandeDepense,
      montant: this.montant,
     }
      this.injected.updateDemandeDepense(this.id, data).subscribe((res:any)=>{
      console.log("SUCCESS",res);
      this.router.navigateByUrl('/demande-depense');

     },(err:any)=> {
      console.log("Error",err);
  })
    }
}
