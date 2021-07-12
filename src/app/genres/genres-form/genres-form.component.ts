import { EventEmitter, Input } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { genresCreationDTO } from '../genres.model';

@Component({
  selector: 'app-genres-form',
  templateUrl: './genres-form.component.html',
  styleUrls: ['./genres-form.component.css']
})
export class GenresFormComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder) { }


  form: FormGroup;

  @Input() model: genresCreationDTO;

  @Output() onSaveChanges: EventEmitter<genresCreationDTO>
    = new EventEmitter<genresCreationDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', {
        validators: [Validators.required, Validators.minLength(3),
          //firstLetterUpperCase()
        ]
      }],
    });

    if (this.model != undefined) {
      this.form.patchValue(this.model);
    }
  }

  saveChange() {
    this.onSaveChanges.emit(this.form.value);
  }

  getFormErrorMessage() {
    const field = this.form.get('name');
    if (field.hasError('required')) {
      return 'The name is required.'
    }
    if (field.hasError('minlength')) {
      return 'The name must be greater than 3 charecters.'
    }
    if (field.hasError('firstLetterUpperCase')) {
      return field.getError('firstLetterUpperCase').message;
    }
    return '';
  }

}
