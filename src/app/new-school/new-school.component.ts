import { Component, OnInit } from '@angular/core';
import { SchoolapiService } from '../schoolapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-school',
  templateUrl: './new-school.component.html',
  styleUrls: ['./new-school.component.css']
})
export class NewSchoolComponent implements OnInit {

  constructor(private schoolservice: SchoolapiService,private router: Router) { }

  ngOnInit() {
  }
  SchoolSave(name:string, address:string, board:string, mobile: string){
    this.schoolservice.AddSchoolList({Name: name, Address: address, BoardName: board,MobileNumber:mobile,Logo:''})
      .subscribe(data=>{
        console.log(data);
        this.router.navigate(['/School'])
      })
  }
}
