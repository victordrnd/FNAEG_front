import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class InventaireService {

  constructor(private http : HttpClient) { }

  getAllInventaire(page = 1){
    return this.http.get(`${environment.apiurl}/inventory/paginate?page=${page}`).pipe(map((res : any) => res.result));
  }

  filter(obj){
    return this.http.post(`${environment.apiurl}/inventory/filter`,obj).pipe(map((res:any) => res.result));
  }
}
