import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessControllGuard } from '@shared/guards/access-control.guard';
import { HomeResolver } from '@shared/resolvers/home.resolver';

import { MainContentComponent } from './routes/main-content/main-content.component';
import { PageNotFoundComponent } from './routes/page-not-found/page-not-found.component';

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
    loadChildren: () => import('./routes/workers/workers.module').then(m => m.WorkersModule)
  },
  {
    path: 'movies',
    loadChildren: () => import('./routes/movies/movies.module').then(m => m.MoviesModule),
    canActivate: [AccessControllGuard],
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
