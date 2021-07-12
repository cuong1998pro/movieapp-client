import { EventEmitter, Input } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { actorDTO } from '../actor.model';

@Component({
  selector: 'app-form-actor',
  templateUrl: './form-actor.component.html',
  styleUrls: ['./form-actor.component.css']
})
export class FormActorComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  @Input() model: actorDTO;

  @Output() onSaveChange: EventEmitter<actorDTO>
    = new EventEmitter<actorDTO>()

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [
        '', { validators: [Validators.required] }
      ],
      dateOfBirth: '',
      picture: '',
      biography: '',
    });

    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }

  saveChange() {
    console.log(this.form.value);
    this.onSaveChange.emit(this.form.value);
   
  }

  onImageSelected(file: File) {
    this.form.get('picture').setValue(file);
  }

  changeMarkdown(value: string){
    this.form.get('biography').setValue(value);
  }

}
