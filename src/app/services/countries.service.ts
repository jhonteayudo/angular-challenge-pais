import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  public countries$: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public limit: number = 12;

  constructor(private http: HttpClient) {}

  list() {
    this.http
      .get(environment.api_paises)
      .pipe(map((data: any) => data.slice(0, this.limit)))
      .subscribe((data: any) => this.countries$.next(data));
  }
}
