import { Country } from '../../models/country.class';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  url = 'https://restcountries.eu/rest/v2/all';
  constructor(private http: HttpClient) { }

  getCountries() {
    return this.http.get<Country[]>(this.url);
  }
}
