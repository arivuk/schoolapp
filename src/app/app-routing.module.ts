import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchoolComponent } from './school/school.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NewSchoolComponent } from './new-school/new-school.component';


const routes: Routes = [
  { path: '', redirectTo:'/School', pathMatch: 'full' },
  {path:'School', component: SchoolComponent},
  {path:'NewSchool', component: NewSchoolComponent},
  {path:'Aboutus', component: AboutusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
