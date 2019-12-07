import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(public _http: HttpClient) { }
  getTasks(){
    return this._http.get('/api');
  }
  getTask(id){
    return this._http.get(`/api/task/${id}`,id);
  }

}
