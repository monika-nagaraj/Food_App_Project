import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../Services/users.service';
import { Console } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
result:any;
manager:any;
staff:any;
admin:any;

  constructor(private user:UsersService,private router:Router) { }

  ngOnInit(): void {
  }

  regUser(form:NgForm){
    console.log(form.value);

    this.user.addUser(form.value).subscribe((res)=>{
      console.log(res)
      this.result=res;
      console.log(this.result);
      this.router.navigate(["/login"]);
      alert("Registration Successful!!")
     
    })

    
  }

}
