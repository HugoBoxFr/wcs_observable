import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from  'rxjs';
import { Cocktail } from './cocktail'

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  public cocktails : Cocktail[];

  private service: HttpClient;

  constructor(private service_cocktails:  HttpClient) {
  }

  public  getCocktails():  Observable<Cocktail[]> {
      return this.service_cocktails.get<Cocktail[]>("assets/cocktails.json");
  };

}

