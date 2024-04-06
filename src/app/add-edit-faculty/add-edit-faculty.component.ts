import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-edit-faculty',
  templateUrl: './add-edit-faculty.component.html',
  styleUrl: './add-edit-faculty.component.css'
})
export class AddEditFacultyComponent {
    myForm =  new FormGroup({
      id:new FormControl(''),
      FacultyName:new FormControl(''),
      FacultyImage:new FormControl(''),
      FacultyDesignation:new FormControl(''),
      FacultyEducationQualification:new FormControl(''),
      FacultyExperience:new FormControl(''),
      FacultyWorkingSince:new FormControl(''),

    })
}
