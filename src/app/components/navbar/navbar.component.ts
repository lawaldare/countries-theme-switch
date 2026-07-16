import { CountryService } from "./../../services/country.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgClass } from "@angular/common";

@Component({
    selector: "app-navbar",
    templateUrl: "./navbar.component.html",
    styleUrls: ["./navbar.component.scss"],
    imports: [NgClass]
})
export class NavbarComponent implements OnInit {
  constructor(public countryService: CountryService, private router: Router) {}

  ngOnInit() {}

  changeMode() {
    // this.countryService.isDark = !this.countryService.isDark;
    if (this.countryService.mode() === "dark") {
      this.countryService.mode.set("light");
      localStorage.setItem("mode", "light");
    } else {
      this.countryService.mode.set("dark");
      localStorage.setItem("mode", "dark");
    }
    // localStorage.setItem('isDark', String(this.countryService.isDark));
  }

  goToHomepage() {
    this.router.navigate(["countries"]);
  }
}
