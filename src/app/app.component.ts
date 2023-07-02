import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project1';

  msg=true;

  print1="hello everyone";

  contacts=[
    {
      'fn':'Willy',
      'ln':'Wonke',
      'ID':1234
    },
    {
      'fn':'Planet',
      'ln':'Earth',
      'ID':4567
    },
    {
      'fn':'Alex',
      'ln':'Caruso',
      'ID':4870
    },
    {
      'fn':'Toys',
      'ln':'R us',
      'ID':4870
    }
  ];
}

/* APP-Companent 
      is a basic block of our angular application
      we can have multiple component if needed ans we can also load them at the same time
      4 files ----> css, html, spec.ts, .ts */