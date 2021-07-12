import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { GenericListComponent } from './ultilities/generic-list/generic-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { RatingComponent } from './ultilities/rating/rating.component';
import { HomeComponent } from './home/home.component';
import { IndexGenresComponent } from './genres/index-genres/index-genres.component';
import { CreateGenresComponent } from './genres/create-genres/create-genres.component';
import { IndexActorsComponent } from './actors/index-actors/index-actors.component';
import { CreateActorComponent } from './actors/create-actor/create-actor.component';
import { IndexTheatersComponent } from './theaters/index-theaters/index-theaters.component';
import { CreateTheaterComponent } from './theaters/create-theater/create-theater.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { EditMovieComponent } from './movies/edit-movie/edit-movie.component';
import { EditTheaterComponent } from './theaters/edit-theater/edit-theater.component';
import { EditActorComponent } from './actors/edit-actor/edit-actor.component';
import { EditGenresComponent } from './genres/edit-genres/edit-genres.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { GenresFormComponent } from './genres/genres-form/genres-form.component';
import { MovieFilterComponent } from './movies/movie-filter/movie-filter.component';
import { FormActorComponent } from './actors/form-actor/form-actor.component';
import { InputImgComponent } from './ultilities/input-img/input-img.component';
import { InputMarkdownComponent } from './ultilities/input-markdown/input-markdown.component';
import { MarkdownModule } from 'ngx-markdown';
import { TheaterFormComponent } from './theaters/theater-form/theater-form.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MapComponent } from './ultilities/map/map.component';
import "leaflet/dist/images/marker-shadow.png";
import { FormMovieComponent } from './movies/form-movie/form-movie.component';
import { MultipleSelectorComponent } from './ultilities/multiple-selector/multiple-selector.component';
import { ActorAutocompleteComponent } from './actors/actor-autocomplete/actor-autocomplete.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    GenericListComponent,
    MenuComponent,
    RatingComponent,
    HomeComponent,
    IndexGenresComponent,
    CreateGenresComponent,
    IndexActorsComponent,
    CreateActorComponent,
    IndexTheatersComponent,
    CreateTheaterComponent,
    CreateMovieComponent,
    EditMovieComponent,
    EditTheaterComponent,
    EditActorComponent,
    EditGenresComponent,
    GenresFormComponent,
    MovieFilterComponent,
    FormActorComponent,
    InputImgComponent,
    InputMarkdownComponent,
    TheaterFormComponent,
    MapComponent,
    FormMovieComponent,
    MultipleSelectorComponent,
    ActorAutocompleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule, 
    ReactiveFormsModule,
    FormsModule,
    MarkdownModule.forRoot(),
    LeafletModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
