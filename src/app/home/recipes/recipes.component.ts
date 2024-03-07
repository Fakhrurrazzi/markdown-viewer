import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  recipes: string;
  href: string;

  constructor(private route: ActivatedRoute){
    this.recipes = '';
    this.href = '';
  }

  ngOnInit(): void {
    let recipeName = this.route.snapshot.paramMap.get('recipeName');
    this.href = window.location.href;
    this.recipes = './assets/recipes/' +  recipeName + '.md';
  }
}
