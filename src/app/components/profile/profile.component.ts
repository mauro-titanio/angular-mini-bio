import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  faGithub = faGithub;
  faGlobe = faGlobe;
  faLinkedinIn = faLinkedinIn;
  faSun = faSun;
  faMoon = faMoon;

  nightMode = false

  constructor() { }

  ngOnInit(): void {
  }

  user: any = {
    first_name: 'Mauro',
    last_name: 'Titanio',
    profile_img: 'https://i.imgur.com/xnZLM0l.png',
    description_title: 'Front-end developer',
    description_text: "I'm a front-end developer based in Ciudad Real, Spain",
    links: {
      github: 'https://github.com/mauro-titanio',
      website: 'https://maurotitanio.com/',
      linkedin: 'https://www.linkedin.com/in/mauro-titanio/'
    }
  }

  toggleNightMode(){
    if(this.nightMode == false){
      this.nightMode = true;
      this.faMoon = faSun;
    } else{
     this.nightMode = false;
     this.faMoon = faMoon;
    }
  
  }
  




}
