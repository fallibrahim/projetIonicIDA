import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IAdmin } from '../models/admin';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-detail-admin',
  templateUrl: './detail-admin.page.html',
  styleUrls: ['./detail-admin.page.scss'],
})
export class DetailAdminPage implements OnInit {
  public admin :any = <IAdmin>{}
  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private injected :  AdminService
  ) { }

  ngOnInit() {

    const id = +this.route.snapshot.paramMap.get('id')!;
   this.injected.getAdmin().subscribe((admins:IAdmin[])=> {
     this.admin = admins.find((admin:IAdmin)=> admin.id === id);
  })

}
public backToListe() : void {
  this.router.navigate(['/admin'])
 }
}
