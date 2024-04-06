import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacultyComponent } from './faculty/faculty.component';
import { AddEditFacultyComponent } from './add-edit-faculty/add-edit-faculty.component';
import { FacultyDetailComponent } from './faculty-detail/faculty-detail.component';

const routes: Routes = [
  {path:"",component:FacultyComponent},
  {path:"add",component:AddEditFacultyComponent},
  {path:"faculty/:id",component:FacultyDetailComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
