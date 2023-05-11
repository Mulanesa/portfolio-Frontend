import { Component } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  persona: Persona[] = [];

  constructor(private personaService: PersonaService) { }
  
  ngOnInit(): void {
    this.cargarAcercade();
  }
  
  cargarAcercade(): void{
    this.personaService.lista().subscribe(
      data => {
        this.persona = data;
      }
    )
  }


}
