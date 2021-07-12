import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrls: ['./input-markdown.component.css']
})
export class InputMarkdownComponent implements OnInit {

  constructor() { }


  @Output() changeMarkdown: EventEmitter<string>
    = new EventEmitter<string>();

  @Input() markdownContent = "";

  ngOnInit(): void {
  }

}
