import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  constructor(private http:HttpClient) { }

  getIndex(){
    return this.http.get("http://localhost:9000/index",{responseType: 'text'})
  }
}
