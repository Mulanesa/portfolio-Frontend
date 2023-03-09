import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
// Modal
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
//fa-icons
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  faXmark = faXmark;

  constructor(private viewportScroller: ViewportScroller, public modal: NgbModal) { }

  ngOnInit(): void {
  }

  onClickScroll(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  openModal(contenedor: any) {
    this.modal.open(contenedor, {centered: true, size: 'SM'});
  }
}