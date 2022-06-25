import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CityPrefixModule } from "@shared/pipes/city-prefix/city-prefix.module";
import { WorkerResolver } from '@shared/resolvers/worker.resolver';
import { WorkerDetailsComponent } from './components/worker-details/worker-details.components';
import { WorkersListComponent } from './components/workers-list/workers-list.component';
import { WorkersComponent } from './workers.component';
import { EmailColorDirective } from "@shared/directives/email-color.directive";
import { ImgExperienceDirective } from '@shared/directives/img-experience.directive';


export const routes = [
    {
        path: '',
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
    }
]

@NgModule({
    declarations: [
        WorkersComponent,
        WorkersListComponent,
        WorkerDetailsComponent,
        EmailColorDirective,
        ImgExperienceDirective],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        CityPrefixModule,
        FormsModule,
        ReactiveFormsModule],
    exports: [],
    providers: [WorkerResolver]
})

export class WorkersModule { }