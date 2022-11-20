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

  countryName: string;
  country: any;
  constructor(private route: ActivatedRoute, public countryService: CountryService, private router: Router) { }

  ngOnInit() {
    this.getCountryName();
  }


  getCountryName() {
    this.route.paramMap.subscribe(routeData => {
      this.countryName = routeData.get('name');
      this.getCountryByName(this.countryName)
    });
  }

  getCountryByName(name: string): void {
    this.countryService.getSearchedCountries(name).subscribe(data => {
      this.country = data[0];
    })
  }

  goBackToHomepage() {
    this.router.navigate(['countries']);
  }

}
