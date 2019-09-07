///<reference path="../../interfaces/Recipe.ts"/>
import {Component, OnInit, TemplateRef} from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { RecipeService } from 'services';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-recipees',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  public recipes: Array<Recipe>;
  public modalTitle: string;
  public modalBody: string;
  public loading: boolean;

  constructor(
    private recipeService: RecipeService,
    private modalService: NgbModal
  ) {
    this.loading = true;
    this.recipes = [];
  }

  ngOnInit() {
    this.recipeService.getRecipes()
      .subscribe((response: Recipe[]) => {
        this.loading = false;
        this.recipes = response;
      }, (error: HttpErrorResponse) => {
        this.loading = false;
        console.error('Error fetching data: ', error.statusText);
      });
  }

  open(content: TemplateRef<any>, index: number): void {
    if (this.recipes.length <= index) {
      return;
    }
    this.modalTitle = this.recipes[index].title;
    this.modalBody = this.recipes[index].text;
    this.modalService.open(content).result.then(() => {
      // Not used
    }, () => {
      // Modal dismissed
    });
  }
}
