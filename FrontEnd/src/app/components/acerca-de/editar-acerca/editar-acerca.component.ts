import { Component } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';



@Component({
  selector: 'app-editar-acerca',
  templateUrl: './editar-acerca.component.html',
  styleUrls: ['./editar-acerca.component.css']
})
export class EditarAcercaComponent {
  persona: Persona = null;

  constructor(private personaS: PersonaService, private activatedRouter: ActivatedRoute, private router: Router, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    this.personaS.getPersona(id).subscribe(
      data => {
        this.persona = data;
      }, err => {
        alert("Error al editar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaS.update(id, this.persona).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al editar la seccion");
        this.router.navigate(['']);
      }
    )
  }


  hasAdminRole(): boolean {
    return this.tokenService.getRoles().includes('ROLE_ADMIN');
  }

  hasUserRole(): boolean {
    return this.tokenService.getRoles().includes('ROLE_USER');
  }


}
