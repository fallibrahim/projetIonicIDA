import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepenseService } from '../services/depense.service';

@Component({
  selector: 'app-add-depense',
  templateUrl: './add-depense.page.html',
 styleUrls: ['./add-depense.page.scss'],
})
export class AddDepensePage implements OnInit {
    id!:number;
    idDepense!:string;
  constructor(private injected : DepenseService,
    private router : Router) { }

  ngOnInit() {
  }
  public createDepense() {
    let data = {
       id : this.id,
       idDepense : this.idDepense
    }

    this.injected.createDepense(data).subscribe((res:any) => {
      console.log("SUCCESS===",res);
      this.idDepense = '';
    },(error:any)=>{
      alert("error");
      console.log("error===",error);
    })
    this.router.navigate(['/depense']);
}

}