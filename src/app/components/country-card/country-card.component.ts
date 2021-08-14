import { Component, Input } from '@angular/core';
import { CountryModalDetailService } from '../country-modal-detail/country-modal-detail.service';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss'],
})
export class CountryCardComponent {

  @Input() data: any;

  constructor(
    private CountryModalDetailService: CountryModalDetailService
  ) { }

  openModalCountry(){
    
    this.CountryModalDetailService.data(this.data);
    this.CountryModalDetailService.open();

  }

}
