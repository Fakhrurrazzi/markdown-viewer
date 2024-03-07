import { NgModule, SecurityContext } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { DocumentationsComponent } from './home/documentations/documentations.component';
import { RecipesComponent } from './home/recipes/recipes.component';
import { FooterComponent } from './shared/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DocumentationsComponent,
    RecipesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    MarkdownModule.forRoot({ loader: HttpClient, sanitize: SecurityContext.NONE }) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
