import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEmployer } from '../models/employer';
import { EmployerService } from '../services/employer.service';

@Component({
  selector: 'app-detail-employer',
  templateUrl: './detail-employer.page.html',
  styleUrls: ['./detail-employer.page.scss'],
})
export class DetailEmployerPage implements OnInit {
  public employer :any = <IEmployer>{}
  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private injected :  EmployerService
  ) { }

  ngOnInit() {

    const id = +this.route.snapshot.paramMap.get('id')!;
   this.injected.getEmployer().subscribe((employers:IEmployer[])=> {
     this.employer = employers.find((employer:IEmployer)=> employer.id === id);
  })

}
public backToListe() : void {
  this.router.navigate(['/employer'])
 }
}
