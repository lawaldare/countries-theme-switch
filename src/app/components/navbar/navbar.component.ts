import { CountryService } from './../../services/country.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public countryService: CountryService, private router: Router) { }

  ngOnInit() {
  }

  changeMode() {
    this.countryService.isDark = !this.countryService.isDark;
    localStorage.setItem('isDark', String(this.countryService.isDark));
  }

  goToHomepage() {
    this.router.navigate(['countries']);
  }

}
