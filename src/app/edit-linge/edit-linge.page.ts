import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LingeService } from '../services/linge.service';

@Component({
  selector: 'app-edit-linge',
  templateUrl: './edit-linge.page.html',
  styleUrls: ['./edit-linge.page.scss'],
})
export class EditLingePage implements OnInit {
  public id !: number;
  public nom !: string;
  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private injected : LingeService
  ) {
    this.route.params.subscribe((param:any)=>{
      this.id = param.id;
      console.log(this.id);
      this.getLinge(this.id);
    })

   }

  ngOnInit () { }

  public getLinge(id:number) {
    this.injected.getOneLingeById(id).subscribe((res:any) =>{
      console.log("SUCCESS",res);
      this.nom = res.nom;
    },(err:any)=> {
      console.log("Error",err);
    })
  }
   
  updateLinge(){
    let data = {
      id : this.id,
      nom : this.nom
     }
      this.injected.updateLinge(this.id, data).subscribe((res:any)=>{
      console.log("SUCCESS",res);
      this.router.navigateByUrl('/home');

     },(err:any)=> {
      console.log("Error",err);
  })
    }

}
