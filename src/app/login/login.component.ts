import { Component, OnInit } from '@angular/core';
import { UsersService } from '../Services/users.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;
result:any;
  constructor(private user:UsersService,private router:Router) { }

  ngOnInit(): void {
  }

  logUser(form:NgForm){
    console.log(form.value);
    this.user.LoginUser(form.value).subscribe((res)=>{
      console.log(res);
      this.result=res;
      console.log(this.result);
      localStorage.setItem('role',this.result.data.role);

      if(localStorage.getItem("Role")==="manager"){
        this.router.navigate(['register']);
      }

    })
  }

}
