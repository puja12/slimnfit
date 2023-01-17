import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // boolean to add dynamically the 'aria-hidden' by attribute binding.
  //isMobile = window.innerWidth <= 1023
  isMobile = window.innerWidth <= 768

  constructor() { }
  imageSrc = 'assets/images/theweightguru-logo.png'
  imageAlt = 'weightguru-nutrition-weightloss'
  ngOnInit(): void {
  }

  showMenu() {
    console.log('clicked');
    // removes the hidden class and adds the visibility class.
    let navbar = document.getElementById('navbar')
    if(navbar !== null){
      navbar.classList.remove('desktop-only')
      navbar.classList.remove('hide-menu')
      navbar.classList.add('show-menu')
    }
    
  }
}
