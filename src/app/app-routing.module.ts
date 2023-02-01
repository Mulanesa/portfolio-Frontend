import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Import Pages
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { Page404Component } from './components/page404/page404.component';

const routes: Routes = [
  {path: 'login', title: 'Login', component:LoginComponent},
  {path: 'portfolio', title: 'MulanesaDev', component:PortfolioComponent},

  // Pagina Inicial.
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // Page Error404 Routing
  { path: '**', pathMatch: 'full', title: 'Error 404', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
