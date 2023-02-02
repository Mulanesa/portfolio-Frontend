import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})


export class PortfolioComponent implements OnInit {
  basic: string = 'Basic';
  faXmark = faXmark;

  constructor(public modal: NgbModal) { }

  ngOnInit(): void {
  }

  openCenteredSM(contenido: any) {
    this.modal.open(contenido, { centered: true, size: 'sm' });
  }
  openCenteredLG(contenido: any) {
    this.modal.open(contenido, { centered: true, size: 'lg' });
  }
}