import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.page.html',
  styleUrls: ['./add-client.page.scss'],
})
export class AddClientPage implements OnInit {
  public id!: number;
  public idEmployer!: string;
  public nomClient!:string;
  public prenomClient!:string;
  public numeroClient!:number;
  public addresseClient!:string;
  public nbreLingeClient!:number;
  public codeFidelite!:number;
  constructor(private injected : ClientService,
    private router : Router) { }

  ngOnInit() {
  }
  public createClient() {
    let data = {
       id : this.id,
       idEmployer : this.idEmployer,
       nomClient : this.nomClient,
       prenomClient : this.prenomClient,
       numeroClient: this.numeroClient,
       addresseClient: this.addresseClient,
       nbreLingeClient : this.nbreLingeClient,
       codeFidelite:this.codeFidelite
    }

    this.injected.createClient(data).subscribe((res:any) => {
      console.log("SUCCESS===",res);
      this.nomClient = '';
      this.prenomClient = '';
      this.numeroClient = 0;
      this.addresseClient = '';
      this.nbreLingeClient = 0;
      this.codeFidelite = 0;

    },(error:any)=>{
      alert("error");
      console.log("error===",error);
    })
    this.router.navigate(['/client']);
}

}