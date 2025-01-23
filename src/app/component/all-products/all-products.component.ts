import { Component, OnInit } from '@angular/core';
import { StaticDataService } from '../../services/static-data.service';

@Component({
  selector: 'app-all-products',
  standalone: false,
  
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent implements OnInit {
  items: any[] = [];

  constructor(private staticDataService: StaticDataService) {}

  ngOnInit() {
    this.items = this.staticDataService.getItems();
  }
}
