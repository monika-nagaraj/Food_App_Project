import { Component, OnInit } from '@angular/core';
import { UsersService } from '../Services/users.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent implements OnInit {

  constructor(private user:UsersService) { }

  ngOnInit(): void {
  }

addStaff(form:NgForm){
  console.log(form.value)
}


}
