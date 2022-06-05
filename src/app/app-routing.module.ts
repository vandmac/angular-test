import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessControllGuard } from '@shared/guards/access-control.guard';
import { HomeResolver } from '@shared/resolvers/home.resolver';
import { WorkerResolver } from '@shared/resolvers/worker.resolver';

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
    canActivate: [AccessControllGuard],
    resolve: { dataResolve: HomeResolver },
    data: {
      title: 'Home Page',
      id: 10
    },
    component: MainContentComponent
  },
  {
    path: 'workers',
    canActivate: [AccessControllGuard],
    component: WorkersComponent,
    children: [
      {
        path: '',
        component: WorkersListComponent,
        data: {
          title: 'Worker List Page'
        },
      },
      {
        path: 'details/:id',
        resolve: { worker: WorkerResolver },
        component: WorkerDetailsComponent,
        data: {
          title: 'Worker Details Page'
        },
      }
    ]
  },
  {
    path: 'movies/:id',
    canActivate: [AccessControllGuard],
    component: MoviesComponent,
    data: {
      title: 'Movie Page'
    },
  },
  //If you want check queryParams
  // {
  //   path: 'movies',
  //   component: MoviesComponent

  // },
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
