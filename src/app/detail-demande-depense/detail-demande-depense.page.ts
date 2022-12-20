import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IDemandeD } from '../models/demandeDepense';
import { DemandeDepenseService } from '../services/demande-depense.service';


@Component({
  selector: 'app-detail-demande-depense',
  templateUrl: './detail-demande-depense.page.html',
  styleUrls: ['./detail-demande-depense.page.scss'],
})
export class DetailDemandeDepensePage implements OnInit {
  public demandeDepense :any = <IDemandeD>{}
  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private injected : DemandeDepenseService
  ) { }

  ngOnInit() {

    const id = +this.route.snapshot.paramMap.get('id')!;
   this.injected.getDemandeDepense().subscribe((demandeDepenses:IDemandeD[])=> {
     this.demandeDepense = demandeDepenses.find((demandeDepense:IDemandeD)=> demandeDepense.id === id);
  })

}
public backToListe() : void {
  this.router.navigate(['/demande-depense'])
 }
}

