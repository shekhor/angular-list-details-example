import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail',
  standalone: false,
  
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  @Input() item:any;
}
