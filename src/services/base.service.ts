import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../environments/environment';
import { Constants } from '../constants/Constants';
import { Location } from '@angular/common';


@Injectable()
export class BaseService {

  constructor(
    private router: Router,
    private http: HttpClient,
    public constants: Constants,
    private location: Location
  ) { }
  // Base Route
  public baseURL: string = environment.baseUrl;
  // ****************************************************************************************************************
  // ****************************************************************************************************************
  // ****************************************************************************************************************
  // GENERIC TABLE CRUDS
  /**
  * Get
  */
  public getData(url: string): Observable<any> {
    const URL = `${this.baseURL}${url}`;
    return this.get(URL);
  }
  /**
  * Create
  * @param data data
  */
  public newData(data: any, url: string): Observable<any> {
    const URL = `${this.baseURL}${url}`;
    return this.post(URL, data);
  }
  /**
  * Update
  * @param data data
  */
  public updateData(data: any, url: string): Observable<any> {
    const URL = `${this.baseURL}${url}`;
    return this.put(URL, data);
  }
  /**
  * Delete.
  * @param id
  */
  public deleteData(id, url: string): Observable<any> {
    const URL = `${this.baseURL}${url}/${id}`;
    // or const URL = `${this.baseURL}${url}?id=${id}`;
    return this.delete(URL);
  }
  /**
  * Get y id
  * @param id id
  */
  getDataId(id, url: string): Observable<any> {
    const URL = `${this.baseURL}${url}/${id}`;
    // or const URL = `${this.baseURL}${url}?id=${id}`;
    return this.get(URL);
  }

  // ****************************************************************************************************************
  // ****************************************************************************************************************
  // ****************************************************************************************************************
  // HTTP PETITIONS.
  public get(url: string): Observable<any> {
    return this.http.get(url, { withCredentials: true });
  }

  public post(url: string, params?: any): Observable<any> {
  params = JSON.stringify(params);
  // Set Header-- Cors etc, XLSX...
  const headers = new HttpHeaders().set('Content-Type', 'application/json');
  return this.http.post(url, params, { headers: headers, withCredentials: true });
  }

  public put(url: string, params?: any): Observable<any> {
  params = JSON.stringify(params);
  // Set Header-- Cors etc, XLSX...
  const headers = new HttpHeaders().set('Content-Type', 'application/json');
  return this.http.put(url, params, { headers: headers, withCredentials: true });
  }

  public delete(url: string): Observable<any> {
  return this.http.delete(url, { withCredentials: true });
  }

  // ****************************************************************************************************************
  // ****************************************************************************************************************
  // ****************************************************************************************************************
  // ROUTE.

  public routeNavigate(url: string) {
  this.router.navigate([`${url}`], { skipLocationChange: true });
  }

  public routeNavigateParam(url: string, parametro: string) {
  this.router.navigate([`${url}`, parametro], { skipLocationChange: true });
  }

}
