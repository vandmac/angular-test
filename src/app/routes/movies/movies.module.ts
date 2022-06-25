import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { MoviesComponent } from "./movies.component";

export const routes = [
    {
        path: '',
        component: MoviesComponent,
    }
]

@NgModule({
    declarations: [MoviesComponent],
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [],
    providers: [MoviesModule]
})

export class MoviesModule { }