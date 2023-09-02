import { CountryService } from './../../services/country.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Country } from 'src/app/model/country.model';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
})
export class CountryListComponent {
  countries$ = this.countryService.getCountries().pipe(
    map((countries) => {
      return this.sortCountries(countries);
    })
  );

  constructor(public countryService: CountryService) {}

  getAllSearchedCountries(event): void {
    this.countries$ = this.countryService
      .getSearchedCountries(event.target.value)
      .pipe(
        map((countries) => {
          return this.sortCountries(countries);
        })
      );
  }

  getAllSearchedCountriesByRegion(event): void {
    if (event.target.value === 'all') {
      this.countries$ = this.countryService.getCountries().pipe(
        map((countries) => {
          return this.sortCountries(countries);
        })
      );
      return;
    }
    this.countries$ = this.countryService
      .getSearchedCountriesByRegion(event.target.value)
      .pipe(
        map((countries) => {
          return this.sortCountries(countries);
        })
      );
  }

  private sortCountries(countries: Country[]): Country[] {
    return countries.sort((a, b) => {
      if (a.name.common > b.name.common) {
        return 1;
      }
      if (a.name.common < b.name.common) {
        return -1;
      }
      return 0;
    });
  }
}
