import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.listNewMovies = [
      {
        date: new Date(),
        name: 'batman',
        price: 2000000000,
        poster: 'https://cdn.europosters.eu/image/750/posters/batman-80th-anniversary-i76699.jpg'
      },
      {
        date: new Date('2021-09-06'),
        name: 'supperman',
        price: 1000,
        poster: 'https://i.pinimg.com/originals/0d/f0/2e/0df02e8458b0578e8a26c20d62647f1a.jpg'
      }
    ];
    this.listFeatureMovies = [
      {
        date: new Date(),
        name: 'the vault',
        price: 35000000,
        poster: 'https://m.media-amazon.com/images/M/MV5BZTliM2M5MjktZmY2NC00NjdlLWE5YzUtNDU2NzA0MzkyMDNlXkEyXkFqcGdeQXVyMTE1Nzg4NjY0._V1_.jpg'
      }
    ];
  }

  listNewMovies;
  listFeatureMovies;

}
