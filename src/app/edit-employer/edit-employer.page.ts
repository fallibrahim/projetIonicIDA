import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployerService } from '../services/employer.service';

@Component({
  selector: 'app-edit-employer',
  templateUrl: './edit-employer.page.html',
  styleUrls: ['./edit-employer.page.scss'],
})
export class EditEmployerPage implements OnInit {
  public id!: number;
  public nom!: string;
  public prenom!:string;
  public numero!:number;
  public addresse!:string;
  public salaire!:number;
  public email!:string;
  public mdp!:string;
  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private injected : EmployerService
  ) {
    this.route.params.subscribe((param:any)=>{
      this.id = param.id;
      console.log(this.id);
      this.getEmployer(this.id)
    });
   }

  ngOnInit() {   }

  public getEmployer(id:number) {
    this.injected.getOneEmployerById(id).subscribe((res:any) =>{
      console.log("SUCCESS",res);
      this.nom = res.nom;
      this.prenom = res.prenom;
      this.numero = res.numero;
      this.addresse = res.addresse;
      this.salaire = res.salaire;
      this.email = res.email;
      this.mdp = res.mdp;
    },(err:any)=> {
      console.log("Error",err);
    })
  }

  updateEmployer(){
    let data = {
      id : this.id,
      nom : this.nom,
      prenom : this.prenom,
      numero : this.numero,
      addresse: this.addresse,
      salaire : this.salaire,
      email : this.email,
      mdp : this.mdp
     }
      this.injected.updateEmployer(this.id, data).subscribe((res:any)=>{
      console.log("SUCCESS",res);
      this.router.navigateByUrl('/employer');

     },(err:any)=> {
      console.log("Error",err);
  })
    }
}
