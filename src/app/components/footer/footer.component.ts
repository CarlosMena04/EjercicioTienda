import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: ['.footer { position: relative; margin-top: 50px; bottom: 0; width: 100%; height: 50px; background-color: #727272; color: white; text-align:center } ']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
