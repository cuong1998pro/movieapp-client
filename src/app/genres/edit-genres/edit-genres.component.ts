import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { genresCreationDTO } from '../genres.model';

@Component({
  selector: 'app-edit-genres',
  templateUrl: './edit-genres.component.html',
  styleUrls: ['./edit-genres.component.css']
})
export class EditGenresComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  @Input() model: genresCreationDTO = {name: 'Drama'};

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {

    });
  }

  saveChange(genresCreationDTO: genresCreationDTO){
    alert(genresCreationDTO.name);
    this.router.navigate(['/genres']);
  }

}
