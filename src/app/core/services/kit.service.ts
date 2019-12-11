import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class KitService {

  constructor(private http : HttpClient) {

  }


  getAllKit() {
    return this.http.get(`${environment.apiurl}/kit`).pipe(map((res:any) => res.result));
  }

  getAllKitPaginate() {
    return this.http.get(`${environment.apiurl}/kit/paginate`).pipe(map((res:any) => res.result));
  }

  filter(obj){
    return this.http.post(`${environment.apiurl}/kit/filter`, obj).pipe(map((res:any) => res.result));
  }

  exportKit(){
    return this.http.get(`${environment.apiurl}/kit/export`);
  }

}
