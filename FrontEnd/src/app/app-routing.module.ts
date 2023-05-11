import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Import Pages
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { Page404Component } from './components/page404/page404.component';
//Crud
import { NewExperienciaComponent } from './components/experiencia/new-experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia/edit-experiencia.component';
import { NewEducacionComponent } from './components/experiencia/new-educacion/new-educacion.component';
import { EditEducacionComponent } from './components/experiencia/edit-educacion/edit-educacion.component';
import { NewSkillComponent } from './components/skills/new-skill/new-skill.component';
import { EditSkillComponent } from './components/skills/edit-skill/edit-skill.component';
import { EditarAcercaComponent } from './components/acerca-de/editar-acerca/editar-acerca.component';



const routes: Routes = [
  {path: 'portfolio', title: 'Mulanesa Portfolio', component:PortfolioComponent},
  //Crud
  {path: 'nuevaexperiencia', title: 'Experiencia Nueva', component:NewExperienciaComponent},
  {path: 'editarexperiencia/:id', title: 'Editar Experiencia', component:EditExperienciaComponent},
  {path: 'nuevaeducacion', title: 'Educacion Nueva', component:NewEducacionComponent},
  {path: 'editareducacion/:id', title: 'Editar Educacion', component:EditEducacionComponent},
  {path: 'nuevahabilidad', title: 'Habilidad Nueva', component:NewSkillComponent},
  {path: 'editarhabilidad/:id', title: 'Editar Habilidad', component:EditSkillComponent},
  {path: 'editaracercade/:id', title: 'Editar Acerca de', component:EditarAcercaComponent},
  // Pagina Inicial.
  { path: '', redirectTo: '/portfolio', pathMatch: 'full' },
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
