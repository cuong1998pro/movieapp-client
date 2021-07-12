import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.css']
})
export class MovieFilterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  genres = [
    { id: '1', name: 'Comedy' },
    { id: '2', name: 'Drama' },
  ];

  movies;
  originList;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: '',
      genreID: 0,
      upCommingReleases: false,
      inTheaters: false
    })
    this.movies = [
      {
        // date: new Date(),
        name: 'batman',
        price: 2000000000,
        poster: 'https://cdn.europosters.eu/image/750/posters/batman-80th-anniversary-i76699.jpg'
      },
      {
        // date: new Date('2021-09-06'),
        name: 'supperman',
        price: 1000,
        poster: 'https://i.pinimg.com/originals/0d/f0/2e/0df02e8458b0578e8a26c20d62647f1a.jpg'
      },
      {
        // date: new Date(),
        name: 'the vault',
        price: 35000000,
        poster: 'https://m.media-amazon.com/images/M/MV5BZTliM2M5MjktZmY2NC00NjdlLWE5YzUtNDU2NzA0MzkyMDNlXkEyXkFqcGdeQXVyMTE1Nzg4NjY0._V1_.jpg'
      }
    ];
    this.originList = this.movies;

    this.form.valueChanges.subscribe(value => {
      this.movies = this.originList
      this.filterMovie(value)
    }
    )
  }

  filterMovie(value: any) {
    if (value.title) {
      this.movies = this.movies.filter(
        movie => movie.name.indexOf(value.title) !== -1
      );
    }
  }

  clearForm() {
    this.form.reset();
  }

}
