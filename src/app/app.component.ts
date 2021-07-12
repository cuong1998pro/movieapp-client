import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  constructor(private _adapter: DateAdapter<any>) {}

  ngOnInit(): void {
    this._adapter.setLocale('fr');
  }
  
}
