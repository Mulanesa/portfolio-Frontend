import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent {

  nombre: string;
  porcentaje: number;
  imgURL: string

  constructor(private skillS: SkillService, private router: Router, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onCreate(): void{
    const skill = new Skill(this.nombre, this.porcentaje, this.imgURL);
    this.skillS.save(skill).subscribe(
      data => {
        alert("Skill creada correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("Fallo al añadir la skill");
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
