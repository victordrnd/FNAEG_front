import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get(`${environment.apiurl}/users`).pipe(map((res: any) => res.result));
  }


  updateUser(user){
    return this.http.post(`${environment.apiurl}/users/update`, user).pipe(map((res:any) => res.result));
  }


  createUser(user){
    return this.http.post(`${environment.apiurl}/users/create`, user).pipe(map((res:any) => res.result));
  }

  delete(user){
    return this.http.post(`${environment.apiurl}/users/delete/${user.id}`, {}).pipe(map((res:any)=> res.result));
  }

  filter(filter){
    return this.http.post(`${environment.apiurl}/users/filter`, filter).pipe(map((res:any)=>res.result));
  }

}
