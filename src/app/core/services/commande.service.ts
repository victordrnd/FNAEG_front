import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http : HttpClient) { }

  getAll(){
    return this.http.get(`${environment.apiurl}/order/paginate`).pipe(map((res:any) => res.result));
  }

  update(commande){
    return this.http.post(`${environment.apiurl}/order/update`,commande).pipe(map((res:any) => res.result));
  }

  create(commande){
    return this.http.post(`${environment.apiurl}/order/create`, commande).pipe(map((res :any) => res.result));
  }


  stats(){
    return this.http.get(`${environment.apiurl}/order/stats`).pipe(map((res:any) => res.result));
  }

  amount(){
    return this.http.get(`${environment.apiurl}/order/amount`).pipe(map((res:any) => res.result));
  }

}
