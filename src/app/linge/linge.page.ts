import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IDetailLinge } from '../models/lingeDetail';
import { LingeService } from '../services/linge.service';

@Component({
  selector: 'app-linge',
  templateUrl: './linge.page.html',
  styleUrls: ['./linge.page.scss'],
})
export class LingePage implements OnInit {
  public linge :any  = <IDetailLinge>{}
    constructor(private route : ActivatedRoute,
                private router : Router,
                private injected : LingeService
    ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.injected.getLingeDetails().subscribe((linges:IDetailLinge[]) => {
      this.linge = linges.find((linge:IDetailLinge) => linge.id === id);
  })
}
public backToListe() : void {
  this.router.navigate(['/home'])
 }
}
