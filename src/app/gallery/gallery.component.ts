import { Component, OnInit } from '@angular/core';
import { LanauvaAPIService } from '../lanauva-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  titol = 'Títol de la galeria'
  imatges=[
    {
      src:'img/asscreed.jpg',
      alt: 'Assasins Creed',
      caption: 'Assasins creed'
    },
    {
      src:'img/batman.jpg',
      alt: 'Batman',
      caption: 'Batman'
    },
  ]

  gallery$: Observable<any>
  constructor(private api: LanauvaAPIService) {
    this.gallery$ = api.getGallery()
  }

  ngOnInit() {
  }

}
