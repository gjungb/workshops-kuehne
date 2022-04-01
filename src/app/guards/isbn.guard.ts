import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IsbnGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return of(true).pipe(delay(3_000));
  }
}
