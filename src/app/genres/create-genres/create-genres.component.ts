import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firstLetterUpperCase } from 'src/app/validators/firstLetterUpperCase';
import { genresCreationDTO } from '../genres.model';

@Component({
  selector: 'app-create-genres',
  templateUrl: './create-genres.component.html',
  styleUrls: ['./create-genres.component.css']
})
export class CreateGenresComponent implements OnInit {

  constructor(private router: Router) { }

  form: FormGroup;

  ngOnInit(): void {
  
  }

  saveChange(genresCreationDTO: genresCreationDTO) {
    alert(genresCreationDTO.name);
    this.router.navigate(['/genres']);
  }

}
