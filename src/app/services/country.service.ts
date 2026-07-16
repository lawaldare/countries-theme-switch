import { Country } from "./../model/country.model";
import { computed, Injectable, OnInit, signal } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class CountryService {
  private readonly BASE_URL: string =
    "https://api.restcountries.com/countries/v5";
  private readonly headers = new HttpHeaders({
    Authorization: "Bearer rc_live_0697297fe96f449380e2281447fa914b",
  });

  public mode = signal<string>("light");
  public isDark = computed(() => (this.mode() === "dark" ? true : false));

  constructor(private http: HttpClient) {
    if (localStorage["isDark"]) {
      // this.isDark = JSON.parse(localStorage.getItem("isDark"));
      this.mode.set(localStorage.getItem("mode") ?? "");
    }
  }

  updateMode(state: string) {
    this.mode.set(state);
  }

  getCountries(): Observable<Country[]> {
    return this.http
      .get(`${this.BASE_URL}?limit=100`, {
        headers: this.headers,
      })
      .pipe(map((response: any) => response.data.objects)) as Observable<
      Country[]
    >;
  }

  getSearchedCountries(searchTerm: string): Observable<Country[]> {
    return this.http.get(`${this.BASE_URL}?q=${searchTerm}`, {
      headers: this.headers,
    }) as Observable<Country[]>;
  }

  getSearchedCountriesByRegion(searchRegion: string): Observable<Country[]> {
    return this.http.get(`${this.BASE_URL}region/${searchRegion}`, {
      headers: this.headers,
    }) as Observable<Country[]>;
  }
}
