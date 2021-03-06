import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateActorComponent } from './actors/create-actor/create-actor.component';
import { EditActorComponent } from './actors/edit-actor/edit-actor.component';
import { IndexActorsComponent } from './actors/index-actors/index-actors.component';
import { CreateGenresComponent } from './genres/create-genres/create-genres.component';
import { EditGenresComponent } from './genres/edit-genres/edit-genres.component';
import { IndexGenresComponent } from './genres/index-genres/index-genres.component';
import { HomeComponent } from './home/home.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { EditMovieComponent } from './movies/edit-movie/edit-movie.component';
import { MovieFilterComponent } from './movies/movie-filter/movie-filter.component';
import { CreateTheaterComponent } from './theaters/create-theater/create-theater.component';
import { EditTheaterComponent } from './theaters/edit-theater/edit-theater.component';
import { IndexTheatersComponent } from './theaters/index-theaters/index-theaters.component';

const routes: Routes = [
  {path: '', component: HomeComponent},

  {path: 'genres', component: IndexGenresComponent},
  {path: 'genres/create', component: CreateGenresComponent},
  {path: 'genres/edit/:id', component: EditGenresComponent},

  {path: 'actors', component: IndexActorsComponent},
  {path: 'actors/create', component: CreateActorComponent},
  {path: 'actors/edit/:id', component: EditActorComponent},

  {path: 'theaters', component: IndexTheatersComponent},
  {path: 'theaters/create', component: CreateTheaterComponent},
  {path: 'theaters/edit/:id', component: EditTheaterComponent},

  {path: 'movies/create', component: CreateMovieComponent},
  {path: 'movies/edit/:id', component: EditMovieComponent},
  {path: 'movies/filter', component: MovieFilterComponent},

  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
