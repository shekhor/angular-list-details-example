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
  isModalOpen = false;
  newProduct = { name: '', description: '' };
  constructor(private staticDataService: StaticDataService) {}

  ngOnInit() {
    this.items = this.staticDataService.getItems();
  }
  openModal() {
    this.isModalOpen = true;
  }

  
  closeModal() {
    this.isModalOpen = false;
    this.newProduct = { name: '', description: '' }; 
  }

  
  addProduct() {
    if (this.newProduct.name && this.newProduct.description) {
      this.staticDataService.addItem({id: 4, name: this.newProduct.name, description: this.newProduct.description});
      this.items = this.staticDataService.getItems(); 
      this.closeModal();
    }
  }
}
