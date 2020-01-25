import { CountryService } from './services/country.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'countries';

  constructor(public countryService: CountryService) { }
}
