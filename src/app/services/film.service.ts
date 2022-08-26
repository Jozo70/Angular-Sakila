import { Injectable } from '@angular/core';
import { Film } from 'src/app/Film';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private apiUrl =  'http://aamj9g4woseig9.cfintzmmmvrg.eu-west-2.rds.amazonaws.com'

  constructor(private http:HttpClient) { }

  getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(this.apiUrl + '/Get_Films')
  }
}
