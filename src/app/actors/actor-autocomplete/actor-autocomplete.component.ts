import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-actor-autocomplete',
  templateUrl: './actor-autocomplete.component.html',
  styleUrls: ['./actor-autocomplete.component.css']
})
export class ActorAutocompleteComponent implements OnInit {

  constructor() { }
  control: FormControl = new FormControl();
  @ViewChild(MatTable) table: MatTable<any>;

  actors = [
    { name: 'Tom Holland', picture: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/11C3A/production/_117626727_gettyimages-615029188-594x594.jpg' },
    { name: 'Tom Hanks', picture: 'https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/Actor_Siddharth_New_1200.jpg?itok=31Z0luhJ' },
    { name: 'SamL Jackson', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjy0Qf3keNAqUmf1AtVxDDjnnEkaPDDKdBJQ&usqp=CAU' },
  ];

  columnsToDisplay = ['picture', 'name', 'character', 'action'];

  selectedActors = [];

  originalActors = this.actors;

  ngOnInit(): void {
    this.control.valueChanges.subscribe(value => {
      this.actors = this.originalActors;
      this.actors = this.actors.filter(actor => actor.name.toLocaleLowerCase().indexOf(value) !== -1
        && this.selectedActors.indexOf(actor) == -1
        );
    })
  }

  optionSelected(event: MatAutocompleteSelectedEvent) {
    console.log(event.option.value);
    this.selectedActors.push(event.option.value);
    this.control.patchValue('');

    if(this.table != undefined){
      this.table.renderRows();
    }
  }

  remove(actor){
    const index = this.selectedActors.findIndex(x => x.name == actor.name);
    this.selectedActors.splice(index, 1);
    this.table.renderRows();
  }

  dropped(event: CdkDragDrop<any[]>){
    const previousIndex = this.selectedActors.findIndex
    ( x => x === event.item.data);
    moveItemInArray(this.selectedActors, previousIndex, event.currentIndex);
    this.table.renderRows();
  }
}
