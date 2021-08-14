import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryModalDetailService {
  public isOpen$: BehaviorSubject<boolean> = new BehaviorSubject<any>(false);

  public data$: BehaviorSubject<any> = new BehaviorSubject({});

  constructor() {}

  data(data: any) {
    this.data$.next(data);
  }

  close() {
    this.isOpen$.next(false);
  }

  open() {
    this.isOpen$.next(true);
  }
}
