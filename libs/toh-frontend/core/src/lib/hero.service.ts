import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const BE_URL = 'http://localhost:3000/api/heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private http = inject(HttpClient);

  getHeroes(): Observable<never> {
    return this.http.get<never>(BE_URL);
  }

  getHero(id: string): Observable<never> {
    return this.http.get<never>(`${BE_URL}/${id}`);
  }
}
