import { Component, OnInit } from '@angular/core';
import { TheaterDTO } from '../theater.model';

@Component({
  selector: 'app-create-theater',
  templateUrl: './create-theater.component.html',
  styleUrls: ['./create-theater.component.css']
})
export class CreateTheaterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSaveChange(theaterDTO: TheaterDTO){
    console.log(theaterDTO);
  }

}
