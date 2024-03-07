import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../Services/users.service';

@Component({
  selector: 'app-take-order',
  templateUrl: './take-order.component.html',
  styleUrls: ['./take-order.component.css']
})
export class TakeOrderComponent implements OnInit {

  constructor(private user:UsersService) { }

  ngOnInit(): void {
  }

  takeOrder(form:NgForm){
    console.log(form.value)
  }

}
