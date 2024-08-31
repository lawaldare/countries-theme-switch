import { Country } from "./../model/country.model";
import { computed, Injectable, OnInit, signal } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CountryService {
  private readonly BASE_URL: string = "https://restcountries.com/v3.1/";

  public mode = signal<string>("light");
  public isDark = computed(() => (this.mode() === "dark" ? true : false));

  constructor(private http: HttpClient) {
    if (localStorage["isDark"]) {
      // this.isDark = JSON.parse(localStorage.getItem("isDark"));
      this.mode.set(localStorage.getItem("mode"));
    }
  }

  updateMode(state: string) {
    this.mode.set(state);
  }

  getCountries(): Observable<Country[]> {
    return this.http.get(`${this.BASE_URL}all`) as Observable<Country[]>;
  }

  getSearchedCountries(searchTerm: string): Observable<Country[]> {
    return this.http.get(`${this.BASE_URL}name/${searchTerm}`) as Observable<
      Country[]
    >;
  }

  getSearchedCountriesByRegion(searchRegion: string): Observable<Country[]> {
    return this.http.get(
      `${this.BASE_URL}region/${searchRegion}`
    ) as Observable<Country[]>;
  }
}
