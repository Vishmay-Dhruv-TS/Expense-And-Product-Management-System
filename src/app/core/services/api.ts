import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Api {
  http = inject(HttpClient);
  private readonly baseUrl = environment.apiBaseUrl;

  get<T>(endPoint: string, params?: HttpParams){
    return this.http.get<T>(`${this.baseUrl}${endPoint}`, { params });
  }

  post<T>(endPoint: string, body: any){
    return this.http.post<T>(`${this.baseUrl}${endPoint}`, body);
  }

  put<T>(endPoint: string, body: any){
    return this.http.put<T>(`${this.baseUrl}${endPoint}`, body);
  }
  delete<T>(endPoint: string){
    return this.http.delete<T>(`${this.baseUrl}${endPoint}`);
  }
}