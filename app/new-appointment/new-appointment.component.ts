import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from '../appointment.service';
import { FormControl,FormGroup,FormsModule,ReactiveFormsModule  } from '@angular/forms';

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrls: ['./new-appointment.component.css']
})
export class NewAppointmentComponent implements OnInit {
  getnames : any;

  reason = new FormGroup({
    rsn: new FormControl(null),
  })

  constructor(
    private callappoint: AppointmentService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.callappoint.infoGet().subscribe((result:any)=>{
      this.getnames = result;
      console.log(result);
    })
   
  }
  reasonFunc(){
    this.callappoint.saveLogin(this.reason.value)
    .subscribe((result:any)=>{
      console.log(result);
      if(result==1){
        this.route.navigate(['/preview'])
      }
    })
  }

}
