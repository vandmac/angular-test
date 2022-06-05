import { Injectable } from "@angular/core";

import { Worker } from "@shared/models/worker.model";


@Injectable({
    providedIn: 'root'
})
export class WorkersService {

    private workers: Worker[] = [
        {
            id: 0,
            firstName: 'Seweryn',
            lastName: 'Wadowski',
            email: 'seweryn@gmai.com',
            placeOfOrigin: 'Kraków',
            yearsWorked: 4
        },
        {
            id: 1,
            firstName: 'Marcin',
            lastName: 'Szydło',
            email: 'marcin@gmai.com',
            placeOfOrigin: 'Pcim',
            yearsWorked: 6
        },
        {
            id: 2,
            firstName: 'Robert',
            lastName: 'Koszyczek',
            email: 'robert@gmai.com',
            placeOfOrigin: 'Poznań',
            yearsWorked: 3
        },
        {
            id: 3,
            firstName: 'Kasia',
            lastName: 'Cebulska',
            email: 'kasia@gmai.com',
            placeOfOrigin: 'Jaworzno',
            yearsWorked: 1
        },
        {
            id: 4,
            firstName: 'Monika',
            lastName: 'Kraś',
            email: 'monika@gmai.com',
            placeOfOrigin: 'Sopot',
            yearsWorked: 10
        }
    ]

    getWorkers(): Worker[] {
        return this.workers
    }

    getWorkerById(id: number): Worker | undefined {
        return this.workers.find(worker => worker.id === id)
    }

    addNewWorker(newWorker: Worker): void {
        this.workers.push(newWorker)
    }

    editWorker(worker: Worker): void {
        const workerIndex = this.workers.findIndex(item => item.id === worker.id)

        if (workerIndex !== -1) {
            this.workers[workerIndex] = worker
        }
    }

}