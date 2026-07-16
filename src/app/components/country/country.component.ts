import { CountryService } from "./../../services/country.service";
import { Country } from "./../../model/country.model";
import {
  Component,
  input,
  inject,
  ChangeDetectionStrategy,
} from "@angular/core";
import { Router } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-country",
  templateUrl: "./country.component.html",
  styleUrls: ["./country.component.scss"],
  imports: [CommonModule],
})
export class CountryComponent {
  protected readonly country = input.required<Country>();
  private readonly router = inject(Router);
  protected readonly countryService = inject(CountryService);

  protected getCountryDetails(name: string): void {
    this.router.navigate(["country", name]);
  }
}
