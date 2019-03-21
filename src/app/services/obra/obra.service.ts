import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ObraService {

  constructor(private http:HttpClient) { }

  getAll():Observable<any>{
    return this.http.get('//localhost:4010/obra/get-all-obras');

  }

  

}
