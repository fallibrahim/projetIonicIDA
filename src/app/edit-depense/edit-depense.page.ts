import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepenseService } from '../services/depense.service';



@Component({
  selector: 'app-edit-depense',
  templateUrl: './edit-depense.page.html',
  styleUrls: ['./edit-depense.page.scss'],
})
export class EditDepensePage implements OnInit {
    id!:number;
    idDepense!:string;
  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private injected : DepenseService
  ) {
    this.route.params.subscribe((param:any)=>{
      this.id = param.id;
      console.log(this.id);
      this.getDepense(this.id)
    });
   }

  ngOnInit() {   }

  public getDepense(id:number) {
    this.injected.getOneDepenseById(id).subscribe((res:any) =>{
      console.log("SUCCESS",res);
      this.idDepense = res.idDepense;
    },(err:any)=> {
      console.log("Error",err);
    })
  }

  updateDepense(){
    let data = {
      idDepense : this.idDepense,
     }
      this.injected.updateDepense(this.id, data).subscribe((res:any)=>{
      console.log("SUCCESS",res);
      this.router.navigateByUrl('/depense');

     },(err:any)=> {
      console.log("Error",err);
  })
    }
}


