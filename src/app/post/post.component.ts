import { Component, OnInit } from '@angular/core';
import { LanauvaAPIService } from '../lanauva-api.service';
import { Observable } from 'rxjs';
//import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {


  posts$: Observable<any>

  constructor(private api: LanauvaAPIService) {

    this.posts$ = api.getPosts()

  }


  ngOnInit() {
  }

}
