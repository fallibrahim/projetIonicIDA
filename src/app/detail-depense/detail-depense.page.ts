import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IDepense } from '../models/depense';
import { DepenseService } from '../services/depense.service';


@Component({
  selector: 'app-detail-depense',
  templateUrl: './detail-depense.page.html',
  styleUrls: ['./detail-depense.page.scss'],
})
export class DetailDepensePage implements OnInit {
  public depenses :any = <IDepense>{}
  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private injected : DepenseService
  ) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
   this.injected.getDepense().subscribe((depenses:IDepense[])=> {
     this.depenses = depenses.find((depense:IDepense)=> depense.id === id);
  })

}
public backToListe() : void {
  this.router.navigate(['/depense'])
 }
}

