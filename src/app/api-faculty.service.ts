import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiFacultyService {

  apiurl="https://65ded811ff5e305f32a09ee0.mockapi.io/Faculties";
  constructor(private __http:HttpClient) { }
  get_all()
  {
    return this.__http.get(this.apiurl);
  }
  getby_id(id:any)
  {
    return this.__http.get(this.apiurl + "/" + id);
  }
  Delete(id:any){
    return this.__http.delete(this.apiurl + "/" + id);
  }
}
