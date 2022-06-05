import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class HomeResolver implements Resolve<number> {

    resolve(route: ActivatedRouteSnapshot): number {
        return route.data['id'] * 50
    }
}