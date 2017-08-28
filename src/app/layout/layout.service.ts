import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LayoutService {
  baseUrl:string = "http://localhost:8081/mb_service";
  
  constructor(private httpClient : HttpClient) { 
    
  }
  
  get_cities(){
    return this.httpClient.get(this.baseUrl +'/city/findAll');
  }
   get_city_byid(id){
    return this.httpClient.get(this.baseUrl +'/city/findById/'+id);
  }
  get_provinces(){
    return this.httpClient.get(this.baseUrl + '/city/findAllPro');
  }
  post_city(city){
    return this.httpClient.post(this.baseUrl + '/city/savecity',city);
  }
  
  
  get_agents(){
    return this.httpClient.get(this.baseUrl + '/families');
  }

}