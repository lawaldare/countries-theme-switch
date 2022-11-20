import { Country } from './../model/country.model';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  BASE_URL: string = 'https://restcountries.com/v3.1/';

  isDark: boolean = false;


  constructor(private http: HttpClient) {
    if (localStorage['isDark']) {
      this.isDark = JSON.parse(localStorage.getItem('isDark'));
    }
  }





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
