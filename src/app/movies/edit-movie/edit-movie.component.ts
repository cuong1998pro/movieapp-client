import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieCreationDTO, movieDTO } from '../movie.model';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {

    });
  }

  model: movieDTO = {
    title: 'Spiderman',
    inTheaters: true,
    summary: 'Summary',
    releaseDate: new Date(),
    poster: 'https://genk.mediacdn.vn/2017/photo-1-1496042071517.jpg',
    trailer: 'https://www.youtube.com/watch?v=Nt9L1jCKGnE'
  }

  saveChange(movieCreationDTO: movieCreationDTO){

  }
}
