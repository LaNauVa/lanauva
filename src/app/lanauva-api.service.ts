import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class LanauvaAPIService {

  baseurl = 'https://www.lanauva.com/api/public/_/items/'

  constructor(private http: HttpClient) {

  }

  apiCall(path: string) {
    return this.http.get( this.baseurl + path ).pipe(
      retry(3),
      map( response => {
        return response['data']
      })
    )
  }

  getPosts(): Observable<any>{
    return this.apiCall('post?fields=*.*, etiquetes.id_etiqueta.*')
  }


  getActivitats(): Observable<any>{
    return this.apiCall('activitats?fields=*.*, etiquetes.id_etiqueta.*')
  }

  getEquip(): Observable<any>{
    return this.apiCall('persones?fields=*.*')
  }

  getGallery(): Observable<any>{
    return this.apiCall('galeria?fields=*.*')
  }

  getEmpresa(): Observable<any>{
    return this.apiCall('empreses?fields=*.*, xxss.*')
  }
}
