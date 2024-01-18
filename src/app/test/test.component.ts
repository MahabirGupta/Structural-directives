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

               <div [ngSwitch]="color">
                <div *ngSwitchCase="'red'">You picked red color</div>
                <div *ngSwitchCase="'blue'">You picked blue color</div>
                <div *ngSwitchCase="'green'">You picked green color</div>
                <div *ngSwitchDefault>You did not picked any color</div>
              </div>

              <div *ngFor="let color of colors; index as i">
                 <h2>
                  {{i}}
                 {{color}}
                 </h2> 
            </div>

            <div *ngFor="let color of colors; first as f">
                 <h2>
                  {{f}}
                 {{color}}
                 </h2> 
            </div>

            <div *ngFor="let color of colors; last as l">
                 <h2>
                  {{l}}
                 {{color}}
                 </h2> 
            </div>

            <div *ngFor="let color of colors; odd as o">
                 <h2>
                  {{o}}
                 {{color}}
                 </h2> 
            </div>

            <div *ngFor="let color of colors; even as e">
                 <h2>
                  {{e}}
                 {{color}}
                 </h2> 
            </div>
       
               `
               ,
  styleUrl: './test.component.css'
})
export class TestComponent implements OnInit {

  displayName = false;

  public color = "orange";

  // declaring an array of colours
  public colors = ["red","blue","green","yellow"]

  constructor(){}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

}
