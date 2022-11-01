import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppointmentService } from '../appointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent implements OnInit {

  appointmentSignup = new FormGroup({
    fname: new FormControl(null),
    lname: new  FormControl(null),
    mname: new FormControl(null),
    bdate: new FormControl(null),
    age: new FormControl(null),
    email: new FormControl(null),
    pass:new FormControl(null)
  })
  
  constructor(
      private post: AppointmentService,
      private route: Router
    ) { }

  ngOnInit(): void {
  }

  saveSign(){
    //console.log(this.appointmentSignup.value);
    this.post.saveSignup(this.appointmentSignup.value)
    .subscribe((result:any)=>{
      console.log(result);
      if(result==1){
        this.route.navigate(['/login'])
      }
    })
  }

}
