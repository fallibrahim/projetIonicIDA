import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LingeService } from '../services/linge.service';

@Component({
  selector: 'app-ajout-linge',
  templateUrl: './ajout-linge.page.html',
  styleUrls: ['./ajout-linge.page.scss'],
})
export class AjoutLingePage implements OnInit {
 public id!: number;
 public nom!: string;
  constructor(private injected : LingeService,
    private router : Router) { }

  ngOnInit() {
  }
  public createLinge() {
    let data = {
       id : this.id,
       nom : this.nom
    }
    this.injected.createLinge(data).subscribe((res:any) => {
      console.log("SUCCESS===",res);
      this.nom = '';
    },(error:any)=>{
      alert("error");
      console.log("error===",error);
    })
    this.router.navigate(['/home']);
  }
}
