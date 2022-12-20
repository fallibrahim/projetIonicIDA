import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IClient } from '../models/client';

import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.page.html',
  styleUrls: ['./client.page.scss'],
})
export class ClientPage implements OnInit {
  public clients : IClient[] = [];
  public errorMessage!:string;
  constructor(private injected :  ClientService,
              private router : Router) { }

  ngOnInit() {
    this.injected.getClient().subscribe({
      next : clients => this.clients = clients,
      error : err  => this.errorMessage = err
    });
     
  }

  public AjoutClient() {
    this.router.navigate(['/add-client']);
  }
  public deleteClient(id:any) {
    this.injected.deleteClient(id).subscribe((res:any) =>{
     console.log('SUCCESS',res);
     this.injected.getClient().subscribe({
       next : clients => this.clients = clients,
       error : err => this.errorMessage = err
     });
    },(err:any)=>{
     console.log("ERROR",err);
    })
   }
}
