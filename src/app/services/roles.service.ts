import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RolesService {
  public url="http://localhost/api/views/";
  constructor(private http:HttpClient) { }

   getRoles()
  {
    return this.http.get(this.url+'roles/getRoles.php');
  }


}


