import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployerService } from '../services/employer.service';

@Component({
  selector: 'app-add-employer',
  templateUrl: './add-employer.page.html',
  styleUrls: ['./add-employer.page.scss'],
})
export class AddEmployerPage implements OnInit {
  public id!: number;
  public nom!: string;
  public prenom!:string;
  public numero!:number;
  public addresse!:string;
  public salaire!:number;
  public email!:string;
  public mdp!:string;
  constructor(private injected : EmployerService,
    private router : Router) { }

  ngOnInit() {
  }
  public createEmployer() {
    let data = {
       id : this.id,
       nom : this.nom,
       prenom : this.prenom,
       numero: this.numero,
       addresse: this.addresse,
      salaire: this.salaire,
       email : this.email,
       mdp : this.mdp
    }

    this.injected.createEmployer(data).subscribe((res:any) => {
      console.log("SUCCESS===",res);
      this.nom = '';
      this.prenom = '';
      this.numero = 0;
      this.addresse = '';
      this.salaire = 0;
      this.email = '';
      this.mdp = '';

    },(error:any)=>{
      alert("error");
      console.log("error===",error);
    })
    this.router.navigate(['/employer']);
}

}