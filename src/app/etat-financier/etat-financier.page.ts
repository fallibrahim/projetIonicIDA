import { Component, OnInit } from '@angular/core';
import { IEtatFinancier } from '../models/etatFinancier';
import { EtatFinancierService } from '../services/etat-financier.service';

@Component({
  selector: 'app-etat-financier',
  templateUrl: './etat-financier.page.html',
  styleUrls: ['./etat-financier.page.scss'],
})
export class EtatFinancierPage implements OnInit {
  public etatFinanciers : IEtatFinancier[] = [];
  public errorMessage!:string;
  constructor(private injected :  EtatFinancierService) { }

  ngOnInit() {
    this.injected.getEtatFinancier().subscribe({
      next : etatFinanciers => this.etatFinanciers = etatFinanciers,
      error : err  => this.errorMessage = err
    });
     
  }

}
