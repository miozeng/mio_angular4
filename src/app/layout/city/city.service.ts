import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CityService {
  baseUrl:string = "http://localhost:8081";
  
  constructor(private httpClient : HttpClient) { 
    
  }
  
  get_cities(){
    return this.httpClient.get(this.baseUrl +'/mb_service/city/findAll');
  }
  get_families(){
    return this.httpClient.get(this.baseUrl + '/families');
  }
  get_locations(){
    return this.httpClient.get(this.baseUrl + '/locations');
  }
  get_transactions(){
    return this.httpClient.get(this.baseUrl + '/families');
  }

}