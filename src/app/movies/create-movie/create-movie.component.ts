import { Component, OnInit } from '@angular/core';
import { movieDTO } from '../movie.model';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  saveChange(movieDTO: movieDTO){
    console.log(movieDTO)
  }
}
