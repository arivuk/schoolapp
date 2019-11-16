import { Component, OnInit } from '@angular/core';
import { SchoolapiService } from '../schoolapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {
  SchoolList: any = [];
  constructor(private schoolservice: SchoolapiService, private router: Router) { }

  ngOnInit() {
    this.schoolservice.getSchoolList().subscribe((data) => {
      this.SchoolList = data;
    })
  }

  CreateSchool() {
    this.router.navigate(['/NewSchool']);
  }

}
