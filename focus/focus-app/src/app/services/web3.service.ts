import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Web3Service {

  constructor(private http: HttpClient) { }

  public GetWeatherForecast():any{
    return this.http.get("https://localhost:7053/Web3");
  }

}
