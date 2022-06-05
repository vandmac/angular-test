import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate } from "@angular/router";


@Injectable({ providedIn: 'root' })
export class AccessControllGuard implements CanActivate {

    canActivate(route: ActivatedRouteSnapshot): boolean {

        return true;
    }
}