import { CountryService } from "./../../services/country.service";
import { Country } from "./../../model/country.model";
import { Component, input, inject, ChangeDetectionStrategy } from "@angular/core";
import { Router } from "@angular/router";
import { NgClass } from "@angular/common";

@Component({
    selector: "app-country",
    templateUrl: "./country.component.html",
    styleUrls: ["./country.component.scss"],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [NgClass]
})
export class CountryComponent {
  public readonly country = input.required<Country>();
  private readonly router = inject(Router);
  public readonly countryService = inject(CountryService);

  public getCountryDetails(name): void {
    this.router.navigate(["country", name]);
  }
}
