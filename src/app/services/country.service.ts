import { Country } from './../model/country.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  BASE_URL: string = 'https://restcountries.eu/rest/v2/';

  constructor(private http: HttpClient) { }

  mode: boolean = false;



  getCountries(): Observable<Country[]> {
    return this.http.get(`${this.BASE_URL}all`) as Observable<Country[]>;
  }

  getSearchedCountries(searchTerm: string): Observable<Country[]> {
    return this.http.get(`${this.BASE_URL}name/${searchTerm}`) as Observable<Country[]>;
  }

  getSearchedCountriesByRegion(searchRegion: string): Observable<Country[]> {
    return this.http.get(`${this.BASE_URL}region/${searchRegion}`) as Observable<Country[]>;
  }





}
