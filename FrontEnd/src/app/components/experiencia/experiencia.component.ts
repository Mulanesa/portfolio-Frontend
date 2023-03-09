import { Component } from '@angular/core';

//Icons
import { faBookOpen, faLaptopFile } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
  faBookOpen = faBookOpen; faLaptopFile = faLaptopFile;
}
