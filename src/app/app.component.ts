import { CountryService } from './services/country.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as AOS from 'aos';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class AppComponent implements OnInit {
  title = 'countries';

  constructor(public countryService: CountryService) { }

  ngOnInit() {
    AOS.init();
  }
}
