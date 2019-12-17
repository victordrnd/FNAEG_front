import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FabricantService {

  constructor(private http : HttpClient) { }

  getAllFabricant() {
    return this.http.get(`${environment.apiurl}/fabricant`).pipe(map((res:any) => res.result));
  }

  getAllFabricantPaginate() {
    return this.http.get(`${environment.apiurl}/fabricant/paginate`).pipe(map((res:any) => res.result));
  }

  getMinimized(){
    return this.http.get(`${environment.apiurl}/fabricant/minimized`).pipe(map((res :any) => res.result));
  }

  filter(filter){
    return this.http.post(`${environment.apiurl}/fabricant/filter`, filter).pipe(map((res:any) => res.result));
  }
}
