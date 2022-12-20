import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IFacture } from '../models/facture';
import { FactureService } from '../services/facture.service';

@Component({
  selector: 'app-detail-facture',
  templateUrl: './detail-facture.page.html',
  styleUrls: ['./detail-facture.page.scss'],
})
export class  DetailFacturePage implements OnInit {
  public factures :any = <IFacture>{}
  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private injected : FactureService
  ) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
   this.injected.getFacture().subscribe((factures:IFacture[])=> {
     this.factures = factures.find((facture:IFacture)=> facture.id === id);
  })

}
public backToListe() : void {
  this.router.navigate(['/facture'])
 }
}




