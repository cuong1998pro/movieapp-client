import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorDTO } from '../actor.model';

@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrls: ['./edit-actor.component.css']
})
export class EditActorComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  model:actorDTO = {
    name: 'Phạm Quang Cường',
    dateOfBirth: new Date('1998-11-1'),
    picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6CGgQgm3ergr_Facbt1hGzG52l8LEKpG9kA&usqp=CAU',
    biography: 'Du nu cuoi luon no tren moi nhung cuoc song cua toi chua bao h on'
  } 

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {

    });
  }

  saveChange(actorDto: actorDTO){
    console.log(actorDto)
  }
}
