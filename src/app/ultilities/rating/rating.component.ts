import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.starArr = Array(this.maxStar).fill(0);
  }

  @Input() maxStar: number = 5;
  @Input() selectedIndex: number = 0;
  
  @Output() onRating:EventEmitter<number> = new EventEmitter<number>();

  starArr;
  hoverIndex = 0;

  starHover(index: number) {
    this.hoverIndex = index + 1;
  }
  starLeave() {
    if (this.selectedIndex != 0)
      this.hoverIndex = this.selectedIndex;
    else
      this.hoverIndex = 0;
  }
  starClick(index: number) {
    if (index + 1 == this.selectedIndex) {
      this.selectedIndex = 0;
      return;
    }
    this.selectedIndex = index + 1;
    this.onRating.emit(index);
  }
}
