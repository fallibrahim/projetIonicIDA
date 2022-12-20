import { Component, OnInit } from '@angular/core';
import { IinfosKilo } from '../models/model1';
import { InfoKiloServiceService } from '../services/info-kilo-service.service';
@Component({
  selector: 'app-infokilo',
  templateUrl: './infokilo.page.html',
  styleUrls: ['./infokilo.page.scss'],
})
export class InfokiloPage implements OnInit {
  public infoKilos : IinfosKilo[] = [];
  public errorMessage : string | undefined;
  constructor(
    private infokiloServiceService : InfoKiloServiceService
  ) { }

  ngOnInit() {
    this.infokiloServiceService.getInfoKilo().subscribe({
      next : infoKilos => this.infoKilos = infoKilos,
      error : err => this.errorMessage = err
    });
  }

  public deleteInfoKilo(id:any) {
    this.infokiloServiceService.deleteInfoKilo(id).subscribe((res:any) =>{
     console.log('SUCCESS',res);
     this.infokiloServiceService.getInfoKilo().subscribe({
       next : infoKilos => this.infoKilos = infoKilos,
       error : err => this.errorMessage = err
     });
    },(err:any)=>{
     console.log("ERROR",err);
    })
   }

}
