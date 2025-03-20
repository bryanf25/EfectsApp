import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private baseUrl: string = 'https://reqres.in/api'

  constructor(private http:HttpClient) { }

  getUserById(id : string){
    return this.http.get(`${this.baseUrl}/users/${id}?delay=3`)
  }
  
  
  getUsers(){
    return this.http.get(`${this.baseUrl}/users?page=1&per_page=6&delay=5`)
    .pipe(
      map( (response:any) => {
        return response.data
      })
    );
  }

}
