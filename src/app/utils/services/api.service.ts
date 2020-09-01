import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY = '8ae8b189';

  constructor(private httpClient: HttpClient) { }

  public getMovie(param) {
    return this.httpClient.get(`https://www.omdbapi.com/?s=${param}&apikey=${this.API_KEY}`);
  }
}
