import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks = [];
  task = [];
  constructor(private _taskService: TaskService){}
  ngOnInit(){
    // this.getTasksFromService();
  }
  getTasksFromService(){
    let observable = this._taskService.getTasks();
    observable.subscribe(results => {
      console.log("yay",results)
      this.tasks = results['results']
      this._taskService.getTasks()
    })
  }
  TaskFromService(id){
    let observable = this._taskService.getTask(id);
    observable.subscribe(results => {
      console.log("yay",results)
      this.task = results['results']
      this._taskService.getTask(id)
    })
  }
}
