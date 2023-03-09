import { Component } from '@angular/core';
//fa-icon
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent {
  faInstagram = faInstagram; faGithub = faGithub; faLinkedin = faLinkedin;
}
