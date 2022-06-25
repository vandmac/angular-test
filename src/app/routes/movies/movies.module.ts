import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';

import { MoviesComponent } from "./movies.component";

export const routes = [
    {
        path: '',
        component: MoviesComponent,
    }
]

@NgModule({
    declarations: [MoviesComponent],
    imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
    exports: [],
    providers: [MoviesModule]
})

export class MoviesModule { }