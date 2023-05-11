import { Component } from '@angular/core';

//
import { faBookOpen, faLaptopFile, faPenToSquare, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { TokenService } from 'src/app/service/token.service';
import { Experiencia } from 'src/app/model/experiencia';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
  faBookOpen = faBookOpen; faLaptopFile = faLaptopFile; faPenToSquare = faPenToSquare; faTrash = faTrash; faPlus = faPlus;
  expe: Experiencia[] = [];
  educacion: Educacion[] = [];
  
  constructor(private educacionS: EducacionService, private sExperiencia: SExperienciaService, private tokenService: TokenService) {}

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

    this.cargarEducacion();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }

  hasAdminRole(): boolean {
    return this.tokenService.getRoles().includes('ROLE_ADMIN');
  }

  hasUserRole(): boolean {
    return this.tokenService.getRoles().includes('ROLE_USER');
  }

  cargarExperiencia(): void {
    this.sExperiencia.lista().subscribe(data => {this.expe = data;})
  }

  delete(id?: number){
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }

  //Educacion Crud

  cargarEducacion(): void{
    this.educacionS.lista().subscribe(
      data =>{
        this.educacion = data;
      }
    )
  }

  deleteE(id?: number){
    if( id != undefined){
      this.educacionS.delete(id).subscribe(
        data => {
          this.cargarEducacion();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }
}
