import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})


export class RegistroComponent implements OnInit {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  faXmark = faXmark;


  constructor(public modal: NgbModal) { }

  register() {
    console.log(this.email);
    console.log(this.password);
  }

  ngOnInit(): void { }

  openModal(contenedor: any) {
    this.modal.open(contenedor, {centered: true, size: 'SM'})
  }

}
