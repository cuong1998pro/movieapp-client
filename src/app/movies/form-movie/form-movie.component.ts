import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { multipleSelectorModel } from 'src/app/ultilities/multiple-selector/multiple-selector.model';
import { movieCreationDTO, movieDTO } from '../movie.model';

@Component({
  selector: 'app-form-movie',
  templateUrl: './form-movie.component.html',
  styleUrls: ['./form-movie.component.css']
})
export class FormMovieComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  @Input() model: movieDTO;
  @Output() onSaveChange: EventEmitter<movieCreationDTO>
  = new EventEmitter<movieCreationDTO>();

  nonSelectedGenres: multipleSelectorModel[] = [
    {key: 1, value: 'Drama'},
    {key: 2, value: 'Scientify'},
    {key: 3, value: 'Romantic'},
    
  ];
  selectedGenres: multipleSelectorModel[] = [];

  nonSelectedTheater: multipleSelectorModel[] = [
    {key: 1, value: 'CGV'},
    {key: 2, value: 'Hai Phong'},
    {key: 3, value: 'Rap chieu phim 4D'},
  ];
  selectedTheater: multipleSelectorModel[] = [];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', {
        validators: [Validators.required]
      }],
      summary: '',
      inTheaters: '',
      trailer: '',
      releaseDate: '',
      poster: '',
      genresID: '',
      theaterID: ''
    });
    if (this.model != undefined) {
      this.form.patchValue(this.model);
    }
  }

  onImageSelected(file: File) {
    this.form.get('poster').setValue(file);
  }

  changeMarkdown(value: string) {
    this.form.get('summary').setValue(value);
  }

  saveChange(){
    const genresID = this.selectedGenres.map(value => value.key);
    this.form.get('genresID').setValue(genresID);

    const theaterID = this.selectedTheater.map(value => value.key);
    this.form.get('theaterID').setValue(theaterID);

    this.onSaveChange.emit(this.form.value);
  }
}
