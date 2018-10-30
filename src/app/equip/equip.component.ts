import { Component, OnInit } from '@angular/core';
import { LanauvaAPIService } from '../lanauva-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-equip',
  templateUrl: './equip.component.html',
  styleUrls: ['./equip.component.scss']
})
export class EquipComponent implements OnInit {

  persones =[
    {
      imgSrc: 'img/person1.png',
      imgAlt: 'nom',
      nom: 'Nom de la persona',
      skills: 'Habilitats personals, coneixements, experiència',
    },
  ]

  xarxes =[
    {
      link:'#xarxa1',
      src:'img/xarxes1.jpg',
      alt:'Instagram',
    },
    {
      link:'#xarxa2',
      src:'img/xarxes2.jpg',
      alt:'facebook',
    },
  ]

  equip$: Observable<any>
  constructor(private api: LanauvaAPIService) {
    this.equip$ = api.getEquip()
  }

  ngOnInit() {
  }

}
