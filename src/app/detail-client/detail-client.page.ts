import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IClient } from '../models/client';
import { ClientService } from '../services/client.service';


@Component({
  selector: 'app-detail-client',
  templateUrl: './detail-client.page.html',
  styleUrls: ['./detail-client.page.scss'],
})
export class DetailClientPage implements OnInit {
  public client :any = <IClient>{}
  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private injected :  ClientService
  ) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.injected.getClient().subscribe((clients:IClient[])=> {
    this.client = clients.find((client:IClient)=> client.id === id);
  })

}
   public backToListe() : void {
    this.router.navigate(['/client'])
   }
}
