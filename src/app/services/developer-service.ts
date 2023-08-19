import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, catchError, tap } from "rxjs";
import { IDeveloper } from "../interfaces/developer";

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {
  private developerUrl = '../../assets/developers/developersWithoutGames.json'

    constructor(private http: HttpClient) {}

    getDevelopers(): Observable<IDeveloper[]> {
      return this.http.get<IDeveloper[]>(this.developerUrl);

    }

  }
