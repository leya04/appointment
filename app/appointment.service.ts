import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  url='http://localhost/appointment/';

  constructor(private http: HttpClient) { }
 
  //login
  saveSignup(signup:any){
    return this.http.post(this.url + 'signup.php',JSON.stringify(signup))
  }
  //signup
  saveLogin(login:any){
    return this.http.post(this.url + 'login.php',JSON.stringify(login))
  }
  
  //display your name ni home
  nameGet() {
    return this.http.get(this.url + 'getName.php');
  }
  
  //display your name ni home
  infoGet() {
    return this.http.get(this.url + 'getInfo.php');
  }

  //reson
  saveReason(reasonsave:any){
    return this.http.post(this.url + 'reason.php',JSON.stringify(reasonsave));
  }
}
