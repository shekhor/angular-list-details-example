import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StaticDataService } from '../../services/static-data.service';

@Component({
  selector: 'app-list',
  standalone: false,
  
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  items: any[] = [];
  @Output() itemSelected = new EventEmitter<any>();

  imageUrl = 'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg';
  
  constructor(private staticDataService: StaticDataService) {}

  ngOnInit() {
    this.items = this.staticDataService.getItems();
  }

  dataBinding(){
    return "Example of angular data binding";
  }

  onItemSelected(item: any){
    this.itemSelected.emit(item);
  }
}
