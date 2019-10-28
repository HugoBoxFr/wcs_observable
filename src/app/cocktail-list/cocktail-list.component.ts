import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { Cocktail } from '../cocktail';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {
  public  title:string  =  '';
  private  service: CocktailService;
  public cocktails : Cocktail[] = [];

  constructor(private param_service: CocktailService ){  }

  public  ngOnInit():void{
      this.param_service.getCocktails().subscribe(
          (response_cocktails:Cocktail[]) => {
              this.cocktails  =  response_cocktails;
          }
      );
  }

}
