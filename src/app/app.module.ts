import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { GitSearchService } from './git-search.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitSearchComponent } from './git-search/git-search.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '',
    component: HomePageComponent
  },
  {
    path: 'search',
    redirectTo: '/search/angular',
    pathMatch: 'full'
  },
  {
    path: 'search/:query',
    component: GitSearchComponent,
    data:{
      title: 'Git Search'
    }
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    GitSearchComponent,
    HomePageComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    ),
    ReactiveFormsModule
  ],
  providers: [GitSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
