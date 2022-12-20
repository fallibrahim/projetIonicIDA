import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemandeDepenseService } from '../services/demande-depense.service';

@Component({
  selector: 'app-add-demande-depense',
  templateUrl: './add-demande-depense.page.html',
  styleUrls: ['./add-demande-depense.page.scss'],
})
export class AddDemandeDepensePage implements OnInit {
    id!:number;
    idEmployer!:string;
    date!:string;
    valider!:boolean;
    rejeter!:boolean;
    idAdmin!:number;
    descriptionDemandeDepense!:string;
    montant!:string;
  constructor(private injected : DemandeDepenseService,
    private router : Router) { }

  ngOnInit() {
  }
  public createDemandeDepense() {
    let data = {
       id : this.id,
       idEmployer : this.idEmployer,
       date: this.date,
       valider : this.valider,
       rejeter: this.rejeter,
       idAdmin: this.idAdmin,
       descriptionDemandeDepense : this.descriptionDemandeDepense,
       montant:this.montant
    }

    this.injected.createDemandeDepense(data).subscribe((res:any) => {
      console.log("SUCCESS===",res);
      this.idEmployer = '';
      this.date = '';
      this.valider= false;
      this.rejeter = false;
      this.idAdmin = 0;
      this.descriptionDemandeDepense = '';
     this.montant = '';
    },(error:any)=>{
      alert("error");
      console.log("error===",error);
    })
    this.router.navigate(['/demande-depense']);
}

}