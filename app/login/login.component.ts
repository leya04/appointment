import { Component, OnInit } from '@angular/core';

import { FormControl,FormGroup,FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { AppointmentService } from '../appointment.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  appointmentLogin = new FormGroup({
    email: new FormControl(null),
    pass: new FormControl(null)
  })

  divshow = false;

  constructor(
    private post: AppointmentService,
    private route: Router
  ) {}


  ngOnInit(): void {
  }
 
  loginFunc(){
    //console.log(this.appointmentLogin.value);
    this.post.saveLogin(this.appointmentLogin.value)
    .subscribe((result:any)=>{
      console.log(result);
      if(result==1){
        this.route.navigate(['/main'])
      }else{
        this.divshow = true;
      }
    })
  }

}
