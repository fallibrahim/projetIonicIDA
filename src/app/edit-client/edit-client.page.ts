import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../services/client.service';


@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.page.html',
  styleUrls: ['./edit-client.page.scss'],
})
export class EditClientPage implements OnInit {
  public id!: number;
  public idEmployer!: string;
  public nomClient!:string;
  public prenomClient!:string;
  public numeroClient!:number;
  public addresseClient!:string;
  public nbreLingeClient!:number;
  public codeFidelite!:number;
  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private injected : ClientService
  ) {
    this.route.params.subscribe((param:any)=>{
      this.id = param.id;
      console.log(this.id);
      this.getClient(this.id)
    });
   }

  ngOnInit() {   }

  public getClient(id:number) {
    this.injected.getOneClientById(id).subscribe((res:any) =>{
      console.log("SUCCESS",res);
      this.idEmployer = res.idEmployer;
      this.nomClient = res.nomClient;
      this.prenomClient = res.prenomClient;
      this.numeroClient = res.numeroClient;
      this.addresseClient = res.addresseClient;
      this.nbreLingeClient = res.nbreLingeClient;
      this.codeFidelite = res.codeFidelite;
    },(err:any)=> {
      console.log("Error",err);
    })
  }

  updateClient(){
    let data = {
      idEmployer : this.idEmployer,
      nomClient : this.nomClient,
      prenomClient : this.prenomClient,
      numeroClient : this.numeroClient,
      addresseClient: this.addresseClient,
      nbreLingeClient: this.nbreLingeClient,
      codeFidelite: this.codeFidelite,
     }
      this.injected.updateClient(this.id, data).subscribe((res:any)=>{
      console.log("SUCCESS",res);
      this.router.navigateByUrl('/client');

     },(err:any)=> {
      console.log("Error",err);
  })
    }
}
