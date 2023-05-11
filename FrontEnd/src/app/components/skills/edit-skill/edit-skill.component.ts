import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent {
  skill: Skill = null;
  isLogged = false;
  constructor(private skillS: SkillService, private activatedRouter: ActivatedRoute, private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    this.skillS.detail(id).subscribe(
      data => {
        this.skill = data;
      }, err => {
        alert("Error al editar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillS.update(id, this.skill).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al editar la skill");
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