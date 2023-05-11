import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { NuevoUsuario } from 'src/app/model/nuevo-usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})


export class RegistroComponent {
  nombre: string;
  nombreUsuario: string;
  email: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void { }

  onCrearCuenta(): void {
    const nuevoUsuario = new NuevoUsuario(this.nombre, this.nombreUsuario, this.email, this.password);
    this.authService.nuevo(nuevoUsuario).subscribe(
      data => {
        alert("Cuenta registrada exitosamente - Ya puedes ingresar en tu cuenta.");
        window.location.reload();
      },
      error => {
        alert("La cuenta no se pudo registrar, intente nuevamente.");
        this.router.navigate(['']);
      }
    );
  }

}
