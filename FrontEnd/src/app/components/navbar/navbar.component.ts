import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
// Modal
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
//fa-icons
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { TokenService } from 'src/app/service/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  private primerModalRef: NgbModalRef | undefined;
  faXmark = faXmark;
  isLogged = false;

  constructor(private viewportScroller: ViewportScroller, public modal: NgbModal, private router: Router, private tokenService: TokenService) { }


  ngOnInit(): void {
    if(this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

  onClickScroll(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  openModal(contenedor: any) {
    this.modal.open(contenedor, {centered: true, size: 'SM'});
  }

  abrirPrimerModal(contenedor: any) {
    this.primerModalRef = this.modal.open(contenedor, { centered: true, size: 'SM' });
  }

  abrirSegundoModal(segundoModalContenedor: any) {
    if (this.primerModalRef) {
      this.primerModalRef.close();
    }
    this.modal.open(segundoModalContenedor, { centered: true, size: 'SM' });
  }
}