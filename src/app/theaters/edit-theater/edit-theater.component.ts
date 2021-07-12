import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TheaterDTO } from '../theater.model';

@Component({
  selector: 'app-edit-theater',
  templateUrl: './edit-theater.component.html',
  styleUrls: ['./edit-theater.component.css']
})
export class EditTheaterComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  model: TheaterDTO = { name: 'Hai Phong', lat: 20.851427366718113, lon: 106.67415618896484}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {

    });
  }

  onSaveChange(theaterDTO: TheaterDTO){
    console.log(theaterDTO);
  }
}
