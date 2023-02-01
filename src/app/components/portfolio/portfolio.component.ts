import { StmtModifier } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  basic: string = 'Basic';

  constructor(public modal: NgbModal) { }

  ngOnInit(): void {
  }

  openCentered(contenido: any) {
    this.modal.open(contenido, { centered: true, size: 'sm' });
  }
}