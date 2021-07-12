import { Component, Input, OnInit } from '@angular/core';
import { multipleSelectorModel } from './multiple-selector.model';

@Component({
  selector: 'app-multiple-selector',
  templateUrl: './multiple-selector.component.html',
  styleUrls: ['./multiple-selector.component.css']
})
export class MultipleSelectorComponent implements OnInit {

  constructor() { }

  @Input() selectedItems: multipleSelectorModel[] = [];
  @Input() unSelectedItems: multipleSelectorModel[] = [];

  ngOnInit(): void {
  }

  selectAll(){
    this.selectedItems.push(...this.unSelectedItems);
    this.unSelectedItems = [];
  }

  unSelectAll(){
    this.unSelectedItems.push(...this.selectedItems);
    this.selectedItems = [];
  }

  select(item: multipleSelectorModel, index: number){
    this.selectedItems.push(item);
    this.unSelectedItems.splice(index,1);
  }

  unSelect(item: multipleSelectorModel, index: number){
    this.unSelectedItems.push(item);
    this.selectedItems.splice(index, 1);
  }
}
