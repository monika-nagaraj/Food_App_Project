import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient,private router:Router) { }

  //User Registration
addUser(user:any){
  return this.http.post("https://localhost:8080/user",user);
  }

  //User login
LoginUser(user:any){
  return this.http.post("https://products-jwt.onrender.com/users/login",user);
  }

  //adding staff
  addStaff(user:any){
    
  }

 

  

}
