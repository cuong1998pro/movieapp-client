import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { latLng, LeafletMouseEvent, LeafletMouseEventHandlerFn, marker, Marker, tileLayer } from 'leaflet';
import { coordinatesMap } from './cordinate.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.layers = this.initCoor.map(value => marker([value.lat, value.lon])); 
  }

  layers: Marker<any>[] = [];

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 15,
    center: latLng(20.851427366718113, 106.67415618896484)
  };

  @Input() initCoor: coordinatesMap[]= [];
  @Output() onSeletedLocation: EventEmitter<coordinatesMap>
   = new EventEmitter<coordinatesMap>();

  handleMapClick(event: LeafletMouseEvent){
    const lat = event.latlng.lat;
    const lon = event.latlng.lng;
    console.log(lat,lon);
    this.layers = []
    this.layers.push(marker([lat, lon]));
    this.onSeletedLocation.emit({lat, lon})
  }
}
