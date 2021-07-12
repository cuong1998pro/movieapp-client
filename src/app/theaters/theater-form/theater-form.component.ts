import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TheaterDTO } from '../theater.model';
import { coordinatesMap } from '../../ultilities/map/cordinate.model';

@Component({
  selector: 'app-theater-form',
  templateUrl: './theater-form.component.html',
  styleUrls: ['./theater-form.component.css']
})
export class TheaterFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;
  @Input() model: TheaterDTO;
  @Input() coordinate: coordinatesMap[] = [];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', {
        validators: [Validators.required]
      }],
      lon: ['', {
        validators: [Validators.required]
      }],
      lat: ['', {
        validators: [Validators.required]
      }],
    });
    if (this.model != undefined) {
      this.form.patchValue(this.model);
      this.coordinate.push({ lat: this.model.lat, lon: this.model.lon })
    }
  }

  @Output() onSaveChange: EventEmitter<TheaterDTO>
    = new EventEmitter<TheaterDTO>();

  saveChange() {
    this.onSaveChange.emit(this.form.value);
  }

  onSeletedLocation(coordinatesMap: coordinatesMap) {
    this.form.patchValue(coordinatesMap);
  }
}
