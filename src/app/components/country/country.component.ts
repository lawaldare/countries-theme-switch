import { CountryService } from './../../services/country.service';
import { Country } from './../../model/country.model';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  @Input() country: Country;

  constructor(private router: Router, private countryService: CountryService) { }

  ngOnInit() {
  }

  getCountryDetails(name) {
    this.router.navigate(['country', name])
  }

}
