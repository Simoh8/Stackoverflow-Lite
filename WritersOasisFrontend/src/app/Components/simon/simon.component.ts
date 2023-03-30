import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-simon',
  standalone:true,
  templateUrl: './simon.component.html',
  styleUrls: ['./simon.component.css'],
  imports:[CommonModule,RouterModule]
})
export class SimonComponent {

}
