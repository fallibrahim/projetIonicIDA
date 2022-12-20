import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InfoKiloServiceService } from '../services/info-kilo-service.service';
@Component({
  selector: 'app-edit-info-kilo',
  templateUrl: './edit-info-kilo.page.html',
  styleUrls: ['./edit-info-kilo.page.scss'],
})
export class EditInfoKiloPage implements OnInit {
 public prixKilo !:number;
 public prixRepassage !:number;
  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private infokiloServiceService : InfoKiloServiceService
  ) { 
    this.route.params.subscribe((param:any)=>{
      this.prixKilo = param.prixKilo;
      console.log(this.prixKilo);
      this.getInfoKilo(this.prixKilo)
    });
  }

  ngOnInit() {
  }
  public getInfoKilo(id:number) {
    this.infokiloServiceService.getOneInfoKiloById(id).subscribe((res:any) =>{
      console.log("SUCCESS",res);
      this.prixKilo = res.prixKilo;
      this.prixRepassage = res.prixRepassage;
    },(err:any)=> {
      console.log("Error",err);
    })
  }

  updateInfoKilo(){
    let data = {
      prixKilo : this.prixKilo,
      prixRepassage : this.prixRepassage
     }
      this.infokiloServiceService.updateInfoKilo(this.prixKilo, data).subscribe((res:any)=>{
      console.log("SUCCESS",res);
      this.router.navigateByUrl('/admin');

     },(err:any)=> {
      console.log("Error",err);
  })
    }
}
