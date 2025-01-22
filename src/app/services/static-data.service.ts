import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaticDataService {

  constructor() {}
  private items = [
    {id: 1, name: 'Item 1', description: 'Description for item 1'},
    {id: 2, name: 'Item 2', description: 'Description for item 2'},
    {id: 3, name: 'Item 3', description: 'Description for item 3'}
  ]

  getItems(){
    return this.items;
  }

  getItemById(id: number){
    return this.items[id];
  }
}
