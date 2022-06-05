import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainContentComponent } from './routes/main-content/main-content.component';
import { MoviesComponent } from './routes/movies/movies.component';
import { PageNotFoundComponent } from './routes/page-not-found/page-not-found.component';
import { WorkerDetailsComponent } from './routes/workers/components/worker-details/worker-details.components';
import { WorkersListComponent } from './routes/workers/components/workers-list/workers-list.component';
import { WorkersComponent } from './routes/workers/workers.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: MainContentComponent
  },
  {
    path: 'workers',
    component: WorkersComponent,
    children: [
      {
        path: '',
        component: WorkersListComponent
      },
      {
        path: 'details',
        component: WorkerDetailsComponent
      }
    ]
  },
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
