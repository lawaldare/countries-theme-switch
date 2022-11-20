import { Country } from './../../model/country.model';
import { CountryService } from './../../services/country.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent {

  countries$ = this.countryService.getCountries();


  constructor(public countryService: CountryService) {
  }

  getAllSearchedCountries(event): void {
    this.countries$ = this.countryService.getSearchedCountries(event.target.value);
  }

  getAllSearchedCountriesByRegion(event): void {
    if (event.target.value === 'all') {
      this.countries$ = this.countryService.getCountries();
      return;
    }
    this.countries$ = this.countryService.getSearchedCountriesByRegion(event.target.value);
  }

}
