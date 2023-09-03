import { Observable } from 'rxjs';
import { Country } from './../../model/country.model';
import { CountryService } from './../../services/country.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, mergeMap } from 'rxjs/operators';
import { CurrPipe } from '../../curr.pipe';
import { LangPipe } from '../../lang.pipe';
import { NgClass, NgIf, NgFor, AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-country-details',
    templateUrl: './country-details.component.html',
    styleUrls: ['./country-details.component.scss'],
    standalone: true,
    imports: [
        NgClass,
        NgIf,
        NgFor,
        AsyncPipe,
        LangPipe,
        CurrPipe,
    ],
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
