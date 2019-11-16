import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SchoolapiService {

  serviceURL: string='https://localhost:44343/api/';
  constructor(private http: HttpClient) { }

  getSchoolList(){
    console.log("thh",this.serviceURL);
    return this.http.get(this.serviceURL+'Schoolapi/')
  }
  AddSchoolList(school: any){
    return this.http.post(this.serviceURL+'Schoolapi/',school)
  }
}
