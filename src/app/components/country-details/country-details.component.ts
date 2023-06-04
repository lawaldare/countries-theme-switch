import { Observable } from 'rxjs';
import { Country } from './../../model/country.model';
import { CountryService } from './../../services/country.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss'],
})
export class CountryDetailsComponent {
  country$: Observable<Country> = this.route.paramMap.pipe(
    mergeMap((routeData) => {
      const countryName = routeData.get('name');
      return this.countryService.getSearchedCountries(countryName);
    }),
    map((data) => data[0])
  );
  constructor(
    private route: ActivatedRoute,
    public countryService: CountryService,
    private router: Router
  ) {}

  goBackToHomepage() {
    this.router.navigate(['countries']);
  }
}
