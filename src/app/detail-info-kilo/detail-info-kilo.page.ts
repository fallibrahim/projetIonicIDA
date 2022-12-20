import { Component, OnInit } from '@angular/core';
import { InfoKiloServiceService } from '../services/info-kilo-service.service';
import { ActivatedRoute,Router } from '@angular/router';
import { IinfosKilo } from '../models/model1';
@Component({
  selector: 'app-detail-info-kilo',
  templateUrl: './detail-info-kilo.page.html',
  styleUrls: ['./detail-info-kilo.page.scss'],
})
export class DetailInfoKiloPage implements OnInit {
 public infokilo:any =  <IinfosKilo>{}
  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private infoKiloServiceService : InfoKiloServiceService
  ) { }

  ngOnInit() {
    const prixKilo = Number(this.route.snapshot.paramMap.get('prixKilo'));
    this.infoKiloServiceService.getInfoKilo().subscribe((infokilos:IinfosKilo[])=>
    {
      this.infokilo = infokilos.find((infokilo:IinfosKilo) => infokilo.prixKilo === prixKilo)
    });
  }
  public backToListe() {
    this.router.navigate(['/admin']);
  }
}
