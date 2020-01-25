import { Country } from './../../model/country.model';
import { CountryService } from './../../services/country.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {

  countries: Country[];


  constructor(private countryService: CountryService) {
  }

  ngOnInit() {
    this.getAllCountries();
  }

  getAllCountries(): void {
    this.countryService.getCountries().subscribe(data => {
      this.countries = data;
    })
  }

  getAllSearchedCountries(event): void {
    this.countryService.getSearchedCountries(event.target.value).subscribe(data => {
      this.countries = data;
    })
  }

  getAllSearchedCountriesByRegion(event): void {
    if (event.target.value === 'all') {
      this.getAllCountries();
    }
    this.countryService.getSearchedCountriesByRegion(event.target.value).subscribe(data => {
      debugger;
      this.countries = data;
    })
  }

}
