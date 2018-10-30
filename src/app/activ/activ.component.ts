import { Component, OnInit } from '@angular/core';
import { LanauvaAPIService } from '../lanauva-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-activ',
  templateUrl: './activ.component.html',
  styleUrls: ['./activ.component.scss']
})
export class ActivComponent implements OnInit {

  titol = 'titol de l\'activitat'
  imgSrc = 'img/blog1.jpg'
  imgAlt = 'text alternatiu imatge'

  etiquetes = [
    {
      etq :'etiqueta 1'
    },
    {
      etq :'etiqueta 2'
    },
  ]
  data = '2018-10-05T10:41'
  dataText = "5 d'Octubre de 2018"
  textInici = 'Primera part del text de l\'activitat'
  textCos = 'Continuació del cos de la descripció de l\'activitat'

  activ$:  Observable<any>
  constructor(private api: LanauvaAPIService) {
    this.activ$ = api.getActivitats()
   }

  ngOnInit() {
  }

}
