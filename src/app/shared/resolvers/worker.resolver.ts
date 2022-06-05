import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";

import { Worker } from '@shared/models/worker.model';
import { WorkersService } from "src/app/services/workers.service";

@Injectable({ providedIn: 'root' })
export class WorkerResolver implements Resolve<Worker | undefined> {

    constructor(private workerService: WorkersService) { }

    resolve(route: ActivatedRouteSnapshot): Worker | undefined {
        return this.workerService.getWorkerById(Number(route.params['id']))
    }
}