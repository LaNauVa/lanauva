import { Component, OnInit } from '@angular/core'
import { LanauvaAPIService } from '../lanauva-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-infoe',
  templateUrl: './infoe.component.html',
  styleUrls: ['./infoe.component.scss']
})
export class InfoeComponent implements OnInit {

  xarxes = [
    {
      link: '#xarxa',
      img: 'img/xarxes1.jpg',
      alt: 'text alternatiu xarxa social'
    },
    {
      link: '#xarxa2',
      img: 'img/xarxes2.jpg',
      alt: 'text alternatiu xarxa social 2'
    },
  ]

  infoEmpresa$: Observable<any>

  constructor(private api: LanauvaAPIService) {

    this.infoEmpresa$ = api.getEmpresa()

  }


  ngOnInit() {}
}
