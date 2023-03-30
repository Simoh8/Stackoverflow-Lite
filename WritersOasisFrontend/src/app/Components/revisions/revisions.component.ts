import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-revisions',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './revisions.component.html',
  styleUrls: ['./revisions.component.css']
})
export class RevisionsComponent {

}
