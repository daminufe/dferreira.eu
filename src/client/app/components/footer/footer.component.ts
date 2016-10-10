import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'footer-bar',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css']
})

export class FooterComponent {
    thisYear: number;

    constructor () {}

    ngOnInit() {
        this.thisYear = 2016;
    }
}
