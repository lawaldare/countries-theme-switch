import { CountryService } from "./../../services/country.service";
import { Component, ChangeDetectionStrategy, inject } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [CommonModule],
})
export class NavbarComponent {
  protected readonly countryService = inject(CountryService);
  protected readonly router = inject(Router);

  protected changeMode() {
    if (this.countryService.mode() === "dark") {
      this.countryService.mode.set("light");
      localStorage.setItem("mode", "light");
    } else {
      this.countryService.mode.set("dark");
      localStorage.setItem("mode", "dark");
    }
  }

  protected goToHomepage() {
    this.router.navigate(["countries"]);
  }
}
