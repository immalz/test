import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/interfaces/task';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  taskList: Task[] = [];
  descriptionTask: string = '';
  durationInSeconds = 5;
  constructor(
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.setFirtsTask();
  }

  setFirtsTask(): void {
    this.taskList.push({description:'Tarea de Prueba', checked: false})
  }

  addTask(): void {

    if(this.descriptionTask.length >= 1) {
      this.taskList.push({
        description: this.descriptionTask,
        checked: false
      });
      this.descriptionTask = '';
    } else {
      this.openSnackBar('La tarea no puede estar vacia!');
    }
  }

  delete(index: number): void {
    this.taskList.splice(index, 1);
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'Cerrar', {
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
    });
  }

}
