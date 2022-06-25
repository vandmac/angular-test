import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

//Modules
import { AppRoutingModule } from './app-routing.module';
import { CityPrefixModule } from './shared/pipes/city-prefix/city-prefix.module';
import { MoviesModule } from './routes/movies/movies.module';

//Components
import { AppComponent } from './app.component';
import { MainContentComponent } from './routes/main-content/main-content.component';
import { ItemComponent } from './components/item/item.component';
import { SquareComponent } from './components/square/square.component';
import { WorkersComponent } from './routes/workers/workers.component';
// import { MoviesComponent } from './routes/movies/movies.component';
import { NavComponent } from './components/nav/nav.component';
import { PageNotFoundComponent } from './routes/page-not-found/page-not-found.component';
import { WorkerDetailsComponent } from './routes/workers/components/worker-details/worker-details.components';
import { WorkersListComponent } from './routes/workers/components/workers-list/workers-list.component';

//Directives
import { ShowDirective } from './shared/directives/show.directive';
import { ImgExperienceDirective } from './shared/directives/img-experience.directive';
import { EmailColorDirective } from './shared/directives/email-color.directive';

//Services
import { WorkersService } from './services/workers.service';


@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    ItemComponent,
    SquareComponent,
    EmailColorDirective,
    ShowDirective,
    ImgExperienceDirective,
    WorkersComponent,
    // MoviesComponent,
    NavComponent,
    PageNotFoundComponent,
    WorkerDetailsComponent,
    WorkersListComponent

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    CityPrefixModule,
    ReactiveFormsModule,
    HttpClientModule,
    MoviesModule
  ],
  providers: [WorkersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
