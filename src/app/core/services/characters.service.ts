import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  PUBLIC_KEY = 'c79e234773bdd44de0f68ed307209334';
  HASH = '1cc1381df0bd91b1d4ba179af4637279';
  URL_API = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;

  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<any> {
    return this.http.get<any>(this.URL_API)
      .pipe(map(data => data.data.results));
  }
}
