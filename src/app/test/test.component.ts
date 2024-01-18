import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  template: `  
  <h2 *ngIf="displayName; else elseBlock">Codevolution</h2>
  <ng-template #elseBlock><h2>Name is hidden</h2></ng-template>


  <div *ngIf="displayName; then thenBlock; else elseBlock"></div>
               <ng-template #thenBlock><h2>Angular</h2></ng-template>
               <ng-template #elseBlock><h2>Angular is hidden</h2></ng-template>     

       
               `
               ,
  styleUrl: './test.component.css'
})
export class TestComponent implements OnInit {

  displayName = false;

  constructor(){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
