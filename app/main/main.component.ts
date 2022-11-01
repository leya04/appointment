import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  
})
export class MainComponent implements OnInit {
  
  getnames : any;
  constructor(
    private callappoint: AppointmentService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.callappoint.nameGet().subscribe((result:any)=>{
      this.getnames = result;
      console.log(result);
    })
  }

}
