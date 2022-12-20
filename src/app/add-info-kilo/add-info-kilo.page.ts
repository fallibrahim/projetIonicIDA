import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoKiloServiceService } from '../services/info-kilo-service.service';
@Component({
  selector: 'app-add-info-kilo',
  templateUrl: './add-info-kilo.page.html',
  styleUrls: ['./add-info-kilo.page.scss'],
})
export class AddInfoKiloPage implements OnInit {
  public prixKilo !: number;
  public prixRepassage !: number;
  constructor(
  private router : Router,
  private infoKiloServiceService : InfoKiloServiceService
  ) { }

  ngOnInit() {

  }
  public createInfoKilo() {
    let data = {
      prixKilo : this.prixKilo,
      prixRepassage : this.prixRepassage
    }

    this.infoKiloServiceService.createInfoKilo(data).subscribe((res:any) => {
      console.log("SUCCESS===",res);
      this.prixKilo = 0;
      this.prixRepassage = 0;
    },(error:any)=>{
      alert("error");
      console.log("error===",error);
    })
    this.router.navigate(['/admin']);
  }
}
