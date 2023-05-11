import { Component } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { TokenService } from 'src/app/service/token.service';
import { PersonaService } from 'src/app/service/persona.service';
import { faPlus, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent {
  faPlus = faPlus; faPenToSquare = faPenToSquare; faTrash = faTrash;
  persona: Persona[] = [];

  constructor(private personaService: PersonaService, private tokenService: TokenService) { }
  isLogged = false;


  ngOnInit(): void {
    this.cargarAcercade();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
   // this.personaService.getPersona().subscribe(data => {this.persona = data})
  }


  hasAdminRole(): boolean {
    return this.tokenService.getRoles().includes('ROLE_ADMIN');
  }

  hasUserRole(): boolean {
    return this.tokenService.getRoles().includes('ROLE_USER');
  }


  cargarAcercade(): void{
    this.personaService.lista().subscribe(
      data => {
        this.persona = data;
      }
    )
  }

}
