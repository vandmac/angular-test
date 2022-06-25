import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

//Modules
import { AppRoutingModule } from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { MainContentComponent } from './routes/main-content/main-content.component';
import { ItemComponent } from './components/item/item.component';
import { SquareComponent } from './components/square/square.component';
import { NavComponent } from './components/nav/nav.component';
import { PageNotFoundComponent } from './routes/page-not-found/page-not-found.component';

//Directives
import { ShowDirective } from './shared/directives/show.directive';

//Services
import { WorkersService } from './services/workers.service';


@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    ItemComponent,
    SquareComponent,
    ShowDirective,
    NavComponent,
    PageNotFoundComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [WorkersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
