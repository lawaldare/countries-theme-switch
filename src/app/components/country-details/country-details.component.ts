import { Country } from './../../model/country.model';
import { CountryService } from './../../services/country.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {

  countries: Country[];
  borderCountries: string[];
  countryName: string;
  country: any;
  constructor(private route: ActivatedRoute, private countryService: CountryService, private router: Router) { }

  ngOnInit() {
    this.getCountryName();
    // this.getAllCountries();
    // this.getBorderCountries(this.country);
  }


  getCountryName() {
    this.route.paramMap.subscribe(routeData => {
      this.countryName = routeData.get('name');
      this.getCountryByName(this.countryName)
    });
  }

  getAllCountries(): void {
    this.countryService.getCountries().subscribe(data => {
      this.countries = data;
    })
  }

  getCountryByName(name: string): void {
    this.countryService.getSearchedCountries(name).subscribe(data => {
      this.country = data[0];
    })
  }

  goBackToHomepage() {
    this.router.navigate(['countries']);
  }

  // getBorderCountries(country: Country) {
  //   country.borders.forEach(c => {
  //     let b = this.getCountryByalpha3code(c);
  //     this.borderCountries.push(b.name);
  //   })
  //   return this.borderCountries;
  // }

  // getCountryByalpha3code(code: string): Country {
  //   return this.countries.find(c => c.alpha3Code === code);
  // }

}
