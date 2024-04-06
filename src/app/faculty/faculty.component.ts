import { Component } from '@angular/core';
import { ApiFacultyService } from '../api-faculty.service';
import { Faculty } from '../faculty';


@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrl: './faculty.component.css'
})
export class FacultyComponent {
  data: Faculty[] = [];

  constructor(private __apifaculty: ApiFacultyService) { }

  ngOnInit() {
    this.__apifaculty.get_all().subscribe((res: any) => {
      this.data = res;
    })
  }
}
