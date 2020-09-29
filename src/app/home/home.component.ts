import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  gallery= {
    title: 'SadGang',
    description: 'Costa Rica Streetware',
    images: [
      '../../assets/background-girl-one.png',
      '../../assets/background-girl-two.png',
      '../../assets/background-boy-one.png',
      '../../assets/background-boy-two.png'
    ]
  }

  constructor() { }

  ngOnInit(): void {

  }

}
