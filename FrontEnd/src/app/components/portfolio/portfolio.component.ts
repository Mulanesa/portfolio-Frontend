import { Component, OnInit } from '@angular/core';
//Modal
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
//Icons
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})


export class PortfolioComponent implements OnInit {
  html: string = 'Intermedio'; css: string = 'Basic';  javascript: string = 'Basic'; angular: string = 'Intermedio';
  faXmark = faXmark; faLinkedin = faLinkedin; faGithub = faGithub; faTwitter = faTwitter;

  constructor(public modal: NgbModal,) { }

  ngOnInit(): void {
  }
  
  openCenteredSM(contenido: any) {
    this.modal.open(contenido, { centered: true, size: 'sm' });
  }
  openCenteredLG(contenido: any) {
    this.modal.open(contenido, { centered: true, size: 'lg' });
  }
}