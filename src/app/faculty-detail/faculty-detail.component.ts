import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiFacultyService } from '../api-faculty.service';
import { Faculty } from '../faculty';

@Component({
  selector: 'app-faculty-detail',
  templateUrl: './faculty-detail.component.html',
  styleUrl: './faculty-detail.component.css'
})
export class FacultyDetailComponent {
  id = 0;
  data:Faculty = new Faculty();
  constructor(private __actRoute: ActivatedRoute,private api:ApiFacultyService, private router : Router) {

  }
  ngOnInit() {
    this.id = this.__actRoute.snapshot.params['id'];
    this.api.getby_id(this.id).subscribe((res:any)=>{
        this.data=res;
    })
  }

  Delete() {
    this.api.Delete(this.id).subscribe((res:any)=>{
      this.router.navigate(['/']);
    });
  }

}
