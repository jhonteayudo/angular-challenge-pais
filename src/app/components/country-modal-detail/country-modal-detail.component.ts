import { Component, OnInit } from '@angular/core';
import { CountryModalDetailService } from './country-modal-detail.service';

@Component({
  selector: 'app-country-modal-detail',
  templateUrl: './country-modal-detail.component.html',
  styleUrls: ['./country-modal-detail.component.scss'],
})
export class CountryModalDetailComponent {

  constructor(
    public countryModalService: CountryModalDetailService
  ) { }

  

}
