import { CountryService } from './../../services/country.service';
import { Country } from './../../model/country.model';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-country',
    templateUrl: './country.component.html',
    styleUrls: ['./country.component.scss'],
    standalone: true,
    imports: [NgClass]
})
export class CountryComponent {

  @Input() country: Country;

  constructor(private router: Router, public countryService: CountryService) { }

  getCountryDetails(name) {
    this.router.navigate(['country', name])
  }

}
