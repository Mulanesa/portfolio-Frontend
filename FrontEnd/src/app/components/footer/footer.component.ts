import { Component } from '@angular/core';

// Icons
import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  faHashtag = faHashtag;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faTwitter = faTwitter;
}
