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



}
