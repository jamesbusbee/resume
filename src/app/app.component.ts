import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'resume';
  bodyObjects = {
    name: 'James Busbee',
    age: 22,
    jobs: [
      {
        title: 'Systems Engineering Internship',
        place: 'American Eagle Outfitters',
        date: 'June 2019-August 2019'
      },
      {
        title: 'Food Prep Chef/Dishwasher',
        place: 'Goodfellas Drafthouse',
        date: 'May 2016-August 2018'
      }
    ],
    skills: [
      {
        webDev: 'AJAX, Angular, Bootsrap, PHP',
        databases: 'Excel, SQL, XML',
        programming: 'C++, Bash Scripting, Python',
        hardware: 'familiar with computer system hardware'
      }
    ]
  };
}
