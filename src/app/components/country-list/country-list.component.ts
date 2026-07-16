import { CountryService } from "./../../services/country.service";
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  inject,
} from "@angular/core";
import { map } from "rxjs/operators";
import { CountryComponent } from "../country/country.component";
import { FormsModule } from "@angular/forms";
import { AsyncPipe, CommonModule } from "@angular/common";
import { Country } from "../../model/country.model";

@Component({
  selector: "app-country-list",
  templateUrl: "./country-list.component.html",
  styleUrls: ["./country-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [CommonModule, FormsModule, CountryComponent, AsyncPipe],
})
export class CountryListComponent {
  protected readonly countryService = inject(CountryService);

  protected countries$ = this.countryService.getCountries().pipe(
    map((countries) => {
      return this.sortCountries(countries);
    }),
  );

  protected getAllSearchedCountries(event: any): void {
    this.countries$ = this.countryService
      .getSearchedCountries(event.target.value)
      .pipe(
        map((countries) => {
          return this.sortCountries(countries);
        }),
      );
  }

  protected getAllSearchedCountriesByRegion(event: any): void {
    if (event.target.value === "all") {
      this.countries$ = this.countryService.getCountries().pipe(
        map((countries) => {
          return this.sortCountries(countries);
        }),
      );
      return;
    }
    this.countries$ = this.countryService
      .getSearchedCountriesByRegion(event.target.value)
      .pipe(
        map((countries) => {
          return this.sortCountries(countries);
        }),
      );
  }

  private sortCountries(countries: Country[]): Country[] {
    return countries.sort((a, b) => {
      if (a.names.common > b.names.common) {
        return 1;
      }
      if (a.names.common < b.names.common) {
        return -1;
      }
      return 0;
    });
  }
}
