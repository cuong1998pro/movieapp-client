import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { toBase64 } from '../ulties';

@Component({
  selector: 'app-input-img',
  templateUrl: './input-img.component.html',
  styleUrls: ['./input-img.component.css']
})
export class InputImgComponent implements OnInit {

  constructor() { }

  @Input() urlCurrentImage: string;

  @Output() onImageSelected: EventEmitter<File>
  = new EventEmitter<File>();

  ngOnInit(): void {
  }

  imageBase64String: string;

  change($event) {
    if ($event.target.files.length > 0) {
      const file: File = $event.target.files[0];
      toBase64(file).then((value: string) => {
        this.imageBase64String = value;
      });
      this.onImageSelected.emit(file);
    }
  }
}
